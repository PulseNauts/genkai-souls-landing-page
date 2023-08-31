<script setup>
import { ref } from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';
</script>

<template lang="pug">
section.center.dark-glass.content-section(id="faq")
    //- .hero-bg.animated-soft.blur-in
    //- .inner-border
    Container.column.expanded
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025

        .column.condensed.whide
            span.table-title FAQ
            .table.column.whide.stretched.condensed
                .column.end.condensed
                    p.title.row.whide.left.border-bottom What's the plan for Genkai Souls?
                    p.gray
                        | Explore the art of Genkai, find your species, and collect those 
                        b $SOUL.
                        br
                        b Genkai 
                        | will be an 
                        b utility-enabled PFP 
                        | that will hold unique characteristics to the 
                        b PulseSouls 
                        | ecosystem. They will serve as 
                        b PulseSouls' flagship collection
                        | , as we continue to expand our IP in web2 and web3.
                        | No boundaries, no limits.
                .column.end.condensed
                    p.title.row.whide.left.border-bottom Minting?
                    p
                        | Public Minting price is set at 
                        b 450.000 PLS 
                        | per 
                        b GenkaiSoul
                        | . Each wrapped PulseSouls you hold, will give you 
                        b one discounted mint 
                        | at 
                        b 250.000 PLS
                        | . Once the Soul NFT has been used, the contract will „mark“ it, and it won't be useable on further discounts..
                .column.end.condensed
                    p.title.row.whide.left.border-bottom Utility?
                    p
                        b PulseSouls 
                        | and 
                        b GenkaiSouls 
                        | holders, will receive a 
                        b beta access pass 
                        | to play 
                        b Soul Gambit 
                        | before it goes live, and will be granted access to an 
                        b exclusive chat 
                        | to discuss the game development. Additionally, the holders will receive a 
                        b free airdrop 
                        | of card sets when the game goes live, so they can start playing without expenses.
                .column.end.condensed
                    p.title.row.whide.left.border-bottom $SOUL Staking?
                    p
                        | Every 
                        b GenkaiSoul 
                        | will earn 
                        b 3 $SOUL a day
                        |, which can be used in the 
                        b LoreBook
                        | , 
                        b SoulShop 
                        | and 
                        b SoulGambit
                        |.
                .column.end.condensed
                    p.title.row.whide.left.border-bottom LoreBook
                    p
                        | The Lorebook will allow holders to change the name of their 
                        b Soul NFT 
                        | changing the name costs 
                        b 50 $SOUL
                        | , while writing the entire description costs 
                        b 100 $SOUL.

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
