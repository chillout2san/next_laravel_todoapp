import {
  Text,
  Button,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'

export default function Header() {
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
        <Text fontSize="4xl" fontWeight="bold">
          <HStack spacing={0}>
            <Text color="teal.300">T</Text>
            <Text>a-Su-Ku</Text>
          </HStack>
        </Text>
        <Button onClick={onOpen} bg="teal.300" size="sm" colorScheme="white">
          <Text color="white">つかいかた</Text>
        </Button>
      </VStack>

      {/* MARKING:Modalの中身を実装 */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Ta-Su-Kuのつかいかた</ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>
            <ModalFooter>
              <Button onClick={onClose} bg="teal.50" size="sm">
                <Text color="teal.300">閉じる</Text>
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}
