import React, { useEffect, useState } from 'react'
import { SpinnerWiggle } from 'components/ui'
import cx from 'clsx'
import { ImageType } from '@/types'

type Props = {
  photo: ImageType
  isBig: boolean
  className: string
}

function Photo({ photo, isBig, className }: Props) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
  }, [photo])

  if (!photo) return null

  const { width, height, big, small } = photo
  const src = isBig ? big : small

  return (
    <div className='Photo relative w-full h-full'>
      <img
        alt={`Photo ${photo.id}`}
        className={cx({ 'opacity-0 blur-sm': loading }, className)}
        src={src}
        width={width}
        height={height}
        onLoad={() => setLoading(false)}
      />

      {loading && <SpinnerWiggle fullScreen />}
    </div>
  )
}

export default Photo
