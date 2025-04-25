import { useRef, useEffect } from 'react'

export function useScrollRestoration() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const elem = ref.current

    const savePosition = () => {
      sessionStorage.setItem('scrollPosition', elem.scrollLeft.toString())
    }

    elem.addEventListener('scrollend', savePosition)

    const scrollX = sessionStorage.getItem('scrollPosition')
    if (scrollX) elem.scrollLeft = parseInt(scrollX, 10)

    return () => {
      elem.removeEventListener('scrollend', savePosition)
    }
  }, [])

  return [ref]
}
