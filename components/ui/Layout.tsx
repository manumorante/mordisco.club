import { Header } from 'components/ui'

interface Props {
  children: any
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
export default Layout
