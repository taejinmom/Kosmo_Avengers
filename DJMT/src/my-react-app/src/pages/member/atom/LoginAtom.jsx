import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const isLogin = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

export const memberKeyAtom = atom({
  key: 'key',
  default: '',
  effects_UNSTABLE: [persistAtom],
})
