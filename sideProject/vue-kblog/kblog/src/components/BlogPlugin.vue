<template>
  <div class="p-4">
    <header>
      <h4 class="font-italic">
        <slot name="heeader"></slot>
      </h4>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"><hr /></slot>
    </footer>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
