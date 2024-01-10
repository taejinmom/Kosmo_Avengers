import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

// export const LoginDataAtom = atom(
//   {
//     key: "login_id",
//     default: "",
//   },
//   {
//     key: "login_pw",
//     default: "",
//   }
// );

export const isLogin = atom({
  key: "isLogin",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const memberDataAtom = atom(
  {
    key: "login_id",
    default: "",
    effects_UNSTABLE: [persistAtom],
  },
  {
    key: "login_pw",
    default: "",
    effects_UNSTABLE: [persistAtom],
  },
  {
    key: "mem_name",
    default: "",
    effects_UNSTABLE: [persistAtom],
  },
  {
    key: "mem_no",
    default: "",
    effects_UNSTABLE: [persistAtom],
  },
  {
    key: "mem_tel",
    default: "",
    effects_UNSTABLE: [persistAtom],
  },
  {
    key: "mem_birth",
    default: "",
    effects_UNSTABLE: [persistAtom],
  },
  {
    key: "mem_birthYn",
    default: "",
    effects_UNSTABLE: [persistAtom],
  },
  {
    key: "mem_addr1",
    default: "",
    effects_UNSTABLE: [persistAtom],
  },
  {
    key: "mem_addr2",
    default: "",
    effects_UNSTABLE: [persistAtom],
  },
  {
    key: "mem_gen",
    default: "",
    effects_UNSTABLE: [persistAtom],
  },
  {
    key: "role",
    default: "",
    effects_UNSTABLE: [persistAtom],
  }
);
