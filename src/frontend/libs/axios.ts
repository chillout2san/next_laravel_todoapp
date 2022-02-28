import axios from 'axios'
import { URL } from '../constants'

const client = axios.create({
  baseURL: URL,
})

/**
 * 指定した型定義のキーとその値をセットにし、URLSearchParamsのappendを行う
 * @param { [keyof T, string][] } pairs - タプルの配列
 * @returns { URLSearchParams }
 */
export const createURLSearchParams = <T>(pairs: [keyof T, string][]) => {
  const params = new URLSearchParams()
  pairs.map((pair) => params.append(pair[0].toString(), pair[1]))
  return params
}

// MARKING: エラーハンドリングを検討すること
export const getMethod = (methodName: string) => {
  return client.get(methodName)
}

export const postMethod = (methodName: string, params: URLSearchParams) => {
  return client.post(methodName, params)
}

export default {
  createURLSearchParams,
  getMethod,
  postMethod,
}
