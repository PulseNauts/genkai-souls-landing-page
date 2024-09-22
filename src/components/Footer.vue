<script setup>
import { ref } from "vue";
import Container from "./elements/Container.vue";
import VerticalLine from "./elements/adornments/VerticalLine.vue";
</script>

<template lang="pug">
section.center.dark-glass.footer
    .firm
        p Made by <a href="https://twitter.com/HeartLabswin" target="_blank">HeartLabs</a> / <a href="https://twitter.com/dbstrinity" target="_blank">DBSproductions</a> / <a href="https://pulsecreatures.xyz" target="_blank">Pulse Creatures</a>
    .social.row.end
        a.animated-normal(href="https://x.com/GenkaiSouls" target="_blank")
            v-icon(name="co-telegram-plane" scale="1.75")
        a.animated-normal(href="https://t.me/PulseSoulsCommunity" target="_blank")
            v-icon(name="co-twitter" scale="1.75")
        

</template>

<style lang="sass">
.footer
    height: unset!important
    min-height: unset!important
    padding: 3rem 0
    background: rgba(0,0,0,.75)
    .firm
        display: none
    .social
        display: none
        > a
            &:hover
                animation-name: glitch-font
                animation-duration: .75s
                animation-iteration-count: 1



@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)

//'md': '768px', phones
@media (max-width: 767px)
    .footer
        height: 8rem!important

        .firm
            display: unset!important
            left: 1rem
            bottom: 1rem
        .social
            display: flex!important
            right: 1rem
            bottom: 3rem


//'sm': '640px', small phones
@media (max-width: 640px)
</style>
