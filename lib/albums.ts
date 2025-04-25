import { ALBUMS } from '@/data/albums'
import { Album, Artist } from '@/types'

export function getAlbums() {
  return ALBUMS
}

export function getAlbumByFolder(folder: Album['folder']): Album | undefined {
  const albums = getAlbums()
  return albums.find((album) => album.folder === folder)
}

export function getArtistsByFolder(folder: Album['folder']): Artist[] | [] {
  const album = getAlbumByFolder(folder)
  return album?.artists || []
}
