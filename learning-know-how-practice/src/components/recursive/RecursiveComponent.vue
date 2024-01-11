<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
      <!-- 자기 자신을 재귀적으로 호출 -->
      <RecursiveComponent v-if="item.children" :items="item.children" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// items 프로퍼티 정의
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 20px;
}

li {
  margin: 5px 0;
}
</style>
