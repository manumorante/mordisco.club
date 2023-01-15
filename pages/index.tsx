import { useState } from 'react'
import { getAlbums } from 'lib/cloudinary/getAlbums'
import { AlbumCardList, BigPhoto, AlbumSection } from '@/components/albums'
import { Layout, Modal } from 'components/ui'

export async function getStaticProps() {
  const albums = await getAlbums()
  return { props: { albums } }
}

function HomePage({ albums }: { albums: any[] }) {
  const [showModal, setModal] = useState<any>()
  const [modalImage, setModalImage] = useState<any>()

  function openModal(photo: any) {
    setModalImage(photo)
    setModal(true)
  }

  function closeModal() {
    setModal(false)
    setModalImage(null)
  }

  return (
    <Layout>
      <Modal visible={showModal} close={closeModal}>
        <BigPhoto photo={modalImage} />
      </Modal>

      <AlbumCardList className='mb-8' albums={albums} activeID={albums[0]?.folder} />

      {albums.map((album, i) => (
        <AlbumSection key={i} album={album} openModal={openModal} />
      ))}
    </Layout>
  )
}

export default HomePage
