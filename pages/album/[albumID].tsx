import React, { useState } from 'react'

import { ALBUMS } from 'data'
import { getImagesFromFolder } from 'lib/cloudinary/directory'
import { Layout, Modal } from 'components/ui'
import { BigPhoto, AlbumCardList, AlbumSection } from 'components/albums'

// getStaticPaths
export async function getStaticPaths() {
  const paths = ALBUMS.map((album) => ({
    params: { albumID: album.folder },
  }))

  return { paths, fallback: false }
}

// getStaticProps
export async function getStaticProps({ params }: { params: { albumID: string } }) {
  const { albumID } = params
  const album = ALBUMS.find((album) => album.folder === albumID)
  const images = await getImagesFromFolder(albumID)
  return { props: { albumID, album, images } }
}

interface Props {
  albumID: string
  album: any // TODO: album type?
  images: any[]
}

function Album({ albumID, album, images }: Props) {
  const [showModal, setModal] = useState<boolean>(false)
  const [modalImage, setModalImage] = useState<any>()

  if (!images) return null

  function openModal(photo: string) {
    setModalImage(photo)
    setModal(true)
  }

  function closeModal() {
    setModal(false)
    setModalImage(null)
  }

  return (
    <Layout>
      <Modal visible={showModal} close={() => closeModal()}>
        <BigPhoto photo={modalImage} />
      </Modal>

      <AlbumCardList className='mb-8' albums={ALBUMS} activeID={albumID} />
      <AlbumSection album={album} openPhoto={openModal} />
    </Layout>
  )
}

export default Album
