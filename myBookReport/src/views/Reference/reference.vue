<template>
  <Subpage :pagetit="'자료실'" class="subPageMain">
    <div class="referencepage">
      <div class="subpageguide">도서와 관련된 추가 자료를 다운로드할 수 있습니다.</div>
      <listComm :lists="lists"></listComm>
    </div>
  </Subpage>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Subpage from '@/layout/components/Subpage.vue'
import listComm from '@/layout/components/listComm.vue'

interface BookDetail {
  img: string
  title: string
  date: string
  dec: string
  link1: string
  link2: string
}

const lists = ref<BookDetail[]>([
  {
    img: '/images/books_image/book01.jpg',
    title: 'Do it! 실습 파일과 학습 파일 내려받기',
    date: '2019.04.15',
    dec: "책을 다 공부한 독자를 위한 실전 프로젝트입니다.<br /> 웹 사이트에서 자주 사용하는 '이미지 슬라이드 쇼' 프로그램을 만드는 방법을 단계별로 공부할 수 있습니다",
    link1: '',
    link2: ''
  },
  {
    img: '/images/books_image/book02.jpg',
    title: 'Do it! 첫 알고리즘',
    date: '2021.04.15',
    dec: '알고리즘, 정렬 알고리즘, 보안과 인공지능까지 160가지 그림을 제공합니다.',
    link1: '',
    link2: ''
  }
])
</script>

<style scoped lang="scss"></style>
