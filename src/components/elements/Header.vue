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
    .firm
        p webpage made with ♥️ by <a href="https://twitter.com/HeartLabswin" target="_blank">HeartLabs</a>
    .social.row.end
        a.animated-normal.blink-in.d-200(href="https://twitter.com/PulseSoulsNFT" target="_blank")
            v-icon(name="co-telegram-plane" scale="1.75")
        a.animated-normal.blink-in.d-225(href="https://t.me/Pulse_Souls" target="_blank")
            v-icon(name="co-twitter" scale="1.75")
            //- v-icon(name="CoTelegramPlane" scale="1") CoTwitter



</template>

<style lang="sass">
.firm
    position: fixed
    bottom: 3rem
    left: 3rem
.social
    position: fixed
    bottom: 3rem
    right: 3rem
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
        top: .5rem
        padding: 0 .5rem
        .logo
            margin-left: 0
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
