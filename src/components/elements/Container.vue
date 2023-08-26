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
    
@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)

//'md': '768px', phones
@media (max-width: 767px)
    .container
        padding: 0 1rem
        .line-vertical
            display: none
//'sm': '640px', small phones
@media (max-width: 640px)

</style>
