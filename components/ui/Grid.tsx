import React, { useRef, useState, useEffect } from 'react'
import { photoUrl } from 'lib/cloudinary/url'
import cx from 'classnames'
import { useCounter, getGridItem } from 'lib'
import { Quote } from 'components/ui'
import { GridType } from '@/types'

type Props = {
  items: any[]
  gap?: number
  openModal: any // Callback function to open modal
}

function Grid({ items, gap = 20, openModal }: Props) {
  const gridRef = useRef<any>(null)
  const [grid, setGrid] = useState<GridType>({
    width: 0,
    isMobile: true,
    dpr: 2,
    ready: false,
  })

  useEffect(() => {
    setGrid({
      width: gridRef.current.offsetWidth,
      isMobile: window.innerWidth < 700,
      dpr: window.devicePixelRatio,
      ready: true,
    })
  }, [])

  let IMAGES_USED = 0

  return (
    <div
      ref={gridRef}
      className='Grid bg-black/90 py-5 grid grid-cols-12 auto-rows-min opacity-0 animate-[fade-in_0.3s_ease-in_forwards]'
      style={{ gap: gap }}>
      {grid.ready &&
        Array.from({ length: 100 }).map((_, index) => {
          if (IMAGES_USED >= items.length) return null
          //
          // Grid item
          const gridItem = getGridItem({
            index,
            gap,
            gridWidth: grid.width,
            isMobile: grid.isMobile,
          })

          if (gridItem.isImage) {
            const photo = items[IMAGES_USED]
            if (!photo) return null

            IMAGES_USED++

            const photoSrc = photoUrl({
              url: photo.url,
              width: gridItem.width,
              height: gridItem.height,
              dpr: grid.dpr,
            })

            if (!photoSrc) return null

            return (
              <div className='bg-neutral-900/70' style={gridItem.style} key={index}>
                <img
                  onClick={() => openModal(photo)}
                  src={photoSrc}
                  width={gridItem.width}
                  height={gridItem.height}
                  className={cx(
                    'w-full h-full object-cover rounded-md cursor-pointer',
                    'md:hover:opacity-80 transition-opacity duration-300 ease-in-out'
                  )}
                  alt={`Image ${index}`}
                  loading={index > 6 ? 'lazy' : 'eager'}
                />
              </div>
            )
          }

          if (gridItem.isQuote) {
            return <Quote style={gridItem.style} key={index} />
          }
        })}
      {/*  */}
    </div>
  )
}

export default Grid
