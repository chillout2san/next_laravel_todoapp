import { useState } from 'react'
import { postMethod } from '../../../../libs/axios/axios'
import { TodoType } from '../../../../types'
import { useDashBoard } from '../../../pages/dashboard'

export const useTaskList = () => {
  const [todo, setTodo] = useState<TodoType>()

  const { fetchTodos } = useDashBoard()

  const deleteTodo = (userId: string, id: string) => {
    const param = new URLSearchParams()
    param.append('id', id)
    postMethod('delete_todo', param).then((_response) => {
      fetchTodos(userId)
    })
  }

  return {
    todo,
    setTodo,
    deleteTodo,
  }
}
