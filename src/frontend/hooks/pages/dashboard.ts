import { postMethod } from '../../libs/axios/axios'
import { useContext } from 'react'
import { TodoContext } from '../../providers/TodoProvider'

export const useDashBoard = () => {
  const { todos, setTodos } = useContext(TodoContext)

  const fetchTodos = (user_id: string) => {
    const param = new URLSearchParams()
    param.append('user_id', user_id)
    return postMethod('fetch_todos', param).then((response) => {
      setTodos(response.data)
      return response.data
    })
  }
  return { fetchTodos }
}
