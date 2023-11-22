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
                <div class="notice"><a href="#">공지사항</a>
                    <ul>
                        <li>세계의 미술작품 공지사항1 <span>2020.11.23</span></li>
                        <li>세계의 미술작품 공지사항2 <span>2020.11.23</span></li>
                        <li>세계의 미술작품 공지사항3 <span>2020.11.23</span></li>
                        <li>세계의 미술작품 공지사항4 <span>2020.11.23</span></li>
                    </ul>
                </div>
                <div class="gallery"><a href="#">갤러리</a>
                    <ul>
                        <a href="#"><img src="@/assets/pj3/Contents/gallery/icon1.jpg"></a>
                        <a href="#"><img src="@/assets/pj3/Contents/gallery/icon2.jpg"></a>
                        <a href="#"><img src="@/assets/pj3/Contents/gallery/icon3.jpg"></a>
                    </ul>
                </div>
                <div class="banner">
                    <a href="#"><img src="@/assets/pj3/Contents/banner/banner.jpg"><span>바로가기</span></a>
                </div>
            </div>                
        </main>
        <footer>
            <div class="flogo"><a class="logo"><img src="@/assets/pj3/Header/logo.png"></a></div>
            <div class="fcopyright">COPYRIGHTⓒ by WEBDESIGN. ALL RIGHTS RESERVED</div>
            <div class="fsns">
                <a src="#"><img src="@/assets/pj3/Footer/sns1.jpg"></a>
                <a src="#"><img src="@/assets/pj3/Footer/sns2.jpg"></a>
                <a src="#"><img src="@/assets/pj3/Footer/sns3.jpg"></a>
            </div>
        </footer>

        <div id="modalWrap">
            <div class="modal">
                <h1>세계의 미술작품 공지사항</h1>
            <p>
                동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세.
                무궁화 삼천리 화려강 대한 사람 대한으로 길이 보전하세.
                남산 위에 저 소나무, 철갑을 두른 듯 바람서리 불변함은 우리 기상일세.
            </p>
                <button class="btn">닫기</button>
            </div>
        </div>
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

        $('.notice li:first').click(function() {
            $('#modalWrap').addClass('active');
        });

        $('.btn').click(function() {
            $('#modalWrap').removeClass('active');
        })
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
        background: #CAAC7D;
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

    .notice > a {
        border: 1px solid #CAAC7D;
        width: 100px;
        display: flex; /* Flexbox 컨테이너로 설정 */
        justify-content: center; /* 수평 가운데 정렬 */
        align-items: center; /* 수직 가운데 정렬 */
        color: white;
        height: 40px;
        background: #CAAC7D;
        font-weight: bold;
    }

    .notice {
        width: 33%;
    }

    .notice > ul {
        border: 1px solid #888;
        line-height: 50px;
    }

    .notice ul li:nth-child(even) {
        background-color: #f2f2f2; 
    }

    .gallery {
        width: 33%;
    }

    .gallery > a {
        border: 1px solid #CAAC7D;
        display: flex; /* Flexbox 컨테이너로 설정 */
        justify-content: center; /* 수평 가운데 정렬 */
        align-items: center; /* 수직 가운데 정렬 */
        color: white;
        width: 100px;
        height: 40px;
        background: #CAAC7D;
        font-weight: bold;
    }

    .gallery > ul {
        display: flex;
        justify-content: space-evenly; 
        border: 1px solid #888;
        height: 200px;
        align-items: center;
    }

    .banner {
        width: 33%;
        position: relative;

    }

    .banner img {
        width: 398px;
        height: 240px;        
    }

    .banner > a > span {
        position: absolute;
        top: 47%;
        left: 40%;
        display: block;
        background: #CAAC7D;
        color: white;
        width: 100px;
        height: 50px;
        text-align: center;
        align-items: center;
        line-height: 50px;
    }

    footer {
        display: flex;
        width:100%;
        height:100px;
        margin-top: 40px;
        justify-content: space-evenly;
        background:#CAAC7D;
        text-align: center;
        align-items: center;
    }

    .fcopyright {
        font-style: bold;
        color: white;
    }

    .fsns {
        display: flex;
    }

    .fsns img {
        justify-content: center;
        border-radius: 50%;
        margin-left: 30px;
    }

    #modalWrap {
        display:none;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index: 1;
    }

    .modal {
        position:fixed;
        width:450px;
        padding:20px;
        top:40%;
        left:40%;
        background:#ffffff;
    }

    .btn {
        width: 100px;
        height: 50px;
        background: #CAAC7D;
        color: white;
    }

    #modalWrap.active {
        display: block;
    }

</style>