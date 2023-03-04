import { getAlbums } from 'lib/cloudinary/getAlbums'
import { AlbumCardList, BigPhoto, AlbumSection } from 'components/albums'
import { Layout, Modal } from 'components/ui'
import { useModal } from 'lib'
import { useRouter } from 'next/router'

export async function getStaticProps() {
  const albums = await getAlbums()
  return { props: { albums } }
}

function HomePage({ albums }: { albums: any[] }) {
  const { albumID } = useRouter().query

  // Si albumID existe, buscarlo en albums sino, tomar el primero
  const album = albums.find((album) => album.folder === albumID) || albums[0]

  const modal = useModal()

  function openPhoto(photo: any) {
    modal.open(<BigPhoto photo={photo} />)
  }

  function closePhoto() {
    modal.close()
  }

  return (
    <Layout>
      <Modal visible={modal.visible} close={closePhoto} content={modal.content} />

      <AlbumCardList className='mb-8' albums={albums} activeID={album.folder} />

      {album && <AlbumSection album={album} openPhoto={openPhoto} />}
    </Layout>
  )
}

export default HomePage
