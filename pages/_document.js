import { Html, Head, Main, NextScript } from 'next/document'
import Gtag from 'components/app/Gtag'

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <style>{`html, body, #__next { background-color: #000000; color: #ffffff; height: 100%; scroll-behavior: smooth; }`}</style>
        <Gtag id='G-WDX93TJEJY' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
