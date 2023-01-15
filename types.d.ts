export interface GridType {
  width: number
  isMobile: boolean
  dpr: number
  ready: boolean
}

export interface AlbumType {
  folder: string
  title: string
  cover: string
  year: number
  month: string
  length: number
  images: ImageType[]
}

// Photo value object
export interface ImageType {
  id: any
  public_id: any
  photoID: string
  albumID: string
  width: number
  height: number
  megas: number
  url: string
  big: string
  small: string
}

/**
 * Image raw from api
 * Example mapping:
    {
      public_id: 'mordisco/2022MAY/2327',
      albumID: '2022MAY',
      photoID: '2327',
      url: 'https://res.cloudinary.com/nvzf/image/upload/v1667052283/mordisco/2022MAY/2327.jpg',
      width: 4000,
      height: 2612,
      megas: 0.994327
    },
 */
export interface ImageApiType {
  public_id: string
  secure_url: any
  width: number
  height: number
  bytes: number
}
