import { getAlbums, routes } from "@/utils/data"
import cx from "clsx"
import AlbumCard from "@/components/AlbumCard"
import Link from "next/link"

export default function AlbumCards({ activeID }: { activeID?: string }) {
  const albums = getAlbums()

  const mainCx = cx(
    "Albums",
    "bg-black-800/80 backdrop-saturate-150 backdrop-blur-xl",

    // Items aligned to the right (at start) on mobile and centered on desktop
    "flex justify-center"
  )
  const contentCx = cx("Content p-4 flex gap-4 snap-x overflow-x-auto")
  const cardCx = cx("snap-proximity shrink-0")

  return (
    <div className={mainCx}>
      <div className={contentCx}>
        {albums.map(({ albumID, title, cover }) => (
          <Link href={`/albums/${albumID}`} key={albumID}>
            <AlbumCard
              className={cardCx}
              src={`https://res.cloudinary.com/${routes.cloudName}/image/upload/c_thumb,dpr_auto,w_140,h_140/${routes.root}/${albumID}/${cover}.jpg`}
              title={title}
              isActive={albumID === activeID}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
