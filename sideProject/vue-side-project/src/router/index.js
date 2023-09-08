import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DetaBindingList from "../views/DataBindingList.vue";

const routes = [
  {
    path: "/Home",
    name: "/Home",
    component: Home,
  },
  {
    path: "/DetaBindingList",
    name: "/DetaBindingList",
    component: DetaBindingList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
