<script setup>
import { ref } from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';

defineProps({
    msg: String,
})

</script>

<template lang="pug">
section.hero.center
    .hero-bg.animated-soft.blur-in
    .inner-border
    Container
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025

        .column.start.title
            div.column.condensed.start
                h1.animated-soft.hard-glitch-in.d-050 GENKAI
                h1.animated-soft.glitch-font-in.d-100 -SOULS
            div.column.end
                p.right.animated-soft.blur-in.d-125 Claim the sword of your destiny!<br> Stake your soul for the future they took from us<br> Rebel! Reclaim! Reveal!
                button.main.animated-soft.hard-glitch-in.delayed.d-250 Claim a Soul
    .firm
        p webpage made with ♥️ by <a href="https://twitter.com/HeartLabswin" target="_blank">HeartLabs</a>
    .social.row.end
        a.animated-normal.blink-in.d-200(href="https://twitter.com/PulseSoulsNFT" target="_blank")
            v-icon(name="co-telegram-plane" scale="1.75")
        a.animated-normal.blink-in.d-225(href="https://t.me/Pulse_Souls" target="_blank")
            v-icon(name="co-twitter" scale="1.75")
        

</template>

<style lang="sass">
.firm
    position: absolute
    bottom: 3rem
    left: 3rem
.social
    position: absolute
    bottom: 3rem
    right: 3rem
.hero
    height: 100rvh
    .inner-border
        position: absolute
        top: 2rem
        bottom: 2rem
        left: 2rem
        right: 2rem
        border: 1px solid rgba(255,255,255,.5)
        animation-name: border-in
        animation-delay: 1.2s
        animation-duration: 1.25s
        animation-fill-mode: both
    .hero-bg
        position: absolute
        right: 0
        top: 0
        width: 100%
        height: 100%
        background: url("../assets/hero-bg.jpg")
        background-position: right center
        background-size: cover
        background-attachment: fixed

@keyframes border-in
    0%
        opacity: 0
        top: 0
        left: 0
        bottom: 0
        right: 0
    100%
        opacity: 1
        top: 2rem
        left: 2rem
        bottom: 2rem
        right: 2rem
        

@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)
    .hero
        .hero-bg
            background-position: 85% center
//'md': '768px', phones
@media (max-width: 767px)
    .hero
        align-items: flex-end!important
        padding: 0
        margin: 0
        padding-bottom: 9rem
        .title
            align-items: stretch!important
        .line-vertical
            display: none
        .inner-border
            display: none
            top: 0.5rem
            bottom: 0.5rem
            left: 0.5rem
            right: 0.5rem
        .hero-bg
            background-position: 80% center

        .firm
            left: .5rem
            bottom: .5rem
        .social
            right: .5rem
            bottom: 2rem
//'sm': '640px', small phones
@media (max-width: 640px)
</style>
