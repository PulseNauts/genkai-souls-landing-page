<script setup>
import { useParallax } from '@vueuse/core'
import {ref, computed, onMounted} from 'vue';

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
    .card-container
        .card-character
        .info
        .border
            .bottom-fill.dark-glass
            .column.cost
                .small Cost
                span 2
            .column.atk
                v-icon(name="gi-crossed-swords" scale="1.5")
                span 3
            .column.def
                v-icon(name="md-shield" scale="1.5")
                span 2
    p {{ parallax.tilt }} {{ parallax.roll }} {{ parallax.source }}
    

</template>

<style lang="sass" scoped>
.parallax-card
    position: absolute
    width: 45%
    top: 0
    right: 0
    height: 100%
    border: 1px solid red
    perspective: 500px
    p
        position: absolute
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
        .border
            position: absolute
            top: 10px
            bottom: 10px
            left: 10px
            right: 10px
            border: 1px solid rgba(255,255,255,.5)
            .bottom-fill
                top: 65%
                bottom: 0
                left: 0
                right: 0
            >*
                position: absolute
                font-size: 32px
                font-weight: bold
                >
                    .small
                        font-size: 1rem
                &.atk
                    color: rgb(255,200,200)
                    bottom: 1rem
                    left: 1rem
                    padding: 1rem
                    background: rgba(0,0,0,.5)
                    
                &.def
                    color: rgb(0,255,155)
                    bottom: 1rem
                    right: 1rem
                &.cost
                    color: rgb(0,200,255)
                    top: 1rem
                    left: 1rem

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