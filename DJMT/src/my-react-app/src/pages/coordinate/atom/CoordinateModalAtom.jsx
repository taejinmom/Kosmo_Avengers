import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist();

// coordinate Aside Modal
export const coordinateIsPop = atom({
  key: 'coordinateIsPop',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

// coordinate Aside Modal
export const coordinateTop = atom({
  key: 'coordinateTop',
  default: [],
  effects_UNSTABLE: [persistAtom],
})