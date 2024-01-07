import axios from 'axios'
import { useQuery } from 'react-query'

const ReactQuery = props => {
  const { isLoading, data, isError, error } = useQuery('login', () => {
    return axios.get('api/validateToken', {})
  })
  if (isLoading) return <>Loading...</>
  if (isError) return <>{error.message}</>
  return
}

export default ReactQuery
