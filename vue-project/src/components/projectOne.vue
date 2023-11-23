<template>
  <div>
    <header class="header">
      <div class="headerwrap">
        <img alt="logo" class="logo" src="@/assets/logo.png" width="125" height="100" />
          <div class="mainMenu">
            <a hre="#">메뉴1</a>
            <a hre="#">메뉴2</a>
            <a hre="#">메뉴3</a>
            <a hre="#">메뉴4</a>

            <nav class="subMenu">
              <ul>
                <li>더작은 메뉴1-1</li>
                <li>더작은 메뉴1-2</li>
                <li>더작은 메뉴1-3</li>
                <li>더작은 메뉴1-4</li>
              </ul>

              <ul>
                <li>더작은 메뉴2-1</li>
                <li>더작은 메뉴2-2</li>
                <li>더작은 메뉴2-3</li>
                <li>더작은 메뉴2-4</li>
              </ul>

              <ul>
                <li>더작은 메뉴3-1</li>
                <li>더작은 메뉴3-2</li>
                <li>더작은 메뉴3-3</li>
                <li>더작은 메뉴3-4</li>
              </ul>

              <ul>
                <li>더작은 메뉴4-1</li>
                <li>더작은 메뉴4-2</li>
                <li>더작은 메뉴4-3</li>
                <li>더작은 메뉴4-4</li>
              </ul>
            </nav>
          </div>
      </div>
    </header>
    <main>
      <div class="img-slide">
        <a href="#"><img src="@/assets/slideImg/img1.png"  alt="망곰이1"><span class="imgText">망곰이! 지금 시작합니다!</span></a>
        <a href="#"><img src="@/assets/slideImg/img2.png"  alt="망곰이2"><span class="imgText">망곰이! 두둥 등장! </span></a>
        <a href="#"><img src="@/assets/slideImg/img4.png"  alt="망곰이3"><span class="imgText">망곰이! 엉ㅠ엉ㅠ</span></a>
      </div>
      <div class="contents">
      <div>
        <ul class="tabMenu"> <!-- tabMenu:공지사항과 갤러리 묶어줌 -->
        <li class="active"><a href="#">공지사항</a>
          <div class="tabBG notice">
            <ul>
              <li><a href="#">편리함과 혜택을 더한 대한은행 개선 안내<span>2020.11.24</span></a></li>
              <li><a href="#">해외송금서비스 점검 공지<span>2020.11.24</span></a></li>
              <li><a href="#">고객센터 전화상담서비스 시간 변경 안내<span>2020.11.24</span></a></li>
              <li><a href="#">개인정보처리방침 변경 안내<span>2020.11.24</span></a></li>
            </ul>
          </div>
        </li>
        <li class=""><a href="#">갤러리</a>
          <div class="tabBG gallery">
            <ul>
              <li><a href="#"><img src="@/assets/cssSmall.png" alt="갤러리1"></a></li>
              <li><a href="#"><img src="@/assets/cssSmall.png" alt="갤러리2"></a></li>
              <li><a href="#"><img src="@/assets/cssSmall.png" alt="갤러리3"></a></li>
            </ul>
          </div>
        </li>
        </ul>  <!-- tabMenu 끝 -->
      </div>
      <div class="banner">
        <a href="#">배너</a>
      </div>
      <div class="direct">
        <a href="#">바로가기</a>
      </div>
    </div>
    </main>
    <footer>
      <div class="footer">
        <div class="flogo"></div>
        <div class="fcontent">
          <ul>
            <div class="fmenu">
              <ul>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
              </ul>
            </div>
            <li>COPYRIGHTⓒ by KHS. ALL RIGHTS RESERVED</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">

import $ from 'jquery';
  var imgs = 2;
  var now = 0;

  $(document).ready(function () {

  start();

    function start() {
    
      $(".subMenu").hide();
      // 마우스 오버
      $(".mainMenu").mouseover(function(){
        $(".subMenu").stop().slideDown(300);
      }).mouseout(function(){
        $(".subMenu").stop().slideUp(300);
      });

      // 슬라이드
      $(".img-slide > a").eq(0).siblings().animate({ width: "-1200px" });

      setInterval(function () {
        now = now == imgs ? 0 : now + 1;
        $(".img-slide > a").eq(now - 1).animate({ width: "-1200px" });
        $(".img-slide > a").eq(now).animate({ width: "1200px" });
      }, 3000);
      
    }

    $(function(){
      $(".tabMenu > li > a").click(function(){
        
        $(this).parent().addClass("active").siblings().removeClass("active");
        return false;
      })
    })
  });
