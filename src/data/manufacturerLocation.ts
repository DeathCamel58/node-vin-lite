interface Country {
  name: string
  startChar: string
  endChar: string
}

export interface ManufacturerLocation {
  continent: string
  country: string
}

type LocationDictionary = Record<string, {
  continent: string
  countries: Country[]
}>

// Ref: https://cdn.standards.iteh.ai/samples/45844/8aa6bf9bd1ee4463aafb4135b5e74cfb/ISO-3780-2009.pdf
const locationDictionary: LocationDictionary = {
  // Africa
  A: {
    continent: 'Africa',
    countries: [
      { name: 'South Africa', startChar: 'A', endChar: 'H' },
      { name: 'Ivory Coast', startChar: 'J', endChar: 'K' },
      { name: 'Lesotho', startChar: 'L', endChar: 'M' },
      { name: 'Botswana', startChar: 'N', endChar: 'P' },
      { name: 'Namibia', startChar: 'R', endChar: 'S' },
      { name: 'Madagascar', startChar: 'T', endChar: 'U' },
      { name: 'Mauritius', startChar: 'V', endChar: 'W' },
      { name: 'Tunisia', startChar: 'X', endChar: 'Y' },
      { name: 'Cyprus', startChar: 'Z', endChar: '1' },
      { name: 'Zimbabwe', startChar: '2', endChar: '3' },
      { name: 'Unassigned', startChar: '4', endChar: '0' }
    ]
  },
  B: {
    continent: 'Africa',
    countries: [
      { name: 'Angola', startChar: 'A', endChar: 'B' },
      { name: 'Unassigned', startChar: 'C', endChar: 'E' },
      { name: 'Kenya', startChar: 'F', endChar: 'G' },
      { name: 'Unassigned', startChar: 'H', endChar: '2' },
      { name: 'Libya', startChar: '3', endChar: '4' },
      { name: 'Unassigned', startChar: '5', endChar: '0' }
    ]
  },
  C: {
    continent: 'Africa',
    countries: [
      { name: 'Egypt', startChar: 'A', endChar: 'B' },
      { name: 'Unassigned', startChar: 'C', endChar: 'E' },
      { name: 'Morocco', startChar: 'F', endChar: 'G' },
      { name: 'Unassigned', startChar: 'H', endChar: 'K' },
      { name: 'Zambia', startChar: 'L', endChar: 'M' },
      { name: 'Unassigned', startChar: 'N', endChar: '0' }
    ]
  },

  // Spare Codes
  D: {
    continent: 'Spare Codes',
    countries: [
      { name: 'Unassigned', startChar: 'A', endChar: '0' }
    ]
  },
  E: {
    continent: 'Spare Codes',
    countries: [
      { name: 'Unassigned', startChar: 'A', endChar: '0' }
    ]
  },
  F: {
    continent: 'Spare Codes',
    countries: [
      { name: 'Unassigned', startChar: 'A', endChar: '0' }
    ]
  },
  G: {
    continent: 'Spare Codes',
    countries: [
      { name: 'Unassigned', startChar: 'A', endChar: '0' }
    ]
  },
  H: {
    continent: 'Spare Codes',
    countries: [
      { name: 'Unassigned', startChar: 'A', endChar: '0' }
    ]
  },

  I: {
    continent: 'Unassigned',
    countries: [
      { name: 'Unassigned', startChar: 'A', endChar: '0' }
    ]
  },

  // Asia
  J: {
    continent: 'Asia',
    countries: [
      { name: 'Japan', startChar: 'A', endChar: '0' }
    ]
  },
  K: {
    continent: 'Asia',
    countries: [
      { name: 'Unassigned', startChar: 'A', endChar: 'E' },
      { name: 'Israel', startChar: 'F', endChar: 'H' },
      { name: 'Unassigned', startChar: 'I', endChar: 'K' },
      { name: 'South Korea', startChar: 'L', endChar: 'R' },
      { name: 'Jordan', startChar: 'S', endChar: 'T' },
      { name: 'Unassigned', startChar: 'U', endChar: '0' }
    ]
  },
  L: {
    continent: 'Asia',
    countries: [
      { name: 'China', startChar: 'A', endChar: '0' }
    ]
  },
  M: {
    continent: 'Asia',
    countries: [
      { name: 'India', startChar: 'A', endChar: 'E' },
      { name: 'Indonesia', startChar: 'F', endChar: 'K' },
      { name: 'Thailand', startChar: 'L', endChar: 'R' },
      { name: 'Unassigned', startChar: 'S', endChar: '0' }
    ]
  },
  N: {
    continent: 'Asia',
    countries: [
      { name: 'Iran', startChar: 'A', endChar: 'E' },
      { name: 'Pakistan', startChar: 'F', endChar: 'G' },
      { name: 'Unassigned', startChar: 'H', endChar: 'K' },
      { name: 'Turkey', startChar: 'L', endChar: 'R' },
      { name: 'Uzbekistan', startChar: 'S', endChar: 'T' },
      { name: 'Azerbaijan', startChar: 'U', endChar: 'W' }, // Note: ISO 3780:2009 is unclear. Could also be V - V
      { name: 'Armenia', startChar: 'Y', endChar: 'Y' },
      { name: 'Unassigned', startChar: 'Z', endChar: '0' }
    ]
  },
  O: {
    continent: 'Asia',
    countries: [
      { name: 'Unassigned', startChar: 'A', endChar: '0' }
    ]
  },
  P: {
    continent: 'Asia',
    countries: [
      { name: 'Philippines', startChar: 'A', endChar: 'C' },
      { name: 'Unassigned', startChar: 'D', endChar: 'E' },
      { name: 'Singapore', startChar: 'F', endChar: 'G' },
      { name: 'Unassigned', startChar: 'H', endChar: 'K' },
      { name: 'Malaysia', startChar: 'L', endChar: 'R' },
      { name: 'Bangladesh', startChar: 'S', endChar: 'T' },
      { name: 'Asia', startChar: 'U', endChar: '0' }
    ]
  },
  Q: {
    continent: 'Asia',
    countries: [
      { name: 'Unassigned', startChar: 'A', endChar: '0' }
    ]
  },
  R: {
    continent: 'Asia',
    countries: [
      { name: 'UAE', startChar: 'A', endChar: 'B' },
      { name: 'Unassigned', startChar: 'C', endChar: 'E' },
      { name: 'Taiwan', startChar: 'F', endChar: 'K' },
      { name: 'Vietnam', startChar: 'L', endChar: 'N' },
      { name: 'Unassigned', startChar: 'O', endChar: 'R' },
      { name: 'Saudi Arabia', startChar: 'S', endChar: 'T' },
      { name: 'Unassigned', startChar: 'U', endChar: '0' }
    ]
  },

  // Europe
  S: {
    continent: 'Europe',
    countries: [
      { name: 'United Kingdom', startChar: 'A', endChar: 'M' },
      { name: 'Germany', startChar: 'N', endChar: 'T' },
      { name: 'Poland', startChar: 'U', endChar: 'Z' },
      { name: 'Latvia', startChar: '1', endChar: '2' },
      { name: 'Unassigned', startChar: '3', endChar: '0' }
    ]
  },
  T: {
    continent: 'Europe',
    countries: [
      { name: 'Switzerland', startChar: 'A', endChar: 'C' },
      { name: 'Unassigned', startChar: 'D', endChar: 'H' },
      { name: 'Czech Republic', startChar: 'I', endChar: 'P' },
      { name: 'Hungary', startChar: 'Q', endChar: 'V' },
      { name: 'Portugal', startChar: 'W', endChar: '2' },
      { name: 'Serbia & Montenegro', startChar: '3', endChar: '4' },
      { name: 'Unassigned', startChar: '5', endChar: '0' }
    ]
  },
  U: {
    continent: 'Europe',
    countries: [
      { name: 'Spain', startChar: 'A', endChar: 'C' },
      { name: 'Unassigned', startChar: 'D', endChar: 'G' },
      { name: 'Denmark', startChar: 'H', endChar: 'M' },
      { name: 'Ireland', startChar: 'N', endChar: 'R' },
      { name: 'Unassigned', startChar: 'S', endChar: 'T' },
      { name: 'Romania', startChar: 'U', endChar: 'V' },
      { name: 'Unassigned', startChar: 'W', endChar: 'Z' },
      { name: 'Macedonia', startChar: '1', endChar: '2' },
      { name: 'Unassigned', startChar: '3', endChar: '4' },
      { name: 'Slovakia', startChar: '5', endChar: '7' },
      { name: 'Bosnia & Herzegovina', startChar: '8', endChar: '0' }
    ]
  },
  V: {
    continent: 'Europe',
    countries: [
      { name: 'Austria', startChar: 'A', endChar: 'E' },
      { name: 'France', startChar: 'F', endChar: 'R' },
      { name: 'Spain', startChar: 'S', endChar: 'W' },
      { name: 'Unassigned', startChar: 'X', endChar: '2' },
      { name: 'Croatia', startChar: '3', endChar: '5' },
      { name: 'Estonia', startChar: '6', endChar: '8' },
      { name: 'Unassigned', startChar: '5', endChar: '0' }
    ]
  },
  W: {
    continent: 'Europe',
    countries: [
      { name: 'Germany', startChar: 'A', endChar: '0' }
    ]
  },
  X: {
    continent: 'Europe',
    countries: [
      { name: 'Bulgaria', startChar: 'A', endChar: 'C' },
      { name: 'Unassigned', startChar: 'D', endChar: 'E' },
      { name: 'Greece', startChar: 'F', endChar: 'H' },
      { name: 'Unassigned', startChar: 'I', endChar: 'K' },
      { name: 'Netherlands', startChar: 'L', endChar: 'R' },
      { name: 'Unassigned', startChar: 'S', endChar: 'V' },
      { name: 'Russia', startChar: 'W', endChar: 'W' },
      { name: 'Luxembourg', startChar: 'X', endChar: 'Y' },
      { name: 'Unassigned', startChar: 'Z', endChar: '2' },
      { name: 'Russia', startChar: '3', endChar: '0' }
    ]
  },
  Y: {
    continent: 'Europe',
    countries: [
      { name: 'Belgium', startChar: 'A', endChar: 'E' },
      { name: 'Finland', startChar: 'F', endChar: 'K' },
      { name: 'Unassigned', startChar: 'L', endChar: 'R' },
      { name: 'Sweden', startChar: 'S', endChar: 'W' },
      { name: 'Norway', startChar: 'X', endChar: '2' },
      { name: 'Belarus', startChar: '3', endChar: '5' },
      { name: 'Ukraine', startChar: '6', endChar: '8' },
      { name: 'Unassigned', startChar: '9', endChar: '0' }
    ]
  },
  Z: {
    continent: 'Europe',
    countries: [
      { name: 'Italy', startChar: 'A', endChar: 'U' },
      { name: 'Unassigned', startChar: 'V', endChar: 'W' },
      { name: 'Slovenia', startChar: 'X', endChar: 'Z' },
      { name: 'Unassigned', startChar: '1', endChar: '2' },
      { name: 'Lithuania', startChar: '3', endChar: '5' },
      { name: 'Unassigned', startChar: '6', endChar: '0' }
    ]
  },

  // North America
  1: {
    continent: 'North America',
    countries: [
      { name: 'United States', startChar: 'A', endChar: '0' }
    ]
  },
  2: {
    continent: 'North America',
    countries: [
      { name: 'Canada', startChar: 'A', endChar: '5' },
      { name: 'Unassigned', startChar: '6', endChar: '0' }
    ]
  },
  3: {
    continent: 'North America',
    countries: [
      { name: 'Mexico', startChar: 'A', endChar: 'X' },
      { name: 'Unassigned', startChar: 'Y', endChar: '7' },
      { name: 'Puerto Rico', startChar: '8', endChar: '9' },
      { name: 'Unassigned', startChar: '0', endChar: '0' }
    ]
  },
  4: {
    continent: 'North America',
    countries: [
      { name: 'United States', startChar: 'A', endChar: '0' }
    ]
  },
  5: {
    continent: 'North America',
    countries: [
      { name: 'United States', startChar: 'A', endChar: '0' }
    ]
  },

  // Oceania
  6: {
    continent: 'Oceania',
    countries: [
      { name: 'Australia', startChar: 'A', endChar: 'W' },
      { name: 'New Zealand', startChar: 'X', endChar: 'Z' },
      { name: 'Unassigned', startChar: '1', endChar: '0' }
    ]
  },

  // Spare Codes
  7: {
    continent: 'Spare Codes',
    countries: [
      { name: 'Unassigned', startChar: 'A', endChar: '0' }
    ]
  },

  // South America
  8: {
    continent: 'South America',
    countries: [
      { name: 'Argentina', startChar: 'A', endChar: 'E' },
      { name: 'Chile', startChar: 'F', endChar: 'G' },
      { name: 'Unassigned', startChar: 'H', endChar: 'K' },
      { name: 'Ecuador', startChar: 'L', endChar: 'N' },
      { name: 'Unassigned', startChar: 'P', endChar: 'R' },
      { name: 'Peru', startChar: 'S', endChar: 'T' },
      { name: 'Unassigned', startChar: 'U', endChar: 'W' },
      { name: 'Venezuela', startChar: 'X', endChar: '2' },
      { name: 'Unassigned', startChar: '3', endChar: '0' }
    ]
  },
  9: {
    continent: 'South America',
    countries: [
      { name: 'Brazil', startChar: 'A', endChar: 'E' },
      { name: 'Columbia', startChar: 'F', endChar: 'G' },
      { name: 'Unassigned', startChar: 'H', endChar: 'R' },
      { name: 'Uruguay', startChar: 'S', endChar: 'V' },
      { name: 'Unassigned', startChar: 'W', endChar: '2' },
      { name: 'Brazil', startChar: '3', endChar: '9' },
      { name: 'South America', startChar: '3', endChar: '9' }
    ]
  },

  // Spare Codes
  0: {
    continent: 'Spare Codes',
    countries: [
      { name: 'Unassigned', startChar: 'A', endChar: '0' }
    ]
  }
}

function characterValue (char: string): number {
  const value = char.charCodeAt(0)

  if ('A'.charCodeAt(0) <= value && value <= 'Z'.charCodeAt(0)) {
    return value
  } else if ('1'.charCodeAt(0) <= value && value <= '9'.charCodeAt(0)) {
    return value + 43
  } else if ('0'.charCodeAt(0) === value) {
    return value + 52
  }

  return 0
}

/**
 * Returns the manufacturer location for a VIN
 * @param vin The VIN to check
 */
function manufacturerLocation (vin: string): ManufacturerLocation {
  const continentDigit = vin[0]
  const countryDigit = vin[1]

  let continent = 'Unknown'
  let country = 'Unknown'

  // Lookup the continent prefix
  if (locationDictionary[continentDigit] !== undefined) {
    continent = locationDictionary[continentDigit].continent

    for (const countryItem of locationDictionary[continentDigit].countries) {
      if (characterValue(countryItem.startChar) <= characterValue(countryDigit) && characterValue(countryDigit) <= characterValue(countryItem.endChar)) {
        country = countryItem.name
      }
    }
  }

  return {
    continent,
    country
  }
}

export default manufacturerLocation
