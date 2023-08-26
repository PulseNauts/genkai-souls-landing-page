<script setup>
import { ref } from 'vue'
</script>

<template lang="pug">
.header.row.spaced.whide
    .logo.animated-soft.d-200.blink-in
    .navigation.row.whide.spaced.aligned
        .navigation-links.row.aligned.animated-soft.blur-in.d-3
            a stuff
            a morestuff
        button.main.animated-normal.blink-in.delayed.d-150 Claim a Soul
    
            //- v-icon(name="CoTelegramPlane" scale="1") CoTwitter



</template>

<style lang="sass">
.header
    position: fixed
    top: 0
    left: 0
    padding: 2rem
    width: calc(100vw - 4rem)

    .logo
        margin: 1rem
        width: 4rem
        height: 4rem
        background-color: transparent
        background-image: url('../../assets/souls-logo.svg')
        background-repeat: no-repeat
        background-size: contain
        background-position: center

@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)

//'md': '768px', phones
@media (max-width: 767px)
    .header
        padding: 1rem
        .logo
            margin: 0
        >.row
            justify-content: flex-end
        .navigation
            justify-content: end!important
        .navigation-links
            display: none
    .firm
        left: .5rem
        bottom: .5rem
    .social
        right: .5rem
        bottom: 2rem
//'sm': '640px', small phones
@media (max-width: 640px)

</style>
