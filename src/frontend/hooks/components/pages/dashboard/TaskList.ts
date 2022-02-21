import React, { useState, useContext } from 'react'
import { postMethod } from '../../../../libs/axios/axios'
import { TodoType } from '../../../../types'
import { useDashBoard } from '../../../pages/dashboard'
import { TodoContext } from '../../../../providers/TodoProvider'
import { UserContext } from '../../../../providers/UserProvider'
import { ALL } from '../../../../constants'

export const useTaskList = () => {
  const [todo, setTodo] = useState<TodoType>()
  const { todos, setTodos } = useContext(TodoContext)

  const { userId } = useContext(UserContext)

  const { fetchTodos } = useDashBoard()

  const selectTodos: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    fetchTodos(userId).then((todos: TodoType[]) => {
      if (event.target.value === ALL) {
        return
      }
      const selectedTodos = todos.filter((todo) => {
        return todo.status === event.target.value
      })
      setTodos(selectedTodos)
    })
  }

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
    selectTodos,
    deleteTodo,
  }
}
