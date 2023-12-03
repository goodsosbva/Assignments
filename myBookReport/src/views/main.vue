<template>
    <section class="maincontents">
      <section class="mainbanner"><img src="/images/mainimg.png" /></section>
      <section class="newbook">
        <h1 class="maintit">
          새로 나온 도선<span>분야별로 새로 나온 도서를 만나 보세요</span>
        </h1>
        <div class="tapcontent">
          <div class="tap">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link btn-tab" aria-current="page" @click="addContent(Newbooks, 0)" :class="{'active': isActiveNumber === 0}">IT 전문서</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-tab" @click="addContent(NewbooksIt, 1)" :class="{'active': isActiveNumber === 1}">업무 능력, 기타</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-tab" href="#">사진 예술</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-tab" aria-disabled="true">데이터 과학</a>
              </li>
            </ul>
          </div>
          <div id="carouselExample" class="carousel slide mainslider" data-bs-ride="carousel">
            <div class="carousel-inner rollimg">
                <div v-for="(group, index) in content" :key="index" class="carousel-item" :class="{ 'active': isActiveNumber === index }">
                    <span class="imgbox"><img :src="group.imgurl" class="" alt="Book Image" /></span>
                    <strong>{{ group.name }}</strong>
                    <strong class="textbox">{{ group.subdec }}</strong>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section class="searchbook">
        <h1 class="maintit">
          도서 검색<span>찾고자 하는 도서명을 검색해 주세요</span>
        </h1>
      </section>
      <section class="bannermenu"></section>
      <section class="notice">
        <h1 class="maintit">공지 사항</h1>
      </section>
    </section>
  </template>

<script setup lang="ts">
    import { ref, reactive } from 'vue';
    import type { Ref } from 'vue'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    
    interface MemberData {
        imgurl: string,
        name: string,
        subdec: string
    }
        
    const isActiveNumber = ref<number>(0);
    const content = reactive<MemberData[]>([]);
    const Newbooks = [
        {
            imgurl: "/images/books_image/book01.jpg",
            name: "Do it! 웹 사이트 따라 만들기",
            subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...1",
        },
        {
            imgurl: "/images/books_image/book02.jpg",
            name: "Do it! 웹 사이트 따라 만들기",
            subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...1",
        },
        {
            imgurl: "/images/books_image/book03.jpg",
            name: "Do it! 웹 사이트 따라 만들기",
            subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...1",
        },
        {
            imgurl: "/images/books_image/book04.jpg",
            name: "Do it! 웹 사이트 따라 만들기",
            subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...2",
        },
        {
            imgurl: "/images/books_image/book05.jpg",
            name: "Do it! 웹 사이트 따라 만들기",
            subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...2",
        },
    ]

    const NewbooksIt = [
        {
            imgurl: "/images/books_image/book06.jpg",
            name: "Do it! 웹 사이트 따라 만들기",
            subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...1",
        },
        {
            imgurl: "/images/books_image/book07.jpg",
            name: "Do it! 웹 사이트 따라 만들기",
            subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...1",
        },
        {
            imgurl: "/images/books_image/book08.jpg",
            name: "Do it! 웹 사이트 따라 만들기",
            subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...1",
        },
        {
            imgurl: "/images/books_image/book09.jpg",
            name: "Do it! 웹 사이트 따라 만들기",
            subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...2",
        },
        {
            imgurl: "/images/books_image/book10.jpg",
            name: "Do it! 웹 사이트 따라 만들기",
            subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...2",
        },
    ]

    const addContent = (data: MemberData[], index: number) => {
        console.log(data)
        content.push(...data); // Push the new data to content
        isActiveNumber.value = index; // Reset the active index
    };

</script>

<style scoped>

    a {
        text-decoration: none; /* 링크 밑줄 제거 */
        color: inherit; /* 링크 색상을 부모 요소로 상속 */
        cursor: pointer; /* 기본 커서를 사용자 정의로 변경 (선택 사항) */
        /* 추가적인 스타일을 필요에 따라 여기에 추가할 수 있습니다 */
    }

    .rollimg {
        padding: 0 10px;
    }

    .imgbox > img {
        max-width: 100%;
        width: 500px;
        height: 400px;
    }

    .rollimg > strong {
        display: block;
        font-size: 15px;
        color: #666;
    }

    .textbox {
        display: block;
        font-size: 13px;
        color: #ababab;
    }

    .carousel-item {
        display: flex;
    }

</style>

