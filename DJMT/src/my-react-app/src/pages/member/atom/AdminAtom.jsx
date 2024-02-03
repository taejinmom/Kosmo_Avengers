import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const adminEdit = atom({
  key: 'adminEdit',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

export const adminEditKeyAtom = atom({
  key: 'adminEditKeyAtom',
  default: '',
  effects_UNSTABLE: [persistAtom],
})
