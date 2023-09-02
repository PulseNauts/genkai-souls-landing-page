import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    CoTelegramPlane,
    CoTwitter,
    MdShield,
    GiCrossedSwords,
    RiVipDiamondFill,
    GiAlienFire,
    GiLightningTear,
    GiDevilMask,
    MdMenuSharp,
    MdNavigatenextRound,
    MdNavigatebeforeRound,
    IoReloadOutline,
    IoCloseSharp,
    CoExternalLink,
} from "oh-vue-icons/icons";

addIcons(
    CoTelegramPlane,
    CoTwitter,
    MdShield,
    GiCrossedSwords,
    RiVipDiamondFill,
    GiAlienFire,
    GiLightningTear,
    GiDevilMask,
    MdMenuSharp,
    MdNavigatenextRound,
    MdNavigatebeforeRound,
    IoReloadOutline,
    IoCloseSharp,
    CoExternalLink
);
CoTelegramPlane;
createApp(App).component("v-icon", OhVueIcon).mount("#app");
