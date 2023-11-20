import Header from '@/componets/Header'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}
