import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const JoinDataAtom = atom(
  {
    key: 'login_id',
    default: '',
  },
  {
    key: 'login_pw',
    default: '',
  },
  {
    key: 'mem_name',
    default: '',
  },
  {
    key: 'mem_no',
    default: '',
  },
  {
    key: 'mem_tel',
    default: '',
  },
  {
    key: 'mem_birth',
    default: '',
  },
  {
    key: 'mem_birthYn',
    default: '',
  },
  {
    key: 'mem_addr1',
    default: '',
  },
  {
    key: 'mem_addr2',
    default: '',
  },
  {
    key: 'mem_gen',
    default: '',
  },
  {
    key: 'role',
    default: '',
  }
)
