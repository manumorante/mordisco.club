import { QUOTES } from '@/data/quotes'
import { Quote } from '@/types'

let counter = 0
let quoteIndex = 0

export function getQuote(): Quote | null {
  counter++
  if (counter === 6) {
    counter = 0
    const quote = QUOTES[quoteIndex]
    quoteIndex = (quoteIndex + 1) % QUOTES.length
    return quote
  }

  return null
}
