<script setup>
import { ref, computed, onMounted } from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';

const cardList = [
    {
        name: "Genkai Spirits",
        image:'./rarity/genkai.jpg',
        amount: 1500,
        legendary: 10,
        rare: 400,
        common: 1090,
        percent: 50,
        description: "Through portals of time and imagination, characters from beloved anime tales converge. This Genkai gathering showcases iconic heroes and hidden gems, each echoing a unique legacy, awaiting to be discovered and revered. A mosaic of stories and epochs, they are the touchstones of an ever-evolving culture, inviting all to partake in their rich tapestry."

    },
    {
        name: "Shape -Shifters",
        image: './rarity/shapeshifter.jpg',
        amount: 200,
        legendary: 3,
        rare: 50,
        common: 147,
        percent: 6.6,
        description: "There's a secret guild where chosen ones are granted the power to become anything they desire. These Shapeshifters, once mere mortals, now dance through forms, captivating all with their ever-changing nature. With each transformation, they embrace a new tale, leaving onlookers in awe of their fluid identities and endless potential."

    },
    {
        name: "Humanoids",
        image: './rarity/humanoid.jpg',
        amount: 125,
        legendary: 3,
        rare: 40,
        common: 82,
        percent: 4.2,
        description: "When the age of innovation met the dawn of magic, the Humanoids were born. Perfectly blending the essence of humanity with the precision of machinery, they symbolize a future where boundaries blur and endless possibilities await. Standing at the nexus of technology and mysticism, they challenge perceptions and inspire dreams of harmonious coexistence."

    },
    {
        name: "Aliens",
        image: './rarity/alien.jpg',
        amount: 50,
        legendary: 3,
        rare: 15,
        common: 32,
        percent: 1.6,
        description: 'Beyond the stars and past the shimmering nebulae lies a galaxy teeming with entities of vast knowledge and power. These Alien beings, having journeyed light-years, now find themselves in our world. Their rare appearances are considered blessings, offering glimpses into the vastness of the universe. Their presence weaves tales of cosmic events and celestial wonders, drawing admirers from all corners.'

    },
    {
        name: "Undeads",
        image: './rarity/undead.jpg',
        amount: 125,
        legendary: 3,
        rare: 40,
        common: 82,
        percent: 4.2,
        description: "From the silence of the forgotten crypts, whispers of the past rose. These Undead entities, caught between life and the beyond, roam with tales of old, seeking both vengeance and redemption. Bound to neither time nor realm, their journey is one of eternal restlessness, driven by desires that never wane."

    },
    {
        name: "Mutant Apes",
        image: './rarity/mutant.jpg',
        amount: 150,
        legendary: 3,
        rare: 40,
        common: 107,
        percent: 5,
        description: "In a time of unchecked experimentation, certain Apes were exposed to atomic and nuclear energies. The aftermath of this exposure forever altered them. Now, as Mutants, they wear their transformed DNA with a blend of pride and power. Their appearance serves as a stark reminder of the unpredictable dance between nature and mankind's ambition."
    },
    {
        name: "Fables",
        image: './rarity/fable.jpg',
        amount: 75,
        legendary: 3,
        rare: 20,
        common: 52,
        percent: 2.5,
        description: "Legends speak of creatures so enchanting, they seem drawn from dreams. Fables, as they're known, serve as cherished allies. Neither beast nor spirit, they walk beside the brave, infusing their travels with magic and wonder. As timeless guardians of the ethereal, they offer guidance and protection, becoming an integral part of every legend they touch."

    },
    {
        name: "Demon Slayers",
        image: './rarity/demonslayer.jpg',
        amount: 250,
        legendary: 3,
        rare: 75,
        common: 169,
        percent: 8.33,
        description: "In response to rising shadows, a brotherhood formed, dedicated to mastering the blade and the arcane. These Demon Slayers, sworn defenders, stand vigilant, their blades always ready to vanquish the darkness. Trained in ancient arts, their lives are dedicated to keeping balance, ensuring that the realm remains a sanctuary for all."

    },
    {
        name: "Akumas",
        image: './rarity/akuma.jpg',
        amount: 250,
        legendary: 3,
        rare: 75,
        common: 172,
        percent: 8.33,
        description: "Awakened by the realm's discord, the Akuma rise. These Japanese demons, embodiments of ancient wrath, seek dominion over lands and souls, constantly clashing with the Demon Slayers in epic sagas of power and honor. Born from the deepest fears and legends, they are a force to be reckoned with, challenging even the bravest of hearts."

    },
    {
        name: "Corrupted",
        image: './rarity/corrupted.jpg',
        amount: 75,
        legendary: 3,
        rare: 25,
        common: 47,
        percent: 2.5,
        description: "In the era of the Black Mist, a toxic cloud enveloped the land. Those who couldn't escape its grasp were forever changed, becoming Corrupted. With masks shielding them and a new beastly nature, they're living reminders of a time best forgotten, yet impossible to ignore. Their resilience is a story of survival, echoing the will to adapt and endure amidst calamities."

    },
    {
        name: "Apes",
        image: './rarity/ape.jpg',
        amount: 200,
        legendary: 3,
        rare: 50,
        common: 147,
        percent: 6.6,
        description: "From a distant, vibrant jungle hidden within ancient scrolls, a tribe of expressive Apes emerged. Misplaced by fate, they now navigate our realm, their unique essence adding color and joy to every encounter. With hearts as vast as their tales, they seek kinship and adventure, sprinkling a touch of the wild wherever they roam.",
    },
];

