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

export function resetQuotes(): void {
  counter = 0
  quoteIndex = 0
}

export function getTotalQuotes(): number {
  return QUOTES.length
}
