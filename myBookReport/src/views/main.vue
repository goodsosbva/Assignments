<template>
  <section class="maincontents">
    <section class="mainbanner"><img src="/images/mainimg.png" /></section>
    <section class="newbook">
      <h1 class="maintit">새로 나온 도선<span>분야별로 새로 나온 도서를 만나 보세요</span></h1>
      <div class="tapcontent">
        <div class="tap">
          <ul class="nav">
            <li class="nav-item">
              <a
                class="nav-link btn-tab"
                aria-current="page"
                @click="addContent('Newbooks', 0)"
                :class="{ active: isActiveNumber === 0 }"
                >IT 전문서</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link btn-tab"
                @click="addContent('NewbooksIt', 1)"
                :class="{ active: isActiveNumber === 1 }"
                >업무 능력, 기타</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link btn-tab" @click="addContent('NewbooksPhoto', 2)">사진 예술</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn-tab" @click="addContent('NewbooksScience', 3)">데이터 과학</a>
            </li>
          </ul>
        </div>
        <div id="carouselExample" class="carousel slide mainslider" data-bs-ride="carousel">
          <div class="carousel-inner rollimg">
            <div v-for="(group, index) in showBookNewBook" :key="index">
              <div class="carousel-item">
                <span class="imgbox"><img :src="group.imgurl" class="" alt="Book Image" /></span>
                <strong class="bookname">{{ group.name }}</strong>
                <strong class="textbox">{{ group.subdec }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="searchbook">
      <h1 class="maintit">도서 검색<span>찾고자 하는 도서명을 검색해 주세요</span></h1>
      <div class="inputarea">
        <div class="input-group mb-3">
          <input
            class="form-control searchInput"
            type="text"
            v-model="keyward"
            placeholder="도서를 입력하세요"
            aria-label="book name input"
          />
          <button type="button" class="btn btn-outline-light searchButton">
            <i class="bi bi-arrow-return-left"></i>
          </button>
          <div
            class="autolayer"
            v-if="keyward.length > 0"
            :class="{ none: autocomplate.length === 0 }"
          >
            <ul v-if="autocomplate().length > 0">
              <li v-for="(item, index) in autocomplate()" :key="index" v-html="item.booktit"></li>
            </ul>
            <div class="nonemessage" v-else>
              <i class="bi bi-x-circle-fill"></i> 검색 결과가 없습니다.
            </div>
          </div>
        </div>
      </div>
      <div class="guidehash">
        <span v-for="(item, index) in hashdata" :key="index" v-html="item.text"></span>
      </div>
    </section>
    <section class="bannermenu">
      <div
        class="itembox"
        v-for="(item, index) in mainbanner"
        :key="index"
        @click="gotoPage(item.url)"
      >
        <span v-html="item.stitle"></span>
        <strong v-html="item.maintit"></strong>
        <i class="bi" :class="item.iconname"></i>
      </div>
    </section>
    <section class="notice">
      <div class="noticebox" :style="{ height: isView ? '200px' : '55px' }">
        <h1 class="maintit">공지 사항</h1>
        <button
          type="button"
          class="btn btn-outline-dark noticemore"
          :style="{ transform: isView ? 'rotate(90deg)' : 'rotate(-90deg)' }"
          @click="viewmore"
        ></button>
        <div v-for="(item, index) in noticelists" :key="index">
          <div class="newsitem" v-if="isView">
            <strong v-html="item.noticetit"></strong>
            <span v-html="item.date"></span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { getFetchData, fetchMainBookDataAndUpdate } from '@/api/api.js'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

interface MemberData {
  imgurl: string
  name: string
  subdec: string
}

interface Book {
  imgurl: string;
  name: string;
  subdec: string;
}

interface NewbooksData {
  [key: string]: Book[];
}

interface BookCategory {
  cata: string
  books: { booktit: string; author: string }[]
}

interface HashType {
  text: string
  value: string
}

interface MainBannerType {
  stitle: string,
  maintit: string,
  iconname: string,
  url: string,
}

interface NoticelistsType {
  noticetit: string, date: string
}

const { push } = useRouter()
const isActiveNumber = ref<number>(0)
const keyward = ref<string>('')
const isView = ref<boolean>(false)
const Newbooks = ref<NewbooksData>({
  Newbooks: []
});
const showBookNewBook = ref<MemberData[]>([])
const hashdata = ref<HashType[]>([])
const bookname = ref<BookCategory[]>([])

const mainbanner = ref<MainBannerType[]>([])

const noticelists =  ref<NoticelistsType[]>([])

const addContent = (newBookTitleName: string, index: number) => {
  showBookNewBook.value = []
  showBookNewBook.value = Newbooks.value[newBookTitleName]; // Push the new data to content
  isActiveNumber.value = index // Reset the active index
}

const autocomplate = () => {
  const resultlists = bookname.value.filter((item) => {
    if (item.cata.match(keyward.value)) return item
  })
  return resultlists.length > 0 ? resultlists[0].books : []
}

const gotoPage = (url: string) => {
  url === '/classample' ? push(url) : window.open(url, '_blank')
}

const viewmore = () => {
  isView.value = !isView.value
}

onMounted(async () => {
  // content.push(...Newbooks)

  // get: NewBook 
  try {
    const response = await getFetchData('Newbooks');
    Newbooks.value = response;
    showBookNewBook.value = response.Newbooks
  } catch (error) {
    console.error('Error in component[Newbooks]:', error);
  }
  
  // get: hashData
  await fetchMainBookDataAndUpdate('hashData', hashdata);
  // get: bookname
  await fetchMainBookDataAndUpdate('bookname', bookname);
  // get: mainbanner
  await fetchMainBookDataAndUpdate('mainbanner', mainbanner);
  // get: noticelists
  await fetchMainBookDataAndUpdate('noticelists', noticelists);

})
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

.searchInput {
  border-radius: 0;
  height: 38px;
}

.searchButton {
  width: 70px;
}
</style>
