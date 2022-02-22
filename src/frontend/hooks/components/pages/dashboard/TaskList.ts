import React, { useState, useContext } from 'react'
import { postMethod } from '../../../../libs/axios/axios'
import { TodoType } from '../../../../types'
import { useDashBoard } from '../../../pages/dashboard'
import { TodoContext } from '../../../../providers/TodoProvider'
import { UserContext } from '../../../../providers/UserProvider'
import { ALL, RED, BLACK } from '../../../../constants'

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

  const isAfterDeadline = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const presentDate = new Date()
    const isAfterDeadline = deadlineDate.getTime() - presentDate.getTime() < 0
    if (isAfterDeadline) {
      return RED
    }
    return BLACK
  }

  const [id, setId] = useState('')

  const [title, setTitle] = useState('')
  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setTitle(event.target.value)

  const [content, setContent] = useState('')
  const handleContent: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => setContent(event.target.value)

  const [status, setStatus] = useState('')
  const handleStatus: React.ChangeEventHandler<HTMLSelectElement> = (event) =>
    setStatus(event.target.value)

  const [year, setYear] = useState('')
  const handleYear: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setYear(event.target.value)
  }

  const [month, setMonth] = useState('')
  const handleMonth: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setMonth(event.target.value)
  }

  const [date, setDate] = useState('')
  const handleDate: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setDate(event.target.value)
  }

  return {
    todo,
    setTodo,
    selectTodos,
    deleteTodo,
    isAfterDeadline,
    id,
    setId,
    title,
    setTitle,
    handleTitle,
    content,
    setContent,
    handleContent,
    status,
    setStatus,
    handleStatus,
    year,
    setYear,
    handleYear,
    month,
    setMonth,
    handleMonth,
    date,
    setDate,
    handleDate,
  }
}
