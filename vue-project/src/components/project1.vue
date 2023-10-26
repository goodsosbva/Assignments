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
      <div class="info">
        <div>
          <ul class="tab">
            <li class="active"><a>공지사항</a>
              <div class="stab anoouncement">
                <ul>
                  <li class="">공지1 2023.10.26</li>
                  <li class="">공지2 2023.10.26</li>
                  <li class="">공지3 2023.10.26</li>
                  <li class="">공지4 2023.10.26</li>
                </ul>
              </div>
            </li>
            
            <li class=""><a>갤러리</a>
              <div class="stab gallery">
                <ul>
                  <li><a><img src="@/assets/cssSmall.png">갤러리1</a></li>
                  <li><a><img src="@/assets/cssSmall.png">갤러리2</a></li>
                  <li><a><img src="@/assets/cssSmall.png">갤러리3</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <li class="banner">배너</li>
        </div>
        <div>
          <li class="shortcut">바로가기</li>
        </div>
      </div>
    </main>
    <footer>
      <div class="footer">footer</div>
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
    /* margin-right: 400px; */
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

  .info {
    display: flex;
    height: 200px;
    justify-content: space-between; 
    align-items: center; 
    position: relative;
  }

  .tab > div {
    width: 33.3%;
  }

  .tab {
    display: flex;
  }

  .tab > li {
    width: 100px;
  }

  .tab > li > a {
    border: 2px solid rgba(0, 118, 190, 0.7);
  }

  .tab > li:nth-of-type(2) {
    margin:0;
  }
  
   /* 작업중... */

  /*컨텐츠*/
  .info {
    width: 100%;
    height:200px;
    padding:0;
    margin:10px 0;
    display:flex;
    justify-content: space-between;
    position: relative; /* 탭메뉴의 콘텐츠 영역 absolute 때문에 넣어줌 */
  }
  /*컨텐츠 공통사항*/
  .info div{ width:33.3%;}
  .info > div:nth-of-type(2){margin:0 10px;}

  /*탭메뉴 : 공지사항 갤러리 */
  .tab { display:flex;}
  .tab > li > a{
    padding:0 10px;
    min-width: 85px;
    line-height:30px;
    font-size:14px;
    text-align:center;
    background:#eeeeee;
    border:1px solid #dddddd;
  }
  .tab > li > a:hover{ background-color:#eeeeee;}

  /* 공지사항과 갤러리 탭 맞닿는 부분에 보더를 없애줌 */
  .tab > li:first-child a{border-right:none;}
  /* 활성화된 탭의 스타일 */
  .tab > li.active> a { font-weight: bold; }
  /*탭 콘텐츠 영역 스타일*/
  .stab{
    position:absolute;
    overflow:hidden;
    height:168px; /* chrome inspect(검사) 보고 수치 계산 */
    background:#ffffff;
  }
  /*active 클래스가 추가된 탭 콘텐츠 영역 스타일*/
  .tabMenu > li.active div{
    border:1px solid #dddddd;
    z-index:1;
  }

  /* 수정된 CSS */
  .tab .active {
    border: 1px solid #dddddd;
    background: blue;
    z-index: 1;
  }

  .announcement {
    position: absolute;
  }

   /* 공지사항 */
  .anoouncement ul{ padding:20px 0;}
  .anoouncement ul li{ padding:8px 20px;
    margin:0 10px;
    font-size:14px;
  }
  /*공지사항 중 2배수 리스트 스타일*/
  .anoouncement li:nth-child(even){ background:rgba(230, 107, 39, 0.1); }
  .anoouncement li:hover{ color:#222328;background:rgba(0, 118, 190, 0.1); }
  .anoouncement li span { float:right; } 
      
  .gallery{	
    left:0;
    position: absolute;  
  }
  .gallery ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /*높이 값이 있어야 수직 정렬 됨*/
    height:100%;  
  }

  .gallery li {
    max-width: 100%;
    width: auto;
    overflow: hidden;
  }

  .gallery li:hover { 
    opacity:0.5; 
  }


  

  .footer {
    display: flex;
    height: 100px;
    justify-content: center; 
    align-items: center; 
  }
</style>
