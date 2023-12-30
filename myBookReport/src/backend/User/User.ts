import { getFetchData } from './api'

interface Users {
  idx: number
  id: string
  password: string
}

// 회원 가입
export const isPossibleJoin = async (id: string) => {
  // db 조회 (가상)
  const UserData = await getFetchData('users')
  const AllUser = UserData

  console.log('id >>> ', id.length)
  console.log('AllUser >>> ', AllUser)

  // 비어 있는지 확인
  if (id.length === 0) return false

  // 중복 여부 확인
  const isDuplicate = AllUser.some((user: Users) => user.id === id)

  return isDuplicate === false ? true : false
}

// 로그인
export const authenticateUser = async (id: string, pw: string) => {
  // db 조회 (가상)
  const UserData = await getFetchData('users')
  const AllUser = UserData

  // 회원가입 되어 있는지 확인
  const foundUser = AllUser.find((user: Users) => user.id === id && user.password === pw)

  if (foundUser) {
    const jwtToken = await getFetchData('jwtToken')
    return { isLogin: true, loginData: jwtToken.token }
  } else return { isLogin: false, loginData: '' }
}
