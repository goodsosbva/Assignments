import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap"; // Bootstrap JS (includes Popper.js)

const app = createApp(App);
app.provide("today", new Date().toDateString().split("T")[0]);
app.mount("#app");
