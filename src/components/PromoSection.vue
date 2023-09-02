<script setup>
import { ref } from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';

defineProps({
    msg: String,
})

</script>

<template lang="pug">
section.hero.center.top-border.dk
    .hero-bg.dk
    Container
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025

        .column.start.title
            .column.condensed.start.full-table.left
                span.table-title Heart Army Colaboration
                span.hide-md -
                .table.column.whide.stretched.condensed
                    .column.end.condensed
                        p Discount Per HA
                        h1 30K PLS
                    .column.end.condensed
                        p Max Stackable Discounts Per Mint
                        h1 5
                        

            a(href="https://heartarmy.xyz" target="_blank").no-decoration.left
                | Heart Army 
                v-icon(name="co-external-link")

            div.column.end
                p.right.md-left
                    | As a colaboration with
                    b HeartLabs 
                    | team, we are providing 
                    b
                        a(href="https://heartarmy.xyz" target="_blank") Heart Army 
                        | holders 
                    | a 
                    b 30K PLS discount 
                    | per 
                    b Heart Army 
                    | unit 
                    b (HA)
                    | . The discounts can stack up to 
                    b 5 
                    | per mint. To a maximum discount of (
                    b -150K PLS
                    | ).

                p.left.gray 
                    | Once the HA has been used, the contract will "mark" it, making it unusable for further discounts on this project's minting stage.
        

</template>

<style lang="sass">
.top-border
    border-top: 1px solid rgba(white,.5)
    
.hero-bg.dk
    right: 0
    top: 0
    width: 100vw
    height: 100dvh
    position: absolute
    background: url("../assets/dk-bg.jpg")
    background-position: right center
    background-size: cover
    background-attachment: fixed

@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)
    .hero.dk
        .hero-bg.dk
            background-position: 75% center
//'md': '768px', phones
@media (max-width: 767px)
    .hero.dk
        align-content: flex-end
        padding: 75vh 0 0 0!important
        height: unset
        max-height: unset
        min-height: unset
        .hero-bg.dk
            height: 100%
        .container
            padding: 1rem 1rem 5rem 1rem
            border-top: 1px solid rgb(white,.5)
            background: rgba(black,.5)
            backdrop-filter: blur(20px) saturate(200%)
            .full-table
                width: 100%
                align-items: stretch
            
        .md-left
            text-align: left
    .hide-md
        display: none
//'sm': '640px', small phones
@media (max-width: 640px)
</style>
