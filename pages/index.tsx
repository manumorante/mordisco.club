import { useState } from 'react'
import { ALBUMS } from 'data'
import { getImagesFromFolder } from 'lib/cloudinary/directory'
import { Albums, BigPhoto, Title } from 'components/album'
import { Layout, Grid, Modal, ZeroCase } from 'components/ui'
import { AlbumType } from '@/types'

// getStaticProps
export async function getStaticProps() {
  const albums: AlbumType[] = [...ALBUMS]
  await Promise.all(
    albums.map(async (album) => {
      const images = await getImagesFromFolder(album.folder)

      if (images && images?.length > 0) {
        album.images = images
        album.length = images.length
      }
    })
  )

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

      <Albums className='mb-8' albums={albums} activeID={albums[0]?.folder} />

      {albums.map((album, i) => (
        <section key={i}>
          <Title album={album} />
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

export default HomePage
