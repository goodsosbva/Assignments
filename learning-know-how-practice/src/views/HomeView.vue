<template>
  <common-header></common-header>
  <div class="home">
    <img alt="smile" src="@/assets/smile.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  <common-footer></common-footer>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import CommonHeader from "@/components/common/CommonHeader.vue";
import CommonFooter from "@/components/common/CommonFooter.vue";
</script>
