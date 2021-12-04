import { Text, HStack } from '@chakra-ui/react'

export default function Footer() {
  return (
    <>
      <HStack
        m={2}
        shadow="lg"
        borderWidth="1px"
        borderRadius="md"
        justify="center"
      >
        <Text>Ta-Su-Ku is run by 2san!</Text>
      </HStack>
    </>
  )
}
