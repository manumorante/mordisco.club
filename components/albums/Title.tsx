import Link from 'next/link'

interface Props {
  title: string
  folder: string
  month: string
  year: string
}

function Title({ title, folder, month, year }: Props) {
  return (
    <Link href={`/album/${folder}`} className='inline-block py-10'>
      <h3 className='font-extralight text-4xl xs:text-5xl sm:text-6xl uppercase'>{title}</h3>

      <h2 className='font-extralight text-xl xs:text-2xl uppercase'>
        <span className='opacity-80'>{month}</span> <span className='opacity-60'>{year}</span>
      </h2>
    </Link>
  )
}

export default Title
