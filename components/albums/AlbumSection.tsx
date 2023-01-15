import { Title } from '@/components/albums'
import { Grid, ZeroCase } from 'components/ui'

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
  if (album?.images?.length <= 0) return <ZeroCase />

  return (
    <section id={`album${album.folder}`} title={album.title}>
      <Title title={album.title} folder={album.folder} year={album.year} month={album.month} />
      <Grid items={album.images} openPhoto={openPhoto} />
    </section>
  )
}

export default AlbumSection
