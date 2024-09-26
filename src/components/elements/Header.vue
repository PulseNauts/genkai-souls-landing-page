<script setup>
import { ref } from "vue";

const displayMenu = ref(false);
const emits = defineEmits(["openMintMenu"]);

const openMintmenu = function () {
  console.log("opening menu");
  emits("openMintMenu");
};
</script>

<template lang="pug">
.header.row.spaced.whide
    .logo.animated-soft.d-200.blink-in
    .navigation.row.whide.spaced.aligned
        .navigation-links.row.aligned.animated-soft.blur-in.d-3(:class="{'mobile-show': displayMenu}")
            a.d-075(href="#about") Stats
            a.d-100(href="#TCG") TCG
            a.d-125(href="#rarity-distribution") Rarity Distribution 
            a.d-150(href="#faq") FAQ
            a.d-150(href="#Royalty") Royalty
            a.d-150(href="https://souls-staking.netlify.app/") Staking
            .social.row.end
                a.animated-normal.blink-in.d-200(href="https://x.com/GenkaiSouls" target="_blank")
                    v-icon(name="co-telegram-plane" scale="1.75")
                a.animated-normal.blink-in.d-225(href="https://t.me/PulseSoulsCommunity" target="_blank")
                    v-icon(name="co-twitter" scale="1.75")


        button.burguer-button(@click="displayMenu = !displayMenu")
            v-icon(name="md-menu-sharp" scale="2" fill="white" v-if="!displayMenu")
            v-icon(name="io-close-sharp" scale="2" fill="white" v-else)


        //- button.main.animated-normal.blink-in.delayed.d-150(@click="openMintmenu") Minting Now

</template>

<style lang="sass">
.burguer-button
    &:hover
        background: transparent!important
        border: 1px solid rba(white,.5)!important
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
            &.mobile-show
                display: flex
                position: fixed
                top: 0
                background: rgba(black,.5)
                backdrop-filter: blur(10px) saturate(150%)
                border-bottom: 1px solid rgba(white,.5)
                flex-direction: column
                width: 100vw
                left: 0
                padding: 8rem 0 3rem 0
                align-items: start
                gap: 0
                z-index: -1
                >*
                    width: 100%
                    padding: .5rem 1rem
                    animation-name: glitch-font
                    animation-duration: .75s
                    animation-iteration-count: 1
                    border-top: 1px solid rgba(white, .5)
                .social
                    position: absolute
                    display: flex!important
                    right: 0
                    bottom: 0
                    justify-content: flex-end
                    border: none
//'sm': '640px', small phones
@media (max-width: 640px)
</style>
