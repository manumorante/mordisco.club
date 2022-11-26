// prettier-ignore
export const MOBILE = [
  ['i', 12,10],
  ['i', 8,8], ['i', 4,4], ['i', 4,4],
  ['q', 12,10],
  ['i', 12,10],
  ['i', 7,6], ['i', 5,6],
  ['i', 12,10],
  ['i', 8,8], ['i', 4,4], ['i', 4,4],
  ['q', 12,10],
  ['i', 5,6], ['i', 7,6],
  ['i', 12,10],
  ['i', 4,4], ['i', 4,4], ['i', 4,4],
  ['i', 12,10],
  ['i', 6,6], ['i', 6,6],
  ['i', 12,10],
  ['i', 8,8], ['i', 4,4], ['i', 4,4],
  ['i', 4,4], ['i', 4,4], ['i', 4,4],
  ['q',   12,12],
  ['i', 12,10],
  ['i', 6,6], ['i', 6,6],
  ['i', 6,6], ['i', 6,6],
  ['q', 12,12],
  ['i', 12,10],
  ['i', 4,4], ['i', 4,4], ['i', 4,4],
  ['i', 4,4], ['i', 4,4], ['i', 4,4],  
]

// prettier-ignore
export const DESKTOP = [
  ['i',8,6], ['i',4,3], ['i',4,3],
  ['i',4,3], ['q',8,6], ['i',4,3], 
  ['i',2,2], ['i',2,2], ['i',2,2], ['i',2,2], ['i',2,2], ['i',2,2],
  ['i',7,6], ['i',5,6],
  ['i',6,4], ['i',6,4],
  ['i',6,4], ['i',6,4],
  ['i',4,4], ['i',4,4], ['i',4,4],
  ['i',4,4], ['i',4,4], ['i',4,4],
  ['q',7,6], ['i',5,6],
  ['i',5,4], ['i',7,4],

]

export const TEMPLATE = {
  mobile: MOBILE,
  desktop: DESKTOP,
}

function getNearWidth(value) {
  const values = [80, 98, 105, 147, 155, 180, 187, 216, 229, 280, 314, 335, 398, 478, 482, 565, 649]
  const minor = values.find((el) => el >= value)
  return minor || values.at(-1)
}

function getNearHeight(value) {
  const values = [80, 98, 105, 133, 147, 160, 172, 180, 216, 233, 235, 279, 314, 321, 364, 484, 491]
  return values.find((el) => el >= value)
}

export function getGridItem({ index, gridWidth, cols = 12, gap, isMobile }) {
  const usablelWidth = gridWidth - gap * (cols - 1)
  const one = usablelWidth / cols + gap

  const TEMPLATE = isMobile ? MOBILE : DESKTOP
  const item = TEMPLATE[index % TEMPLATE.length]

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
