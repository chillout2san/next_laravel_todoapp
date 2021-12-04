import { Box, Text, Input, Button, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function SignIn() {
  const router = useRouter()

  const [mail, setMail] = useState('')
  const handleMail: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setMail(event.target.value)

  const [pass, setPass] = useState('')
  const handlePass: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setPass(event.target.value)

  const signIn = () => {
    clearForm()
    // MARKING:ログイン時のナビゲーションガードを実装
    router.push('/dashboard')
  }

  const clearForm = () => {
    setMail('')
    setPass('')
  }

  return (
    <Box p={2} borderRadius="md" borderWidth="1px" shadow="lg">
      <Text pb={2} fontWeight="bold">
        メールアドレスとパスワードでログイン
      </Text>

      <Box pb={2}>
        <Text pb={1}>メールアドレス</Text>
        <Input
          value={mail}
          onChange={handleMail}
          placeholder="test@example.com"
          borderColor="teal.400"
        />
      </Box>

      <Box pb={2}>
        <Text pb={1}>パスワード</Text>
        <Input
          value={pass}
          onChange={handlePass}
          placeholder="testpass"
          borderColor="teal.400"
        />
      </Box>

      <HStack>
        <Button onClick={signIn} bg="teal.300" size="sm">
          <Text color="white">ログインする</Text>
        </Button>

        <Button onClick={clearForm} bg="teal.50" size="sm">
          <Text color="teal.300">入力内容をクリア</Text>
        </Button>
      </HStack>
    </Box>
  )
}
