/**
 * getOrCreateKey
 */
function getOrCreateKey(key: string): number {
  const value = localStorage.getItem(key)
  if (value && Number(value)) {
    return Number(value)
  }

  localStorage.setItem(key, '1')
  return 1
}

/**
 * incrementKey
 */
export function incrementKey(key: string): number {
  const value = getOrCreateKey(key) + 1
  localStorage.setItem(key, String(value))
  return value
}
