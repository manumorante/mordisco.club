import { useState, useEffect, useRef } from 'react'
import { photoBigUrl } from '@/lib/cloudinary/url.js'
import Image from 'next/image'

export default function BigPhoto({ photo: _photo }) {
  const elRef = useRef(null)
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    if (!_photo) return

    const ratio = _photo.width / _photo.height // Image ratio
    const width = elRef.current.offsetWidth // Width of the container
    const height = Math.round(width / ratio) // Height about the container
    const dpr = window.devicePixelRatio
    const url = photoBigUrl({ url: _photo.url, width, dpr })

    setPhoto({ url, width, height })
  }, [_photo])

  if (!_photo) return null

  return (
    <div ref={elRef}>
      {photo && (
        <Image
          className='absolute z-20 w-full h-full object-contain'
          src={photo.url}
          width={photo.width}
          height={photo.height}
          alt={`Photo`}
        />
      )}
    </div>
  )
}
