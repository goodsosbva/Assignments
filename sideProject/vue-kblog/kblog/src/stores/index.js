import { createStore } from "vuex";
import { about_me } from "./about-me";

export const store = createStore({
  modules: {
    about_me: about_me,
  },
});
