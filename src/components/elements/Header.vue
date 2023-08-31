<script setup>
import { ref } from 'vue'
</script>

<template lang="pug">
.header.row.spaced.whide
    .logo.animated-soft.d-200.blink-in
    .navigation.row.whide.spaced.aligned
        .navigation-links.row.aligned.animated-soft.blur-in.d-3
            a(href="#about") Stats
            a(href="#soul-gambit") SoulGambit
            a(href="#rarity-distribution") Rarity Distribution 
            a(href="#faq") FAQ

        button.burguer-button
            v-icon(name="md-menu-sharp" scale="2" fill="white")

        button.main.animated-normal.blink-in.delayed.d-150 Minting Soon

</template>

<style lang="sass">
.header
    position: fixed
    top: 0
    left: 0
    padding: 2rem
    width: calc(100vw - 4rem)
    button
        &:hover
            background: white
            color: black
    .logo
        margin: 1rem
        width: 4rem
        height: 4rem
        background-color: transparent
        background-image: url('../../assets/souls-logo.svg')
        background-repeat: no-repeat
        background-size: contain
        background-position: center
    .burguer-button
        display: none
    .navigation-links
        > a
            text-decoration: none
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
    .header
        padding: 1rem
        .burguer-button
            display: unset
            padding: .25rem
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
