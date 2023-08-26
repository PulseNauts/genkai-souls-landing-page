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
    .social 


</template>

<style lang="sass">
.firm
    position: fixed
    bottom: 3rem
    left: 3rem
.social
    position: fixed
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
