<template>
  <div>
    <p>Count: {{ count }}</p>
    <button type="button" @click="increment">Increment</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);

    const increment = () => {
      store.commit("increment");
    };

    return {
      count,
      increment,
    };
  },
};
</script>

<style scoped></style>
