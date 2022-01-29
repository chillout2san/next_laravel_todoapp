import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

interface PropType {
  children: ReactNode
}

interface ProviderType {
  userId: string
  setUserId: Dispatch<SetStateAction<string>>
  userName: string
  setUserName: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext<ProviderType>({} as ProviderType)

export const UserProvider = (props: PropType) => {
  const { children } = props

  const [userId, setUserId] = useState('')

  const [userName, setUserName] = useState('')

  return (
    <UserContext.Provider value={{ userId, setUserId, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  )
}
