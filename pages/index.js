import { useState } from 'react'
import { albums } from 'data'
import { getImagesFromFolder } from '@/lib/cloudinary/directory.js'
import Layout from '@/app/Layout'
import Albums from '@/ui/Albums'
import Grid from '@/ui/Grid'
import Modal from '@/app/Modal'
import BigPhoto from '@/ui/BigPhoto'
import AlbumTitle from '@/ui/AlbumTitle'

// getStaticProps
export async function getStaticProps() {
  await Promise.all(
    albums.map(async (album) => {
      const images = await getImagesFromFolder(album.folder)

      album.images = images
      album.length = images.length
    })
  )

  return { props: { albums } }
}

export default function HomePage({ albums }) {
  const [showModal, setModal] = useState()
  const [modalImage, setModalImage] = useState()

  function openModal(photo) {
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

      <Albums className='mb-8' albums={albums} />

      {albums.map((album, i) => (
        <section key={i}>
          <AlbumTitle album={album} />
          <Grid items={album.images} openModal={openModal} />
        </section>
      ))}
    </Layout>
  )
}
