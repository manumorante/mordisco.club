import Head from 'next/head'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import 'css/globals.css'

const meta = {
  title: 'Mordisco Club',
  description: 'Fotos de las fiestas de música electrónica Mordisco CLub en Granada',
  url: 'https://mordisco.club/',
  image: '/og/mordisco.png',
  bgcolor: '#000000',
  ga: 'G-WDX93TJEJY',
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>

        <style>{`html { background-color: #0a0a0a; }`}</style>

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={meta.description} />
        <meta name='theme-color' content={meta.bgcolor} />

        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:url' content={meta.url} />
        <meta property='og:image' content={meta.image} />
        <meta property='og:type' content='website' />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${meta.ga}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${meta.ga}`}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
