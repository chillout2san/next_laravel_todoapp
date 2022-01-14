import {
  Text,
  Box,
  Divider,
  FormControl,
  HStack,
  RadioGroup,
  Radio,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Button,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import { ALL, DONE, REQUESTED, WORK_ON_PROGRESS } from '../../constants'
import { TodoType } from '../../types'
import { useState } from 'react'

interface PropType {
  todos: TodoType[]
}

const TaskList = (props: PropType) => {
  const { todos } = props
  const [todo, setTodo] = useState<TodoType>()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const openModal = (index: number) => {
    const selectedTodo = todos[index]
    setTodo(selectedTodo)
    onOpen()
  }
  return (
    <Box p={2} borderRadius="md" borderWidth="1px" shadow="lg">
      <Text pb={2} fontWeight="bold">
        タスクリスト
      </Text>

      <Divider mb={1} />

      <FormControl>
        <RadioGroup defaultValue={ALL}>
          <HStack spacing={4}>
            <Radio value={ALL}>{ALL}</Radio>
            <Radio value={DONE}>{DONE}</Radio>
            <Radio value={WORK_ON_PROGRESS}>{WORK_ON_PROGRESS}</Radio>
            <Radio value={REQUESTED}>{REQUESTED}</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th width="20%">ID</Th>
            <Th width="20%">名前</Th>
            <Th width="20%">状況</Th>
            <Th width="20%">締切</Th>
            <Th width="10%"></Th>
            <Th width="10%"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos &&
            todos.map(({ title, status, deadline }, index) => {
              return (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{title}</Td>
                  <Td>{status}</Td>
                  <Td>{deadline}</Td>
                  <Td>
                    <Button bg="teal.300" size="xs">
                      <Text color="white" onClick={() => openModal(index)}>
                        詳細
                      </Text>
                    </Button>
                  </Td>
                  <Td>
                    <Button bg="teal.50" size="xs">
                      <Text color="teal.400">削除</Text>
                    </Button>
                  </Td>
                </Tr>
              )
            })}
        </Tbody>
      </Table>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader bg="teal.300">
              <Text color="white">「{todo && todo.title}」の詳細</Text>
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody bg="teal.50">{todo && todo.content}</ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Box>
  )
}

export default TaskList
