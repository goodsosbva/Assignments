import ExerciseTable from "@/views/exercise/ExerciseTable.vue";
import RecursiveView from "@/views/exercise/recursive/RecursiveView.vue";
import { RouteRecordRaw } from "vue-router";

const exerciseTableRoutes: Array<RouteRecordRaw> = [
  {
    path: "/ExerciseTable",
    component: ExerciseTable,
    children: [],
  },
  {
    path: "/ExerciseTable/RecursiveView",
    component: RecursiveView,
  },
];

export default exerciseTableRoutes;
