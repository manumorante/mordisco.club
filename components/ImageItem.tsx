import Link from 'next/link'
import Image from 'next/image'
import { CloudImage } from '@/types'
import { getImageSrc, getViewURL } from '@/services/images'

export default function ImageItem({ image }: { image: CloudImage }) {
  const src = getImageSrc(image)
  const viewURL = getViewURL(image)

  return (
    <Link href={viewURL} target="_blank">
      <Image
        className="h-full w-full rounded-md object-cover"
        src={src}
        alt="Image"
        width={375}
        height={300}
      />
    </Link>
  )
}
