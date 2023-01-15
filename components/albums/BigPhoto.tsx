import { useState, useEffect, useRef } from 'react'
import { photoBigURL } from 'lib/cloudinary/url'
import { ImageType } from '@/types'

interface PhotoStateType {
  url: string
  width: number
  height: number
}

function BigPhoto({ photo: _photo }: { photo: ImageType }) {
  const elRef = useRef<any>(null)
  const [photo, setPhoto] = useState<PhotoStateType>({ url: '', width: 0, height: 0 })

  useEffect(() => {
    if (!_photo || _photo.width <= 0) return

    const ratio = _photo.width / _photo.height // Image ratio
    const width = elRef?.current?.offsetWidth // Width of the container
    const height = Math.round(width / ratio) // Height about the container
    const dpr = window.devicePixelRatio
    const url = photoBigURL({ url: _photo.url, width, dpr })

    setPhoto({ url, width, height })
  }, [_photo])

  if (!_photo) return null

  return (
    <div ref={elRef}>
      {photo && (
        <img
          className='absolute z-20 w-full h-full object-contain'
          src={photo.url}
          width={photo.width}
          height={photo.height}
          alt='Photo'
        />
      )}
    </div>
  )
}

export default BigPhoto
