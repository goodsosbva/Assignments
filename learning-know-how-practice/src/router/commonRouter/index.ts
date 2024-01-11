import { RouteRecordRaw } from "vue-router";
import CommonExView from "@/views/exercise/common/CommonExView.vue";

const commonRoutes: Array<RouteRecordRaw> = [
  {
    path: "/common",
    name: "common",
    component: CommonExView,
  },
];

export default commonRoutes;