const cardIndex = ref(0);

const currentSelectedCard = computed(() => cardList[cardIndex.value]);

const autoIntervalIsOn = ref(true);
const selectCard = function(i){
    autoIntervalIsOn.value = false;
    cardIndex.value = i;
}

const cardChangeCycle = () => {
    if (!autoIntervalIsOn.value) return;

    let next = cardIndex.value + 1;
    if (next >= cardList.length)
        next = 0;
    cardIndex.value = next;

    setTimeout(cardChangeCycle,5000)
};

onMounted(() => {
    setTimeout(cardChangeCycle, 5000);
});

</script>

<template lang="pug">

section.center.dark-glass.content-section

    Container.column.expanded.end(style="min-height:70vh")
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025

        template(v-for="(card,index) in cardList" :key="index")
            .column.condensed.whide.start.text-content-stretched.expanded(
                v-if="index==cardIndex"
                )
                
                span.table-title Rarity Distribution

                div.body-content
                    
                    h1.main-title.glitch-font-in.animated-normal {{ currentSelectedCard.name}}
                    p.glitch-font-in.animated-quick.d-050
                        | Supply: <b>{{ currentSelectedCard.amount}}</b>
                        br
                        | Collection Percent: <b>{{ currentSelectedCard.percent}}%</b>
                        br
                        | No/Legendaries: <b>{{ currentSelectedCard.legendary}}</b>
                        br
                        | No/Rares: <b>{{ currentSelectedCard.rare}}</b>
                        br
                        | No/Common: <b>{{ currentSelectedCard.common}}</b>
                    
                p.gray.end.glitch-font-in.animated-quick.d-075
                    | {{currentSelectedCard.description}}

        .distribution-grid
            template(v-for="(card,i) in cardList" :key="i")
                .grid-card(:class="{'active':i==cardIndex}" @click="selectCard(i)")
                    .card-image(:style="{backgroundImage: 'url(' + card.image +')'}")
                    span
                        | {{ card.name }}
        

</template>

<style lang="sass">
.text-content-stretched
    width: calc(35% - 1rem)
    right: 0
    float: right
.distribution-grid
    position: absolute
    left: 1rem
    top: 50%
    width: 62%
    height: 70vmin
    display: grid
    gap: .5rem
    grid-template-columns: repeat(4, 1fr)
    grid-template-rows: repeat(3, 1fr)
    transform: translateY(-50%)

    .grid-card
        border: 1px solid rgba(255,255,255,.5)
        position: relative
        padding: 10px
        border-radius: 0 3rem 0 0
        overflow: hidden

        &.active
            border: 1px solid white
            animation-name: hard-glitch
            animation-duration: .5s
            animation-iteration-count: 1
            filter: drop-shadow(0 0 3px rgba(white,1)) drop-shadow(0 0 10px rgba(yellow,.25)) drop-shadow(5px 5px 0 rgba(cyan,.75)) drop-shadow(-5px -5px 0 rgba(magenta,.75)) drop-shadow(-5px 5px 0 rgba(green,.75))

        &:hover
            border: 1px solid gold
            box-shadow: 0 0 5px yellow
        .card-image
            position: absolute
            left: 0
            top: 0
            right: 0
            bottom: 0
            background-position: center
            background-size: cover
        span
            position: absolute
            bottom: 0
            left: 0
            right: 0
            background: rgba(0,0,0,.5)
            backdrop-filter: blur(15px) saturate(150%)
            padding: 5px 10px
            border-top: 1px solid rgba(255,255,255,.5)
    
@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)
    .text-content-stretched
        width: calc(50% - 2rem)

    .distribution-grid
        grid-template-columns: repeat(2, 1fr)
        grid-template-rows: repeat(6, 1fr)
        width: 50%
        height: 80vh
        left: 1rem

//'md': '768px', phones
@media (max-width: 767px)
    .content-section
        height: unset
    .text-content-stretched
        width: 100%
        .body-content
            margin-top: 95vw


    .distribution-grid
        grid-template-columns: 1fr
        grid-template-rows: 1fr
        width: calc(100vw - 2rem)
        left: 1rem
        top: 16rem
        position: absolute
        height: calc(100vw - 2rem)

        .grid-card
            width: 100%
            height: 100%
            pointer-events: none
            &:not(.active)
                display: none
            &.active
                filter: none
            span
                display: none
                

//'sm': '640px', small phones
@media (max-width: 640px)

</style>
