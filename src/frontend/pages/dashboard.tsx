import type { NextPage } from 'next'
import { HStack, Box } from '@chakra-ui/react'
import AddForm from '../components/dashboard/AddForm'
import TaskList from '../components/dashboard/TaskList'


const Home: NextPage = () => {
  return (
    <>
      <HStack m={2} spacing={2} align="start">
        <Box width="35%">
          <AddForm />
        </Box>
        <Box width="65%">
          <TaskList />
        </Box>
      </HStack>
    </>
  )
}

export default Home
