import { useState } from 'react'

export const useSignUp = () => {
  const [name, setName] = useState('')
  const handleName: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setName(event.target.value)

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
    name,
    handleName,
    mail,
    handleMail,
    pass,
    handlePass,
    errorMessage,
    setErrorMessage,
    clearForm,
  }
}
