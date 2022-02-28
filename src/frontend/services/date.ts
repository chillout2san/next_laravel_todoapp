const today = new Date()

export const presentYear = today.getFullYear()
export const presentMonth = today.getMonth() + 1
export const presentDate = today.getDate()

export const yearList = [...Array(5)].map((_year, index) =>
  (presentYear + index).toString()
)

export const monthList = [...Array(12)].map((_month, index) =>
  (index + 1).toString()
)

export const dateList = [...Array(31)].map((_date, index) =>
  (index + 1).toString()
)

export const separateFromDate = (date: string) => {
  const target = new Date(date)
  const targetYear = target.getFullYear().toString()
  const targetMonth = (target.getMonth() + 1).toString()
  const targetDate = target.getDate().toString()
  return { targetYear, targetMonth, targetDate }
}
