import cx from "clsx"
import Image from "next/image"

export default function AlbumCard({ title, src, isActive, className }: Props) {
  const mainCx = cx(
    "Album",
    "relative flex flex-col gap-2",
    {
      "text-red-500": isActive,
    },

    "w-[140px]",

    className
  )

  const titleCx = cx(
    // Position
    "absolute right-0 bottom-0 left-0",
    "p-3",
    "rounded",

    "text-base leading-[14px]",
    "mm:text-lg mm:leading-4",

    "bg-gradient-to-t via-black-800 from-black-900"
  )

  const imgCx = cx("w-full h-auto aspect-square rounded")

  return (
    <div className={mainCx}>
      <Image className={imgCx} src={src} width={140} height={140} alt="Cover" />
      <div className={titleCx}>{title}</div>
    </div>
  )
}

type Props = {
  title: string
  src: string
  isActive: boolean
  className: string
}
