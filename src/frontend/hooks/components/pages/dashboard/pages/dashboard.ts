import { postMethod } from '../../../../../libs/axios/axios'
import { useContext } from 'react'
import { TodoContext } from '../../../../../providers/TodoProvider'

export const useDashBoard = () => {
  const { todos, setTodos } = useContext(TodoContext)
  const fetchTodos = (user_id: string) => {
    // MARKING: ログイン時にuser_idを取得すること
    const param = new URLSearchParams()
    param.append('user_id', user_id)
    postMethod('fetch_todos', param).then((response) => {
      setTodos(response.data)
    })
  }
  return { fetchTodos }
}
