<script setup>
import { ref } from "vue";
import Container from "./elements/Container.vue";
import VerticalLine from "./elements/adornments/VerticalLine.vue";

defineProps({
  msg: String,
});
</script>

<template lang="pug">
section.hero.center.top-border.dk(id="Royalty")
    .hero-bg.dk
    Container
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025

        .column.start.title
            .column.condensed.start.full-table.left
                span.table-title Royalty Center
                span.hide-md -
                div.column.end
                p.right.md-left
                    |Here, NFT holders can claim their earned royalties. As part of our community-driven initiative, Pulse Souls and Genkai Souls holders are entitled to royalties generated from the project's success.
                    
                    
                br

                p.left.gray 
                    | Make sure to visit the Royalty Center regularly to claim your earnings. Your support and participation are what drive the continuous growth and evolution of our ecosystem.        
                        

            a(href="https://pulse-souls-wrapper-app.pages.dev/" target="_blank").no-decoration.left
                | Claim Royalties
                v-icon(name="co-external-link")

            

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
