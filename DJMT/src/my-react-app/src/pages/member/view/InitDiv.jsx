import React from 'react'
import { useLocation } from 'react-router-dom'
import Login from './login/Login'
import Join from './join/Join'
import MyPage from './mypage/MyPage'
import AdminPage from './admin/AdminPage'
import { Confirm } from '../../../api/alert/Confirm'
import NewLogin from './login/NewLogin'
import NewJoin from './join/NewJoin'
import RenewalLogin from './login/RenewalLogin'
import RenewalJoin from './join/ResewalJoin'

// 참고용으로.. 나중에
const InitDiv = props => {
  const location = useLocation()

  const components = {
    // Login: Login,
    // Login: NewLogin,
    Login: RenewalLogin,
    // Join: Join,
    Join: NewJoin,
    // Join: RenewalJoin,
    MyPage: MyPage,
    AdminPage: AdminPage,
  }
  const ActiveComponent = components[location.state.title]
  return (
    <div className="inner">
      <h2 className="title">{location.state.title}</h2>
      <ActiveComponent confirm={Confirm}/>
    </div>
  )
}

export default InitDiv
