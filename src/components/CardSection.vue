<script setup>
import { ref, computed, onMounted } from 'vue'
import Container from './elements/Container.vue';
import VerticalLine from './elements/adornments/VerticalLine.vue';
import ParallaxCard from './elements/ParallaxCard.vue';

const cardList = [
    {
        name: "Orochi - Venomancer",
        faction: "gi-alien-fire",
        atk: 3,
        def: 2,
        cost: 2,
        type: "Genkai - Mage",
        image: './card-char-0.jpg',
        body: 'When a friendly unit dies, it transforms into a 3/3 <span class="skill">Venom</span> <span class="green">Green</span> Viper'
    },
    {
        name: "Frimelda - Light Guardian",
        faction: "gi-lightning-tear",
        atk: 5,
        def: 4,
        cost: 7,
        type: "Demon Slayer - Swordsman",
        image: './card-char-2.jpg',
        body: 'Adjacent units gain +1/0 and become <span class="light">White</span>'

    },
    {
        name: "Lilithim - Lightcaster",
        faction: "gi-devil-mask",
        atk: 1,
        def: 1,
        cost: 5,
        type: "Akuma - Mage",
        image: './card-char-1.jpg',
        body: 'All friendly units have <span class="skill">Lifelink</span>'
    },
    {
        name: "Balnatar - Chaos Sorcerer",
        faction: "gi-alien-fire",
        atk: 7,
        def: 3,
        cost: 10,
        type: "Genkai - Mage",
        image: './card-char-3.jpg',
        body: '<span class="skill">Spell Damage +4</span>'
    }
];
const currentCardIndex = ref(0);

const currentCard = computed(()=>{
    return cardList[currentCardIndex.value];
});

const onAnimation = ref(false);
onMounted(() => {
    setInterval(()=>{
        let next = currentCardIndex.value+1;
        if(next >= cardList.length)
        next = 0;
        currentCardIndex.value = next;
    },5000)
});
</script>

<template lang="pug">

section.center.dark-glass.content-section(id="soul-gambit")

    Container.column.expanded.text-content
        VerticalLine.left.grow-bottom.delayed.d-075
        VerticalLine.right.grow-top.delayed.d-025


        .column.condensed.whide
            span.table-title Soul Gambit
        p.body-text
            | Get ready for an exhilarating journey! We're diverting a portion of our funds to bring to life a brand-new trading card game (TCG) - currently titled 
            b "Soul Gambit" 
            | Dive into a world where every card duel is not only thrilling but also rewarding. With dynamic combat mechanics and lucrative rewards, it promises an unmatched gaming experience.
            b
            b
            | Exclusive for PulseSouls and Genkai Souls holders: You'll get 
            b early beta access 
            | to test your mettle and shape the game's future. Dive into our 
            b exclusive chat community 
            | to discuss game development nuances. And that's not all! When 
            b Soul Gambit
            | launches, you'll receive a 
            b free card set airdrop
            | , so you're battle-ready from day one without spending a dime.

        p.gray
            | Remember, only 
            b token holders 
            | get these perks, 
            b not the minters
            |. Keep your NFTs close, as they're your key to retaining access to exclusive chats and airdrops. Let's redefine the TCG experience together!

        template(v-for="(card, index) in cardList" key="index")
            transition(appear name="fade" mode="in-out")
                ParallaxCard(
                    v-if="index==currentCardIndex"
                    :name="card.name"
                    :type="card.type"
                    :atk="card.atk"
                    :def="card.def"
                    :cost="card.cost"
                    :faction="card.faction"
                    :image="card.image"
                    :body="card.body"
                    )

</template>

<style lang="sass">
.fade-enter-active
    transition: opacity .5s, transform 1.25s
    z-index: 1000
.fade-leave-active
    transition: 1.5s
    z-index: -1
.fade-enter-from, .fade-leave-to
    opacity: 0

.fade-enter
    opacity: 0
    transform: scale(1.1)

.fade-enter-from
    z-index: 100
    transform: translateX(-30px)  rotateY(25deg) scale(1.1)
    // .card-container.animated-container
        // transform: translate(calc(-50% - 50px), -50%, 50px) rotateX(-15deg) rotateY(10deg)!important
.fade-leave-to
    z-index: -1
    transform: translateX(100px) rotateY(45deg) scale(.9)

    // .card-container.animated-container
        // transform: translate(calc(-50% + 50px), -50%, -50px) rotateX(-15deg) rotateY(-10deg)!important


.table-title
    font-weight: bold


span.skill
    font-weight: bold
    padding: 0 .25rem
    background: rgba(200,200,200,.5)
    color: black
    font-size: .75rem
    border-radius: .25rem
span.green
    color: rgb(0,255,150)

span.light
    color: gold

@media (max-width: 1920px)

//'2xl': '1536px',
@media (max-width: 1536px)

//'xl': '1280px', small laptops
@media (max-width: 1280px)

//'lg': '1024px', ipads
@media (max-width: 1024px)
    section
        .text-content
            z-index: 10000
            >p,
            >*
                max-width: 50%
            .parallax-card
                width: calc((100vw - 4rem)*0.6)!important
                height: calc((100vw - 4rem)*0.65)!important
                max-width: unset
                right: -3rem
                z-index: -1
//'md': '768px', phones
@media (max-width: 767px)
    section.content-section
        height: unset
        padding: 8rem 0
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
    section
        .text-content

            .body-text
                margin-top: calc(100vw * 1.5)
                width: 100%
                max-width: unset
            p
                width: 100%
                max-width: unset
            .parallax-card
                width: 110vw!important
                height: calc((100vw - 2rem) * 1.4)!important
                max-width: unset
                top: 5rem
                left: -1rem
                // transform: translateX(-50%)
                

//'sm': '640px', small phones
@media (max-width: 640px)
</style>
