import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoTelegramPlane, CoTwitter } from "oh-vue-icons/icons";

addIcons(CoTelegramPlane, CoTwitter);
CoTelegramPlane;
createApp(App).component("v-icon", OhVueIcon).mount("#app");
