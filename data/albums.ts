import { Album } from '@/types'

const coverTrans = `https://res.cloudinary.com/nvzf/image/upload/w_200,ar_1:1,c_fill,g_auto`

export const ALBUMS: Album[] = [
  {
    folder: '2024NOV',
    artists: ['Theo Kottis', 'Cobertizo', 'Isa Ruíz', 'L´Stringher'],
    cover: `${coverTrans}/v1736634638/mordisco/2024NOV/IMG_3730_luwowr.jpg`,
  },
  {
    folder: '2024SEP',
    artists: ['Baldo', 'Fernanda Arrau', 'Cobertizo', 'Deceit'],
    cover: `${coverTrans}/v1736635741/mordisco/2024SEP/_MG_4253_hlju24.jpg`,
  },
  {
    folder: '2022NOV',
    artists: ['Fabrizio Mammarella', 'Yahaira', 'Cobertizo', 'Lelüsh'],
    cover: `${coverTrans}/v1669413702/mordisco/2022NOV/2905.jpg`,
  },
  {
    folder: '2022MAY',
    artists: ['Budino', 'Moderna', 'Cobertizo', 'Buma'],
    cover: `${coverTrans}/v1667052285/mordisco/2022MAY/2222.jpg`,
  },
  {
    folder: '2022MAR',
    artists: ['Shubostar', 'Álvaro Cabana', 'Durand', 'Cobertizo'],
    cover: `${coverTrans}/v1667096402/mordisco/2022MAR/1675.jpg`,
  },
  {
    folder: '2020FEB',
    artists: ['Eagles & Butterflies', 'Mordisco', 'Iro Aka', 'John Low'],
    cover: `${coverTrans}/v1668211358/mordisco/2020FEB/3036656966366357.jpg`,
  },
  {
    folder: '2019NOV',
    artists: ['Curses', 'Mordisco', 'Durand', 'Lelüsh'],
    cover: `${coverTrans}/v1668212375/mordisco/2019NOV/2832408496791206.jpg`,
  },
]
