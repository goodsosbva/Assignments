import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import RecursiveView from "@/views/exercise/recursive/RecursiveView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/ExerciseTable/RecursiveView",
    name: "RecursiveView",
    component: RecursiveView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
