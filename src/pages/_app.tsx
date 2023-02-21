import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

const queryClient = new QueryClient()


export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </QueryClientProvider>
    </>
  )
}
