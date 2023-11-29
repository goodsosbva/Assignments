<template>
    <header class="topmenu">
        <div class="contentbox">
            <div class="logo">
                <button>
                    <img src="@/assets/images/logo.png" alt="easypublishing logo" />
                </button>
            </div>
            <div class="system">
                <button class="login" v-b-modal.login>로그인</button>
                <button class="member">회원가입</button>
            </div>
        </div>
    </header>
    <nav>
        <div class="contentbox">
            <ul>
                <li v-for="(item, index) in menulists" :key="index" v-on:click="goToPage(item.link)">
                    <button v-html="item.menutext"></button>
                </li>
            </ul>
        </div>
    </nav>
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router';

    const { push } = useRouter();
    const route = useRoute();
    const menulists = [
        {menutext: "도서 소개", link: "/book"},
        {menutext: "자료실", link: "/reference"},
        {menutext: "동영상 강의", link: "/movieclass"},
        {menutext: "교재 샘플", link: "/classample"},
        {menutext: "회사 소개", link: "/company"},
    ]

    const goToPage = (target: string) => {
        if (route.path !== target) {
            push(target);
        }
    };

</script>

<style scoped>
 
</style>