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
      <component
        :is="componentslist[tabIndex]"
        :bookUrl="Newbooks[tabIndex].imgurl"
        :bookName="Newbooks[tabIndex].name"
        :bookDec="Newbooks[tabIndex].subdec"
      >
      </component>
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
        <template v-if="tapselect === 'introduce'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"Do it! 웹 사이트 따라 만들기"</strong>를 소개합니다.</h1>
            <p>
              웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의 작업 방식 그대로<br />웹
              사이트 하나 통째로 만들면 나도 어느새 웹 퍼블리셔!!<br />이 책 한 권이면 웹 사이트
              하나가 뚝딱 완성
            </p>
          </div>
        </template>
        <template v-else-if="tapselect == 'review'">
          <div class="detailTapCon">
            <h1 class="tapcontit">
              <strong>"Do it! 웹 사이트 따라 만들기"</strong>출판사 리뷰 입니다.
            </h1>
            <p>
              자신이 알고 있는 내용은 다른 사람과 나누고, 궁금한 내용은 나와 비슷한 고민을 하는
              사람들과 함께 풀어보면 어떨까요? 지식을 공유하는 뿌듯함과 함께 자신의 능력이 한층 더
              발전되어 가는 모습을 발견할 수 있을 거예요. 또한 Do it! 스터디룸에 공부 계획 세우고
              스터디 노트를 꾸준히 올리면 새 책을 받을 수 있어요. 공부하고 책 받고 다시 공부하는
              행복한 무한루프에 빠져 자신의 능력을 키워보세요!<br /><br />

              - Do it! 스터디룸 카페 [cafe.naver.com/doitstudyroom → ‘웹 사이트 따라 만들기’
              메뉴]<br />

              - Do it! 스터디룸 카페 [cafe.naver.com/doitstudyroom → ‘Do it! 공부단 지원&책 선물
              받기’ 메뉴]<br />
            </p>
          </div>
        </template>
        <template v-else-if="tapselect == 'order'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"Do it! 웹 사이트 따라 만들기"</strong>목차 입니다</h1>
            <p>
              첫째마당. 웹 사이트 만들기 준비하기<br /><br />
              01장 실습 전 익혀야 할 기본 지식<br />

              01-1 우리가 알아야 할 HTML 기본 상식<br />

              01-2 웹 페이지를 시각화하는 CSS<br />

              01-3 동적인 웹 페이지를 만들어 주는 자바스크립트<br />

              01-4 알아 두면 유용한 제이쿼리<br />

              01-5 자원과 시간 낭비를 막아주는 Ajax<br /><br />

              02장 개발 환경 준비하기<br /><br />

              02-1 개발 도구 설치하기<br />

              02-2 브라우저의 개발자 도구<br />

              02-3 크로스 브라우징<br />

              스페셜 01 웹 퍼블리셔에 대해서 알아보자!
            </p>
          </div>
        </template>
        <template v-else-if="tapselect == 'write'">
          <div class="detailTapCon">
            <h1 class="tapcontit">
              <strong>"Do it! 웹 사이트 따라 만들기"</strong>저자소개 입니다.
            </h1>
            <p>
              <strong>김윤미</strong><br /><br />
              그녀는 일에 대한 열정이 가득하고 언제나 두려움 없이 새로운 도전을 시작하는 실무 경력
              13년 차 웹 퍼블리셔이다. 국내 웹 에이전시에서 활동하며 이니스프리, 에뛰드, 엘지
              하우시스 등 유명한 쇼핑몰 제작에 참여했고 그동안 작업한 사이트 대부분은 웹 어워드
              코리아에서 각 분야별로 최우수상 또는 대상을 수상하였다. 또한 웹 퍼블리싱 실무 강의로
              인기를 끌기도 했다. 'Do it! 웹 사이트 따라 만들기'는 그녀의 실무 경험과 강의 경험이
              결합되어 나온 책이다. 그녀의 업무 방식을 화면 그대로 정리해 이 책에 빠짐없이 옮겨
              담았으며 이 책을 읽는 독자들의 시간을 절약해주기 위해 전체 소스도 공개했다. 이 소스를
              그대로 활용하면 독자가 필요한 웹사이트를 빠르게 만들 수 있다. 그녀는 현재 외국계
              기업에서 솔루션 프로그램을 만드는 프로젝트에 참여하고 있다.
            </p>
          </div>
        </template>
        <template v-else-if="tapselect == 'recommendation'">
          <div class="detailTapCon">
            <h1 class="tapcontit">
              <strong>"Do it! 웹 사이트 따라 만들기"</strong>추천의 글 입니다.
            </h1>
            <p>
              <strong>이런분께 권해 드려요</strong><br />
              - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
              - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
              - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
              - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
              - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
            </p>
          </div>
        </template>
        <template v-else-if="tapselect == 'reference'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"Do it! 웹 사이트 따라 만들기"</strong>자료실 입니다.</h1>
            <p>자료실 메뉴로 들어가시면 더 많은 내용을 확인 할 수 있습니다.</p>
          </div>
        </template>
      </div>
    </div>
  </Subpage>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Subpage from '@/layout/components/Subpage.vue'
import BookDetail1 from './BookDetail1.vue'
import BookDetail2 from './BookDetail2.vue'
import BookDetail3 from './BookDetail3.vue'
import BookDetail4 from './BookDetail4.vue'
import BookDetail5 from './BookDetail5.vue'
import BookDetail6 from './BookDetail6.vue'
import BookDetail7 from './BookDetail7.vue'
import BookDetail8 from './BookDetail8.vue'
import BookDetail9 from './BookDetail9.vue'
import BookDetail10 from './BookDetail10.vue'

interface MemberData {
  imgurl: string
  name: string
  subdec: string
}

const content = reactive<MemberData[]>([])
const isActiveNumber = ref<number>(0)
const isActiveTab = ref<number>(1)
const tapselect = ref<string>('introduce')
const tabIndex = ref<number>(0)

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

.bookTabs li {
  width: 150px;
  height: 45px;
}
</style>
