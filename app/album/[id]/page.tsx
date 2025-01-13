import { cloudinary } from "@/lib"
import { ALBUMS, quotes, routes } from "@/data"
import Link from "next/link"
import Image from "next/image"
import { Fragment } from "react"
import { Albums } from "@/components"

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
  let intervalCount = 1
  let randomInterval = 4

  return (
    <div className="Album">
      <Albums />

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
              ({
                url,
                public_id,
                version,
              }: {
                url: string
                public_id: string
                version: number
              }) => {
                const base = "http://res.cloudinary.com/nvzf/image/upload"
                const src = `${base}/w_390,h_280,dpr_2.0,c_fill,g_faces/v${version}/${public_id}.jpg`
                const viewURL = `${base}/v${version}/${public_id}.jpg`
                const shouldRenderQuote = intervalCount === randomInterval
                const currentQuote = quotes[quoteIndex]

                intervalCount++

                if (shouldRenderQuote) {
                  quoteIndex = (quoteIndex + 1) % quotes.length
                  randomInterval = Math.floor(Math.random() * 3) + 4
                  intervalCount = 0
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

                    {shouldRenderQuote && (
                      <div className="w-full min-h-[50vh] lg:min-h-[auto] Quote bg-gradient-to-br from-neutral-900 px-11 py-28 sm:px-10 sm:py-14 rounded-md flex items-center">
                        <div>
                          <p className="font-serif text-neutral-300 mb-4 text-4xl lg:text-3xl">
                            {currentQuote.text}
                          </p>
                          <p className="text-xl text-neutral-400">{currentQuote.author}</p>
                        </div>
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
