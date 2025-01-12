import { useEffect, useState } from 'react'

export default function useCounter(key: string): number {
  const [value, setValue] = useState<number>(0)

  function parseZero(input: any): number {
    return typeof input === 'number' ? input : parseFloat(input) || 0
  }

  useEffect(() => {
    const local = localStorage.getItem(key)
    const incremented = parseZero(local) + 1

    localStorage.setItem(key, String(incremented))
    setValue(incremented)
  }, [])

  return value
}
