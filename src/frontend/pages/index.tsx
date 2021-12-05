import type { NextPage } from 'next'
import SignUp from '../components/index/signUp'
import SignIn from '../components/index/signIn'
import { HStack, Box } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <>
      <HStack m={2} spacing={2} align="start">
        <Box borderWidth="1px" width="50%">
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
