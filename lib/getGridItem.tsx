import { GRID } from '@/grid.config'

function getNearWidth(value: number) {
  const values = GRID.widths
  const minor = values.find((el) => el >= value)
  return minor || values.at(-1)
}

function getNearHeight(value: number) {
  return GRID.heights.find((el) => el >= value)
}

interface getGridItemProps {
  index: number
  gridWidth: number
  cols?: number
  gap: number
  isMobile: boolean
}

export default function getGridItem({
  index,
  gridWidth,
  cols = 12,
  gap,
  isMobile,
}: getGridItemProps) {
  const usablelWidth = gridWidth - gap * (cols - 1)
  const one = usablelWidth / cols + gap

  const grid = isMobile ? GRID.mobile : GRID.desktop
  const item: any[] = grid[index % grid.length]

  const isImage = item[0] === 'i'
  const isQuote = item[0] === 'q'

  const isSquare = item[1] === item[2]
  const row = 'span ' + item[2]
  const col = 'span ' + item[1]
  const ratio = item[1] / item[2]
  const width = Math.round(one * item[1] - gap)
  const height = isSquare ? width : Math.round(width / ratio)
  const nearWidth = getNearWidth(width)
  const nearHeight = isSquare ? nearWidth : getNearHeight(height)

  return {
    isImage,
    isQuote,
    style: {
      gridArea: `${row} / ${col} / ${row} / ${col}`,
    },
    width,
    height,
    nearWidth,
    nearHeight,
  }
}
