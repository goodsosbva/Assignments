<template>
  <Subpage :pagetit="'도서 소개'" class="subPageMain">
    <div class="bookpage">
      <div
        id="carouselExample"
        class="carousel slide mainslider subpageslider"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner rollimg">
          <div
            v-for="(group, index) in Newbooks"
            :key="index"
            @click="Clicklink(index)"
            :class="{ active: index === tabIndex }"
          >
            <div class="carousel-item">
              <span class="imgbox"><img :src="group.imgurl" class="" alt="Book Image" /></span>
              <strong class="bookname">{{ group.name }}</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button><i class="bi bi-chevron-left leftButton"></i></button>
        <button><i class="bi bi-chevron-right rightButton"></i></button>
      </div>
      <component
        :is="componentslist[tabIndex]"
        :bookUrl="Newbooks[tabIndex]?.imgurl"
        :bookName="Newbooks[tabIndex]?.name"
        :bookDec="Newbooks[tabIndex]?.subdec"
      >
      </component>
    </div>
  </Subpage>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import Subpage from '@/layout/components/Subpage.vue'
import BookDetail1 from '@/views/Books/BookDetail1.vue'
import BookDetail2 from '@/views/Books/BookDetail2.vue'
import BookDetail3 from '@/views/Books/BookDetail3.vue'
import BookDetail4 from '@/views/Books/BookDetail4.vue'
import BookDetail5 from '@/views/Books/BookDetail5.vue'
import BookDetail6 from '@/views/Books/BookDetail6.vue'
import BookDetail7 from '@/views/Books/BookDetail7.vue'
import BookDetail8 from '@/views/Books/BookDetail8.vue'
import BookDetail9 from '@/views/Books/BookDetail9.vue'
import BookDetail10 from '@/views/Books/BookDetail10.vue'

interface MemberData {
  imgurl: string
  name: string
  subdec: string
}

const Newbooks = reactive<MemberData[]>([])
const isActiveNumber = ref<number>(0)

const tapselect = ref<string>('introduce')
const tabIndex = ref<number>(0)

const route = useRoute()
const { push } = useRouter()

const componentslist = [
  BookDetail1,
  BookDetail2,
  BookDetail3,
  BookDetail4,
  BookDetail5,
  BookDetail6,
  BookDetail7,
  BookDetail8,
  BookDetail9,
  BookDetail10
]

const content = [
  {
    imgurl: '/images/books_image/book01.jpg',
    name: 'Do it! 웹 사이트 따라 만들기',
    subdec: 'HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...'
  },
  {
    imgurl: '/images/books_image/book02.jpg',
    name: 'Do it! 첫 알고리즘',
    subdec: '160가지 그림과 스토리텔링으로 이해한다! 자료구조부터 보안...'
  },
  {
    imgurl: '/images/books_image/book03.jpg',
    name: 'Do it! C# 프로그래밍 입문',
    subdec: '이 책은 기본이 충실하면서도 프로젝트 실습까지 챙긴 C# 입문서...'
  },
  {
    imgurl: '/images/books_image/book04.jpg',
    name: 'IT 5분 잡학사전',
    subdec: 'IT 분야 직장에서 일하는 나 요즘 주변에 이상한 사람이...'
  },
  {
    imgurl: '/images/books_image/book05.jpg',
    name: 'Do it! SQL 입문',
    subdec: '20년간 글로벌 기업에서 데이터베이스 전문가로 근무한 저자의...'
  },
  {
    imgurl: '/images/books_image/book06.jpg',
    name: 'Do it! 클론 코딩 줌',
    subdec: '클론 코딩 시리즈 3탄, 노마드 코더의 동영상 무료 공개! ...'
  },
  {
    imgurl: '/images/books_image/book07.jpg',
    name: 'Do it! 오토캐드 2023',
    subdec: '5년 연속 베스트셀러! 평면도 그리기부터 치수 문제 해결까지!...'
  }
]

const addContent = (data: MemberData[], index: number) => {
  content.length = 0
  content.push(...data) // Push the new data to content
  isActiveNumber.value = index // Reset the active index
}

const Clicklink = (index: any) => {
  if (!(index === tabIndex.value)) {
    tabIndex.value = index
  } else {
    alert('같은 페이지 입니다!')
  }
}

onMounted(() => {
  Newbooks.push(...content)
})
</script>

<style scoped>
.bookMain {
  display: flex;
  flex-direction: column;
  margin-top: 117px;
}

.carousel-item {
  display: block;
}

.rollimg {
  padding: 0 10px;
}

.imgbox > img {
  max-width: 100%;
  height: 200px;
}

.rollimg {
  display: flex;
}
.rollimg > strong {
  display: block;
  font-size: 18px;
  color: #666;
}

.bookname {
  font-size: 14px;
}

.textbox {
  display: block;
  font-size: 12px;
  color: #ababab;
}

.carousel-item {
  display: block;
}

.subpageslider {
  display: block;
  padding: 20px 20px 10px 20px;
  background-color: #f5f5f5;
  height: 300px;
}

.subpageslider .rollimg > strong {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.buttons {
  position: relative;
  z-index: 1;
  pointer-events: auto;
}

.leftButton {
  position: absolute;
  top: -150px;
  left: 50px;
  pointer-events: auto;
  font-size: 24px;
}

.buttons > .leftButton:hover {
  cursor: pointer;
  color: black !important;
}

.rightButton {
  position: absolute;
  top: -150px;
  left: 1100px;
  font-size: 24px;
}

.rightButton:hover {
  cursor: pointer;
  color: black !important;
}
</style>
