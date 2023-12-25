import React from 'react'

const JoinDataComponent = props => {
  return <div></div>
}
export const joinItem = [
  {
    name: 'login_id',
    id: 'login_id',
    label: '아이디',
    type: 'text',
    helpeText: 'ID를 입력해주세요',
  },
  {
    name: 'login_pw',
    id: 'login_pw',
    label: '비밀번호',
    type: 'password',
    helpeText: 'Password를 입력해주세요',
  },
  {
    name: 'login_pw_chk',
    id: 'login_pw_chk',
    label: '비밀번호 재입력',
    type: 'password',
    helpeText: 'Password가 일치하지않습니다',
  },
  {
    name: 'email',
    id: 'email',
    label: '이메일 주소',
    type: 'email',
    helpeText: 'email을 입력해주세요',
  },
  {
    name: 'name',
    id: 'name',
    label: '이름',
    type: 'text',
    helpeText: '이름을 입력해주세요',
  },
]
export default JoinDataComponent
