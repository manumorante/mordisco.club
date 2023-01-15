import { Header } from 'components/ui'

interface Props {
  children: any
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className='js-container mx-auto max-w-6xl px-5 h-full'>{children}</div>
    </>
  )
}
export default Layout
