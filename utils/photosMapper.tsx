import { ImageApiType, ImageType } from '@/types'

export function photosMapper(photos: ImageApiType[]): ImageType[] {
  return photos.map((image) => {
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