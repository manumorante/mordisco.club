import { ALBUMS } from "@/utils/data"
import { getImages } from "@/utils/getImages"
import { AlbumType } from "@/types"

export default async function getAlbums() {
  const albums: AlbumType[] = [...ALBUMS]
  await Promise.all(
    albums.map(async (album) => {
      const images = await getImages(album.albumID)

      if (images && images?.length > 0) {
        album.images = images
        album.length = images.length
      }
    })
  )

  return albums
}
