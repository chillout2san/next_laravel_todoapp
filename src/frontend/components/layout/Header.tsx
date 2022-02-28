import { useDisclosure } from '@chakra-ui/hooks'
import { Text, Button, VStack, HStack } from '@chakra-ui/react'
import HeaderModal from '@/components/layout/parts/HeaderModal'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <VStack
        spacing={1}
        m={2}
        p={2}
        shadow="lg"
        borderWidth="1px"
        borderRadius="md"
      >
        <HStack spacing={0} fontSize="4xl" fontWeight="bold">
          <Text color="teal.300">T</Text>
          <Text>a-Su-Ku</Text>
        </HStack>
        <Button onClick={onOpen} bg="teal.300" size="sm" colorScheme="white">
          <Text color="white">つかいかた</Text>
        </Button>
      </VStack>

      <HeaderModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Header
