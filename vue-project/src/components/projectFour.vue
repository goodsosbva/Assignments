<template>
  <body>
    <main>
        <div class="allMain">
            <header>
                <a class="logo" href="#"><img src="@/assets/pj4/Header/logo.png"></a>
                <nav class="menu">
                    <ul class="navi">
                        <li><a href="#">축제소개</a>
                            <ul class="subMenu">
                            <li><a href="#">Festival소개</a></li>
                            <li><a href="#">행사장 안내</a></li>
                            <li><a href="#">조직위원회</a></li>
                        </ul>
                        </li>
                        <li><a href="#">예약안내</a>
                            <ul class="subMenu">
                                <li><a href="#">예약하기</a></li>
                                <li><a href="#">예약확인/취소</a></li>
                                <li><a href="#">단체예약문의</a></li>
                            </ul>
                        </li>
                        <li><a href="#">아티스트</a>
                            <ul class="subMenu">
                                <li><a href="#">고릴라즈</a></li>
                                <li><a href="#">메이저 레이저</a></li>
                                <li><a href="#">아우스게인</a></li>
                                <li><a href="#">타임로드</a></li>
                            </ul>
                        </li>
                        <li><a href="#">커뮤니티</a>
                            <ul class="subMenu">
                                <li><a href="#">공지사항</a></li>
                                <li><a href="#">사진갤러리</a></li>
                                <li><a href="#">영상갤러리</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <div class="bodywrap">
                <div class="imgSlide">
                    <a><img src="@/assets/pj4/Slide/img1.jpg" alt="슬라이드 이미지1" /></a>
                    <a><img src="@/assets/pj4/Slide/img2.jpg" alt="슬라이드 이미지2" /></a>
                    <a><img src="@/assets/pj4/Slide/img3.jpg" alt="슬라이드 이미지3" /></a>
                </div>
                
                <div class="contents">
                    <div class="notices">
                        <li><a href="#">공지사항</a>
                            <ul>
                                <li>Vallery Festival 공지사항1	<span>2020.11.28</span></li>
                                <li>Vallery Festival 공지사항2	<span>2020.11.28</span></li>
                                <li>Vallery Festival 공지사항3	<span>2020.11.28</span></li>
                                <li>Vallery Festival 공지사항4	<span>2020.11.28</span></li>
                            </ul>
                        </li>
                    </div>
                    <div class="gallery">
                        <li><a href="#">길러리</a>
                            <div class="gimgs">
                                <a><img src="@/assets/pj4/Contents/gallery/icon1.jpg" alt="갤러리1"></a>
                                <a><img src="@/assets/pj4/Contents/gallery/icon2.jpg" alt="갤러리2"></a>
                                <a><img src="@/assets/pj4/Contents/gallery/icon3.jpg" alt="갤러리3"></a>
                            </div>
                        </li>
                    </div>
                    <div class="direct">
                        <a><img src="@/assets/pj4/Contents/direct/direct.jpg" alt="바로가기"><span>바로가기</span></a>
                    </div>
                </div>
                <footer>
                    <div class="flogo">logo</div>
                    <div class="fcopy">COPYRIGHTⓒ by WEBDESIGN. ALL RIGHTS RESERVED</div>
                    <div class="flogo">logo</div>
                </footer>
            </div>
        </div>
    </main>
  </body>
</template>

<script>
    import $ from 'jquery';

    $(document).ready(function() {
        
        $('.navi > li').mouseover(function() {
            $(this).find('.subMenu').slideDown(300);
        }).mouseout(function() {
            $(this).find('.subMenu').slideUp(300);
        })

        setInterval(function() {
            $('.imgSlide a:first-child').fadeOut()
                .next('a').fadeIn()
                .end().appendTo('.imgSlide')
        }, 3000)
    })

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
        background: #555;
    }

    .logo {
        display: flex;
        width: 200px;
        height: 107px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu {
        width: 100%;
        text-align: center;
    }

    .navi > li {
        width: 100%;
        position: relative;
    }

    .navi > li > a {
        display: flex;
        border: 1px solid black;
        background: black;
        color: white;
        font-weight: bold;
        height: 50px;
        align-items: center;
        justify-content: center;
    }

    .subMenu {
        display: none;
        position: absolute;
        top: 0;
        left: 360px;
        width: 200px;
        height: 150px;
        background: #888;
        line-height: 35px;
        border: 1px solid sandybrown;
        z-index: 1;
    }

    .subMenu.active {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .subMenu > li > a {
        color: white;
    }

    .subMenu > li > a:hover {
        color: #b54c17
    }

    .subMenu > li:hover {
        background: #555;
    }

    .bodywrap {
        width: 70%;
    }

    .imgSlide {
        overflow: hidden;
        height: 350px;
        background: #888;
    }

    .imgSlide > a > img {
        width: 840px;
    }

    .contents {
        display: flex;
        height: 200px;
        justify-content: space-evenly;
    }

    .notices {
        width: 33.33%;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .notices > li {
        position: relative;
    }

    .notices > li > a {
        display: flex;
        background: #b54c17;
        color: black;
        width: 100px;
        justify-content: center;
        align-items: center;
        height: 30px;
        font-weight: bold;
    }

    .notices > li > ul {
        position: absolute;
        border: 1px solid black;
        height: 145px;
        line-height: 36px;
    }

    .notices > li > ul > li:nth-child(even) {
        background: #888888;
        color: rgb(164, 36, 132)
    }

    .gallery {
        width: 33.33%;
        margin-right: 10px;
    }

    .gallery > li > a {
        display: flex;
        background: #b54c17;
        color: black;
        width: 100px;
        height: 30px;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        margin-top: 10px;
    }

    .gimgs {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 145px;
        border: 1px solid black;
    }

    .direct {
        width: 33.33%;
        position: relative;
    }

    .direct img {
        width: 270px;
        height: 180px;
        margin-top: 5px;
    }

    .direct > a > span {
        display: block;
        position: absolute;
        top: 36%;
        left: 34%;
        background: rgba(161, 15, 25, 0.7);
        color: white;
        font-weight: bold;
        text-align: center;
        align-items: center;
        width: 100px;
        height: 50px;
        line-height: 50px;
    }

    footer {
        height: 100px;
        background: #999;
    }
</style>