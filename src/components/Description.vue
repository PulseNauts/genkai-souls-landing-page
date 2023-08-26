<script setup>
import { ref } from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';
</script>

<template lang="pug">
section.center
    //- .hero-bg.animated-soft.blur-in
    //- .inner-border
    Container.column.expanded
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025

        .row.end.title.whide
            h1 Title goes here

            //- div.column.condensed.start
        p Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, excepturi veniam, perferendis doloribus unde, voluptatum at obcaecati iusto tempore perspiciatis molestiae impedit facilis similique! Velit modi numquam nostrum eveniet dolorem!

        

</template>

<style lang="sass">
@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)
//'md': '768px', phones
@media (max-width: 767px)
//'sm': '640px', small phones
@media (max-width: 640px)
</style>
