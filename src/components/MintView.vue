<script setup>
import { ref, computed , onMounted, watch} from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';
import { ethers, Contract, formatEther } from 'ethers';
import IERC721_ABI from '../abis/IERC721_ABI';
import IERC721Enumerable_ABI from '../abis/IERC721Enumerable_ABI';
import Genkai_ABI from "../abis/Genkai_ABI";
import Queryable_ABI from '../abis/Queryable_ABI';

//mainnet
const genkaiAddress = "0x699685F79FC75a673F15778A18BBDd38eC54a0eB";
const soulsAddress = "0x564bc69F22bC044cfc2598c70a6026edA1c42c26";
const haAddress = "0x5C6fA4E480ce6A183C68780B5c2fAEB8CC4716Ef";
const provider = ethers.getDefaultProvider("https://rpc.pulsechain.com");

// const provider = ethers.getDefaultProvider("https://rpc.pulsechain.com");
0xe02aAcb9d826DD4f335954775f3cC7f8A2A889AF

const isMetaMaskInstalled = ref(false);
const isMetamaskConnected = ref(false);
const address = ref("");

// inspection data
const inspected = ref(false);

const mintedTokensByWallet = ref(0n);
const maxTokensPerTx = ref(10n);
const maxTokensPerWallet = ref(55n);

const maxPurchaseableTokens = computed(()=> {
    let maxPurchaseable = maxTokensPerWallet.value - mintedTokensByWallet.value;
    if(maxPurchaseable > maxTokensPerTx.value)
        maxPurchaseable = maxTokensPerTx.value;
    return maxPurchaseable;
})

const soulsBalance = ref(0);
const haBalance = ref(0);

const maxStackableSouls = ref(1n);
const maxStackableHAs = ref(5n);

const soulsDiscount = ref(ethers.parseEther(".01"));

const hasDiscount = ref(ethers.parseEther(".01"));

const discountState = ref(0); // 0 = SOULS_DISCOUNTS, 1 = HA_DISCOUNTS

const soulsStates = ref([]);
const haStates = ref([]);

const soulsStatesUpdated = ref(false);
const hasStatesUpdated = ref(false);

let walletProvider = null;
let signer = null;

const mintAmount = ref(1n);
const formattedMintAmount = computed(() => String(mintAmount.value).padStart(3, '0'));

const price = ref(ethers.parseEther("0.1"));

const cost = computed(() => mintAmount.value * price.value - totalDiscount.value);
const parsedCost = computed(()=> {return ethers.formatEther(cost.value)});
const canBuy = computed(() => isMetaMaskInstalled.value && isMetamaskConnected.value && mintAmount.value > 0 && discountsCount.value <= maxDiscounts.value);
const maxDiscounts = computed(()=> mintAmount.value * (discountState.value == 0? maxStackableSouls.value : maxStackableHAs.value));
const soulDiscountsCount = ref(0n);
const haDiscountsCount = ref(0n);

const discountsCount = computed(()=> discountState.value==0? soulDiscountsCount.value : haDiscountsCount.value);
const totalDiscount = computed(() => {
 return discountState.value==0
        ? soulDiscountsCount.value * soulsDiscount.value
        : haDiscountsCount.value * hasDiscount.value;
});

const parsedDiscount = computed(()=> (ethers.formatEther(totalDiscount.value)));

// CHECKS________________________________________________________________________________________
if (window.ethereum) {
    isMetaMaskInstalled.value = true;
}

// METAMASK_FUNCTIONS_____________________________________________________________________________________
const connectMetaMask = async () => {
    let p = await detectEthereumProvider();
    await p.request({ method: "eth_requestAccounts" });
    return p;
};

const connectButton = async () => {
    if (isMetamaskConnected.value) {
        disconnect();
    }
    else {
        connect();
    }
};

