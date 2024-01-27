import React from 'react'
import { useLocation } from 'react-router-dom'
import Login from './login/Login'
import Join from './join/Join'
import MyPage from './mypage/MyPage'
import AdminPage from './admin/AdminPage'

// 참고용으로.. 나중에
const InitDiv = props => {
  const { memberKey, isLoginCheck, isAdminCheck } = props
  const { title } = props
  const location = useLocation()

  const components = {
    Login: Login,
    Join: Join,
    MyPage: MyPage,
    AdminPage: AdminPage,
  }
  const ActiveComponent = components[location.state.title]
  return (
    <div className="inner">
      <h2 className="title">{location.state.title}</h2>
      <ActiveComponent
        isLoginCheck={isLoginCheck}
        isAdminCheck={isAdminCheck}
        memberKey={memberKey}
      />
    </div>
  )
}

export default InitDiv
