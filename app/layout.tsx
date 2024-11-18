import "./globals.css"
import Header from "@/components/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mordisco Club",
  description:
    "Fotos de las fiestas de música electrónica Mordisco CLub en Granada",
}

function RootLayout({ children }: { children: React.ReactNode }) {
  let bodyCx = ""
  bodyCx += inter.className

  return (
    <html lang="es">
      <body className={bodyCx}>
        <Header />
        {children}
      </body>
    </html>
  )
}
export default RootLayout
