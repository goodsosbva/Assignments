<template>
  <div>
    <ul class="nav nav-tabs justify-content-end">
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: type == 'blog' }"
          href="#"
          @click="type = 'blog'"
          >Blog</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{ active: type == 'clip' }"
          href="#"
          @click="type = 'clip'"
          >Clips</a
        >
      </li>
    </ul>
    <!-- Vue 3 동적 컴포넌트 렌더링 -->
    <component :is="type"></component>
  </div>
</template>

<script>
import Blog from "../components/Blog.vue";
import { ref, defineComponent } from "vue";

const Clip = defineComponent({
  template: `
  <div class="row">
  <div class="col-sm-6 p-1">
    <div class="card">
      <div class="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/watch?v=OKbINSuRJrk"
          title="술 냄새 나는 영상"
          allowfullscreen
        ></iframe>
      </div>
      <div class="card-body">
        <h5 class="card-title">술 냄새 나는 영상</h5>
        <p class="card-text">
          무언가 술냄새가 날거 같은 영상
        </p>
      </div>
    </div>
  </div>
  <div class="col-sm-6 p-1">
    <div class="card">
      <div class="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/watch?v=3o9gYUpmYn0"
          title="탑을 잘하는 영상"
          allowfullscreen
        ></iframe>
      </div>
      <div class="card-body">
        <h5 class="card-title">탑을 잘하는 영상상</h5>
        <p class="card-text">
          고탑 그는 신인가?.
        </p>
      </div>
    </div>
  </div>
  </div>
    `,
});

export default {
  setup() {
    const type = ref("blog");
    return { type };
  },
  components: {
    Blog,
    Clip,
  },
};
</script>
