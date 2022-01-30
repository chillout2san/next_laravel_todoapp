import type { NextPage } from 'next'
import { useEffect } from 'react'
import { HStack, Box } from '@chakra-ui/react'
import AddForm from '../components/pages/dashboard/AddForm'
import TaskList from '../components/pages/dashboard/TaskList'
import { useContext } from 'react'
import { useDashBoard } from '../hooks/pages/dashboard'
import { UserContext } from '../providers/UserProvider'

const Home: NextPage = () => {
  const { userId } = useContext(UserContext)

  const { fetchTodos } = useDashBoard()

  useEffect(() => {
    // MARKING: ナビゲーションガードを実装すること
    fetchTodos(userId)
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
