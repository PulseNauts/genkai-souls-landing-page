<script setup>
import { ref } from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';
</script>

<template lang="pug">
section.center.dark-glass.content-section
    //- .hero-bg.animated-soft.blur-in
    //- .inner-border
    Container.column.expanded
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025

        .column.condensed.whide
            span.table-title Stats
            .table.column.whide.stretched.condensed
                .column.end.condensed
                    p Max Supply
                    h1 2000
                .column.end.condensed
                    p Price
                    h1 450K PLS
                .column.end.condensed
                    p Mints Per Wallet
                    h1 55
                .column.end.condensed
                    p OG Souls Discount
                    h1 -250K PLS

            //- div.column.condensed.start
        p
            | Holders of the original Wrapped Souls NFT can receive a 
            b 250K PLS 
            | discount for every purchase for every token, 
            b only once per soul
            | .
        p.gray
            | Once the soul NFT has been used, the contract will 
            em "mark" 
            | it, and it wont be usable on further discounts.

        

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
