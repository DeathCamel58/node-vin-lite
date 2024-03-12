import modelYears from '../data/modelYear'
import rangeYearSelector from '../lib/rangeYearSelector'
import type Model from '../common/Model'

const supportedWmis: string[] = ['WVW', 'WVG', 'WV1', 'WV2', 'WV3', 'VWV', 'AAV', '1VW', '1V1', '3VW', '3VV', '8AW', '9BW', 'WAU', 'TRU', '93V', '2V4']

// To find more, Google `site:vpic.nhtsa.dot.gov "Volkswagen" "VIN Breakdown"`
const models: Record<string, Model[]> = {
  11: [{ description: 'Beetle (Brazilian, Mexican, Nigerian)', startYear: 0, endYear: Infinity }],
  13: [{ description: 'Scirocco 3', startYear: 0, endYear: Infinity }],
  14: [{ description: 'Caddy 1 (European Golf 1 pickup)', startYear: 0, endYear: Infinity }],
  15: [{ description: 'Cabriolet (1980 Beetle, Golf 1)', startYear: 0, endYear: Infinity }],
  16: [
    { description: 'Jetta 1 and 2 (early)', startYear: 0, endYear: Infinity },
    { description: 'Beetle (2012-on)', startYear: 0, endYear: Infinity }
  ],
  17: [{ description: 'Golf 1', startYear: 0, endYear: Infinity }],
  18: [{ description: 'Iltis', startYear: 0, endYear: Infinity }],
  19: [{ description: 'Golf 2 (early)', startYear: 0, endYear: Infinity }],
  '1C': [{ description: 'New Beetle (US market)', startYear: 0, endYear: Infinity }],
  '1E': [{ description: 'Golf 3 Cabriolet', startYear: 0, endYear: Infinity }],
  '1F': [{ description: 'Eos', startYear: 0, endYear: Infinity }],
  '1G': [{ description: 'Golf and Jetta 2 (late)', startYear: 0, endYear: Infinity }],
  '1H': [{ description: 'Golf and Vento 3', startYear: 0, endYear: Infinity }],
  '1J': [{ description: 'Golf and Bora 4', startYear: 0, endYear: Infinity }],
  '1K': [{ description: 'Golf and Jetta 5, 6', startYear: 0, endYear: Infinity }],
  '1T': [{ description: 'Touran', startYear: 0, endYear: Infinity }],
  '1Y': [{ description: 'New Beetle Cabriolet', startYear: 0, endYear: Infinity }],
  24: [{ description: 'T3 Transporter Single/Double Cab Pickup', startYear: 0, endYear: Infinity }],
  25: [{ description: 'T3 Transporter Van, Kombi, Bus, Caravelle', startYear: 0, endYear: Infinity }],
  28: [{ description: 'LT Transporter 1', startYear: 0, endYear: Infinity }],
  '2D': [{ description: 'LT Transporter 2', startYear: 0, endYear: Infinity }],
  '2E': [{ description: 'Crafter 1', startYear: 0, endYear: Infinity }],
  '2H': [{ description: 'Amarok', startYear: 0, endYear: Infinity }],
  '2K': [{ description: 'Caddy, Caddy Maxi 3', startYear: 0, endYear: Infinity }],
  30: [{ description: 'Fox (US model ex-Brazil)', startYear: 0, endYear: Infinity }],
  31: [{ description: 'Passat 2', startYear: 0, endYear: Infinity }],
  32: [{ description: 'Santana sedan', startYear: 0, endYear: Infinity }],
  33: [{ description: 'Passat 2 Variant', startYear: 0, endYear: Infinity }],
  '3A': [{ description: 'Passat 3, 4', startYear: 0, endYear: Infinity }],
  '3B': [{ description: 'Passat 5', startYear: 0, endYear: Infinity }],
  '3C': [{ description: 'Passat 6, 7, 8, CC', startYear: 0, endYear: Infinity }],
  '3D': [{ description: 'Phaeton', startYear: 0, endYear: Infinity }],
  '3H': [{ description: 'Arteon', startYear: 0, endYear: Infinity }],
  50: [{ description: 'Corrado (early)', startYear: 0, endYear: Infinity }],
  53: [{ description: 'Scirocco 1, 2', startYear: 0, endYear: Infinity }],
  '5K': [{ description: 'Golf and Jetta 6', startYear: 0, endYear: Infinity }],
  '5M': [{ description: 'Golf Plus', startYear: 0, endYear: Infinity }],
  '5N': [{ description: 'Tiguan 1, 2, Tiguan Allspace', startYear: 0, endYear: Infinity }],
  '5Z': [{ description: 'Fox (Europe)', startYear: 0, endYear: Infinity }],
  60: [{ description: 'Corrado (late)', startYear: 0, endYear: Infinity }],
  '6K': [{ description: 'Polo Classic, Variant 3', startYear: 0, endYear: Infinity }],
  '6N': [{ description: 'Polo 3', startYear: 0, endYear: Infinity }],
  '6R': [{ description: 'Polo 5', startYear: 0, endYear: Infinity }],
  '6X': [{ description: 'Lupo', startYear: 0, endYear: Infinity }],
  70: [{ description: 'T4 Transporter Vans and Pickups', startYear: 0, endYear: Infinity }],
  74: [{ description: 'Taro', startYear: 0, endYear: Infinity }],
  '7H': [{ description: 'T5 Transporter, T6.1 Transporter', startYear: 0, endYear: Infinity }],
  '7J': [{ description: 'T6 Transporter', startYear: 0, endYear: Infinity }],
  '7L': [{ description: 'Touareg 1', startYear: 0, endYear: Infinity }],
  '7M': [{ description: 'Sharan', startYear: 0, endYear: Infinity }],
  '7P': [{ description: 'Touareg 2', startYear: 0, endYear: Infinity }],
  86: [{ description: 'Polo and Derby 1 and 2', startYear: 0, endYear: Infinity }],
  87: [{ description: 'Polo Coupe', startYear: 0, endYear: Infinity }],
  '9C': [{ description: 'New Beetle', startYear: 0, endYear: Infinity }],
  '9K': [{ description: 'Caddy 2 Van (ex-SEAT Ibiza)', startYear: 0, endYear: Infinity }],
  '9N': [{ description: 'Polo 4', startYear: 0, endYear: Infinity }],
  '9U': [{ description: 'Caddy 2 Pickup (ex-Skoda Felicia)', startYear: 0, endYear: Infinity }],
  A1: [{ description: 'T-Roc', startYear: 0, endYear: Infinity }],
  AA: [{ description: 'Up!', startYear: 0, endYear: Infinity }],
  AG: [{ description: 'New Beetle', startYear: 0, endYear: Infinity }],
  AH: [{ description: 'EOS', startYear: 0, endYear: Infinity }],
  AJ: [{ description: 'Jetta Sedan', startYear: 0, endYear: Infinity }],
  AL: [{ description: 'New Beetle Convertible', startYear: 0, endYear: Infinity }],
  AN: [{ description: 'Passat CC', startYear: 0, endYear: Infinity }],
  AT: [{ description: 'Beetle Coupe/Beetle Convertible', startYear: 0, endYear: Infinity }],
  AU: [{ description: 'Golf 7 (Golf/ e-Golf/ Golf GTI/ Golf R Hatchback/ Golf SportWagen/ Golf Alltrack)', startYear: 0, endYear: Infinity }],
  AW: [{ description: 'Polo 6', startYear: 0, endYear: Infinity }],
  AX: [{ description: 'Tiguan Limted SUV, Tiguan SUV', startYear: 0, endYear: Infinity }],
  A3: [{ description: 'Passat Sedan', startYear: 0, endYear: Infinity }],
  BU: [{ description: 'Jetta Sedan', startYear: 0, endYear: Infinity }],
  BP: [{ description: 'Touareg II', startYear: 0, endYear: Infinity }],
  CA: [{ description: 'Atlas SUV', startYear: 0, endYear: Infinity }],
  C1: [{ description: 'T-Cross', startYear: 0, endYear: Infinity }],
  CD: [{ description: 'Golf 8', startYear: 0, endYear: Infinity }],
  SK: [{ description: 'Caddy 4', startYear: 0, endYear: Infinity }],
  SY: [{ description: 'Crafter 2', startYear: 0, endYear: Infinity }]
}

