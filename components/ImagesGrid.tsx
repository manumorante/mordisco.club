import { ImageItem, QuoteBox } from '@/components'
import { CloudImage } from '@/types'
import { Fragment } from 'react'

export default function ImagesGrid({ images }: { images: CloudImage[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {images.map((image) => {
        return (
          <Fragment key={image.url}>
            <ImageItem image={image} />
            <QuoteBox />
          </Fragment>
        )
      })}
    </div>
  )
}
