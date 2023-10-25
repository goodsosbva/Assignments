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
        <div class="announcement">공지사항</div>
        <div class="banner">배너</div>
        <div class="shortcut">바로가기</div>
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

    start();

    function start() {
      $(document).ready(function () {
        $(".subMenu").hide();
        // 마우스 오버
        $(".mainMenu").mouseover(function(){
          $(".subMenu").stop().slideDown(300);
        }).mouseout(function(){
          $(".subMenu").stop().slideUp(300);
        });

        // jQuery 코드를 DOM이 준비된 후에 실행
        $(".img-slide > a").eq(0).siblings().animate({ width: "-1200px" });

        setInterval(function () {
          now = now == imgs ? 0 : now + 1;
          $(".img-slide > a").eq(now - 1).animate({ width: "-1200px" });
          $(".img-slide > a").eq(now).animate({ width: "1200px" });
        }, 3000);
      });
    }

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
  }

  .announcement {
    
  }

  .footer {
    display: flex;
    height: 100px;
    justify-content: center; 
    align-items: center; 
  }
</style>
