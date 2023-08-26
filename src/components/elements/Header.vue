<script setup>
import { ref } from 'vue'
</script>

<template lang="pug">
.header.row.spaced.whide
    .logo.animated-soft.d-200.blink-in
    .row.whide.spaced.aligned
        .navigation.row.aligned.animated-soft.blur-in.d-3
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


</style>
