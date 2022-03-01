import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { TodoProvider } from '@/providers/TodoProvider'
import { UserProvider } from '@/providers/UserProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <TodoProvider>
        <ChakraProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </TodoProvider>
    </UserProvider>
  )
}

export default MyApp
