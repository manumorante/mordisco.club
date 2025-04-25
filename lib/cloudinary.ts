import { v2 as cloudinary } from 'cloudinary'
import { CloudImage } from '@/types'

const routes = {
  root: 'mordisco',
  home: '/album/2022MAY',
  albums: '/album/2022MAY', // First album
}

export const cloudinaryBase = 'https://res.cloudinary.com/nvzf/image/upload'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_SECRET,
  secure: true,
})

export { cloudinary }

export async function getImagesFromFolder({
  folder,
}: {
  folder: string
}): Promise<CloudImage[] | []> {
  const images = await cloudinary.api.resources({
    resource_type: 'image',
    type: 'upload',
    max_results: 90,
    prefix: routes.root + '/' + folder,
  })

  return images?.resources || []
}
