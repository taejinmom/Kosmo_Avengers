import { atom } from 'recoil'

export const JoinDataAtom = atom(
  {
    key: 'join_id',
    default: '',
  },
  {
    key: 'join_pw',
    default: '',
  },
  {
    key: 'join_pw_repeat',
    default: '',
  },
  {
    key: 'name',
    default: '',
  },
  {
    key: 'email',
    default: '',
  }
)
