import type { NextPage } from 'next'
import { useEffect } from 'react'
import { HStack, Box } from '@chakra-ui/react'
import AddForm from '../components/pages/dashboard/AddForm'
import TaskList from '../components/pages/dashboard/TaskList'
import { useContext } from 'react'
import { TodoContext } from '../providers/TodoProvider'
import { useDashBoard } from '../hooks/components/pages/dashboard/pages/dashboard'

const Home: NextPage = () => {
  const { todos, setTodos } = useContext(TodoContext)

  const { fetchTodos } = useDashBoard()

  useEffect(() => {
    fetchTodos('0')
  }, [])

  return (
    <>
      <HStack m={2} spacing={2} align="start">
        <Box width="35%">
          <AddForm fetchTodos={fetchTodos} />
        </Box>
        <Box width="65%">
          <TaskList />
        </Box>
      </HStack>
    </>
  )
}

export default Home
