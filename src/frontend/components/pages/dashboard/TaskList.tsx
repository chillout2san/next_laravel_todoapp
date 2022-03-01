import { useDisclosure } from '@chakra-ui/hooks'
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
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { ALL, DONE, REQUESTED, WORK_ON_PROGRESS } from '@/constants'
import { useTaskList } from '@/hooks/components/pages/dashboard/TaskList'
import { postMethod } from '@/libs/axios'
import { TodoContext } from '@/providers/TodoProvider'
import { UserContext } from '@/providers/UserProvider'
import {
  yearList,
  monthList,
  dateList,
  separateFromDate,
} from '@/services/date'

interface PropType {
  fetchTodos: (user_id: string) => Promise<any>
}

const TaskList = (props: PropType) => {
  const { fetchTodos } = props

  const { userId, userName } = useContext(UserContext)

  const { todos } = useContext(TodoContext)

  const {
    todo,
    setTodo,
    selectTodos,
    deleteTodo,
    isAfterDeadline,
    task,
    setTask,
    handleTitle,
    handleContent,
    handleStatus,
    handleYear,
    handleMonth,
    handleDate,
  } = useTaskList()

  const { id, title, content, status, year, month, date } = task

  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isOpenSecond,
    onOpen: onOpenSecond,
    onClose: onCloseSecond,
  } = useDisclosure()

  const openModal = (index: number) => {
    const selectedTodo = todos[index]
    setTodo(selectedTodo)
    onOpen()
  }

  const openModalSecond = (index: number) => {
    const { id, title, content, status, deadline } = todos[index]
    const { targetYear, targetMonth, targetDate } = separateFromDate(deadline)
    setTask({
      id,
      title,
      content,
      status,
      year: targetYear,
      month: targetMonth,
      date: targetDate,
    })
    onOpenSecond()
  }

  const editTodo = async () => {
    const param = new URLSearchParams()
    param.append('id', id)
    param.append('title', title)
    param.append('content', content)
    param.append('status', status)
    param.append('deadline', `${year}-${month}-${date}`)
    await postMethod('edit_todo', param)
    await fetchTodos(userId)
    onCloseSecond()
  }
  return (
    <Box p={2} borderRadius="md" borderWidth="1px" shadow="lg">
      <Text pb={2} fontWeight="bold">
        {userName}のタスクリスト
      </Text>

      <Divider mb={1} />

      <FormControl>
        <RadioGroup defaultValue={ALL}>
          <HStack spacing={4}>
            <Radio value={ALL} onChange={selectTodos}>
              {ALL}
            </Radio>
            <Radio value={DONE} onChange={selectTodos}>
              {DONE}
            </Radio>
            <Radio value={WORK_ON_PROGRESS} onChange={selectTodos}>
              {WORK_ON_PROGRESS}
            </Radio>
            <Radio value={REQUESTED} onChange={selectTodos}>
              {REQUESTED}
            </Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th width="5%">ID</Th>
            <Th width="25%">名前</Th>
            <Th width="25%">状況</Th>
            <Th width="25%">締切</Th>
            <Th width="10%"></Th>
            <Th width="10%"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos &&
            todos.map(({ id, title, status, deadline }, index) => {
              return (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{title}</Td>
                  <Td>{status}</Td>
                  <Td color={isAfterDeadline(deadline)}>{deadline}</Td>
                  <Td>
                    <Button bg="teal.300" size="xs">
                      <Text color="white" onClick={() => openModal(index)}>
                        詳細
                      </Text>
                    </Button>
                  </Td>
                  <Td>
                    <Button bg="teal.300" size="xs">
                      <Text
                        color="white"
                        onClick={() => openModalSecond(index)}
                      >
                        編集
                      </Text>
                    </Button>
                  </Td>
                  <Td>
                    <Button bg="teal.50" size="xs">
                      <Text
                        color="teal.400"
                        onClick={() => deleteTodo(userId, id)}
                      >
                        削除
                      </Text>
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

      <Modal isOpen={isOpenSecond} onClose={onCloseSecond}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader bg="teal.300">
              <Text color="white">タスクを編集する</Text>
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody bg="white">
              <Box
                p={2}
                borderRadius="md"
                borderWidth="1px"
                shadow="lg"
                height="380px"
              >
                <Box pb={2}>
                  <Text pb={1}>名前</Text>
                  <Input
                    value={title}
                    onChange={handleTitle}
                    placeholder="買い物に行く"
                    borderColor="teal.400"
                    size="sm"
                  />
                </Box>

                <Box pb={2}>
                  <Text pb={1}>詳細</Text>
                  <Textarea
                    value={content}
                    onChange={handleContent}
                    placeholder="玉ねぎは必ず買う"
                    borderColor="teal.400"
                    size="sm"
                  />
                </Box>

                <Box pb={2}>
                  <Text pb={1}>状態</Text>
                  <Select
                    value={status}
                    onChange={handleStatus}
                    borderColor="teal.400"
                    size="sm"
                  >
                    <option>{WORK_ON_PROGRESS}</option>
                    <option>{REQUESTED}</option>
                    <option>{DONE}</option>
                  </Select>
                </Box>

                <Box pb={2}>
                  <Text pb={1}>締切</Text>
                  <HStack>
                    <Select
                      value={year}
                      onChange={handleYear}
                      borderColor="teal.400"
                      size="sm"
                    >
                      {yearList.map((year) => {
                        return (
                          <option value={year} key={year + 'year'}>
                            {year}
                          </option>
                        )
                      })}
                    </Select>
                    <Text pb={1}>年</Text>

                    <Select
                      value={month}
                      onChange={handleMonth}
                      borderColor="teal.400"
                      size="sm"
                    >
                      {monthList.map((month) => {
                        return (
                          <option value={month} key={month + 'month'}>
                            {month}
                          </option>
                        )
                      })}
                    </Select>
                    <Text pb={1}>月</Text>

                    <Select
                      value={date}
                      onChange={handleDate}
                      borderColor="teal.400"
                      size="sm"
                    >
                      {dateList.map((date) => {
                        return (
                          <option value={date} key={date + 'date'}>
                            {date}
                          </option>
                        )
                      })}
                    </Select>
                    <Text pb={1}>日</Text>
                  </HStack>
                </Box>

                <Divider mb={1} />

                <HStack>
                  <Button bg="teal.300" size="sm" onClick={editTodo}>
                    <Text color="white">更新</Text>
                  </Button>

                  <Button bg="teal.50" size="sm" onClick={onCloseSecond}>
                    <Text color="teal.400">キャンセル</Text>
                  </Button>
                </HStack>
              </Box>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Box>
  )
}

export default TaskList
