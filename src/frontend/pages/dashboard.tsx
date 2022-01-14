import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { HStack, Box } from '@chakra-ui/react'
import AddForm from '../components/dashboard/AddForm'
import TaskList from '../components/dashboard/TaskList'
import { postMethod } from '../libs/axios/axios'
import { useContext } from 'react'
import { TodoContext } from '../providers/TodoProvider'

const Home: NextPage = () => {
  const { todos, setTodos } = useContext(TodoContext)

  const fetchTodos = () => {
    // MARKING: ログイン時にuser_idを取得すること
    const param = new URLSearchParams()
    param.append('user_id', '0')
    postMethod('fetch_todos', param).then((response) => {
      setTodos(response.data)
    })
  }

  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <>
      <HStack m={2} spacing={2} align="start">
        <Box width="35%">
          <AddForm />
        </Box>
        <Box width="65%">
          <TaskList todos={todos} />
        </Box>
      </HStack>
    </>
  )
}

export default Home
