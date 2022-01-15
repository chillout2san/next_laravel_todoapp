import type { NextPage } from 'next'
import SignUp from '../components/pages/index/SignUp'
import SignIn from '../components/pages/index/SignIn'
import { HStack, Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <HStack m={2} spacing={2} align="start">
        <Box width="50%">
          <SignUp />
        </Box>
        <Box width="50%">
          <SignIn />
        </Box>
      </HStack>
    </>
  )
}

export default Home
