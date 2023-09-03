import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import "bootstrap"; // Bootstrap JS (includes Popper.js)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm.min.js";
import { store } from "./stores/index";
import { router } from "./router/router.js";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
