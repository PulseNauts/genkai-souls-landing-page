<script setup>
import { ref } from "vue";
import Container from "./elements/Container.vue";
import VerticalLine from "./elements/adornments/VerticalLine.vue";
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
                    p.title.row.whide.left.border-bottom Utility?
                    p
                        b Nephalem Souls 
                        | and 
                        b GenkaiSouls 
                        | holders can stake their NFTs to earn 
                        b SOULS tokens 
                        | daily. Genkai NFTs earn 
                        b 5 SOULS 
                        | a day, while Souls NFTs earn 
                        b 10 SOULS 
                        | a day. Additionally, these NFTs will be integral to the game, with rarities playing a significant role in gameplay. This staking mechanism enhances the overall gaming experience and provides ongoing rewards for NFT holders.                        
                .column.end.condensed
                    p.title.row.whide.left.border-bottom $SOUL Staking?
                    p
                        | Every 
                        b GenkaiSoul 
                        | will earn 
                        b 5 $SOUL 
                        | a day, and every 
                        b Souls 
                        | NFT will earn 
                        b 10 $SOUL 
                        | a day. This earned $SOUL can be used within the Nephalem Souls ecosystem for various in-game activities and rewards.

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
