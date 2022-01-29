import { useState } from 'react'
import {
  presentYear,
  presentMonth,
  presentDate,
} from '../../../../services/components/pages/dashboard/AddForm'

export const useAddForm = () => {
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

  const clearForm = () => {
    setTitle('')
    setContent('')
    setYear(presentYear.toString())
    setMonth(presentMonth.toString())
    setDate(presentDate.toString())
  }

  return {
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
    clearForm
  }
}

export const useAddFormCRUD = () => {
    
}
