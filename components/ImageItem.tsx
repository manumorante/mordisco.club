import Link from 'next/link'
import Image from 'next/image'
import { CloudImage } from '@/types'
import { cloudinaryBase } from '@/lib/cloudinary'

export default function ImageItem({ image }: { image: CloudImage }) {
  const { public_id, version } = image
  const src = `${cloudinaryBase}/w_390,h_280,dpr_2.0,c_fill,g_faces/v${version}/${public_id}.jpg`
  const viewURL = `${cloudinaryBase}/v${version}/${public_id}.jpg`

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
