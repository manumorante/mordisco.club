import { getAlbumData } from "@/utils/data"
import getImages from "@/utils/getImages"

export default async function getAlbum({ albumID }: { albumID: string }) {
  const album = getAlbumData({ albumID })

  if (!album) return null

  const images = await getImages({ albumID })

  return { ...album, images }
}
