import modelYears from '../data/modelYear'
import rangeYearSelector from '../lib/rangeYearSelector'
import type Model from '../common/Model'

const supportedWmis: string[] = ['VF9', 'ZA9']

const models2010Up: Record<string, Model[]> = {
  SC: [
    { description: 'Veyron', startYear: 2010, endYear: Infinity },
    { description: 'Chiron Pur Sport', startYear: 2010, endYear: Infinity }
  ],
  SK: [{ description: 'Veyron Grand Sport', startYear: 2010, endYear: Infinity }],
  SG: [{ description: 'Veyron Super Sport', startYear: 2010, endYear: Infinity }],
  SV: [{ description: 'Veyron Grand Sport Vitesse', startYear: 2010, endYear: Infinity }],
  SP: [{ description: 'Chiron, Chiron Sport', startYear: 2010, endYear: Infinity }],
  NC: [{ description: 'Chiron Profilée', startYear: 2010, endYear: Infinity }],
  SD: [{ description: 'Divo', startYear: 2010, endYear: Infinity }],
  SW: [{ description: 'Chiron Super Sport 300+, Super Sport', startYear: 2010, endYear: Infinity }]
}

const models2006Through2009: Record<string, Model[]> = {
  SA: [{ description: 'Veyron EB 16.4', startYear: 2006, endYear: 2009 }]
}

const factory = {
  C: 'Campogalliano, Italy',
  M: 'Molsheim, France'
}

interface BugattiSpecific {
  model: string
  assemblyPlant: string
}

/**
 * Decodes Bugatti's manufacturer specific VIN data
 *
 * Source: https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Bugatti/VIN_Codes
 * @param vin {string} The VIN to check
 */
function decodeVin (vin: string): BugattiSpecific | null {
  const modelCode = vin.slice(3, 5)
  const placeCode = vin[10]
  const modelYear: number = modelYears(vin)
  let assemblyPlant = factory[placeCode]

  // Swap out the models depending on the year range
  let models: Record<string, Model[]>
  // TODO: Support models before 2006
  if (modelYear >= 2006 && modelYear <= 2009) {
    models = models2006Through2009
  } else if (modelYear >= 2010) {
    models = models2010Up
  }

  let model = 'Unknown'
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
