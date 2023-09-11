<script setup>
import { ref, computed, onMounted, watch } from 'vue'
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

const maxPurchaseableTokens = computed(() => {
    let maxPurchaseable = maxTokensPerWallet.value - mintedTokensByWallet.value;
    if (maxPurchaseable > maxTokensPerTx.value)
        maxPurchaseable = maxTokensPerTx.value;
    return maxPurchaseable;
})

const genkaiBalance = ref(0);


const tokensStates = ref(0); // 0 = SOULS_DISCOUNTS, 1 = HA_DISCOUNTS

// const soulsStatesUpdated = ref(false);
const tokensStatesUpdated = ref(false);

let walletProvider = null;
let signer = null;

const mintAmount = ref(1n);

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
        await checkGenkaiBalance();
        if (genkaiBalance.value > 0)
            checkOwnership();
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
async function checkGenkaiBalance() {
    // Connect to the ERC721 contract
    let contract = new Contract(genkaiAddress, IERC721Enumerable_ABI, provider);
    console.log("checking genkai balance");
    // Call balanceOf
    genkaiBalance.value = await contract.balanceOf(address.value);
    console.log("genkai balance: " + genkaiBalance.value);
}

// CONTRACT FUNCTIONS________________________________________________________________
async function populateSoulGrid() {
    const legendaryIds = [75, 124, 162, 282, 328, 365, 475, 612, 647, 754, 766, 813, 996, 1048, 1192, 1197, 1239, 1332, 1377, 1554, 1617, 1698, 1816, 1843, 1870, 1880, 1963, 2148, 2291, 2423, 2496, 2562, 2567, 2604, 2615, 2703, 2752, 2768, 2774, 2987];
    tokensStatesUpdated.value = false;
    // Connect to the RoyaltySplitter contract
    let genkaiContract = new ethers.Contract(genkaiAddress, Genkai_ABI, provider);
    tokensStates.value = [];

    // populate the array with genkai legendary souls
    for (let i = 0; i < 40; i++){
        const tokenId = legendaryIds[i];
        console.log(tokenId);

        let used = await genkaiContract.withdrawnBounties(tokenId);
        console.log(used);
        let uri = "";
        let minted = true;
        
        try {
            const r = await fetch(`https://heart-army-metadata-server-cgpvi.ondigitalocean.app/metadata/genkai_souls/${tokenId}`);
            uri = await r.json();
        } catch (e) { minted = false; }

        tokensStates.value.push({
                tokenId: parseInt(tokenId.toString()),
                minted,
                used,
                holded: false,
                uri
            });
    }

    tokensStatesUpdated.value = true;
}

const checkOwnership = async function (){
    const legendaryIds = [75, 124, 162, 282, 328, 365, 475, 612, 647, 754, 766, 813, 996, 1048, 1192, 1197, 1239, 1332, 1377, 1554, 1617, 1698, 1816, 1843, 1870, 1880, 1963, 2148, 2291, 2423, 2496, 2562, 2567, 2604, 2615, 2703, 2752, 2768, 2774, 2987];
    // Connect to the RoyaltySplitter contract
    let genkaiContract = new ethers.Contract(genkaiAddress, Genkai_ABI, provider);

    for (let i = 0; i < genkaiBalance.value; i++) {
        let tokenId = await genkaiContract.tokenOfOwnerByIndex(address.value, i);
        let isLegendary = legendaryIds.findIndex(tokenId) < 0;
        if(isLegendary){
            const tokenObj = tokensStates.value.find(elem=>elem.tokenId == tokenId);
            tokenObj.holded = true;
        }
    }
}

onMounted(async ()=>{
        await populateSoulGrid();
});

const claimBounty = async function(id){

    let contract = new Contract(genkaiAddress, IERC721Enumerable_ABI, signer);
    await contract.claimBounty(id);
}
</script>

<template lang="pug">
section.center.dark-glass.content-section.mint-view
    Container.column.expanded
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025

        button.wallet-button(
            @click="connectButton"
            :disabled="!isMetaMaskInstalled || !tokensStatesUpdated"
            :class="{main: !isMetamaskConnected && isMetaMaskInstalled && tokensStatesUpdated}"
            )
            | {{!tokensStatesUpdated? 'loading...' : (isMetaMaskInstalled ? (isMetamaskConnected?'Disconnect':'Connect MetaMask') : 'MetaMask Not Detected')}}
        .column.condensed.whide
            span.table-title Claim A Bounty
        p
            | You can claim a 
            b BOUNTY 
            | for each 
            b Legendary Soul 
            | you hold 
            b only once
            | .
            
        p.gray
            |   After the bounty has been claimed, the legendary soul is 
            b marked 
            | by the contract and can't be used again for bounty claiming. Check carefully the list of claimed bounties 
            b before buying 
            | in the market.


        .column.condensed
            .discount-grid
                .grid-card(
                    v-for="(token,id) in tokensStates"
                    :key="id"
                    :class="{'marked': token.used, 'selected': token.selected}"
                )
                    img.card-image(:src="token.uri.image")
                    span.center-text(v-if="!token.minted") Not Yet Minted
                    span.gray {{ 'Legend#' +  token.tokenId + (token.holded? '(Holded)' : '')}}
                    .mark
                    
                    button.claim-legend(
                        v-if="token.holded && !token.used"
                        @click="claimBounty(token.tokenId)"
                    )
                        | Claim
</template>

<style lang="sass">
.claim-legend
    position: absolute
    bottom: 3rem
    left: 50%
    transform: translate(-50%, 0)
.center-text
    position: absolute
    left: 50%!important
    top: 50%!important
    transform: translate(-50%,-50%)!important
    background: none!important
    border: none!important
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
            &.holded
                border: 1px solid gold
                filter: drop-shadow(0 0 5px rgba(gold,.75))
            &.marked
                border: 1px solid rgba(gray,.5)
                img
                    filter: saturate(0)
                .mark
                    display: block
                    width: 10px
                    height: 125%
                    position: absolute
                    background: rgba(red,.35)
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
