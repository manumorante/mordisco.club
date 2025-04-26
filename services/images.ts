import { CloudImage } from '@/types'
import { cloudinaryBase } from '@/config/cloudinary'
import { isDev } from '@/utils'

let placeholderCounter = 0

export const getImageSrc = (image: CloudImage): string => {
  const { public_id, version } = image

  if (isDev()) {
    placeholderCounter = (placeholderCounter + 1) % 1000 // Limitamos a 1000 imágenes diferentes
    return `https://picsum.photos/seed/${placeholderCounter}/390/280`
  }

  return `${cloudinaryBase}/w_390,h_280,dpr_2.0,c_fill,g_faces/v${version}/${public_id}.jpg`
}

export const getViewURL = (image: CloudImage): string => {
  const { public_id, version } = image

  if (isDev()) {
    placeholderCounter = placeholderCounter % 1000
    return `https://picsum.photos/seed/${placeholderCounter}/800/600`
  }

  return `${cloudinaryBase}/v${version}/${public_id}.jpg`
}

export const getImageWithDimensions = (
  image: CloudImage,
  width: number,
  height: number,
): string => {
  const { public_id, version } = image
  return `${cloudinaryBase}/w_${width},h_${height},c_fill/v${version}/${public_id}.jpg`
}
