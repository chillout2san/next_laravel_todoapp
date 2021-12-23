import { useState } from 'react'
import {
  Box,
  Text,
  Textarea,
  Input,
  HStack,
  Button,
  Divider,
} from '@chakra-ui/react'
import { WORK_ON_PROGRESS } from '../../constants'

const AddForm = () => {
  const [title, setTitle] = useState('')
  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setTitle(event.target.value)

  const [content, setContent] = useState('')
  const handleContent: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => setContent(event.target.value)

  const pushTask = () => {
    const task = {
      title: title,
      content: content,
      status: WORK_ON_PROGRESS,
    }
    // MARKING: axiosへ登録処理を行う。成功したらclearFormを行う。
    clearForm()
  }

  const clearForm = () => {
    setTitle('')
    setContent('')
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
        />
      </Box>

      <Box pb={2}>
        <Text pb={1}>詳細</Text>
        <Textarea
          value={content}
          onChange={handleContent}
          placeholder="玉ねぎは必ず買う"
          borderColor="teal.400"
        />
      </Box>

      <Divider mb={1} />

      <HStack>
        <Button onClick={pushTask} bg="teal.300" size="sm">
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
