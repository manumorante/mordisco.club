import { getAlbums } from 'lib/cloudinary/getAlbums'
import { AlbumCardList, BigPhoto, AlbumSection } from 'components/albums'
import { Layout, Modal } from 'components/ui'
import { useModal } from 'lib'

export async function getStaticProps() {
  const albums = await getAlbums()
  return { props: { albums } }
}

function HomePage({ albums }: { albums: any[] }) {
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

      <AlbumCardList className='mb-8' albums={albums} activeID={albums[0]?.folder} />

      {albums.map((album, i) => (
        <AlbumSection key={i} album={album} openPhoto={openPhoto} />
      ))}
    </Layout>
  )
}

export default HomePage
