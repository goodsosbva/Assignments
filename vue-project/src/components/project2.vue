<template>
    <body>
        <div class="allMain">
        <main>
            <header class="leftBody">
                <div class="logo"><a href="#"><img src="@/assets/pj2/Header/logo.png"></a></div>
                <nav class="menu">
                    <ul class="navi">
                        <li><a href="#">이용안내</a>
                            <ul class="subMenu">
                                <li>이용방법</li>
                                <li>이용시간</li>
                                <li>이용요금</li>
                            </ul>
                        </li>
                        <li><a href="#">이벤트정보</a>
                            <ul class="subMenu">
                                <li>현장이벤트</li>
                                <li>온라인이벤트</li>
                                <li>이벤트예약</li>
                            </ul>
                        </li>
                        <li><a href="#">프로그램</a>
                            <ul class="subMenu">
                                <li>프로그램안내</li>
                                <li>온라인예약</li>
                                <li>단체예약상담</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <div class="rightBody">
                <div class="bodyWrap">
                    <div class="imgSlide">
                        <a href="#"><img src="@/assets/pj2/Slide/img1.jpg"><span class="imgText">해운대빛축제 1</span></a>
                        <a href="#"><img src="@/assets/pj2/Slide/img2.jpg"><span class="imgText">해운대빛축제 2</span></a>
                        <a href="#"><img src="@/assets/pj2/Slide/img3.jpg"><span class="imgText">해운대빛축제 3</span></a> 
                    </div>
                    <div class="contents">
                        <div class="tabBox">
                            <ul class="tabMenu">
                                <li class="active"><a href="#">공지사항</a>
                                    <div class="tabBG notice">
                                        <ul>
                                            <li>해변에서 펼쳐지는 노래공연 <span>2020.11.09</span></li>
                                            <li>바다의 야경과 빛공연 관람하기 <span>2020.11.09</span></li>
                                            <li>불꽃놀이 이벤트를 신청하세요 <span>2020.11.09</span></li>
                                            <li>빛축제 단체관람 안내 <span>2020.11.09</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class=""><a href="#">갤러리</a>
                                    <div class="tabBG gallery">
                                        <ul>
                                            <li><a><img src="@/assets/pj2/Contents/gallery/icon1.jpg"></a></li>
                                            <li><a><img src="@/assets/pj2/Contents/gallery/icon2.jpg"></a></li>
                                            <li><a><img src="@/assets/pj2/Contents/gallery/icon3.jpg"></a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="banner">
                            <a href="#">배너</a>
                        </div>
                        <div class="direct">
                            <a href="#">배너</a>
                        </div>
                    </div>
                    <div class="footer">
                        <div class="flog">
                            <a><img src="@/assets/pj2/Footer/footerLogo.png"></a>
                        </div>

                        <div class="fGroup">
                        <div class="fMenu">
                            <a href="#">하단메뉴1</a>
                            <a href="#">하단메뉴2</a>
                            <a href="#">하단메뉴3</a>
                        </div>

                        <div class="fright">
                            COPYRIGHT © by WEBDESIGN. ALL RIGHTS RESERVED
                        </div>
                        </div>
                    </div>
             </div>
            </div>
            
        </main>
        </div>
        <div id="modalWrap"> <!-- 레이어 팝업창 영역 -->
            <div class="modal">
            <h1>빛축제 공연 정보</h1>
            <p>
                빛축제의 모든 공연과 전시정보를 한눈에 볼 수 있습니다. 빛축제 관련 공연과 캘린더 배포, 자전거 투어 행사, 바다 야경 명소, 빛나는 해변의 다리 등 자연환경을 살린 아름다운 해변에서의 빛축제 정보를 안내해드립니다.
            </p>
            <button type="button" class="btn">닫 기</button>
            </div>
        </div>
            </body>
</template>

<script setup lang="ts">
    import $ from 'jquery';

    $(document).ready(function(){
        $('.navi>li').mouseover(function() {
            $(this).find('.subMenu').stop().slideDown(500);
        }).mouseout(function(){
            $(this).find('.subMenu').stop().slideUp(500);
        })

        $('.imgSlide a:gt(0)').hide();

        setInterval(function(){
            $('.imgSlide a:first-child').fadeOut()
                .next('a').fadeIn()
                .end().appendTo('.imgSlide')
        }, 3000);

        $('.tabMenu > li > a').click(function() {
            $(this).parent().addClass('active').siblings().removeClass('active')
            return false;
        })

       $(".notice li:first").click(function(){
	   $("#modalWrap").addClass("active");
            });
                $(".btn").click(function(){
                $("#modalWrap").removeClass("active");
            });
        })

