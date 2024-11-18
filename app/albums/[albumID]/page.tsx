import Grid from "@/components/Grid"
import getAlbum from "@/utils/getAlbum"
import AlbumCards from "@/components/AlbumCards"

export default async function Page({
  params,
}: {
  params: { albumID: string }
}) {
  const { albumID } = params
  const album = await getAlbum({ albumID })

  if (!album) return <div>Album not found</div>
  const { title, year, month, images } = album

  return (
    <>
      <AlbumCards activeID={albumID} />

      {album && (
        <div className="container">
          <div className="inline-block py-10">
            <h2 className="font-extralight text-4xl xs:text-5xl sm:text-6xl uppercase">
              {title}
            </h2>

            <div className="flex">
              <time
                dateTime={`${year}-${month}`}
                className="font-extralight text-xl xs:text-2xl uppercase"
              >
                <span className="opacity-80">{month}</span>{" "}
                <span className="opacity-60">{year}</span>
              </time>
            </div>
          </div>

          <div className="p-4">
            <Grid items={images} />
          </div>
        </div>
      )}
    </>
  )
}
