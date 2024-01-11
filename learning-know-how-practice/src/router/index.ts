import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import mainRoutes from "@/router/MainRouter/index";
import exerciseTableRoutes from "@/router/recursiveRouter/index";
import commonRouter from "@/router/commonRouter";

const routes: RouteRecordRaw[] = [
  ...mainRoutes, // 메인 라우트
  ...exerciseTableRoutes, // ExerciseTable 라우트
  ...commonRouter,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
