import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DetaBindingList from "../views/DataBindingList.vue";
import Neasted from "../views/NestedComponent.vue";
import StoreAccess from "../views/StoreAccess.vue";

const routes = [
  {
    path: "/",
    name: "/Home",
    component: Home,
  },
  {
    path: "/DetaBindingList",
    name: "/DetaBindingList",
    component: DetaBindingList,
  },
  {
    path: "/Neasted",
    name: "/Neasted",
    component: Neasted,
  },
  {
    path: "/StoreAccess",
    name: "/StoreAccess",
    component: StoreAccess,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
