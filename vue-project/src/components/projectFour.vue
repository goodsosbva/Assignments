<template>
  <body>
    <main>
        <div class="allMain">
            <header>
                헤더
            </header>
            <div class="bodywrap">
                <a class="imgSlide"><img />이미지</a>
                <div class="contents">
                    <div class="notice">공지사항</div>
                    <div class="gallery">갤러리</div>
                    <div class="direct">바로가기</div>
                </div>
                <footer>푸터</footer>
            </div>
        </div>
    </main>
  </body>
</template>

<script>
export default {

}

</script>

<style>
     * {
        margin: 0;
        padding: 0;
        list-style:none;
        box-sizing: border-box;
    }

    body{
        background: #ffffff;
        color:#888888;
    }

    a {
        text-decoration:none;
        display:block;
    }

    main {
        display: block;
        width: 1200px;
        margin: 0 auto;
        
    }

    .allMain {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 650px;
    }

    header {
        width: 30%;
        height: 650px;
        background: #777;
    }

    .bodywrap {
        width: 70%;
    }

    .imgSlide {
        height: 350px;
        background: #888;
    }

    .contents {
        display: flex;
        height: 200px;
        justify-content: space-evenly;
    }

    .notice {
        width: 33.33%;
        background: #111;
    }

    .gallery {
        width: 33.33%;
        background: #222;
    }

    .direct {
        width: 33.33%;
        background: #333;
    }

    footer {
        height: 100px;
        background: #999;
    }
</style>