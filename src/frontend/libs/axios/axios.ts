import axios from 'axios'
import { URL } from '../../constants'

const client = axios.create({
  baseURL: URL,
})

// MARKING: エラーハンドリングを検討すること
export const getMethod = (methodName: string) => {
  client.get(methodName).then((response) => {
    return response.data
  })
}

export const postMethod = (methodName: string, params: URLSearchParams) => {
  client.post(methodName, params).then((response) => {
    return response.data
  })
}
