<script setup>
import { useParallax } from '@vueuse/core'
import {ref, computed, onMounted} from 'vue';

const props = defineProps(["name", "cost", "atk", "def", "symbol", "faction", "type", "image", "body"]);
const container = ref(null)
// let rotation;
const parallax = useParallax(container)

const formattedTilt = computed(()=>{
    return (parallax.tilt.value * 15) + 'deg';
});

const formattedRoll = computed(() => {
    return (parallax.roll.value * 15) + 'deg';
});

const formattedXTranslation = computed(() => {
    return (parallax.tilt.value * -5) + '%';
});

const formattedYTranslation = computed(() => {
    return (parallax.roll.value * 5) + '%';
});


</script>

<template lang="pug">
.parallax-card(ref="container")
    .card-container.animated-container
        .card-character(:style="{'background-image':'url(' + image + ')'}")
        .info
        .interface
            .bottom-fill.dark-glass
            .bottom-text.column
                span.title {{ name }}
                .tags.row.condensed
                    span {{type}}
                p.body(v-html="body")
            .row.cost.aligned
                v-icon(name="ri-vip-diamond-fill" scale="1.25" fill="black")
                span {{ cost }}
            .row.atk.aligned
                v-icon(name="gi-crossed-swords" scale="1.25")
                span {{ atk }}
            .row.def.aligned
                span {{ def }}
                v-icon(name="md-shield" scale="1.25")
            .border
            v-icon.faction(:name="faction" scale="2.5" fill="white")    

</template>

<style lang="sass" scoped>
.parallax-card
    position: absolute
    width: 45%
    top: 0
    right: 0
    height: 100%
    perspective: 500px
    p
        position: absolute
        span.skill
            padding: 0.1rem .3rem
            background: black
            color: green
            font-weight: bold
            border-radius: 3px
    .card-container
        position: absolute
        top: 50%
        left: 50%
        width: 80%
        height: 100%
        background: rgba(black,.25)
        transform-origin: 50%
        transform: translate(-50%, -50%) rotateX(v-bind('formattedRoll')) rotateY(v-bind('formattedTilt'))
        border: 1px solid rgba(255,255,255,.5)
        overflow: hidden
        // transition: .25s ease-in-out

        .interface
            position: absolute
            top: 0
            bottom: 0
            left: 0
            right: 0

            .bottom-text
                padding-top: .5rem
                position: absolute
                top: 65%
                left: 1.25rem
                right: 1.25rem
                bottom: 0
                gap: .0rem
                .body
                    position: relative
                    font-size: 0.8rem
                    color: rgb(200,200,200)
                >.title
                    text-align: start
                    color: white
                .title
                    font-size: 1.25rem
                    font-weight: bold
                    
                .tags
                    filter: drop-shadow(0 0 8px black)
                    span
                        font-weight: bold
                        // padding: .1rem .25rem
                        // background: black
                        color: white
                        font-size: 1rem
                        color: rgb(200,200,200)
            .border
                position: absolute
                top: 10px
                bottom: 10px
                left: 10px
                right: 10px
                border: 1px solid rgba(255,255,255,.5)
            .faction
                top: 1rem
                right: 1rem

            .bottom-fill
                top: 65%
                bottom: 0
                left: 0
                right: 0
                mask-image: linear-gradient(0deg, black 50%, transparent)
                mask-mode: alpha
            >*
                position: absolute
                font-size: 32px
                font-weight: bold
                gap: .5rem
                >
                    .small
                        font-size: 1rem
                &.atk
                    color: rgb(255,200,200)
                    bottom: 1rem
                    left: 1rem
                    padding: 0 .5rem
                &.def
                    color: rgb(0,255,155)
                    bottom: 1rem
                    right: 1rem
                    padding: 0 .5rem

                &.cost
                    color: rgb(30,30,30)
                    top: 1.25rem
                    left: 10px
                    background: white
                    padding: 0 .5rem
                    span
                        color: rgb(30,30,30)

        .card-character
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            background-image: url('../../assets/cards/card-char-0.jpg')
            background-position: top center
            background-repeat: no-repeat
            background-size: cover
            transform: translate(v-bind('formattedXTranslation'), v-bind('formattedYTranslation')) scale(1.1)


</style>