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
          <button class="login" @click="openModal('login')">로그인</button>
          <button class="member" @click="openModal('signIn')">회원가입</button>
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
    <div id="login" tabindex="-1" v-if="siginInModalVisible">
      <div class="modalDialog">
        <div class="modalContent">
          <div class="modalHeader">
            <h1 class="modal-title fs-5" id="exampleModloginalLabel">로그인</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="initModalAndOpen"
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
                v-model="username"
              />
            </div>
            <div class="pwWrap">
              <span>비밀번호</span>
              <input
                type="text"
                class="form-control"
                placeholder="비밀번호를 입력해 주세오"
                aria-label="pw"
                v-model="password"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary loginBtn" @click="loginHandler">
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal-member -->
    <div id="member" tabindex="-1" v-if="memberModalVisible">
      <div class="modalDialog">
        <div class="modalContent">
          <div class="modalHeader">
            <h1 class="modal-title fs-5" id="exampleModloginalLabel">회원가입</h1>
            <button @click="initModalAndOpen" ref="memberModalRef">
              <i class="bi bi-x-lg"></i>
            </button>
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
                <button
                  type="button"
                  class="btn btn-light duplicateBtn"
                  :class="{ disabled: !chkDupBtnAble }"
                  @click="checkDuplicateId"
                >
                  중복 확인
                </button>
                {{
                  !chkDupBtnClicked
                    ? ''
                    : isUseAbleId
                    ? '아이디가 사용 가능 합니다'
                    : '아이디가 사용 불가능 합니다'
                }}
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

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">비밀번호 확인</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword2"
                  v-model="joinMemberData.rePassword"
                  placeholder="확인 비밀번호를 입력해!"
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
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { isPossibleJoin, authenticateUser } from '@/backend/User/User'
import { postSendData } from '@/api/api'
import { BIconArrowLeftShort } from 'bootstrap-vue'

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
  rePassword: string
  isReceiveEmail: boolean
}

const joinMemberData: Ref<MemberData> = ref({
  id: '',
  password: '',
  rePassword: '',
  isReceiveEmail: false
})

const isUseAbleId = ref<boolean>(false)
const chkDupBtnAble = ref<boolean>(true)
const chkDupBtnClicked = ref<boolean>(false)
const isPossibleId = ref<boolean>(false)
const memberModalVisible = ref<boolean>(false)
const siginInModalVisible = ref<boolean>(false)
const username = ref<string>('')
const password = ref<string>('')

const loginHandler = async () => {
  alert(`${username.value} + ${password.value}`)
  const isLogined = await authenticateUser(username.value, password.value)

  if (isLogined.isLogin) {
    alert(`로그인이 되었습니다. ${isLogined.loginData}`)
    siginInModalVisible.value = false
  } else {
    alert('로그인이 실패했습니다.')
  }
}

const checkDuplicateId = async () => {
  const id = joinMemberData.value.id
  const isPossible = await isPossibleJoin(id)

  chkDupBtnClicked.value = true

  if (isPossible) {
    alert('아이디가 사용가능 합니다!')
    chkDupBtnAble.value = false
    isUseAbleId.value = true
    isPossibleId.value = true
  } else {
    alert('아이디를 중복되었습니다. 다시 입력 해주세요!')
    chkDupBtnAble.value = true
    isUseAbleId.value = false
    isPossibleId.value = false
  }
}

const checkPassword = () => {
  if (joinMemberData.value.password.length == 0 || joinMemberData.value.rePassword.length == 0) {
    return false
  }

  if (joinMemberData.value.password === joinMemberData.value.rePassword) return true
  else return false
}

const openModal = (whatIs: string) => {
  if (whatIs === 'login' && memberModalVisible.value === false)
    siginInModalVisible.value = !siginInModalVisible.value
  else if (whatIs === 'signIn' && siginInModalVisible.value === false)
    memberModalVisible.value = !memberModalVisible.value
}

const initModalAndOpen = () => {
  isUseAbleId.value = false
  chkDupBtnAble.value = true
  chkDupBtnClicked.value = false
  joinMemberData.value.id = ''
  joinMemberData.value.password = ''
  joinMemberData.value.rePassword = ''
  joinMemberData.value.isReceiveEmail = false

  memberModalVisible.value = false
}

const goToPage = (target: string) => {
  push(target)
}

const joinMemberSubmitHandler = async () => {
  console.log('joinMemberData.value >> ', joinMemberData.value)
  const isRightPassword = checkPassword()

  if (!isRightPassword) {
    alert('비밀번호 입력 또는 비밀번호 확인 입력창에 비밀번호를 제대로 입력해주세요!')
  } else if (isPossibleId.value && isRightPassword) {
    // 회원 가입 post 요청
    try {
      const result = await postSendData('users', joinMemberData.value)
      console.log('POST request successful. Response:', result)
      alert('회원 가입이 완료 되었습니다!')
      // 이 alert가 끝나면 회원가입 모달창 종료
      memberModalVisible.value = false
    } catch (error) {
      console.error('Error making POST request:', error)
    }
  }
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

.disabled {
  background-color: rgb(76, 127, 255); /* 파랑색 스타일링 */
  color: white;
}

.modalDialog {
  position: relative;
}

.modalContent {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding-top: 50px;
  top: 50%;
  left: 30%;
  width: 700px;
  height: 700px;
}

.modalHeader {
  display: flex;
  justify-content: space-between;
}
</style>
