/**
 * Devuelve siempre un valor númerico, o 0
 */
export default function parseZero(input: any): number {
  return typeof input === 'number' ? input : parseFloat(input) || 0
}
