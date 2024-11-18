import cx from "clsx"
import Logo from "@/components/Logo"
import Link from "next/link"

export default function Header() {
  const mainCx = cx(
    "Header",
    "h-header-md",
    "bg-black-900/90 backdrop-saturate-150 backdrop-blur-xl"
  )

  const containerCx = cx("container flex justify-between items-center")

  return (
    <>
      <div className={mainCx}>
        <div className={containerCx}>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
      </div>
    </>
  )
}
