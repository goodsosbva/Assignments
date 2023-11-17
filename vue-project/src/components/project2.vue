<template>
    <body>
        <div class="allMain">
        <main>
            <header class="leftBody">header</header>
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