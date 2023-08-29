<script setup>
import { ref } from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';
import ParallaxCard from './elements/ParallaxCard.vue';

const cardList = [
    {
        name: "Orochi- Venomancer",
        faction: "gi-alien-fire",
        atk: 3,
        def: 2,
        cost: 2,
        type: "Gekai - Mage",
        IMAGE: '/card-char-0.jpg'
    }
];

const currentCard = ref(cardList[0]);
</script>

<template lang="pug">

section.center.dark-glass.content-section
    Container.column.expanded.text-content
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025


        .column.condensed.whide
            span.table-title Soul Gambit
        p
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

        ParallaxCard(
            :name="currentCard.name"
            :type="currentCard.type"
            :atk="currentCard.atk"
            :def="currentCard.def"
            :cost="currentCard.def"
            :faction="currentCard.faction"
            :image="currentCard.image"
            )

</template>

<style lang="sass">
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
                width: calc((100vw - 4rem)*0.65)!important
                height: calc((100vw - 4rem)/2 * 1.5)!important
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
                

//'sm': '640px', small phones
@media (max-width: 640px)
</style>
