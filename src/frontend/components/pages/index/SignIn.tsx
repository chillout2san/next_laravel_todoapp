import { Box, Text, Input, Button, HStack, Divider } from '@chakra-ui/react'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { useSignIn } from '../../../hooks/components/pages/index/signIn'
import { createURLSearchParams, postMethod } from '../../../libs/axios/axios'
import { UserContext } from '../../../providers/UserProvider'
import { signInRequest, singInResponse } from '../../../types/api/signIn'
import { useContext } from 'react'

const SignIn = () => {
  const router = useRouter()

  const { setUserId, setUserName } = useContext(UserContext)

  const {
    mail,
    handleMail,
    pass,
    handlePass,
    clearForm,
    errorMessage,
    setErrorMessage,
  } = useSignIn()

  const signIn = () => {
    if (mail === '' || pass === '') {
      setErrorMessage('全ての項目を記入してください')
      return
    }
    const params = createURLSearchParams<signInRequest>([
      ['mail', mail],
      ['pass', pass],
    ])
    postMethod('sign_in', params).then(
      ({ data }: AxiosResponse<singInResponse>) => {
        if (data.user_id === null) {
          setErrorMessage('ログインに失敗しました')
          return
        }
        clearForm()
        setUserId(data.user_id)
        setUserName(data.name)
        router.push('/dashboard')
      }
    )
  }

  return (
    <Box p={2} borderRadius="md" borderWidth="1px" shadow="lg">
      <Text pb={2} fontWeight="bold">
        メールアドレスとパスワードでログイン
      </Text>

      <Divider mb={1} />

      <Text pb={2} textColor="red" fontWeight="bold">
        {errorMessage}
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
          type="password"
        />
      </Box>

      <Divider mb={1} />

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

export default SignIn
