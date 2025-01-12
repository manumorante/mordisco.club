import { client } from '@/lib/cloudinary/client'
import { routes } from 'data'
import { ImageApiType, ImageType } from '@/types'

function photosMapper(photos: ImageApiType[]): ImageType[] {
  const randomizedPhotos = photos.sort(() => Math.random() - 0.5)

  return randomizedPhotos.map((image) => {
    const PID = image.public_id
    return {
      public_id: PID,
      albumID: PID.split('/')[1],
      photoID: PID.split('/')[2],
      url: image.secure_url,
      width: image.width,
      height: image.height,
      megas: image.bytes / 1000000,
    } as ImageType
  })
}

// ⏫ Get images from folder
export async function getImagesFromFolder(folder: string) {
  try {
    const images = await client.api.resources({
      resource_type: 'image',
      type: 'upload',
      max_results: 90,
      prefix: routes.root + '/' + folder,
    })

    // return JSON serializable data
    return photosMapper(images.resources)
  } catch (err) {
    console.warn('> 🟥 Get images from folder error')
    if (err) console.warn(err)
    return []
  }
}

// Call getImagesFromFolder() and log the results:
// getImagesFromFolder('mordisco/2022-may').then((images) => console.log(images))
