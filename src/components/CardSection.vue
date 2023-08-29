<script setup>
import { ref, computed, onMounted } from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';
import ParallaxCard from './elements/ParallaxCard.vue';

const cardList = [
    {
        name: "Orochi - Venomancer",
        faction: "gi-alien-fire",
        atk: 3,
        def: 2,
        cost: 2,
        type: "Genkai - Mage",
        image: './card-char-0.jpg'
    },
    {
        name: "Frimelda - Light Guardian",
        faction: "gi-lightning-tear",
        atk: 5,
        def: 4,
        cost: 7,
        type: "Demon Slayer - Swordman",
        image: './card-char-2.jpg'
    },
    {
        name: "Lilithrim - Lightcaster",
        faction: "gi-devil-mask",
        atk: 1,
        def: 1,
        cost: 5,
        type: "Akuma - Mage",
        image: './card-char-1.jpg'
    }
];
const currentCardIndex = ref(0);

const currentCard = computed(()=>{
    return cardList[currentCardIndex.value];
});

const onAnimation = ref(false);
onMounted(() => {
    setInterval(()=>{
        let next = currentCardIndex.value+1;
        if(next >= cardList.length)
        next = 0;
        currentCardIndex.value = next;
        onAnimation.value = true;
        setTimeout(()=>onAnimation.value =  false, 1000);
    },5000)
});
</script>

<template lang="pug">

section.center.dark-glass.content-section

    Container.column.expanded.text-content
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025


        .column.condensed.whide
            span.table-title Soul Gambit
        p.body-text
            | Part of the accrued funds will be used on the development of a trading card game (TCG). The project is temporarily called 
            b Soul Gambit 
            | . The game will be a collectible, competitive experience, with lucrative combat mechanics and an economic incentive program for invested players.
            | Genkai Souls holders will receive a 
            b beta access pass 
            | to play the game before it goes live, and will be granted access to an 
            b exclusive chat 
            | to discuss the game development.
            br 
            | Additionally, the holders will receive a 
            b free airdrop 
            | of 
            b card sets 
            | when the game goes live.
            | So they can start in the game with zero investment. 
            | .
        p.gray
            | Rigts and airdrops will be granted to
            b token holders 
            | not
            b minters 
            | . You have to 
            b hold 
            | the NFT in order to keep access to chats and airdrops.

        template(v-for="(card, index) in cardList" key="index")
            transition(name="fade")
                ParallaxCard(
                    v-if="index==currentCardIndex"
                    :name="card.name"
                    :type="card.type"
                    :atk="card.atk"
                    :def="card.def"
                    :cost="card.def"
                    :faction="card.faction"
                    :image="card.image"
                    )

</template>

<style lang="sass">
.fade-enter-active, .fade-leave-active
    transition: 1.5s

.fade-enter, .fade-leave-to
    opacity: 0

.fade-enter
    z-index: 100
    transform: translateX(100px)
.fade-leave-to
    z-index: -1
    transform: translateX(-100px)


// .card-enter-active
//   transition: .5s
// .card-leave-active
//   transition: .5s

// .card-enter
//   opacity: 0
//   transform: translateZ(10%)
    
// .card-leave-to
//   opacity: 0
//   transform: translateZ(0)



.table-title
    font-weight: bold

@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)
    section
        .text-content
            z-index: 10000
            >p,
            >*
                max-width: 50%
            .parallax-card
                width: calc((100vw - 4rem)*0.6)!important
                height: calc((100vw - 4rem)*0.65)!important
                max-width: unset
                right: -3rem
                z-index: -1
//'md': '768px', phones
@media (max-width: 767px)
    section.content-section
        height: unset
        padding: 8rem 0
    .table
        border: 1px solid rgba(255,255,255,.25)
        >*
            border-top: 1px solid rgba(255,255,255,.25)
            padding: .5rem
    .table-title
        background: white
        color: black
        width: fit-content
        padding: .5rem 2rem
        font-weight: bold
    section
        .text-content

            .body-text
                margin-top: calc(100vw * 1.5)
                width: 100%
                max-width: unset
            p
                width: 100%
                max-width: unset
            .parallax-card
                width: 110vw!important
                height: calc((100vw - 2rem) * 1.4)!important
                max-width: unset
                top: 5rem
                left: 50%
                transform: translateX(-50%)
                

//'sm': '640px', small phones
@media (max-width: 640px)
</style>
