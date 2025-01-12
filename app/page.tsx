import { ALBUMS } from "@/data"
import Link from "next/link"

export default function Home() {
  return (
    <div className="">
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
    </div>
  )
}
