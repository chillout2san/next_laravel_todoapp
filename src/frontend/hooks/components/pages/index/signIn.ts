import { useState } from 'react'

export const useSignIn = () => {
  const [mail, setMail] = useState('')
  const handleMail: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setMail(event.target.value)

  const [pass, setPass] = useState('')
  const handlePass: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setPass(event.target.value)

  const [errorMessage, setErrorMessage] = useState('')

  const clearForm = () => {
    setMail('')
    setPass('')
    setErrorMessage('')
  }

  return {
    mail,
    pass,
    handleMail,
    handlePass,
    clearForm,
    errorMessage,
    setErrorMessage,
  }
}
