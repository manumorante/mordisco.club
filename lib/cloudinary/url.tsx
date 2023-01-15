/**
 * Cloudinary URL transformations
 */
function applyTransforms({ url, transforms }: { url: string; transforms: string }) {
  return url.replace('upload/', `upload/${transforms}/`)
}

/**
 * photoUrl
 */
export function photoUrl({ url, width, height, dpr = 1 }: PhotoUrlProps) {
  if (!url || !url.length || !width || !height) return
  const transforms = `w_${width},h_${height},dpr_${dpr.toFixed(1)},c_fill,g_faces`
  return applyTransforms({ url, transforms })
}

/**
 * photoBigURL
 */
interface photoBigURLProps {
  url: string
  width: number
  dpr: number
}

export function photoBigURL({ url, width, dpr = 1 }: photoBigURLProps) {
  const w_ = `w_${width}`
  const dpr_ = `dpr_${dpr}`
  const transforms = `${w_},${dpr_}`

  return applyTransforms({ url, transforms })
}

interface PhotoUrlProps {
  url: string
  width: number
  height: number
  dpr: number
}
