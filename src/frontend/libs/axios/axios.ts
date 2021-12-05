import axios from 'axios'

const url = 'http://localhost:80'

const client = axios.create({
  baseURL: url,
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
