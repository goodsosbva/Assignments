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
    <b-modal id="login" title="login">
        <div>로그인 내용</div>
    </b-modal>
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