export default function largestWord(text: string) {
  const array = text.split(' ')
  const sorted = array.sort((a, b) => b.length - a.length)
  return sorted[0]
}
