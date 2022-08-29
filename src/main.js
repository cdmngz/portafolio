import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import Particles from "vue3-particles";

loadFonts();

createApp(App).use(vuetify).use(Particles).mount("#app");
