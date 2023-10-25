import { createRouter, createWebHistory } from "vue-router";
import routes from "./routers.js";

export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});
