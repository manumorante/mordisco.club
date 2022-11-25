import React, { useState } from 'react'
import { ALBUMS } from 'data'
import { getImagesFromFolder } from '@/lib/cloudinary/directory.js'
import Layout from '@/app/Layout'
import Modal from '@/app/Modal'
import BigPhoto from '@/ui/BigPhoto'
import Albums from '@/ui/Albums'
import Grid from '@/ui/Grid'
import AlbumTitle from '@/ui/AlbumTitle'
import ZeroCase from '@/ui/ZeroCase'

// getStaticPaths
export async function getStaticPaths() {
  const paths = ALBUMS.map((album) => ({
    params: { albumID: album.folder },
  }))

  return { paths, fallback: false }
}

// getStaticProps
export async function getStaticProps({ params }) {
  const { albumID } = params
  const album = ALBUMS.find((album) => album.folder === albumID)
  const images = await getImagesFromFolder(albumID)
  return { props: { albumID, album, images } }
}

export default function Album({ albumID, album, images }) {
  const [showModal, setModal] = useState()
  const [modalImage, setModalImage] = useState()

  if (!images) return null

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
      <Modal visible={showModal} close={() => closeModal()}>
        <BigPhoto photo={modalImage} />
      </Modal>

      <Albums className='mb-8' albums={ALBUMS} activeID={albumID} />

      <AlbumTitle album={album} />
      {images.length > 0 ? <Grid items={images} openModal={openModal} /> : <ZeroCase />}
    </Layout>
  )
}
