import Meta from 'components/app/Meta'
import 'css/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}
