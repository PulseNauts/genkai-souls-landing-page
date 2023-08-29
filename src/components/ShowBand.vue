<script setup>
import { ref } from 'vue'
</script>

<template lang="pug">
section.show-band
</template>

<style lang="sass">
.show-band
    width: 100vw
    height: 66.357vw
    background-image: url('../assets/band-bg.jpg')
    background-position: left top
    background-size: 100%
    min-height: unset

@keyframes bg-slide
    0%
        background-position:  0 0

    33%
        background-position: 50% 0

    66%
        background-position: 100% 0

    100%
        background-position: 150% 0
@media (max-width: 1920px)
    
//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)
    .show-band
        // background-size: 200%
        height: 66vw
        min-height: unset!important
//'lg': '1024px', ipads
@media (max-width: 1024px)
    .show-band
        background-size: 200%
        height: 132vw
        min-height: unset!important

//'md': '768px', phones
@media (max-width: 767px)
    .show-band
        min-height: unset!important
        height: 199vw
        background-position: left top
        background-size: 300%!important
        animation-name: bg-slide
        animation-duration: 10s
        animation-iteration-count: infinite

//'sm': '640px', small phones
@media (max-width: 640px)
</style>
