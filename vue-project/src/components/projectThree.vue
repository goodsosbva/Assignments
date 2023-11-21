<template>
    <body>
        <header>
            <div class="headerWrap">
                <a class="logo"><img src="@/assets/pj3/Header/logo.png"></a>
                <ul class="navi">
                    <li><a href="#">소장처별</a>
                        <ul class="subMenu active">
                            <li>한국</li>
                            <li>프랑스</li>
                            <li>이탈리아</li>
                            <li>독일</li>
                        </ul>
                    </li>

                    <li><a href="#">장르별</a>
                        <ul class="subMenu">
                            <li>회화</li>
                            <li>판화</li>
                            <li>공예/고대유물</li>
                            <li>그외</li>
                        </ul>
                    </li>

                    <li><a href="#">테마별</a>
                        <ul class="subMenu">
                            <li>초상화/인물</li>
                            <li>종교</li>
                            <li>신화/문학</li>
                            <li>일상/스포츠</li>
                        </ul>
                    </li>

                    <li><a href="#">시대별</a>
                        <ul class="subMenu">
                            <li>1900년이전</li>
                            <li>1900년대</li>
                            <li>현대</li>
                            <li>그외</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
        <main>
            <div class="imgSlide">
                <a href="#"><img src="@/assets/pj3/Slide/img1.jpg" alt="슬라이드 이미지1"></a>
                <a href="#"><img src="@/assets/pj3/Slide/img2.jpg" alt="슬라이드 이미지2"></a>
                <a href="#"><img src="@/assets/pj3/Slide/img3.jpg" alt="슬라이드 이미지3"></a>
            </div>
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
    import $ from 'jquery';

    $(document).ready(function(){
        $('.navi > li').mouseover(function(){
            $(this).find('.subMenu').stop().slideDown(300)
        }).mouseout(function(){
            $(this).find('.subMenu').stop().slideUp(300)
            
        })

        setInterval(function() {
            $('.imgSlide a:first-child').fadeOut()
            .next().fadeIn()
            .end().appendTo('.imgSlide')
        }, 3000)
    })
</script>

<style scoped>
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

    header {
        display: flex;
        width:100%;
        height:100px;
        background: #4A4948;
    }

    .headerWrap {
        width:1200px;
        height:100%;
        margin:0 auto;
        display:flex;
        justify-content: space-between;
    }

    header > a {
        width:40%;
    }

    .logo {
        width:20%;
        display: flex; 
        justify-content: center; /* 수평 가운데 정렬 */
        align-items: center; /* 수직 가운데 정렬 */
    }
    /*로고이미지*/
    .logo > img{
        width:200px; 
        height:40px; 
    }

    .navi {
        width:60%;
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navi > li {
        width: 100%;
        position: relative;
        padding: 0 20px;
        cursor: pointer;
      
    }

    .navi > li:hover {
        background: #888888;
    }

    .navi > li > a {
        text-align: center;
        color: #ffffff;
        margin: 18px;
    }

    .subMenu {
        display: none;
        position: absolute;
        z-index: 1;
        left: 45px;
        margin-top: 20px;
        background: black;
        border: 1px solid #777;
        color: white;
        line-height: 40px;
        width: 100%;
        text-align: center;
    }

    .subMenu > li {
        width: 100%;
    }

    .subMenu > li:hover {
        background: #777;
    }

    main {
        width: 1200px;
        margin: 0 auto;
    }

    .imgSlide {
        overflow: hidden;
        widows: 1200px;
        height: 300px;
    }

    .contents {
        display: flex;
        justify-content: space-around;
        height: 200px;
    }

    .notice {
        width: 33%;
    }

    .gallery {
        width: 33%;
    }

    .banner {
        width: 33%;
    }

    footer {
        width:100%;
        height:100px;
        justify-content: center;
    }

</style>