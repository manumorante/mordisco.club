import { GridLayout, AreaList } from "@/types"

const layout: GridLayout = [
  { area: "a-12", times: 1 },
  { area: "a-88", times: 1 },
  { area: "a-44", times: 2 },
  { area: "a-12", times: 1 },
  { area: "a-65", times: 1 },
  { area: "a-67", times: 1 },
  { area: "a-12", times: 1 },
  { area: "a-44", times: 3 },
  { area: "a-12", times: 1 },
  { area: "a-66", times: 2 },
  { area: "a-12", times: 1 },
  { area: "a-88", times: 1 },
  { area: "a-44", times: 5 },
  { area: "a-12", times: 1 },
  { area: "a-66", times: 4 },
  { area: "a-12", times: 1 },
  { area: "a-44", times: 6 },
  { area: "a-12", times: 1 },
]

let areaClassList: AreaList = []
export const getAreaClasses = () => {
  layout.map(({ area, times }) => {
    const areaTimes: AreaList = Array.from({ length: times }, () => area)
    areaClassList = [...areaClassList, ...areaTimes]
  })

  return areaClassList
}
