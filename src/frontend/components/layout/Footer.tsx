import { Text, HStack, Link } from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <HStack
        m={2}
        shadow="lg"
        borderWidth="1px"
        borderRadius="md"
        justify="center"
      >
        <Text fontSize="xl" fontWeight="bold">Ta-Su-Ku is run by 2san!</Text>
        <Link href="https://twitter.com/CoO2san" isExternal>
          <FaTwitter />
        </Link>
      </HStack>
    </>
  )
}

export default Footer
