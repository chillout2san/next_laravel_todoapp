import { Box, Text, Input, Button, HStack, Divider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSignUp } from '../../../hooks/components/pages/index/SignUp'
import { createURLSearchParams, postMethod } from '../../../libs/axios/axios'
import { signUpRequest, signUpResponse } from '../../../types/api/signUp'
import { AxiosResponse } from 'axios'
import { UserContext } from '../../../providers/UserProvider'
import { useContext } from 'react'

const SignUp = () => {
  const router = useRouter()

  const { setUserId, setUserName } = useContext(UserContext)

  const {
    name,
    handleName,
    mail,
    handleMail,
    pass,
    handlePass,
    errorMessage,
    setErrorMessage,
    clearForm,
  } = useSignUp()

  const signUp = () => {
    if (name === '' || mail === '' || pass === '') {
      setErrorMessage('全ての項目を記入してください。')
      return
    }
    const params = createURLSearchParams<signUpRequest>([
      ['name', name],
      ['mail', mail],
      ['pass', pass],
    ])
    // MARKING:ログイン時のナビゲーションガードを実装
    postMethod('sign_up', params).then(
      ({ data }: AxiosResponse<signUpResponse>) => {
        if (data.user_id == null) {
          setErrorMessage('会員登録に失敗しました。')
          return
        }
        clearForm()
        setUserId(data.user_id)
        setUserName(name)
        router.push('/dashboard')
      }
    )
  }

  return (
    <Box p={2} borderRadius="md" borderWidth="1px" shadow="lg">
      <Text pb={2} fontWeight="bold">
        メールアドレスとパスワードで会員登録
      </Text>

      <Divider mb={1} />

      <Text pb={2} textColor="red" fontWeight="bold">
        {errorMessage}
      </Text>
      <Box pb={2}>
        <Text pb={1}>名前</Text>
        <Input
          value={name}
          onChange={handleName}
          placeholder="Taro Tanaka"
          borderColor="teal.400"
        />
      </Box>

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
        <Button onClick={signUp} bg="teal.300" size="sm">
          <Text color="white">会員登録する</Text>
        </Button>

        <Button onClick={clearForm} bg="teal.50" size="sm">
          <Text color="teal.300">入力内容をクリア</Text>
        </Button>
      </HStack>
    </Box>
  )
}

export default SignUp
