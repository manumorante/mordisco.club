import { Meta } from 'components/app'
import type { AppProps } from 'next/app'
import 'css/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