const connect = async () => {
    if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        walletProvider = new ethers.BrowserProvider(window.ethereum);
        signer = await walletProvider.getSigner();
        isMetamaskConnected.value = true;
        address.value = await signer.getAddress();
        // await checkForAllowance();
        await checkSoulsBalance();
        await checkHAsBalance();
        await checkContractData();
        // await checkWrappedBalance();
        if (soulsBalance.value > 0)
            await populateSoulGrid();
        if(haBalance.value > 0)
            await populateHAGrid();

        inspected.value = true;
    }
};

const disconnect = () => {
    isMetamaskConnected.value = false;
    signer = null;
    walletProvider = null;
    address.value = "";
};

// checks ans stuffs
async function checkSoulsBalance() {
    // Connect to the ERC721 contract
    let contract = new Contract(soulsAddress, IERC721Enumerable_ABI, provider);
    console.log("checking souls balance");
    // Call balanceOf
    soulsBalance.value = await contract.balanceOf(address.value);
    console.log("souls balance: " + soulsBalance.value);
}

async function checkHAsBalance() {
    // Connect to the ERC721 contract
    let contract = new Contract(haAddress, IERC721_ABI, provider);
    console.log("checking HAs balance");
    console.log("ADDRESS: " + address.value);
    // Call balanceOf
    haBalance.value = await contract.balanceOf(address.value);

    console.log("HAs balance: " + haBalance.value);
}

async function checkContractData() {
    let contract = new Contract(genkaiAddress, Genkai_ABI, provider);
    console.log("checking genkai-contract");

    // Call balanceOf
    price.value = await contract.price();
    maxTokensPerTx.value = await contract.maxTokensPerTx();
    maxTokensPerWallet.value = await contract.maxTokensPerWallet();
    mintedTokensByWallet.value = await contract.mintedTokensByWallet(address.value);
    hasDiscount.value = await contract.discountPerTokenForHAs();
    soulsDiscount.value = await contract.discountPerTokenForSouls();

    maxStackableHAs.value = await contract.maxStackableDiscountsForHAs();
    maxStackableSouls.value = await contract.maxStackableDiscountsForSouls();

    console.log("mintedTokens: " + soulsBalance.value);
}

// CONTRACT FUNCTIONS________________________________________________________________
async function populateSoulGrid() {
    soulsStatesUpdated.value = false;
    // Connect to the RoyaltySplitter contract
    let soulsContract = new ethers.Contract(soulsAddress, IERC721Enumerable_ABI, provider);
    let genkaiContract = new ethers.Contract(genkaiAddress, Genkai_ABI, provider);

    soulsStates.value = [];
    console.log("checking souls units");
    for (let i = 0; i < soulsBalance.value; i++) {
        let tokenId = await soulsContract.tokenOfOwnerByIndex(address.value, i);
        let used = await genkaiContract.usedSoulsForDiscount(tokenId);
        console.log("id: " + tokenId + "\nused: " + used);

        let uri = "";
        try{
        const r = await fetch(`https://ipfs.io/ipfs/bafybeigy42tdjfzl3362wuog2brfd72oukt4rvonfr4pw2dlxqhoncdcxi/${tokenId}.json`);
        uri = await r.json();
        }catch(e){}
        soulsStates.value.push({
            tokenId: parseInt(tokenId.toString()),
            used,
            active: false,
            uri
        });
    }
    soulsStatesUpdated.value = true;
}

