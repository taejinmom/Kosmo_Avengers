import axios from 'axios'
import { useCookies } from 'react-cookie'

export const tokenValidation = ([cookies, setCookies]) => {
  axios.post('api/tokenValidation', cookies).then(res => {})
}
