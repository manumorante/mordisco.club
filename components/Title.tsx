interface Props {
  title: string
  folder: string
  month: string
  year: string
}

function Title({ title, folder, month, year }: Props) {
  return (
    <div className='inline-block py-10'>
      <h2 className='font-extralight text-4xl xs:text-5xl sm:text-6xl uppercase'>{title}</h2>

      <div className='flex'>
        <time
          dateTime={`${year}-${month}`}
          className='font-extralight text-xl xs:text-2xl uppercase'>
          <span className='opacity-80'>{month}</span> <span className='opacity-60'>{year}</span>
        </time>
      </div>
    </div>
  )
}

export default Title