const factory = {
  A: 'Ingolstadt, Germany',
  B: 'Brussels, Belgium',
  C: 'Chattanooga, USA',

  // `D` can also be `Barcelona, Spain`
  // Ref: https://checkcar.vin/vin-decoder/volkswagen
  D: 'Bratislava, Slovakia',
  E: 'Emden, Germany',
  F: 'Ipiranga / Resende, Brazil',

  // `G` can also be `Kaluga, Russia`
  // Ref: https://checkcar.vin/vin-decoder/volkswagen
  G: 'Graz, Austria',
  H: 'Hanover, Germany',
  K: 'Osnabrück, Germany',
  L: 'Lagos, Nigeria',
  M: 'Puebla, Mexico',
  N: 'Neckarsulm, Germany',
  P: 'Mosel, Germany or Anchieta, Brazil',
  R: 'Martorell, Spain',
  S: 'Salzgitter, Germany',

  // `T` can also be `Sarajevo, Bosnia`
  // Ref: https://checkcar.vin/vin-decoder/volkswagen
  T: {
    1994: 'Sarajevo, Yugoslavia (up to 1994)',
    present: 'Taubaté, Brazil'
  },
  U: 'Uitenhage, South Africa',
  V: {
    1994: 'Westmoreland, USA (up to 1994)',
    present: 'Palmela, Portugal (from 1994)'
  },
  W: 'Wolfsburg, Germany',
  X: 'Poznan, Poland',

  // `Y` can also be `Barcelona`
  // Ref: https://checkcar.vin/vin-decoder/volkswagen
  Y: 'Pamplona, Spain',
  Z: 'Zuffenhausen, Germany',
  1: 'Győr, Hungary',
  2: 'Anting, China',
  3: 'Changchun, China',
  4: 'Curitiba, Brazil',
  6: 'Düsseldorf, Germany (Mercedes-Benz)',
  7: 'Ludwigsfelde, Germany (Mercedes-Benz)',
  8: 'Dresden, Germany or General Pacheco, Argentina'
}

interface VolkswagenSpecific {
  model: string
  assemblyPlant: string
}

/**
 * Decodes Volkswagen's manufacturer specific VIN data
 *
 * Source: http://www.clubvw.org.au/vwvin
 * @param vin {string} The VIN to check
 */
function decodeVin (vin: string): VolkswagenSpecific | null {
  const modelCode = vin.slice(6, 8)
  const placeCode = vin[10]
  const modelYear: number = modelYears(vin)
  let model = 'Unknown'
  let assemblyPlant = factory[placeCode]

  if (models[modelCode] !== undefined) {
    const modelMatches = models[modelCode]

    for (const item of modelMatches) {
      if (item.startYear <= modelYear && modelYear <= item.endYear) {
        if (model !== 'Unknown') {
          model += '; '
        } else {
          model = ''
        }
        model += item.description
      }
    }
  }

  if (typeof assemblyPlant === 'object') {
    assemblyPlant = rangeYearSelector(assemblyPlant, modelYear)
  }

  return {
    model,
    assemblyPlant
  }
}

export { supportedWmis, decodeVin }