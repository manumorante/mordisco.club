import { QUOTES } from '@/data/quotes'
import { Quote } from '@/types'

let contador = 0

export function getQuote(): Quote | null {
  contador++
  if (contador === 6) {
    contador = 0
    return QUOTES[Math.floor(Math.random() * QUOTES.length)]
  }

  return null
}
