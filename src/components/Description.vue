<script setup>
import { ref } from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';
</script>

<template lang="pug">
section.center.dark-glass
    //- .hero-bg.animated-soft.blur-in
    //- .inner-border
    Container.column.expanded
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025

        .column.condensed.whide
            span.table-title Stats
            .table.column.whide.stretched.condensed
                .column.end.condensed
                    p Max Supply
                    h1 2000
                .column.end.condensed
                    p Price
                    h1 450K PLS
                .column.end.condensed
                    p Mints Per Wallet
                    h1 55

            //- div.column.condensed.start
        p Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, excepturi veniam, perferendis doloribus unde, voluptatum at obcaecati iusto tempore perspiciatis molestiae impedit facilis similique! Velit modi numquam nostrum eveniet dolorem!

        

</template>

<style lang="sass">
.table-title
    font-weight: bold

@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)
//'md': '768px', phones
@media (max-width: 767px)
    .table
        border: 1px solid rgba(255,255,255,.25)
        >*
            border-top: 1px solid rgba(255,255,255,.25)
            padding: .5rem
    .table-title
        background: white
        color: black
        width: fit-content
        padding: .5rem 2rem
        font-weight: bold
                

//'sm': '640px', small phones
@media (max-width: 640px)
</style>
