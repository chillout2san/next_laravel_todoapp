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
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import ModalBox from './header_parts/modalbox'

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

      {/* MARKING:Modalの中身を実装 */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader bg="teal.300">
              <Text color="white">Ta-Su-Kuのつかいかた</Text>
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody bg="teal.50">
              <ModalBox
                heading="Ta-Su-Kuって？"
                firstText="直感的に操作ができるタスク管理アプリです。"
              />

              <ModalBox
                heading="「新しいタスクを追加」ウィンドウ"
                firstText="①タスクの名前や詳細等を入力して、登録ボタンを押せばタスクを追加できます。"
                secondText="②アラートを有効にすると、期限切れのタスクが赤く表示されるようになります。"
              />

              <ModalBox
                heading="「タスクリスト」ウィンドウ"
                firstText="①各進捗状況に応じて、追加したタスクを閲覧することができます。"
                secondText="②詳細ボタンからタスクの詳細を閲覧することができます。"
                thirdText="③編集ボタンからタスクの内容を編集することができます。"
                fourthText="④削除ボタンからタスクを削除することができます。元に戻せないので注意してください。"
              />
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}

export default Header
