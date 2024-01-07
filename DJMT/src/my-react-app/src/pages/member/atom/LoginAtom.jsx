import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const LoginDataAtom = atom(
  {
    key: 'login_id',
    default: '',
  },
  {
    key: 'login_pw',
    default: '',
  }
)

export const isLogin = atom({
  key: 'isLogin',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
