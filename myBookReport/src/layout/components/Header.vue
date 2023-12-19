<template>
  <header class="scrollTop">
    <div class="topmenu">
      <div class="contentbox">
        <div class="logo">
          <button @click="goToPage('/main')">
            <img src="@/assets/images/logo.png" alt="easypublishing logo" />
          </button>
        </div>
        <div class="system">
          <button class="login" data-bs-toggle="modal" data-bs-target="#login">로그인</button>
          <button class="member" data-bs-toggle="modal" data-bs-target="#member">회원가입</button>
        </div>
      </div>
    </div>

    <nav>
      <div class="contentbox">
        <ul>
          <li v-for="(item, index) in menulists" :key="index" v-on:click="goToPage(item.link)">
            <button v-html="item.menutext"></button>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Modal-login -->
    <div
      class="modal fade"
      id="login"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModloginalLabel">로그인</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" id="modal-body">
            <div class="idWrap">
              <span>아이디</span>
              <input
                type="text"
                class="form-control"
                placeholder="아이디를 입력해 주세요"
                aria-label="id"
              />
            </div>
            <div class="pwWrap">
              <span>비밀번호</span>
              <input
                type="text"
                class="form-control"
                placeholder="비밀번호를 입력해 주세오"
                aria-label="pw"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary loginBtn">로그인</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal-member -->
    <div
      class="modal fade"
      id="member"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModloginalLabel">회원가입</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" id="modal-body">
            <form @submit.prevent="joinMemberSubmitHandler">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" id="formid1">아이디</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  v-model="joinMemberData.id"
                  aria-describedby="emailHelp"
                  placeholder="아이디를 입력해!"
                />
                <button type="button" class="btn btn-light duplicateBtn">중복 확인</button>
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">비밀번호</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  v-model="joinMemberData.password"
                  placeholder="비밀번호를 입력해!"
                />
              </div>

              <div class="form-check-label" style="display: block; width: 100%; margin-left: 0">
                이메일 수신
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  v-model="joinMemberData.isReceiveEmail"
                />
                <label class="form-check-label" for="flexRadioDefault1"> 예 </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  v-model="joinMemberData.isReceiveEmail"
                />
                <label class="form-check-label" for="flexRadioDefault2"> 아니요 </label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import type { Ref } from 'vue'

const { push } = useRouter()
const route = useRoute()
const menulists = [
  { menutext: '도서 소개', link: '/book' },
  { menutext: '자료실', link: '/reference' },
  { menutext: '동영상 강의', link: '/movieclass' },
  { menutext: '교재 샘플', link: '/classample' },
  { menutext: '회사 소개', link: '/company' }
]

interface MemberData {
  id: string
  password: string
  isReceiveEmail: boolean
}

const joinMemberData: Ref<MemberData> = ref({
  id: '',
  password: '',
  isReceiveEmail: false
})

const goToPage = (target: string) => {
  push(target)
}

const joinMemberSubmitHandler = () => {
  console.log('joinMemberData >> ', joinMemberData)
}
</script>

<style scoped>
.idWrap {
  margin: 23px;
}

.idWrap > span {
  display: block;
  margin-bottom: 7px;
}

.pwWrap {
  margin: 23px;
}

.pwWrap > span {
  display: block;
  margin-bottom: 7px;
}

.loginBtn {
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
}

.duplicateBtn {
  font-size: 12px;
  margin-top: 10px;
}
</style>
