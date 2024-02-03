import axios from 'axios'

// create an axios instance
const request = axios.create({
  // 👈 axios 인스턴스 생성
  baseURL: 'api',
})

// 👇 요청 타임아웃 설정
request.defaults.timeout = 250000

// 👇 요청 인터셉터 추가
request.interceptors.request.use(
  config => {
    // 요청을 보내기 전에 수행할 로직
    return config
  },
  error => {
    // 요청 에러가 발생했을 때 수행할 로직
    // console.log(error) // 디버깅
    return Promise.reject(error)
  }
)

// 👇 응답 인터셉터 추가
request.interceptors.response.use(
  response => {
    //응답에 대한 로직 작성
    const res = response.data
    console.log('response.data => ', res) // 디버깅
    return res
  },
  error => {
    // 응답 에러가 발생했을 때 수행할 로직
    console.log(error) // 디버깅
    return Promise.reject(error)
  }
)

export default request // 👈 axios 인스턴스를 내보냅니다.
