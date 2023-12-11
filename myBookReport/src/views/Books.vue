<template>
  <Subpage :pagetit="'도서 소개'" class="bookMain">
    <div class="bookpage">
      <div
        id="carouselExample"
        class="carousel slide mainslider subpageslider"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner rollimg">
          <div v-for="(group, index) in content" :key="index">
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
      <section class="bookdetail">
        <h1 class="booktitle">
          Do it 웹 사이트 따라 만들기
          <span>HTML, CSS, 자바스크립트, JQuery, Ajax로 웹 퍼블리싱</span>
        </h1>
        <div class="book-info">
          <div class="book-function">
            <div class="imgview">
              <img src="/images/books_image/book01.jpg" alt="" />
            </div>
            <div class="bookbtns">
              <button type="button" class="btn btn-light lightgray">
                <i class="bi bi-question"></i>책 미리보기
              </button>
              <button type="button" class="btn btn-light lightgray">
                <i class="bi bi-book"></i>전자책
              </button>
            </div>
          </div>
          <div class="infolist">
            <ul>
              <li v-for="(item, index) in bookinfolists" :key="index">
                <span class="label" v-html="item.label"></span>
                <span class="infocontent" v-html="item.content"></span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- 책 상세정보 탭메뉴 -->
      <div class="detailinfo">
        <div class="detailTab">
          <ul class="nav nav-tabs bookTabs">
            <li v-for="(tab, index) in tabs" :key="index" class="nav-item" aria-current="page">
              <a
                :class="['nav-link', { active: index === isActiveTab, disabled: tab.isDisabled }]"
                aria-current="page"
                @click="addActive(index)"
              >
                {{ tab.label }}
              </a>
            </li>
          </ul>
        </div>
        <div class="detailTabCon"></div>
      </div>
    </div>
  </Subpage>
</template>

<script setup lang="ts">
import Subpage from '@/layout/components/Subpage.vue'
import { ref, reactive, onMounted } from 'vue'

interface MemberData {
  imgurl: string
  name: string
  subdec: string
}

const content = reactive<MemberData[]>([])
const isActiveNumber = ref<number>(0)
const isActiveTab = ref<number>(1)

const Newbooks = [
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

const bookinfolists = [
  { label: '저자', content: '김윤미' },
  { label: '발행일', content: '2019-11-28' },
  { label: '사양', content: '312쪽' },
  { label: 'ISBN', content: '975-11-6303-119-2 13000' },
  { label: '정가', content: '16,000원' },
  { label: '상태', content: '정상 판매중' }
]

const tabs = ref([
  { label: '책소개', isDisabled: false },
  { label: '출판사 리뷰', isDisabled: false },
  { label: '목차', isDisabled: false },
  { label: '저자 소개', isDisabled: false },
  { label: '추천의 글', isDisabled: false },
  { label: '자료실', isDisabled: false }
])

const addContent = (data: MemberData[], index: number) => {
  content.length = 0
  content.push(...data) // Push the new data to content
  isActiveNumber.value = index // Reset the active index
}

const addActive = (index: number) => {
  console.log(index)
  isActiveTab.value = index
}

onMounted(() => {
  content.push(...Newbooks)
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

.lightgray {
  background-color: #afafaf;
  color: #fff;
  height: 40px;
  font-size: 12px;
  line-height: 28px;
  border-radius: 0;
}

.book-function {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bookbtns .lightgray .bi::after {
  margin: -2px 2px 0 0;
}

.bookbtns .btn-lightgray {
  width: 49%;
}

.infolist {
  flex: 1;
  padding: 0 20px;
}

.infolist li {
  margin-bottom: 22px;
  font-size: 16px;
}

.infolist li .label,
.infolist li .infocontent {
  display: inline-block;
}

.infolist li .label {
  width: 150px;
  font-weight: 900;
  padding-left: 20px;
  position: relative;
}

.infolist li .label::after {
  content: '';
  display: block;
  width: 18px;
  height: 18px;
  background: url('/images/file-text.svg') no-repeat left center/100%;
  opacity: 0.3;
  position: absolute;
  left: 0;
  top: 4px;
}

.infolist li .infocontent {
  color: #222;
}

.bookTabs li {
  width: 150px;
  height: 45px;
}
</style>
