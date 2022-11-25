// Cloudinary URL transformations
function applyTransforms({ url, transforms }) {
  return url.replace('upload/', `upload/${transforms}/`)
}

export function photoUrl({ url, width, height, dpr = 1 }) {
  if (!url || !url.length || !width || !height) return
  const transforms = `w_${width},h_${height},dpr_${dpr.toFixed(1)},c_fill,g_faces`
  return applyTransforms({ url, transforms })
}

export function photoBigUrl({ url, width, dpr = 1 }) {
  const w_ = `w_${width}`
  const dpr_ = `dpr_${dpr}`
  const transforms = `${w_},${dpr_}`

  return applyTransforms({ url, transforms })
}
