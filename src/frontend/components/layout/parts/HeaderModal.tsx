import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'
import HeaderModalBox from '@/components/layout/parts/ModalBox'

interface HeaderModalProps {
  isOpen: boolean
  onClose: () => void
}

export const HeaderModal = ({ isOpen, onClose }: HeaderModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader bg="teal.300">
            <Text color="white">Ta-Su-Kuのつかいかた</Text>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody bg="teal.50">
            <HeaderModalBox
              heading="Ta-Su-Kuって？"
              firstText="直感的に操作ができるタスク管理アプリです。"
            />

            <HeaderModalBox
              heading="「新しいタスクを追加」ウィンドウ"
              firstText="①タスクの名前や詳細等を入力して、登録ボタンを押せばタスクを追加できます。"
              secondText="②アラートを有効にすると、期限切れのタスクが赤く表示されるようになります。"
            />

            <HeaderModalBox
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
  )
}

export default HeaderModal