async function populateHAGrid() {
    hasStatesUpdated.value = false;

    console.log("creating HA contract");
    let haContract = new ethers.Contract(haAddress, IERC721_ABI, provider);

    console.log("creating GENKAI contract");
    let genkaiContract = new ethers.Contract(genkaiAddress, Genkai_ABI, provider);

    haStates.value = [];
    console.log("checking HA units");

    const tokensSupply = 5555;
    let count = 0;
    let i = 0;
    let promises = [];
    let promiseBatchCount = 1;
    console.log("outside the while loop");
    let balance = parseInt(haBalance.value.toString());
    while (i < tokensSupply && count < balance) {
        console.log("inside the while loop");
        for (let j = 0; j < promiseBatchCount; j++, i++) {
            promises.push(async () => {
                console.log("inside the callback");
                let index = i-1;
                let tempOwner = "";
                let failed = false;
                try {
                    tempOwner = await haContract.ownerOf(index);
                    console.log("asking for temp owner");
                } catch (e) {
                    console.error(`Error for token ${index}:`, e);
                    failed = true;
                }
                if(failed)
                    return 0;
                    if (tempOwner.toLowerCase() === address.value.toLowerCase()) {
                        console.log("found");
                        count++;
                        const tokenId = index;

                        let used = false;
                        try {
                            used = await genkaiContract.usedHAForDiscount(index);
                        } catch (e) {
                            console.error("Error fetching usedHAForDiscount:", e);
                        }

                        const r = await fetch(`https://heart-army-metadata-server-cgpvi.ondigitalocean.app/metadata/heart_army/${tokenId}`);
                        const uri = await r.json();
                        haStates.value.push({
                            tokenId,
                            used,
                            active: false,
                            uri
                        });
                    }
            });
        }

        await Promise.all(promises.map(p => p()));
        promises = [];
    }
    hasStatesUpdated.value = true;
}


const selectSoulToken = function(id){
    if(!soulsStates.value[id].used)
        soulsStates.value[id].selected = !soulsStates.value[id].selected;
    soulDiscountsCount.value = BigInt(soulsStates.value.filter(elem=>elem.selected).length.toString());
}

const selectHAToken = function (id) {
    if (!haStates.value[id].used)
        haStates.value[id].selected = !haStates.value[id].selected;
    haDiscountsCount.value = BigInt(haStates.value.filter(elem => elem.selected).length.toString());
}

const changeMintAmount = function (changeBy) {
    console.log(mintAmount.value);
    console.log(changeBy);
    mintAmount.value += BigInt(changeBy);
    if(mintAmount.value < 0)
        mintAmount.value = 0n;
    if(mintAmount.value > maxPurchaseableTokens.value)
        mintAmount.value = maxPurchaseableTokens.value;
}

const mint = function(){
    let genkaiContract = new ethers.Contract(genkaiAddress, Genkai_ABI, signer);
    
    if(discountState.value == 0){ // try minting with discount
        if(discountsCount.value == 0) // no discount use common minting
            genkaiContract.mint(mintAmount.value, {value: cost.value});

        else
            genkaiContract.mintWithSoulDiscount(mintAmount.value, soulsStates.value.filter(e=>e.selected).map(e=>e.tokenId),{value: cost.value})
    }
    else
        genkaiContract.mintWithHADiscount(mintAmount.value, haStates.value.filter(e => e.selected).map(e => e.tokenId), { value: cost.value })
}

</script>

