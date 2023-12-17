<template>
  <section class="subpage">
    <div class="contentbox">
      <div class="titlebar">
        <h1><i class="bi bi-bookmark-check-fill"></i>{{ props.pagetit }}</h1>
        <div class="pagenavi">
          <span><i class="bi bi-house-door-fill"></i>홈</span>
          <strong>{{ props.pagetit }}</strong>
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

<style scoped>
.subpage {
  padding: 130px 0 100px;
}

.contentbox {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px;
  align-items: center;
  height: 55px;
  padding-top: 12px;
}
</style>
