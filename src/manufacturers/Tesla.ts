import modelYears from '../data/modelYear'
import type Model from '../common/Model'

const supportedWmis: string[] = ['5YJ', '7G2', '7SA', 'LRW', 'SFZ', 'XP7']

const models: Record<string, Model[]> = {
  C: [{ description: 'Cybertruck', startYear: 2024, endYear: Infinity }],
  R: [{ description: 'Roadster', startYear: 2008, endYear: 2012 }],
  S: [{ description: 'Model S', startYear: 2012, endYear: Infinity }],
  T: [{ description: 'Semi', startYear: 2022, endYear: Infinity }],
  X: [{ description: 'Model X', startYear: 2015, endYear: Infinity }],
  Y: [{ description: 'Model Y', startYear: 2020, endYear: Infinity }],
  3: [{ description: 'Model 3', startYear: 2017, endYear: Infinity }]
}

const bodyTypes = {
  1: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  A: [{ description: '5 Door Hatchback LHD (Left-Hand Drive)', startYear: 0, endYear: Infinity }],
  B: [{ description: '5 Door Hatchback RHD (Right-Hand Drive)', startYear: 0, endYear: Infinity }],
  C: [{ description: 'Class E (6001-7000 lbs) GVWR / MPV /5 Door (Left-Hand Drive)', startYear: 0, endYear: Infinity }],
  D: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  E: [{ description: 'Sedan 4 Door (Left-Hand Drive)', startYear: 0, endYear: Infinity }],
  F: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  G: [{ description: 'Class D MPV, 5 Door (Left-Hand Drive)', startYear: 0, endYear: Infinity }],
  H: [{ description: 'Class D MPV, 5 Door (Right-Hand Drive)', startYear: 0, endYear: Infinity }]
}

const truckChasisCabType = {
  B: [{ description: 'Day Cab', startYear: 2022, endYear: Infinity }],
  E: [{ description: 'Truck - LHD', startYear: 2024, endYear: Infinity }]
}

const restraints = {
  1: [{ description: 'Manual Type 2 Seat Belts (Front, Rear*3) With Front Airbags, PODS, Side Inflatable Restraints, Knee Airbags (Front)', startYear: 0, endYear: Infinity }],
  2: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  3: [{ description: 'Manual Type 2 Seat Belts (Front, Rear*2) With Front Airbags, Side Inflatable Restraints, Knee Airbags (FR)', startYear: 0, endYear: Infinity }],
  4: [{ description: 'Manual Type 2 Seat Belts (Front, Rear*3) With Front Airbags, Side Inflatable Restraints, Knee Airbags (FR)', startYear: 0, endYear: Infinity }],
  5: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  6: [{ description: 'Manual Type 2 Seat Belts (Front, Rear*3) With Front Airbags, Side Inflatable Restraints', startYear: 0, endYear: Infinity }],
  7: [{ description: 'Type 2 manual seatbelts (Front, Rear*2) with Front Airbags, Side Inflatable Restraints & Active Hood', startYear: 0, endYear: Infinity }],
  8: [{ description: 'Unknown', startYear: 0, endYear: Infinity }], // TODO: Find out this one
  A: [{ description: 'Manual Type 2 Seat Belts (Front Row, Center Row*3, Third Row*2) With Front Airbags, PODS, Side Inflatable Restraints, Knee Airbags (Front)', startYear: 0, endYear: Infinity }],
  B: [{ description: 'Manual Type 2 Seat Belts (Front Row, Center Row*2, Third Row*2) With Front Airbags, PODS, Side Inflatable Restraints', startYear: 0, endYear: Infinity }],
  C: [{ description: 'Manual Type 2 Seat Belts (Front Row, Center Row*2, Third Row*2) With Front Airbags, PODS, Side Inflatable Restraints', startYear: 0, endYear: Infinity }],
  D: [{ description: 'Manual Type 2 Seat Belts (Front Row, Center Row*3) With Front Airbags, PODS, Side Inflatable Restraints [5-seat]', startYear: 0, endYear: Infinity }],
  E: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  G: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  H: [{ description: 'Unknown', startYear: 0, endYear: Infinity }]
}

// This seems to currently be the fuel option for the engine.
// NOTE: This was previously used to determine the type of battery
const batteryTypes = {
  1: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  A: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  B: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  C: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  D: [{ description: 'Unknown', startYear: 0, endYear: Infinity }],
  E: [{ description: 'Lithium-Ion Battery - Electric', startYear: 0, endYear: Infinity }],
  F: [{ description: 'Lithium Iron Phosphate Battery', startYear: 0, endYear: Infinity }],
  H: [{ description: 'Lithium-Ion Battery - High Capacity', startYear: 0, endYear: Infinity }],
  S: [{ description: 'Lithium-Ion Battery - Standard Capacity', startYear: 0, endYear: Infinity }],
  V: [{ description: 'Lithium-Ion Battery - Ultra High Capacity', startYear: 0, endYear: Infinity }]
}

