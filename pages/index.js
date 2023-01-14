import { useState } from 'react'
import { ALBUMS } from 'data'
import { getImagesFromFolder } from 'lib/cloudinary/directory.js'
import Layout from 'components/app/Layout'
import Albums from 'components/ui/Albums'
import Grid from 'components/ui/Grid'
import Modal from 'components/app/Modal'
import BigPhoto from 'components/ui/BigPhoto'
import AlbumTitle from 'components/ui/AlbumTitle'
import ZeroCase from 'components/ui/ZeroCase'

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
