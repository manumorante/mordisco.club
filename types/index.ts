export type Album = {
  folder: string
  artists: Artist[]
  cover: string
}

export type Artist = string

export type Quote = {
  id: number
  text: string
  author: string
  party?: string
  year?: string
}

// Cloudinary
export type CloudImage = {
  url: string
  public_id: string
  version: number
}
