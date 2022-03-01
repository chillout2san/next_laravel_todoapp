import { useContext } from 'react'
import { postMethod } from '@/libs/axios'
import { TodoContext } from '@/providers/TodoProvider'
import { TodoType } from '@/types'

export const useDashBoard = () => {
  const { todos, setTodos } = useContext(TodoContext)

  const fetchTodos = (user_id: string) => {
    const param = new URLSearchParams()
    param.append('user_id', user_id)
    return postMethod<TodoType[]>('fetch_todos', param).then(({ data }) => {
      setTodos(data)
      return data
    })
  }
  return { fetchTodos }
}
