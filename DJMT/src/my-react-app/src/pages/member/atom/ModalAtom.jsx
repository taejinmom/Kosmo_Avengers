import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

// Modal
export const isPop = atom({
  key: 'isPop',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
