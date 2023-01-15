import Head from 'next/head'

const Meta = () => {
  const meta = {
    title: 'Mordisco Club',
    description: 'Fotos de las fiestas de música electrónica Mordisco CLub en Granada',
    url: 'https://mordisco.club/',
    image: '/og/mordisco.png',
    bgcolor: '#000000',
  }

  return (
    <Head>
      <title>{meta.title}</title>

      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={meta.description} />
      <meta name='theme-color' content={meta.bgcolor} />

      <meta property='og:title' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:url' content={meta.url} />
      <meta property='og:image' content={meta.image} />
      <meta property='og:type' content='website' />
    </Head>
  )
}

export default Meta
