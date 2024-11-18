import cx from "clsx"
import { getAreaClasses } from "@/utils/grid"
import ItemImage from "./ItemImage"

export default function Grid({ items }: { items: any[] }) {
  const areaClasses = getAreaClasses()

  return (
    <div className="Grid">
      {items.map((image, index) => {
        const step = index % areaClasses.length

        return (
          <div key={image.photoID} className={cx("Area", areaClasses[step])}>
            <ItemImage image={image} />
          </div>
        )
      })}
    </div>
  )
}
