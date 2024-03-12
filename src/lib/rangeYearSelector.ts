import math from 'mathjs'
const currentYear = (new Date()).getFullYear()

function rangeYearSelector (hash, year: number) {
  year = Number(year)
  const ranges = {}
  let fromYear = 1950
  let toYear: number | math.BigNumber

  for (const hYear in hash) {
    if (hYear === 'present') {
      toYear = currentYear + 2
    } else {
      toYear = Number(hYear)
    }
    ranges[hYear] = math.range(fromYear, toYear)
    fromYear = toYear
    if (ranges[hYear]._data.indexOf(year) !== -1) {
      return hash[hYear]
    }
  }
  return hash.present
}

export default rangeYearSelector
