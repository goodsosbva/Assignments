<template>
  <Subpage :pagetit="'동영상 강의'" class="subPageMain">
    <div class="movieclass">동영상 강의를 볼 수 있습니다.</div>
    <listComm :lists="lists"></listComm>
  </Subpage>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Subpage from '@/layout/components/Subpage.vue'
import listComm from '@/layout/components/listComm.vue'
import type { BookDetail } from '@/Types/MovieClassTypes/moiveClassTypes';
import {fetchMainBookDataAndUpdate} from '@/api/api'


const lists = ref<BookDetail[]>([])

onMounted(async() => {
  fetchMainBookDataAndUpdate('lists', lists)
})
</script>

<style scoped lang="scss"></style>
