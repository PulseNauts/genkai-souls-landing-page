<script setup>
import { ref } from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';
</script>

<template lang="pug">
section.center.content-section.promo-section(id="promo")
    //- .hero-bg.animated-soft.blur-in
    //- .inner-border
    Container.column.expanded
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025

        .column.condensed.whide
            span.table-title Heart Army Promo
            .table.column.whide.stretched.condensed
                .column.end.condensed
                    p Discount per Heart Army
                    h1 -30K
                .column.end.condensed
                    p Max Stackable Discounts
                    h1 5
        p
            | We share one dev, we share one heart.
            br
            br
            b Heart Army 
            | holders will receive a 
            b special discount
            | . Each 
            b Heart Army (HA) 
            | in your wallet can apply a 
            b -30K PLS discount 
            | to the purchase of a 
            b Genki Soul
            | .
            br
            | Discounts can 
            b stack 
            | for each buy up to 
            b 5 
            | , making a total of 
            b 150K discount 
            | per 
            b 5 HAs
            | per 
            b Genkai Soul 
            | .

        p.gray
            | Once the HA discount has been applied, the contract will 
            em "mark" 
            | the used HAs, and they wont be usable on further discounts.

        

</template>

<style lang="sass">
.promo-section
    background-image: url('../assets/ha-promo-bg.jpeg')
    background-attachment: fixed
    background-position: center
    background-size: cover
    .vertical-line
        background: black
    h1
        color: black
    p
        color: rgb(30,30,30)
        filter: drop-shadow(0 0 10px rgba(white,1))
        b
            color: black


@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)
    
//'md': '768px', phones
@media (max-width: 767px)

//'sm': '640px', small phones
@media (max-width: 640px)
</style>
