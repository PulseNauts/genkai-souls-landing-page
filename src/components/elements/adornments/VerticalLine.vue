<script setup>
import { ref } from 'vue'
</script>

<template lang="pug">
.line-vertical
</template>

<style lang="sass">
.line-vertical
    position: absolute
    width: 1px
    height: 100%
    background: rgba(255,255,255,.25)
    animation-duration: 1.5s
    animation-timing-function: ease-in-out
    animation-fill-mode: both
    &.left
        left: 0
    &.right
        right: 0

    &.grow-top
        animation-name: grow-top
    &.grow-bottom
        animation-name: grow-bottom
        
@keyframes grow-top
    0%
        top: 0
        transform-origin: top
        transform: scaleY(0)
    100%
        top: 0
        transform-origin: top
        transform: scaleX(1)

@keyframes grow-bottom
    0%
        bottom: 0
        transform-origin: bottom
        transform: scaleY(0)
    100%
        bottom: 0
        transform-origin: bottom
        transform: scaleX(1)
</style>
