import { ALBUMS } from '@/data/albums'
import { Album, Artist } from '@/types'

/**
 * Obtiene todos los álbumes disponibles
 * @returns Array de álbumes
 */
export function getAlbums(): Album[] {
  return ALBUMS
}

/**
 * Obtiene un álbum específico por su carpeta
 * @param folder - Nombre de la carpeta del álbum
 * @returns Álbum encontrado o undefined si no existe
 */
export function getAlbumByFolder(folder: Album['folder']): Album | undefined {
  const albums = getAlbums()
  return albums.find((album) => album.folder === folder)
}

/**
 * Obtiene los artistas de un álbum específico
 * @param folder - Nombre de la carpeta del álbum
 * @returns Array de artistas o array vacío si no se encuentra el álbum
 */
export function getArtistsByFolder(folder: Album['folder']): Artist[] {
  const album = getAlbumByFolder(folder)
  return album?.artists || []
}

/**
 * Verifica si un álbum existe
 * @param folder - Nombre de la carpeta del álbum
 * @returns true si el álbum existe, false en caso contrario
 */
export function albumExists(folder: Album['folder']): boolean {
  return getAlbumByFolder(folder) !== undefined
}
