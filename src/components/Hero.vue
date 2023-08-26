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

        .column.spaced.start
            div.column.condensed.start
                h1.animated-soft.hard-glitch-in.d-050 GENKAI
                h1.animated-soft.glitch-font-in.d-100 -SOULS
            div.column.end
                p.right.animated-soft.blur-in.d-125 Claim the sword of your destiny!<br> Stake your soul for the future they took from us<br> Rebel! Reclaim! Reveal!
                button.main.animated-soft.hard-glitch-in.delayed.d-250 Claim a Soul

        

</template>

<style lang="sass">
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
        

</style>
