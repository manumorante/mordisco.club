import { quotes } from 'data'
import { useCounter, largestWord } from '@/lib'
import cx from 'classnames'

interface Props {
  style: any // TODO: style type?
}

function Quote({ style }: Props) {
  const counter = useCounter('QUOTES_USED')
  const quote = quotes[counter % quotes.length]
  const length = largestWord(quote.text).length

  return (
    <div
      className='Quote bg-gradient-to-br from-neutral-900 px-11 py-28 sm:px-10 sm:py-14 lg:px-14 lg:py-20 rounded-md flex items-center'
      style={style}>
      <div>
        <p
          className={cx('font-serif text-neutral-300 mb-4', {
            'text-4xl sm:text-5xl': length <= 10,
            'text-3xl sm:text-4xl': length > 10,
          })}>
          {quote.text}
        </p>
        <p className='text-xl text-neutral-400'>{quote.author}</p>
      </div>
    </div>
  )
}

export default Quote
