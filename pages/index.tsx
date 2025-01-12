import { getAlbums } from '@/lib/cloudinary/getAlbums'
import { AlbumCardList, BigPhoto, AlbumSection } from '@/components'
import { Header, Modal } from '@/components'
import { useModal } from '@/lib'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export async function getStaticProps() {
  const albums = await getAlbums()
  return { props: { albums } }
}

function HomePage({ albums }: { albums: any[] }) {
  const { albumID } = useRouter().query
  const [isTop, setIsTop] = useState(true)

  // Si albumID existe, buscarlo en albums sino, tomar el primero
  const album = albums.find((album) => album.folder === albumID) || albums[0]

  // Scroll control
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const modal = useModal()

  function openPhoto(photo: any) {
    modal.open(<BigPhoto photo={photo} />)
  }

  function closePhoto() {
    modal.close()
  }

  return (
    <>
      <Header isTop={isTop} />
      <Modal visible={modal.visible} close={closePhoto} content={modal.content} />

      <AlbumCardList isTop={isTop} albums={albums} activeID={album.folder} />

      {album && (
        <div className='mx-auto max-w-6xl px-5 h-full'>
          <AlbumSection album={album} openPhoto={openPhoto} />
        </div>
      )}
    </>
  )
}

export default HomePage
