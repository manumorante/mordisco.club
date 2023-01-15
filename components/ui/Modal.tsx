import { useEffect, useState } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'

interface Props {
  children?: any
  content?: any
  visible?: boolean
  close?: Function
}

function Modal({ children, visible = false, close = () => {}, content }: Props) {
  const [showModal, setShowModal] = useState(visible)
  const router = useRouter()
  const hasHash = router.asPath.includes('#modal')

  // Open
  const handleOpen = () => {
    if (!hasHash) {
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query },
          hash: 'modal',
        },
        undefined,
        { scroll: false }
      )
    }
    setShowModal(true)
  }

  // Close
  const handleClose = () => {
    close()
    setShowModal(false)
    if (showModal) router.back()
  }

  useEffect(() => {
    visible && handleOpen()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  useEffect(() => {
    if (!hasHash && showModal) close(), setShowModal(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasHash])

  if (!showModal) return null

  return (
    <div
      className={cx(
        'Modal opacity-0 animate-[fade-in_0.3s_ease-in_forwards]',
        'fixed z-50 inset-0 w-full h-full bg-black/80',
        'backdrop-saturate-150 backdrop-blur-xl'
      )}>
      <div
        className='cursor-pointer absolute z-30 top-5 right-5 block bg-zinc-700/60 rounded-3xl py-3 px-6'
        onClick={handleClose}>
        Cerrar
      </div>
      {content || children}
    </div>
  )
}

export default Modal
