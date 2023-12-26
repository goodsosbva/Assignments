<template>
  <Subpage :pagetit="'자료실'" class="subPageMain">
    <div class="referencepage">
      <div class="subpageguide">도서와 관련된 추가 자료를 다운로드할 수 있습니다.</div>
      <listComm :lists="lists"></listComm>
    </div>
  </Subpage>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Subpage from '@/layout/components/Subpage.vue'
import listComm from '@/layout/components/listComm.vue'
import type { BookDetail } from "@/Types/ReferenceTypes/referenceTypes"
import {fetchMainBookDataAndUpdate} from "@/api/api"

const lists = ref<BookDetail[]>([])

onMounted(async() => {
  await fetchMainBookDataAndUpdate("lists", lists)
})
</script>

<style scoped></style>
