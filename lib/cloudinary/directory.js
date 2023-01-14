import { client } from 'lib/cloudinary/client.js'
import { routes } from 'data'

function photosMapper(photos) {
  // Randomize photos array
  const randomizedPhotos = photos.sort(() => Math.random() - 0.5)
  /**
   * Example mapping:
    {
      public_id: 'mordisco/2022MAY/2327',
      albumID: '2022MAY',
      photoID: '2327',
      url: 'https://res.cloudinary.com/nvzf/image/upload/v1667052283/mordisco/2022MAY/2327.jpg',
      width: 4000,
      height: 2612,
      megas: 0.994327
    },
  */
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
    }
  })
}

// ⏫ Get images from folder
export async function getImagesFromFolder(folder) {
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
  }
}

// Call getImagesFromFolder() and log the results:
// getImagesFromFolder('mordisco/2022-may').then((images) => console.log(images))
