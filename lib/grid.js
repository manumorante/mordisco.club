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

export function getGridItem({ index, gridWidth, cols = 12, gap, isMobile }) {
  const usablelWidth = gridWidth - gap * (cols - 1)
  const one = usablelWidth / cols + gap

  const TEMPLATE = isMobile ? MOBILE : DESKTOP
  const item = TEMPLATE[index % TEMPLATE.length]

  const isImage = item[0] === 'i'
  const isQuote = item[0] === 'q'

  const row = 'span ' + item[2]
  const col = 'span ' + item[1]
  const ratio = item[1] / item[2]
  const width = Math.round(one * item[1] - gap)
  const height = Math.round(width / ratio)

  return {
    isImage,
    isQuote,
    style: {
      gridArea: `${row} / ${col} / ${row} / ${col}`,
    },
    width,
    height,
  }
}
