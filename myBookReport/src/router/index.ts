import { createRouter, createWebHistory } from 'vue-router'
import pageRouter from "./modules/pageRouter";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    pageRouter
  ],
})

export default router
