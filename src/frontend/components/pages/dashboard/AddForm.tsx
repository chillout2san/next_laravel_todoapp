import { useState } from 'react'
import {
  Box,
  Text,
  Textarea,
  Input,
  HStack,
  Button,
  Divider,
  Select,
} from '@chakra-ui/react'
import { WORK_ON_PROGRESS } from '../../../constants'
import { useContext } from 'react'
import { TodoContext } from '../../../providers/TodoProvider'
import {
  yearList,
  monthList,
  dateList,
} from '../../../services/components/pages/dashboard/AddForm'
import { TodoType } from '../../../types'
import { useAddForm } from '../../../hooks/components/pages/dashboard/AddFrom'
import { postMethod } from '../../../libs/axios/axios'

interface PropType {
  fetchTodos: (user_id: string) => void
}

const AddForm = (props: PropType) => {
  const { fetchTodos } = props

  const { todos, setTodos } = useContext(TodoContext)

  const {
    title,
    handleTitle,
    content,
    handleContent,
    year,
    handleYear,
    month,
    handleMonth,
    date,
    handleDate,
    clearForm,
  } = useAddForm()

  const pushTodo = () => {
    const todo = {
      title: title,
      content: content,
      status: WORK_ON_PROGRESS,
      deadline: `${year}-${month}-${date}`,
    }

    // MARKING: pushTodos失敗した時のエラーハンドリングを行う
    const newTodos = [...todos, todo] as TodoType[]
    setTodos(newTodos)
    const param = new URLSearchParams()
    param.append('user_id', '0')
    param.append('title', title)
    param.append('content', content)
    param.append('deadline', todo.deadline)
    postMethod('push_todo', param).then((_response) => {
      clearForm()
      // MARKING: fetchTodosにuser_idを渡すようにする
      fetchTodos('0')
    })
  }

  return (
    <Box p={2} borderRadius="md" borderWidth="1px" shadow="lg">
      <Text pb={2} fontWeight="bold">
        新しいタスクを追加
      </Text>

      <Divider mb={1} />

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
        <Button onClick={pushTodo} bg="teal.300" size="sm">
          <Text color="white">追加</Text>
        </Button>

        <Button onClick={clearForm} bg="teal.50" size="sm">
          <Text color="teal.400">入力内容をクリア</Text>
        </Button>
      </HStack>
    </Box>
  )
}

export default AddForm
