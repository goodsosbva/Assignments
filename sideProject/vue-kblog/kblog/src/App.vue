<template>
  <div>
    <Toast />
    <NavBarName />
    <div id="notification"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBarName from "./components/NavBar.vue";
import Toast from "./components/Toast.vue";
import { ref, provide } from "vue";

export default {
  name: "App",
  setup() {
    const toast = ref("");
    provide("toast", toast);

    // 아래와 같이 토스트 메시지를 추가할 수 있습니다.
    // onToastAdded("Your toast message");
  },
  components: {
    NavBarName,
    Toast,
  },
};
</script>
