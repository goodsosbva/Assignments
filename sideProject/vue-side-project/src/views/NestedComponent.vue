<template>
  <div>
    <PageTitle :title="title"></PageTitle>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  components: { PageTitle },
  data() {
    return {
      title: "동적 페이지 타이틀",
    };
  },
};
</script>

<style lang="scss" scoped></style>
