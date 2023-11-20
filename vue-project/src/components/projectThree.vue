<template>
    <body>
        <header>header</header>
        <main>
            <div class="imgSlide">이미지</div>
            <div class="contents">
                <div class="notice">공지사항</div>
                <div class="gallery">갤러리</div>
                <div class="banner">배너</div>
            </div>                
        </main>
        <footer>
            푸터
        </footer>
    </body>
</template>

<script setup lang='ts'>
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        list-style:none;
        box-sizing: border-box;
    }

    body {
        background: #ffffff;
        color:#888888;
    }

    a {
        text-decoration:none;
        display:block;
    }

    header {
        width:100%;
        height:100px;
        background: #4A4948;
    }

    main {
        width: 1200px;
        margin: 0 auto;
    }

    .imgSlide {
        widows: 1200px;
        height: 300px;
        background: #888888;
    }

    .contents {
        display: flex;
        justify-content: space-around;
        height: 200px;
    }

    .notice {
        width: 33%;
        background: #222;
    }

    .gallery {
        width: 33%;
        background: #444
    }

    .banner {
        width: 33%;
        background: #555;
    }

    footer {
        width:100%;
        height:100px;
        background: #777;
    }

</style>