</script>

<style scope>
    * {
        margin: 0;
        padding: 0;
        list-style:none;
    }
    body { 
        background: #ffffff;
        color:#222328
    }
    a {
        text-decoration:none;
        display:block;
    }

    .allMain {
        width: 1000px;
        display: block;
        margin: 0 auto; /* 가운데 정렬을 위해 margin 추가 */
    }

    main {
        overflow: hidden;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .leftBody {
        width: 30%;
        justify-content: center;
        height: 670px;
        margin-right: 5px;
    }

    .logo > a > img {
        width: 200px;
        height: 40px;
        justify-content: center;
        align-items: center;
    }

    .meun {
        width:100%;
        text-align: center;
    }

    .navi > li {
        width: 100%;
    }

    .navi > li > a {
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        color: #eee;
        background: #222328;
        padding:10px 0;
    }

    .navi > li > a:hover {
        background: #eee;
        color: #222328;
    }

    .subMenu {
        display: none;
        width: 100%;
        font-size: 16px;
        background: #eee;
        color: #222328;
    }

    .subMenu > li {
        font-size: 14px;
    }

    .subMenu > li:hover {
        background: #222328;
        color: #eee;
    }

    .subMenu > li > a {
        width:100%;
        padding:10px 0;
        font-size:14px;
        font-weight:bold;
        background:#666666;
        color:#ffffff;
    }

    .rightBody {
        width: 70%;
        justify-content: center;
        margin-left: 5px;
    }

    .imgSlide {
        height: 350px;
        overflow: hidden;
        position: relative;
    }

    .imgSlide > a{
        position:absolute;
        left:0;
        top:0;
    }

    .imgText{
        position:absolute;
        left: 50%;
        top: 50%;
        margin-left: -89px;
        margin-top: -32px;
        background: rgba(5, 5, 5, 0.7);
        color: white;
        padding: 16px 16px;
    }

    .contents {
        height: 200px;
        display: flex;
        justify-content: space-between;
        /* 탭 메뉴 때문에 필요 */
        position: relative;
    }

    .tabBox {
        width: 33%
    }

    .tabBG {
       padding-top: 11px;
       position: absolute;
       overflow: hidden;
       width: 230px;
       height: 150px;
       background: #222328;
       color: #eee;
       line-height: 30px;
       text-align: center;
       align-items: center;
       font-size: 12px;
    }

    .tabBG span {
        font-size: 9px;
    }

    .tabMenu {
        display: flex;
        background:#eeeeee;
    }

    .tabMenu > li:hover {
        background: bisque;
    }

    .tabMenu > li > a {
        border: 1px solid #dddddd;
    }

    .tabMenu > li.active div {
        z-index: 1;
        border: 1px solid #dddddd;
    }

    .gallery {
        left: 0;
        background: white;
    }

    .gallery ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    /* 배너와 바로가기 공통  */
    .banner, .direct{
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .banner {
        width: 33%;
        background: url('@/assets/pj2/Contents/banner/banner.jpg') center center;
    }

    .direct {
        width: 33%;
        background: url('@/assets/pj2/Contents/direct/direct.jpg') center center;
    }

    /* 배너, 바로가  글자 스타일 */
    .banner a,
    .direct a{
        width:50%;
        padding:10px 0;
        text-align:center;
        color:#ffffff;
        font-weight:bold;
        background-color:rgba(0,0,0,0.5);
    }

    .footer {
        height: 100px;
        display: flex;
    }

    .flog {
        width: 40%;
    }

    .flog > a > img {
        width: 100px;
        height: 50px;
    }

    .fGroup {
        width: 60%;
    }

    .fMenu {
        display: flex;
        justify-content: space-between;
    }

    /* 레이어 팝업  */
    #modalWrap{
        display:none;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index: 1;
    }

    #modalWrap.active {
        display:block;
    }

    .modal {
        position:fixed;
        width:400px;
        padding:20px;
        top:30%;
        left:30%;
        background:#ffffff;
    }
   
</style>
