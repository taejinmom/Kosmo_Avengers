import {atom} from 'recoil'

export const JoinDataAtom = atom(
    {
        key:'login_id',
        default:''
    },
    {
        key:'login_pw',
        default:''
    },
    {
        key:'login_pw_repeat',
        default:''
    },
    {
        key:'name',
        default:''
    },
    {
        key:'email',
        default:''
    },
)