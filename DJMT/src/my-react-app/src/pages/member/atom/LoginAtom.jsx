import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

// 로그인 체크 값 (로그인 시 true)
export const isLogin = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

// 로그인시 mem_no 값
export const memberKeyAtom = atom({
  key: 'memberKeyAtom',
  default: '',
  effects_UNSTABLE: [persistAtom],
})

// 로그인 시 member - role 값 (true > admin / false > user)
export const memberRoleAtom = atom({
  key: 'memberRoleAtom',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