const motorDriveUnits = {
  1: [{ description: 'Single Motor - Three Phase A/C Induction', startYear: 0, endYear: Infinity }],
  2: [{ description: 'Dual Motor - Three Phase A/C Induction', startYear: 0, endYear: Infinity }],
  3: [{ description: 'Performance Single Motor - Three Phase A/C Induction', startYear: 0, endYear: Infinity }],
  4: [{ description: 'Performance Dual Motor', startYear: 0, endYear: Infinity }],
  5: [{ description: 'P2 Dual Motor', startYear: 0, endYear: Infinity }],
  6: [{ description: 'P2 Tri Motor', startYear: 0, endYear: Infinity }],
  A: [{ description: 'Single Motor - Standard Model 3', startYear: 0, endYear: Infinity }],
  B: [{ description: 'Dual Motor - Standard Model 3', startYear: 0, endYear: Infinity }],
  C: [{ description: 'Dual Motor - Performance Model 3', startYear: 0, endYear: Infinity }],
  D: [{ description: 'Single Motor - Standard or Performance Model Y', startYear: 0, endYear: Infinity }],
  E: [{ description: 'Dual Motor - Standard Model Y', startYear: 0, endYear: Infinity }],
  F: [{ description: 'Dual Motor - Performance Model Y', startYear: 0, endYear: Infinity }],
  G: [{ description: 'Base A/C Motor, Tier 4 Battery (51-60 kWh)', startYear: 0, endYear: Infinity }],
  J: [{ description: 'Single Motor', startYear: 0, endYear: Infinity }],
  K: [{ description: 'Dual Motor', startYear: 0, endYear: Infinity }],
  L: [{ description: 'Dual Motor Performance', startYear: 0, endYear: Infinity }],
  N: [{ description: 'Base A/C Motor, Tier 7 Battery (81-90 kWh)', startYear: 0, endYear: Infinity }],
  P: [{ description: 'Performance A/C Motor, Tier 7 Battery (81-90 kWh)', startYear: 0, endYear: Infinity }],
  R: [{ description: 'Single Motor', startYear: 0, endYear: Infinity }],
  S: [{ description: 'Motor', startYear: 0, endYear: Infinity }]
}

const truckMotorDriveUnits = {
  B: [{ description: 'Dual Drive Rear Axle, Air Brakes (Semi)', startYear: 0, endYear: Infinity }],
  D: [{ description: 'Dual Motor - Standard (Cybertruck)', startYear: 2024, endYear: Infinity }],
  E: [{ description: 'Triple Motor - Performance (Cybertruck)', startYear: 2024, endYear: Infinity }]
}

const gvwrs = {
  E: [{ description: 'Class 8 – Greater than 14968 kg. (33,001 lbs. and over)', startYear: 0, endYear: Infinity }],
  G: [{ description: 'Class G – Greater than 3629 kg. to 4082 kg. (8,001-9,000 lbs.)', startYear: 0, endYear: Infinity }],
  H: [{ description: 'Class H – Greater than 4082 kg. to 4536 kg. (9,001-10,000 lbs.)', startYear: 0, endYear: Infinity }]
}

const assemblyPlants = {
  1: [{ description: 'Menlo Park, CA, USA', startYear: 0, endYear: Infinity }],
  3: [{ description: 'Hethel, UK', startYear: 0, endYear: Infinity }],
  A: [{ description: 'Austin, Texas, USA', startYear: 0, endYear: Infinity }],
  B: [{ description: 'Berlin, Germany', startYear: 0, endYear: Infinity }],
  C: [{ description: 'Shanghai, China', startYear: 0, endYear: Infinity }],
  F: [{ description: 'Fremont, CA, USA', startYear: 0, endYear: Infinity }],
  G: [{ description: 'Berlin, Germany', startYear: 0, endYear: Infinity }],
  N: [{ description: 'Reno, NV, USA', startYear: 0, endYear: Infinity }],
  P: [{ description: 'Palo Alto, CA, USA', startYear: 0, endYear: Infinity }],
  R: [{ description: 'Research', startYear: 0, endYear: Infinity }]
}

interface TeslaStandard {
  model: string
  bodyType: string
  restraint?: string
  batteryType: string
  motorDriveUnit: string
  gvwr?: string
  assemblyPlant: string
}

