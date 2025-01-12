import Title from './Title'
import { Grid } from '@/components'

interface Props {
  album: {
    title: string
    folder: string
    year: string
    month: string
    images: []
  }
  openPhoto: Function
}

function AlbumSection({ album, openPhoto }: Props) {
  if (album?.images?.length <= 0) return null

  return (
    <section id={`album${album.folder}`}>
      <Title title={album.title} folder={album.folder} year={album.year} month={album.month} />
      <Grid items={album.images} openPhoto={openPhoto} />
    </section>
  )
}

export default AlbumSection
