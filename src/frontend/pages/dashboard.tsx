import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
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
      <Box m={2} display="flex" flexDirection={{ base: 'column', lg: 'row' }}>
        <Box
          width={{ base: '100%', lg: '35%' }}
          mb={{ base: 2, lg: 0 }}
          mr={{ base: 0, lg: 2 }}
          height="350px"
        >
          <AddForm fetchTodos={fetchTodos} />
        </Box>
        <Box
          width={{ base: '100%', lg: '65%' }}
          height={{ base: '100%', lg: '400px' }}
          overflow="scroll"
        >
          <TaskList />
        </Box>
      </Box>
    </>
  )
}

export default Home
