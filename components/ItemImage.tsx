import { routes } from "@/utils/data"
import Image from "next/image"
import { ImageType } from "@/types"

export default function ItemImage({ image }: { image: ImageType }) {
  const { photoID, public_id, width, height } = image
  const trans = `c_scale,w_375,dpr_2`

  return (
    <Image
      key={photoID}
      src={[routes.cloudBase, trans, public_id].join("/")}
      width={width}
      height={height}
      alt=""
      className="w-full  h-full object-cover object-top rounded-md"
    />
  )
}
