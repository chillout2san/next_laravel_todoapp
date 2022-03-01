import { HStack, Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import SignIn from '@/components/pages/index/SignIn'
import SignUp from '@/components/pages/index/SignUp'

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
