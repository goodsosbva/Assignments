import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // path 모듈 추가

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "/@/": path.resolve(__dirname, "./src"),
      "/@components/": path.resolve(__dirname, "./src/components"),
      "/@app_modules/": path.resolve(__dirname, "./src/modules"),
      "/@store/": path.resolve(__dirname, "./src/store"),
      "/@router/": path.resolve(__dirname, "./src/router"),
    },
  },
});
