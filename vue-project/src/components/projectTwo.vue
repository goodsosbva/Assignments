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
                        이미지 슬라이드
                        <!-- 
                        <a href="#"><img src="@/Slide/img1.jpg"></a>
                        <a href="#"><img src="@/Slide/img2.jpg"></a>
                        <a href="#"><img src="@/Slide/img3.jpg"></a> 
                        -->
                    </div>
                </div>
                <div class="contents">
                    <div>공지사항/갤러리</div>
                    <div>배너</div>
                    <div>바로가기</div>
                </div>
                <div class="footer">
                    푸터
                </div>
            </div>
            
        </main>
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
    }

    .imgSlide {
        height: 350px;
    }

    .contents {
        height: 200px;
        display: flex;
        justify-content: space-between;
    }

    .footer {
        height: 100px;
    }
   
</style>