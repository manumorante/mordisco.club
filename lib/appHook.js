import { useEffect, useState } from 'react'

export function useApp() {
  const [app, setApp] = useState({ dpr: 1, width: 0, height: 0, container: 0, isMobile: true })

  useEffect(() => {
    setApp({
      dpr: window.devicePixelRatio,
      width: window.innerWidth,
      height: window.innerHeight,
      container: document.querySelector('.js-container').offsetWidth,
      isMobile: window.innerWidth < 700,
    })
  }, [])

  return app
}
