import cloudinary from "@/utils/cloudinary"
import { routes } from "@/utils/data"
import { photosMapper } from "@/utils/photosMapper"
import { ImageType } from "@/types"

export default async function getImages({
  albumID,
}: {
  albumID: string
}): Promise<ImageType[]> {
  try {
    const images = await cloudinary.v2.api.resources({
      resource_type: "image",
      type: "upload",
      max_results: 10,
      prefix: routes.root + "/" + albumID,
    })

    return photosMapper(images.resources)
  } catch (err) {
    console.warn("> 🟥 Get images from folder error")
    if (err) console.warn(err)
    return []
  }
}

// Call getImages() and log the results:
// getImages('mordisco/2022-may').then((images) => console.log(images))
