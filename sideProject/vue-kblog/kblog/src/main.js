import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import "bootstrap"; // Bootstrap JS (includes Popper.js)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm.min.js";
import { store } from "./stores/index";

const app = createApp(App);
app.use(store).mount("#app");
