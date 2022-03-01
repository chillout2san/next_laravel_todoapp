import React, { useState, useContext } from 'react'
import { ALL, RED, BLACK } from '@/constants'
import { useDashBoard } from '@/hooks/pages/dashboard'
import { postMethod } from '@/libs/axios'
import { TodoContext } from '@/providers/TodoProvider'
import { UserContext } from '@/providers/UserProvider'
import { TodoType } from '@/types'

export const useTaskList = () => {
  const [todo, setTodo] = useState<TodoType>()

  const { setTodos } = useContext(TodoContext)

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

  const isAfterDeadline = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const presentDate = new Date()
    const isAfterDeadline = deadlineDate.getTime() - presentDate.getTime() < 0
    if (isAfterDeadline) {
      return RED
    }
    return BLACK
  }

  const [task, setTask] = useState({
    id: '',
    title: '',
    content: '',
    status: '',
    year: '',
    month: '',
    date: '',
  })
  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTask((task) => {
      return {
        ...task,
        title: event.target.value,
      }
    })
  }

  const handleContent: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setTask((task) => {
      return {
        ...task,
        content: event.target.value,
      }
    })
  }

  const handleStatus: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTask((task) => {
      return {
        ...task,
        status: event.target.value,
      }
    })
  }

  const handleYear: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTask((task) => {
      return {
        ...task,
        year: event.target.value,
      }
    })
  }

  const handleMonth: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTask((task) => {
      return {
        ...task,
        month: event.target.value,
      }
    })
  }

  const handleDate: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setTask((task) => {
      return {
        ...task,
        date: event.target.value,
      }
    })
  }

  return {
    todo,
    setTodo,
    selectTodos,
    deleteTodo,
    isAfterDeadline,
    task,
    setTask,
    handleTitle,
    handleContent,
    handleStatus,
    handleYear,
    handleMonth,
    handleDate,
  }
}
