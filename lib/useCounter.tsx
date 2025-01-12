import { useState } from 'react'
import { parseZero } from '@/lib'
import { useEffect } from 'react'

/**
 * useCounter
 */
export default function useCounter(key: string): number {
  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    const local = localStorage.getItem(key)
    const incremented = parseZero(local) + 1

    localStorage.setItem(key, String(incremented))
    setValue(incremented)
  }, [])

  return value
}
