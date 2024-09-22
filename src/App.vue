<script setup>
import Header from "./components/elements/Header.vue";
import Hero from "./components/Hero.vue";
import CardSection from "./components/CardSection.vue";
import ShowBand from "./components/ShowBand.vue";
import RarityDistribution from "./components/RarityDistribution.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
import royalty from "./components/royalty.vue";

import { ref } from "vue";
</script>

<template lang="pug">
.hero-bg.animated-soft.blur-in
Hero(v-if='!displayMintView && !displayClaimView'
@openMintMenu="openMintDisplay"
@openClaimMenu="openClaimDisplay"
)
royalty(v-if='!displayMintView && !displayClaimView')
ShowBand(v-if='!displayMintView && !displayClaimView')
CardSection(v-if='!displayMintView && !displayClaimView')
RarityDistribution(v-if='!displayMintView && !displayClaimView')
FAQ(v-if='!displayMintView && !displayClaimView')
Footer(v-if='!displayMintView && !displayClaimView')

MintView(v-if='displayMintView && !displayClaimView')

ClaimView(v-if="displayClaimView")


Header(
    v-if='!displayMintView && !displayClaimView'
    @openMintMenu="openMintDisplay"
    )

.inner-border

.firm(v-if='!displayMintView')
    p Made by <a href="https://twitter.com/HeartLabswin" target="_blank">HeartLabs</a> / <a href="https://twitter.com/dbstrinity" target="_blank">DBSproductions</a> / <a href="https://pulsecreatures.xyz" target="_blank">Pulse Creatures</a>
.social.row.end(v-if='!displayMintView')
    a.animated-normal.blink-in.d-200(href="https://t.me/PulseSoulsCommunity" target="_blank")
        v-icon(name="co-telegram-plane" scale="1.75")
    a.animated-normal.blink-in.d-225(href="https://x.com/GenkaiSouls" target="_blank")
        v-icon(name="co-twitter" scale="1.75")
</template>

<style lang="sass">
@import './styles/base-styles'
@import './styles/content-styles'
@import './styles/animations'

@font-face
    font-family: 'origicide'
    src: url('./assets/duplexide.woff2') format('woff2'), url('../assets/duplexide.woff') format('woff')
    font-weight: bold
    font-style: normal

.inner-border
    pointer-events: none
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
