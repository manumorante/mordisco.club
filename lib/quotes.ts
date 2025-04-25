import { QUOTES } from '@/data/quotes'
import { Quote } from '@/types'
import { isSSR } from '@/lib/utils'

export function getQuotes() {
  return QUOTES
}

export function getQuote(): Quote | null {
  // En SSR, devolvemos una cita aleatoria
  if (isSSR()) {
    const randomIndex = Math.floor(Math.random() * QUOTES.length)
    return QUOTES[randomIndex]
  }

  // En el cliente, usamos la lógica existente con localStorage
  if (Math.random() < 0.5) return null

  const quotes = getQuotes()
  const currentIndex = parseInt(localStorage.getItem('quoteIndex') || '0')
  const nextIndex = (currentIndex + 1) % quotes.length

  localStorage.setItem('quoteIndex', nextIndex.toString())

  return quotes[currentIndex]
}
