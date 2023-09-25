import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { createPinia } from 'pinia'; // Import createPinia

library.add(fas, fab);

const app = createApp(App);
app.use(router);
app.component("fa", FontAwesomeIcon);

app.use(createPinia());

// Install your store
app.mount('#app');
