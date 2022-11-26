import { useState } from 'react'
import { ALBUMS } from 'data'
import { getImagesFromFolder } from '@/lib/cloudinary/directory.js'
import Layout from '@/app/Layout'
import Albums from '@/ui/Albums'
import Grid from '@/ui/Grid'
import Modal from '@/app/Modal'
import BigPhoto from '@/ui/BigPhoto'
import AlbumTitle from '@/ui/AlbumTitle'
import ZeroCase from '@/ui/ZeroCase'

// getStaticProps
export async function getStaticProps() {
  const albums = [...ALBUMS]
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

      <Albums className='mb-8' albums={albums} activeID={albums[0]?.folder} />

      {albums.map((album, i) => (
        <section key={i}>
          <AlbumTitle album={album} />
          {album?.images?.length > 0 ? (
            <Grid items={album.images} openModal={openModal} />
          ) : (
            <ZeroCase />
          )}
        </section>
      ))}
    </Layout>
  )
}
