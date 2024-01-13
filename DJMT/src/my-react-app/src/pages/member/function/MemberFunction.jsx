import request from '../../../api/core'

export const memberAxiosApi = async (
  apiUrl,
  httpMethod,
  data,
  etcParam,
  location
) => {
  if (httpMethod === 'post') {
    return await request.post(apiUrl, data)
  } else if (httpMethod === 'get') {
    return await request.get(apiUrl)
  }
}
