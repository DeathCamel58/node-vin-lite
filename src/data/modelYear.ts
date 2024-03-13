type ModelYear = Record<string, { value: number, years: number[] }>

const modelYearDictionary: ModelYear = {
  A: { value: 1, years: [1980, 2010] },
  B: { value: 3, years: [1981, 2011] },
  C: { value: 4, years: [1982, 2012] },
  D: { value: 5, years: [1983, 2013] },
  E: { value: 6, years: [1984, 2014] },
  F: { value: 7, years: [1985, 2015] },
  G: { value: 8, years: [1986, 2016] },
  H: { value: 9, years: [1987, 2017] },
  J: { value: 10, years: [1988, 2018] },
  K: { value: 11, years: [1989, 2019] },
  L: { value: 12, years: [1990, 2020] },
  M: { value: 13, years: [1991, 2021] },
  N: { value: 14, years: [1992, 2022] },
  P: { value: 15, years: [1993, 2023] },
  R: { value: 16, years: [1994, 2024] },
  S: { value: 17, years: [1995, 2025] },
  T: { value: 18, years: [1996, 2026] },
  V: { value: 19, years: [1997, 2027] },
  W: { value: 20, years: [1998, 2028] },
  X: { value: 21, years: [1999, 2029] },
  Y: { value: 22, years: [2000, 2030] },
  1: { value: 23, years: [2001, 2031] },
  2: { value: 24, years: [2002, 2032] },
  3: { value: 25, years: [2003, 2033] },
  4: { value: 26, years: [2004, 2034] },
  5: { value: 27, years: [2005, 2035] },
  6: { value: 28, years: [2006, 2036] },
  7: { value: 29, years: [2007, 2037] },
  8: { value: 30, years: [2008, 2038] },
  9: { value: 31, years: [2009, 2039] }
}

/**
 * Returns the model year(s) for a VIN
 *
 * TODO: Determine which of the two should be returned in a better way than setting a maximum
 *
 * !!!NOTE!!!
 *     This only returns years 1995-2024
 * @param vin The VIN to check
 */
function modelYear (vin: string): number {
  const yearDigit = vin[9]
  let year: number

  // Get the current year, and calculate the switch code
  const currentYear = new Date().getFullYear()
  let switchValue: number

  for (const key in modelYearDictionary) {
    if (modelYearDictionary[key].years.includes(currentYear)) {
      switchValue = modelYearDictionary[key].value
    }
  }

  if (modelYearDictionary[yearDigit].value > switchValue) {
    year = modelYearDictionary[yearDigit].years[0]
  } else {
    year = modelYearDictionary[yearDigit].years[1]
  }

  return year
}

export default modelYear