/**
 * Decodes Tesla's manufacturer specific VIN data
 *
 * Source: https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Toyota/VIN_Codes
 * @param vin {string} The VIN to check
 */
function decodeVin (vin: string): TeslaStandard | null {
  const modelYear: number = modelYears(vin)

  let model = 'Unknown'
  if (models[vin[3]] !== undefined) {
    const modelMatches = models[vin[3]]

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

  // Define normal variables
  let bodyType = 'Unknown'
  let restraint
  let batteryType = 'Unknown'
  let motorDriveUnit = 'Unknown'
  let assemblyPlant = 'Unknown'
  let gvwr

  // Handle Semi and Roadster differently, as their VIN format is different
  switch (model) {
    case 'Roadster':
      bodyType = 'Convertible'
      restraint = 'Type 2 USA Seat Belts, Dual Airbags'
      motorDriveUnit = 'Tesla M6B Motor'
      batteryType = 'Lithium-Ion Battery - Electric'

      break
    case 'Semi':
      if (truckChasisCabType[vin[4]] !== undefined) {
        const chasisCabMatches = truckChasisCabType[vin[4]]

        for (const item of chasisCabMatches) {
          if (item.startYear <= modelYear && modelYear <= item.endYear) {
            if (bodyType !== 'Unknown') {
              bodyType += '; '
            } else {
              bodyType = ''
            }
            bodyType += item.description
          }
        }
      }

      if (gvwrs[vin[5]] !== undefined) {
        const chasisCabMatches = gvwrs[vin[5]]

        for (const item of chasisCabMatches) {
          if (item.startYear <= modelYear && modelYear <= item.endYear) {
            if (gvwr !== undefined) {
              gvwr += '; '
            } else {
              gvwr = ''
            }
            gvwr += item.description
          }
        }
      }

      // TODO: Don't hardcode this.
      // The datasheets only say `Electric` as `E`, and we don't know (yet) the battery of these
      batteryType = 'Electric'

      if (truckMotorDriveUnits[vin[7]] !== undefined) {
        const motorDriveMatches = truckMotorDriveUnits[vin[7]]

        for (const item of motorDriveMatches) {
          if (item.startYear <= modelYear && modelYear <= item.endYear) {
            if (motorDriveUnit !== 'Unknown') {
              motorDriveUnit += '; '
            } else {
              motorDriveUnit = ''
            }
            motorDriveUnit += item.description
          }
        }
      }

      break

    default:
      if (bodyTypes[vin[4]] !== undefined) {
        const bodyTypeMatches = bodyTypes[vin[4]]

        for (const item of bodyTypeMatches) {
          if (item.startYear <= modelYear && modelYear <= item.endYear) {
            if (bodyType !== 'Unknown') {
              bodyType += '; '
            } else {
              bodyType = ''
            }
            bodyType += item.description
          }
        }
      }

      if (restraints[vin[5]] !== undefined) {
        const restraintMatches = restraints[vin[5]]

        for (const item of restraintMatches) {
          if (item.startYear <= modelYear && modelYear <= item.endYear) {
            if (restraint !== undefined) {
              restraint += '; '
            } else {
              restraint = ''
            }
            restraint += item.description
          }
        }
      }

      if (batteryTypes[vin[6]] !== undefined) {
        const batteryMatches = batteryTypes[vin[6]]

        for (const item of batteryMatches) {
          if (item.startYear <= modelYear && modelYear <= item.endYear) {
            if (batteryType !== 'Unknown') {
              batteryType += '; '
            } else {
              batteryType = ''
            }
            batteryType += item.description
          }
        }
      }

      if (motorDriveUnits[vin[7]] !== undefined) {
        const motorDriveMatches = motorDriveUnits[vin[7]]

        for (const item of motorDriveMatches) {
          if (item.startYear <= modelYear && modelYear <= item.endYear) {
            if (motorDriveUnit !== 'Unknown') {
              motorDriveUnit += '; '
            } else {
              motorDriveUnit = ''
            }
            motorDriveUnit += item.description
          }
        }
      }
  }

  const assemblyPlantDigit = vin[10]
  if (assemblyPlants[assemblyPlantDigit] !== undefined) {
    const plants = assemblyPlants[assemblyPlantDigit]

    for (const plant of plants) {
      if (plant.startYear <= modelYear && modelYear <= plant.endYear) {
        if (assemblyPlant !== 'Unknown') {
          assemblyPlant += '; '
        } else {
          assemblyPlant = ''
        }
        assemblyPlant += plant.description
      }
    }
  }

  return {
    model,
    bodyType,
    restraint,
    batteryType,
    motorDriveUnit,
    gvwr,
    assemblyPlant
  }
}

export { supportedWmis, decodeVin }
