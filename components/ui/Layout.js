import { Header } from 'components/ui'

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='js-container mx-auto max-w-6xl px-5 h-full'>{children}</div>
    </>
  )
}
export default Layout
