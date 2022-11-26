import { quotes } from 'data'
import cx from 'classnames'

const Quote = ({ index, style }) => {
  const quote = quotes[index % quotes.length]
  const text = quote.text
  const array = text.split(' ')
  const sorted = array.sort((a, b) => b.length - a.length)
  const length = sorted[0].length

  return (
    <div
      title={length}
      className='Quote bg-gradient-to-br from-neutral-900 px-11 py-28 sm:px-10 sm:py-14 lg:px-14 lg:py-20 rounded-md flex items-center'
      style={style}>
      <div>
        <p
          className={cx('font-serif text-neutral-300 mb-4', {
            'text-4xl sm:text-5xl': length <= 10,
            'text-3xl sm:text-4xl': length > 10,
          })}>
          {text}
        </p>
        <p className='text-xl text-neutral-400'>{quote.author}</p>
      </div>
    </div>
  )
}

export default Quote
