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
import { WORK_ON_PROGRESS } from '../../constants'
import { useContext } from 'react'
import { TodoContext } from '../../providers/TodoProvider'
import { yearList } from '../../services/components/dashboard/AddForm'
import { monthList } from '../../services/components/dashboard/AddForm'
import { dateList } from '../../services/components/dashboard/AddForm'
import { presentYear } from '../../services/components/dashboard/AddForm'
import { presentMonth } from '../../services/components/dashboard/AddForm'
import { presentDate } from '../../services/components/dashboard/AddForm'
import { TodoType } from '../../types'

const AddForm = () => {
  const { todos, setTodos } = useContext(TodoContext)

  const [title, setTitle] = useState('')
  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setTitle(event.target.value)

  const [content, setContent] = useState('')
  const handleContent: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => setContent(event.target.value)

  const [year, setYear] = useState(presentYear.toString())
  const handleYear: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setYear(event.target.value)
  }

  const [month, setMonth] = useState(presentMonth.toString())
  const handleMonth: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setMonth(event.target.value)
  }

  const [date, setDate] = useState(presentDate.toString())
  const handleDate: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setDate(event.target.value)
  }

  const pushTodo = () => {
    const todo = {
      title: title,
      content: content,
      status: WORK_ON_PROGRESS,
      deadline: `${year}-${month}-${date}`
    }

    const newTodos = [...todos, todo] as TodoType[]
    setTodos(newTodos)
    // MARKING: axiosへ登録処理を行う。成功したらclearFormを行う。
    clearForm()
  }

  const clearForm = () => {
    setTitle('')
    setContent('')
    setYear(presentYear.toString())
    setMonth(presentMonth.toString())
    setDate(presentDate.toString())
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
