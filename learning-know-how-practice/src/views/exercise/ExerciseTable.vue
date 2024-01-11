<template>
  <common-header></common-header>
  <a-list
    class="demo-loadmore-list"
    :loading="initLoading"
    item-layout="horizontal"
    :data-source="list"
  >
    <template #loadMore>
      <div
        v-if="!initLoading && !loading"
        :style="{
          textAlign: 'center',
          marginTop: '12px',
          height: '32px',
          lineHeight: '32px',
        }"
      >
        <a-button @click="onLoadMore">loading more</a-button>
      </div>
    </template>
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a key="list-loadmore-edit">edit</a>
          <a key="list-loadmore-more" @click="goRoute">more</a>
        </template>
        <a-skeleton avatar :title="false" :loading="!!item.loading" active>
          <a-list-item-meta :description="item.content">
            <template #title>
              <a href="">{{ item.name.last }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.picture.large" />
            </template>
          </a-list-item-meta>
          <router-link to="/ExerciseTable/RecursiveView">content</router-link>
        </a-skeleton>
      </a-list-item>
    </template>
  </a-list>
  <common-footer></common-footer>
</template>
<script lang="ts" setup>
import { onMounted, ref, nextTick } from "vue";
import { useRouter } from "vue-router";
import CommonHeader from "@/components/common/CommonHeader.vue";
import CommonFooter from "@/components/common/CommonFooter.vue";

const router = useRouter();
const count = 3;
const constUrl = "https://a3408b73-4f06-4666-824e-9f557a2b928b.mock.pstmn.io";
const fakeDataUrl = `${constUrl}/exercise`;

const initLoading = ref(true);
const loading = ref(false);
const data = ref([]);
const list = ref([]);
onMounted(() => {
  fetch(fakeDataUrl)
    .then((res) => res.json())
    .then((res) => {
      console.log("res >>> ", res);
      initLoading.value = false;
      data.value = res.results;
      list.value = res.results;
    });
});

const onLoadMore = () => {
  loading.value = true;
  // list.value = data.value.concat(
  //   [...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} }))
  // );
  fetch(fakeDataUrl)
    .then((res) => res.json())
    .then((res) => {
      const newData = data.value.concat(res.results);
      loading.value = false;
      data.value = newData;
      list.value = newData;
      nextTick(() => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event("resize"));
      });
    });
};

const goRoute = () => {
  console.log("goTo!!!!!");
  router.push("/ExerciseTable/RecursiveView");
};
</script>
<style scoped>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
