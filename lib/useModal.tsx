import { useState } from 'react'

export default function useModal() {
  const [visible, setVisible] = useState<any>()
  const [content, setContent] = useState<any>()

  function open(node: any) {
    setContent(node)
    setVisible(true)
  }

  function close() {
    setVisible(false)
    setContent(null)
  }

  return { open, close, visible, content }
}
