import React from 'react'
import Script from 'next/script'

export default function Gtag({ id }: { id: string }) {
  if (!id) return null

  return (
    <>
      {/* Google tag (gtag.js) - Google Analytics */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${id}}`} />
      <Script id='gtag-base' strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || []
        function gtag() { dataLayer.push(arguments) }
        gtag('js', new Date())
        gtag('config', '${id}')
      `}
      </Script>
    </>
  )
}