</script>

<style scope>

  a{
    text-decoration:none;
    display:block;
  }

  ul, li {
    list-style-type: none;
  }

  header {
    width:100%;
    height:100px;
    background-color: #0072E1;
  }

  .headerwrap {
    display: flex;
    width: 1140px;
    justify-content: space-between;
    margin:0 auto;
  }

  .logo {
    width: 300px;
    margin-bottom: 10px;
  }
  
  .mainMenu {
    display: flex;
    justify-content: space-between;
    margin-right: 400px;
    height: 100%;
    align-items: center;
    position: relative;
    width:800px; /*서브메뉴랑 동일하게*/
    color: white
  }

  .mainMenu > a {
    widows: 24%;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  }

  .mainMenu > a:hover{
    background: rgba(255,255,255, 0.1);
  }

  .subMenu {
    width: 800px;
    display: flex;
    justify-content: space-between;
    background: blue;
    position: absolute;
    right: 100;
    /* absolute 기준으로 top 100px 내렸으므로 아래에 위치 된다. */
    top: 100px;
    z-index: 1;
  }

  .subMenu > ul {
    width: 24%;
    text-align: center;
    padding:10px 0;
    color:#ffffff;
  }

  .img-slide {
    /* display: flex;
    height: 300px;
    justify-content: center; 
    align-items: center;  */
    position:relative;
    width:100%;
    height:300px;
    overflow: hidden;
    background: #ffffff;
  }

  .img-slide a {
    /* absoulute를 했기 때문에 span 태그가 a태그를 따라서 이동을 하는듯 */
    position:absolute; 
    top:30;
    left:0;
    overflow: hidden;
  }

  .img-slide a > img {
    height: 100%;
    margin-top: 40px;
    margin-left: 40px;
  }

  .imgText {
    position:absolute;
    top:50%;
    left:43.5%;
    margin:-10px -70px;
    background: rgba(0, 118, 190, 0.7);
    color:#ffffff;
    padding:16px 100px;
    font-weight: bold;
  }

  .contents {
    display: flex;
    height: 200px;
    position: relative;
    justify-content: space-between;
  }

  .contents > div {
    width: 33%;
  }

  /*탭메뉴 : 공지사항 갤러리 */
  .tabMenu{ display:flex;}
  .tabMenu > li > a{
    min-width: 85px;
    border:1px solid #dddddd;
  }

  .tabMenu > li > a:hover { background-color:#eeeeee;}

  /* 공지사항과 갤러리 탭 맞닿는 부분에 보더를 없애줌 */
  .tabMenu > li:first-child a{ border-right:none;}

  /* 활성화된 탭의 스타일 */
  .tabMenu > li.active > a { font-weight: bold; background-color:#ffffff; }

  /*탭 콘텐츠 영역 스타일*/
  .tabBG{
    position:absolute;
    overflow:hidden;
    height:168px; 
    background:#ffffff;
  }
  /*active 클래스가 추가된 탭 콘텐츠 영역 스타일*/
  .tabMenu> li.active div {
    border:1px solid #dddddd;
    z-index:1;
  }

   /* 공지사항 */
  .notice ul { padding:20px 0;}
  .notice ul li { 
    padding:8px 20px;
    margin:0 10px;
    font-size:14px;
  }

  .gallery {
    left: 0;
    /* margin-left: 40px; */
    width: 365px;
  }

  .gallery > ul {
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
  }

  .banner {
    background: url("@/assets/banner.jpg") center center;
  }

  .direct {
    background: url("@/assets/direct.jpg") center center;
  }

  .banner, .direct {
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
  }

  .banner > a,
  .direct > a{
    width:100px;
    padding:14px 0;
    text-align: center;
    font-weight:bold;
    color:#ffffff;
    background-color:rgba(230, 107, 39, 0.5);
  }

  .footer {
    display: flex;
    height: 100px;
    justify-content: center; 
    align-items: center; 
  }
  
  .flogo {
    width: 33%;
    height: 100px;
    background: url("@/assets/logo.png") center center
  }

  .fcontent {
    width: 60%;
  }

  .fmenu > ul {
    display: flex;
    justify-content: space-between;
  }
</style>
