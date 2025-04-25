import { getQuote } from '@/lib/quotes'

export default function QuoteBox() {
  const quote = getQuote()
  if (!quote) return

  return (
    <div className="Quote flex min-h-[50vh] w-full items-center rounded-md bg-gradient-to-br from-neutral-900 px-11 py-28 sm:px-10 sm:py-14 lg:min-h-[auto]">
      <div>
        <p className="mb-4 font-serif text-4xl text-neutral-300 lg:text-3xl">{quote.text}</p>
        <p className="text-xl text-neutral-400">{quote.author}</p>
      </div>
    </div>
  )
}
