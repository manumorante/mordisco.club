export const isDev = (): boolean => {
  return process.env.NODE_ENV === 'development'
}

export const isProd = (): boolean => {
  return process.env.NODE_ENV === 'production'
}

export const isNullOrUndefined = (value: unknown): boolean => {
  return value === null || value === undefined
}

export const isValidObject = (value: unknown): boolean => {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
