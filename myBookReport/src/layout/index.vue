<template>
    <div>
        <section id="wrap">
            <h1 class="blind">웹사이트 제목</h1>
            <Header></Header>
            <section id="container">
                <RouterView />
            </section>
            <Footer></Footer>
        </section>
    </div>
</template>

<script setup lang="ts">
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
</script>