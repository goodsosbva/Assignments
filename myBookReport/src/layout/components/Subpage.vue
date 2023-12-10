<template>
  <section class="subpage">
    <div class="contentbox">
      <div class="titlebar">
        <h1><i class="bi bi-bookmark-check"></i>{{ pagetit }}</h1>
        <div class="pagenavi">
          <span><i class="bi bi-house-door"></i>홈</span>
          <strong>{{ pagetit }}</strong>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  pagetit: String
})
</script>

<style scoped></style>
