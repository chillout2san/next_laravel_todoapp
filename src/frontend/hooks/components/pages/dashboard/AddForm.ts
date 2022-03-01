import { useState } from 'react'
import { presentYear, presentMonth, presentDate } from '@/services/date'

export const useAddForm = () => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    year: presentYear.toString(),
    month: presentMonth.toString(),
    date: presentDate.toString(),
  })

  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setForm((form) => {
      return {
        ...form,
        title: event.target.value,
      }
    })
  }

  const handleContent: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setForm((form) => {
      return {
        ...form,
        content: event.target.value,
      }
    })
  }

  const handleYear: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setForm((form) => {
      return {
        ...form,
        year: event.target.value,
      }
    })
  }

  const handleMonth: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setForm((form) => {
      return {
        ...form,
        month: event.target.value,
      }
    })
  }

  const handleDate: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setForm((form) => {
      return {
        ...form,
        date: event.target.value,
      }
    })
  }

  const clearForm = () => {
    setForm({
      title: '',
      content: '',
      year: presentYear.toString(),
      month: presentMonth.toString(),
      date: presentDate.toString(),
    })
  }

  return {
    form,
    handleTitle,
    handleContent,
    handleYear,
    handleMonth,
    handleDate,
    clearForm,
  }
}

export const useAddFormCRUD = () => {}
