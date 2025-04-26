/**
 * Verifica si el entorno actual es de desarrollo
 */
export const isDev = (): boolean => {
  return process.env.NODE_ENV === 'development'
}

/**
 * Verifica si el entorno actual es de producción
 */
export const isProd = (): boolean => {
  return process.env.NODE_ENV === 'production'
}

/**
 * Verifica si un valor es nulo o indefinido
 */
export const isNullOrUndefined = (value: unknown): boolean => {
  return value === null || value === undefined
}

/**
 * Verifica si un valor es un objeto válido
 */
export const isValidObject = (value: unknown): boolean => {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}
