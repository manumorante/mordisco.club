function getOrCreateKey(key) {
  const value = localStorage.getItem(key)
  if (value && Number(value)) {
    return Number(value)
  }

  localStorage.setItem(key, 1)
  return 1
}

export function incrementKey(key) {
  const value = getOrCreateKey(key) + 1
  localStorage.setItem(key, value)
  return value
}
