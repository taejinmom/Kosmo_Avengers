export const inputHandler = (e, dataGroup, setData) => {
  setData({ ...dataGroup, [e.target.name]: e.target.value })
}

export const logoutHandler = (removeCookie, isLoginCheck) => {
  removeCookie('jwtToken')
  removeCookie('refreshToken')
  removeCookie('memberData')
  isLoginCheck(false)
}
