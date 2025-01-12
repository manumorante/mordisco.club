import { Logo } from "@/components"
import Link from "next/link"

export default function Header() {
  return (
    <div className="Header py-10 flex justify-center items-center">
      <Link href="/">
        <Logo className="w-36 h-auto" />
      </Link>
    </div>
  )
}
