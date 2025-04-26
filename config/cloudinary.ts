import { v2 as cloudinary } from 'cloudinary'
import { CloudImage } from '@/types'

const routes = {
  root: 'mordisco',
  home: '/album/2022MAY',
  albums: '/album/2022MAY',
} as const

export const cloudinaryBase = 'https://res.cloudinary.com/nvzf/image/upload'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_SECRET,
  secure: true,
})

export { cloudinary }

export async function getImagesFromFolder({ folder }: { folder: string }): Promise<CloudImage[]> {
  try {
    const images = await cloudinary.api.resources({
      resource_type: 'image',
      type: 'upload',
      max_results: 90,
      prefix: `${routes.root}/${folder}`,
    })

    return images?.resources || []
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error)
    return []
  }
}
