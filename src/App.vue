<script setup>
import Header from './components/elements/Header.vue';
import Hero from './components/Hero.vue';
import Description from './components/Description.vue';
import CardSection from './components/CardSection.vue';
</script>

<template lang="pug">
.hero-bg.animated-soft.blur-in
Hero
Description
CardSection
Header

.inner-border

.firm
    p webpage made with ♥️ by <a href="https://twitter.com/HeartLabswin" target="_blank">HeartLabs</a>
.social.row.end
    a.animated-normal.blink-in.d-200(href="https://twitter.com/PulseSoulsNFT" target="_blank")
        v-icon(name="co-telegram-plane" scale="1.75")
    a.animated-normal.blink-in.d-225(href="https://t.me/Pulse_Souls" target="_blank")
        v-icon(name="co-twitter" scale="1.75")
</template>

<style lang="sass">
@import './styles/base-styles'
@import './styles/content-styles'
@import './styles/animations'

.inner-border
    position: fixed
    top: 2rem
    bottom: 2rem
    left: 2rem
    right: 2rem
    border: 1px solid rgba(255,255,255,.25)
    animation-name: border-in
    animation-delay: 1.2s
    animation-duration: 1.25s
    animation-fill-mode: both
.firm
    position: fixed
    bottom: 3rem
    left: 3rem
.social
    position: fixed
    bottom: 3rem
    right: 3rem

@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

    //'lg': '1024px', ipads
@media (max-width: 1024px)
    #app
        .hero-bg
            background-position: 85% center
//'md': '768px', phones
@media (max-width: 767px)
    #app
        .hero-bg
            background-position: 80% center

        .firm
            display: none
        .social
            display: none
        .inner-border
            display: none
//'sm': '640px', small phones
@media (max-width: 640px)
</style>
