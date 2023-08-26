<script setup>
import { ref } from 'vue'
</script>

<template lang="pug">
.container
    slot
</template>

<style lang="sass">
.container
    position: relative
    width: 60rem
    padding: 0 2rem
    // border: 1px solid
</style>
