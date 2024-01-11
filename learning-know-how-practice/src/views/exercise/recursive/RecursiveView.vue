<template>
  <RecursiveComponent :items="nestedItems" />
  !!!!!!!!!!!
</template>

<script setup lang="ts">
import RecursiveComponent from "@/components/recursive/RecursiveComponent.vue";
import { ref } from "vue";

const nestedItems = ref([
  {
    id: 1,
    name: "Item 1",
    children: [
      { id: 2, name: "Item 1.1" },
      { id: 3, name: "Item 1.2" },
    ],
  },
  { id: 4, name: "Item 2" },
]);

console.log("This is recursive view!!!");
</script>
