import { cloudinary } from "@/lib"
import { ALBUMS, quotes, routes } from "@/data"
import Link from "next/link"
import Image from "next/image"
import { Fragment } from "react"

export function generateStaticParams() {
  return ALBUMS.map((album) => ({
    id: album.folder,
  }))
}

export default async function AlbumPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const album = ALBUMS.find((album) => album.folder === id)

  const images = await cloudinary.api.resources({
    resource_type: "image",
    type: "upload",
    max_results: 90,
    prefix: routes.root + "/" + id,
  })

  let quoteIndex = 0

  return (
    <div className="Album">
      <div className="flex gap-2 px-3 pb-3 overflow-x-auto lg:justify-center">
        {ALBUMS.map((album) => (
          <Link
            className="bg-black-700 lg:hover:bg-black-500 transition-colors px-3 py-1.5 text-sm leading-tight uppercase rounded-lg flex items-center justify-center whitespace-nowrap"
            href={`/album/${album.folder}`}
            key={album.folder}
          >
            <span>{album.artists[0]}</span>
          </Link>
        ))}
      </div>
      {album && (
        <div className="p-5">
          <h1 className="font-extralight text-4xl sm:text-6xl lg:text-center uppercase leading-none my-5">
            {album.artists.map((artist, index) => (
              <div key={artist}>
                {artist}
                {index < album.artists.length - 1 && ", "}
              </div>
            ))}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {images.resources.map(
              (
                {
                  url,
                  public_id,
                  version,
                }: {
                  url: string
                  public_id: string
                  version: number
                },
                index: number
              ) => {
                const base = "http://res.cloudinary.com/nvzf/image/upload"
                const src = `${base}/w_375,h_300,dpr_2.0,c_fill,g_faces/v${version}/${public_id}.jpg`
                const viewURL = `${base}/v${version}/${public_id}.jpg`
                const randomNumber = Math.floor(Math.random() * 7) + 4
                const shouldRenderParagraph = (index + 1) % randomNumber === 0

                const currentQuote = quotes[quoteIndex]

                if (shouldRenderParagraph) {
                  quoteIndex = (quoteIndex + 1) % quotes.length
                }

                return (
                  <Fragment key={url}>
                    <Link href={viewURL} target="_blank">
                      <Image
                        className="w-full h-full object-cover rounded-md"
                        src={src}
                        alt=""
                        width={375}
                        height={300}
                      />
                    </Link>

                    {shouldRenderParagraph && (
                      <div className="w-full min-h-[50vh] Quote bg-gradient-to-br from-neutral-900 px-11 py-28 sm:px-10 sm:py-14 lg:px-14 lg:py-20 rounded-md flex items-center">
                        <p className="font-serif text-neutral-300 mb-4 text-4xl sm:text-5xl">
                          {currentQuote.text}
                        </p>
                      </div>
                    )}
                  </Fragment>
                )
              }
            )}
          </div>
        </div>
      )}
    </div>
  )
}
