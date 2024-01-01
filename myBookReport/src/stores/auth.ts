import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>('')
  const isLoggedIn = ref<boolean>(false)

  // JWT를 Base64 디코딩하는 함수
  function base64urlDecode(str: string) {
    // '=' 문자를 제거하고, '-'를 '+'로, '_'를 '/'로 치환
    str = str.replace(/-/g, '+').replace(/_/g, '/')
    // Base64 디코딩
    str = atob(str)
    // 디코딩된 문자열 반환
    return str
  }

  function setLoginStatus(isLog: boolean, jwtString: string) {
    const parts = jwtString.split('.')
    const payload = JSON.parse(base64urlDecode(parts[1]))
    isLoggedIn.value = isLog
    token.value = payload
  }

  return { token, isLoggedIn, setLoginStatus }
})
