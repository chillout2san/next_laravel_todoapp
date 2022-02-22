const today = new Date()

export const presentYear = today.getFullYear()
export const presentMonth = today.getMonth() + 1
export const presentDate = today.getDate()

const yearListForPrepare = [...Array(5)]
export const yearList = yearListForPrepare.map((_year, index) =>
  (presentYear + index).toString()
)

const monthListForPrepare = [...Array(12)]
export const monthList = monthListForPrepare.map((_month, index) =>
  (index + 1).toString()
)

const dateListForPrepare = [...Array(31)]
export const dateList = dateListForPrepare.map((_date, index) =>
  (index + 1).toString()
)

export const separateFromDate = (date: string) => {
  const target = new Date(date)
  const targetYear = target.getFullYear().toString()
  const targetMonth = (target.getMonth() + 1).toString()
  const targetDate = target.getDate().toString()
  return { targetYear, targetMonth, targetDate }
}
