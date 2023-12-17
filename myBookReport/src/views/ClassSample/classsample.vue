<template>
  <Subpage :pagetit="'교재 샘플'" class="subPageMain">
    <div class="classsample">
      <div class="subpageguide">
        대학이나 학원 등 교육 기관에서 이지퍼블리싱 도서를 교재로 채택하고 싶은 선생님은 아래
        내용대로 접수해 주세요.
      </div>
      <form>
        <div class="mb-3">
          <label for="exampleInputBookName" class="form-label">요청 도서</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputBookName"
            aria-describedby="emailHelp"
            v-model="form.bookname"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputCompanyName" class="form-label">기관이름</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputCompanyName"
            v-model="form.companyname"
          />
        </div>
        <div class="mb-3 formk">
          <label for="exampleInputClass" class="form-label">학과/과정</label>
          <input type="text" class="form-control" id="exampleInputClass" v-model="form.class" />
        </div>
        <div class="mb-3 form">
          <label for="exampleInputName" class="form-label">이름</label>
          <input type="text" class="form-control" id="exampleInputName" v-model="form.name" />
        </div>
        <div class="mb-3 form">
          <label for="exampleInputPhoneName" class="form-label">연락처</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPhoneName"
            v-model="form.phonenum"
          />
        </div>
        <div class="checkbox">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="종이책"
              v-model="form.checkedtype"
            />
            <label class="form-check-label" for="inlineCheckbox1">종이책</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="전자책"
              v-model="form.checkedtype"
            />
            <label class="form-check-label" for="inlineCheckbox2">전자책</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              value="강의"
              v-model="form.checkedtype"
            />
            <label class="form-check-label" for="inlineCheckbox3">강의</label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="ClassCall">확인</button>
        <button type="submit" class="btn btn">취소</button>
      </form>
    </div>
  </Subpage>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Subpage from '@/layout/components/Subpage.vue'

const form = ref({
  bookname: '',
  companyname: '',
  class: '',
  name: '',
  phonenum: '',
  checkedtype: []
})

function ClassCall() {
  alert(JSON.stringify(form.value))
  // resetForm()
}

function resetForm() {
  // 폼 초기화 로직 추가 (원하는 대로 폼을 초기화하거나 초기 상태로 되돌리는 등)
  form.value = {
    bookname: '',
    companyname: '',
    class: '',
    name: '',
    phonenum: '',
    checkedtype: []
  }
}
</script>

<style scoped>
.checkbox {
  display: block;
  margin-bottom: 20px;
}
</style>
