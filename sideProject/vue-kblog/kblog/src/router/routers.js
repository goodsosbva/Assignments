import Home from "../components/Home.vue";
import Application from "../components/Application.vue";
import Profile from "../components/Profile.vue";
import Admin from "../components/Admin.vue";
import { defineComponent } from "vue";

const NotFound = defineComponent({
  template: "<div>Not Found</div>",
});

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home", component: Home },
  { path: "/profile", name: "profile", component: Profile, alias: "/home" },
  { path: "/application", name: "application", component: Application },
  { path: "/admin", name: "admin", component: Admin },
  { path: "/:catchAll(.*)+", component: NotFound },
];

export default routes;