<template lang="pug">
section.center.dark-glass.content-section.mint-view(id="about")
    Container.column.expanded
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025
        
        button.wallet-button(
            @click="connectButton"
            :disabled="!isMetaMaskInstalled"
            :class="{main: !isMetamaskConnected && isMetaMaskInstalled}"
            )
            | {{isMetaMaskInstalled ? (isMetamaskConnected?'Disconnect':'Connect MetaMask') : 'MetaMask Not Detected'}}
        .column.condensed.whide
            span.table-title Claim A Soul
            .table.column.whide.stretched.condensed
                .column.end.condensed
                    p amount to mint
                    .row.aligned
                        button.cool-button(@click="changeMintAmount(-1n)" :disabled="!isMetamaskConnected") -
                        h1 {{ formattedMintAmount }}
                        button.cool-button(@click="changeMintAmount(1n)" :disabled="!isMetamaskConnected") +
            .row.whide(style="justify-content: end") 
                button(:class="{main: canBuy}" @click="mint" :disabled="!canBuy") Claim A Soul
        p
            | You have minted 
            b {{ mintedTokensByWallet }} 
            | of a maximum of 
            b {{ maxTokensPerWallet }} 
            | per wallet. You can mint up to 
            b {{ maxTokensPerTx }} 
            | tokens per transaction.
            br
            | The amount of mints you can perform in your next transaction is: 
            b {{ maxPurchaseableTokens }} 
            |.
            br
            | Minting 
            b {{ mintAmount }} 
            | tokens  with a discount of 
            b {{parsedDiscount}} PLS 
            | will cost 
            b {{ parsedCost }} PLS 
            

        .column.condensed
            .row.start
                .title.start(:class="{selected: discountState==0}" @click="discountState=0") Soul Discounts
                .title.start(:class="{selected: discountState==1}" @click="discountState=1") Heart Army Discounts
            .discount-grid(v-if="discountState == 0")
                .grid-card(
                    v-for="(token,id) in soulsStates"
                    :key="id"
                    :class="{'marked': token.used, 'selected': token.selected}"
                    @click="selectSoulToken(id)"
                )
                    img.card-image(:src="token.uri.image")
                    span.gray {{ 'Soul#' +  token.tokenId}}
                    .mark

            .discount-grid(v-else)
                .grid-card(
                    v-for="(token,id) in haStates"
                    :key="id"
                    :class="{'marked': token.used, 'selected': token.selected}"
                    @click="selectHAToken(id)"
                )
                    img.card-image(:src="token.uri.image")
                    span.gray {{ 'HA#' +  token.tokenId}}
                    .mark
</template>

<style lang="sass">
.title.selected
    background: white
    color: black
    padding: 0 2rem
.wallet-button
    top: 3rem
    right: 2rem
    position: fixed
.table-title
    font-weight: bold
.mint-view
    overflow-y: scroll
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0

    .expanded
        max-height: 85vh

        button.cool-button
            border: 1px solid white!important
            padding: 1rem 2rem
            &:hover
                border: 1px solid white!important

    .discount-grid
        position: relative
        margin: 0
        width: calc(100%)
        display: grid
        gap: .5rem
        padding: .5rem 0
        grid-template-columns: repeat(5, 1fr)
        border-top: 1px solid rgba(white,.5)

        border-bottom: 1px solid rgba(white,.5)
        height: 40dvh
        overflow-y: scroll
        .grid-card
            border: 1px solid rgba(255,255,255,.5)
            position: relative
            padding: 10px
            border-radius: 0 3rem 0 0
            overflow: hidden
            height: calc((60rem - 5rem) / 4 )
            &.selected
                border: 1px solid white
                filter: drop-shadow(0 0 3px rgba(white,.5))
                
                img
                    filter: saturate(2)
                    transform: scale(1.1)

            &:hover
                border: 1px solid gold
                box-shadow: 0 0 5px yellow
            
            &.marked
                border: 1px solid rgba(gray,.5)
                img
                    filter: saturate(0)
                .mark
                    display: block
                    width: 3px
                    height: 125%
                    position: absolute
                    background: rgba(pink,.5)
                    left: 50%
                    top: 50%
                    transform: translate(-50%, -50%) rotate(45deg)
                    transform-origin: center
            .mark
                display: none
            img.card-image
                transition: .25s
                position: absolute
                left: 0
                top: 0
                width: 100%
                height: 100%
                object-fit: cover
                object-position: center
                background-position: center
                background-size: cover
            span
                position: absolute
                bottom: 0
                left: 0
                right: 0
                background: rgba(0,0,0,.5)
                backdrop-filter: blur(15px) saturate(150%)
                padding: 5px 10px
                border-top: 1px solid rgba(255,255,255,.5)

@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)
    
//'md': '768px', phones
@media (max-width: 767px)
    .wallet-button
        right: 1rem
    .discount-grid
        grid-template-columns: repeat(2, 1fr)!important


//'sm': '640px', small phones
@media (max-width: 640px)
</style>
