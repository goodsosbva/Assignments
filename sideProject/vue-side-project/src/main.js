import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // Vuex store import

const app = createApp(App);

// Vue Router를 등록합니다.
app.use(router);

// Vuex Store를 등록합니다.
app.use(store);

app.mount("#app");
