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
} from '@chakra-ui/react'
import { ALL, DONE, REQUESTED, WORK_ON_PROGRESS } from '../../constants'
import { TodoType } from '../../types'

interface PropType {
  todos: TodoType[]
}

const TaskList = (props: Partial<PropType>) => {
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
            <Th width="20%"></Th>
            <Th width="20%"></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>買い物</Td>
            <Td>作業中</Td>
            <Td>
              <Button bg="teal.300" size="xs">
                <Text color="white">詳細</Text>
              </Button>
            </Td>
            <Td>
              <Button bg="teal.50" size="xs">
                <Text color="teal.400">削除</Text>
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>洗い物</Td>
            <Td>作業中</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>料理</Td>
            <Td>作業中</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default TaskList
