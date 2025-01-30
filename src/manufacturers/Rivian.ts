import modelYears from '../data/modelYear'
import type Model from '../common/Model'

const supportedWmis: string[] = ['7FC', '7PD']

const models: Record<string, Model[]> = {
  S: [{ description: 'R1S 4-door MPV', startYear: 2022, endYear: Infinity }],
  T: [{ description: 'R1T 4-door Pickup Truck', startYear: 2022, endYear: Infinity }]
}

const gvwrBrakeSystems = {
  G: [{ description: '8,001-9,000 lbs.; Hydraulic Brakes', startYear: 2022, endYear: Infinity }]
}

const engineMotorDrivetrains: Record<string, Model[]> = {
  A: [
    { description: 'Electric, Large/Standard Pack, Quad-Motor, AWD', startYear: 2022, endYear: 2024 },
    { description: 'Electric, Quad-Motor, AWD', startYear: 2025, endYear: Infinity }
  ],
  B: [
    { description: 'Electric, Large/Standard Pack, Dual-Motor, AWD', startYear: 2022, endYear: 2024 },
    { description: 'Electric, Dual-Motor, AWD', startYear: 2025, endYear: Infinity }
  ],
  C: [
    { description: 'Electric, Max Pack, Dual-Motor, AWD', startYear: 2022, endYear: 2024 },
    { description: 'Electric, Tri-Motor, AWD', startYear: 2025, endYear: Infinity }
  ]
}

const restraints = {
  A: [{ description: '2x front airbags; 2x knee airbags; 2x front row side airbags; 2x curtain airbags; 2x front row 3-point seat belts; 3x second row 3-point seat belts.', startYear: 2022, endYear: Infinity }],
  B: [{ description: '2x front airbags; 2x knee airbags; 2x front row side airbags; 2x curtain airbags; 2x front row 3-point seat belts; 3x second row 3-point seat belts; 2x third row 3-point seat belts.', startYear: 2022, endYear: Infinity }]
}

const trims = {
  A: [{ description: 'Adventure', startYear: 2022, endYear: Infinity }],
  E: [{ description: 'Entry (Formerly Explore, New for 2025)', startYear: 2022, endYear: Infinity }],
  L: [{ description: 'Launch Edition', startYear: 2022, endYear: 2024 }],
  P: [{ description: 'Premium', startYear: 2025, endYear: Infinity }]
}

const assemblyPlants = {
  N: [{ description: 'Normal, IL', startYear: 2022, endYear: Infinity }]
}

interface Rivian {
  model: string
  gvwrBrakeSystem: string
  engineMotorDrivetrain: string
  restraint: string
  trim: string
  assemblyPlant: string
}

/**
 * Decodes Tesla's manufacturer specific VIN data
 * @param vin {string} The VIN to check
 */
function decodeVin (vin: string): Rivian | null {
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

  let gvwrBrakeSystem = 'Unknown'
  if (gvwrBrakeSystems[vin[4]] !== undefined) {
    const gvwrBrakeSystemMatches = gvwrBrakeSystems[vin[4]]

    for (const item of gvwrBrakeSystemMatches) {
      if (item.startYear <= modelYear && modelYear <= item.endYear) {
        if (gvwrBrakeSystem !== 'Unknown') {
          gvwrBrakeSystem += '; '
        } else {
          gvwrBrakeSystem = ''
        }
        gvwrBrakeSystem += item.description
      }
    }
  }

  let engineMotorDrivetrain = 'Unknown'
  if (engineMotorDrivetrains[vin[5]] !== undefined) {
    const engineMotorDrivetrainMatches = engineMotorDrivetrains[vin[5]]

    for (const item of engineMotorDrivetrainMatches) {
      if (item.startYear <= modelYear && modelYear <= item.endYear) {
        if (engineMotorDrivetrain !== 'Unknown') {
          engineMotorDrivetrain += '; '
        } else {
          engineMotorDrivetrain = ''
        }
        engineMotorDrivetrain += item.description
      }
    }
  }

  let restraint = 'Unknown'
  if (restraints[vin[6]] !== undefined) {
    const restraintMatches = restraints[vin[6]]

    for (const item of restraintMatches) {
      if (item.startYear <= modelYear && modelYear <= item.endYear) {
        if (restraint !== 'Unknown') {
          restraint += '; '
        } else {
          restraint = ''
        }
        restraint += item.description
      }
    }
  }

  let trim = 'Unknown'
  if (trims[vin[7]] !== undefined) {
    const trimMatches = trims[vin[7]]

    for (const item of trimMatches) {
      if (item.startYear <= modelYear && modelYear <= item.endYear) {
        if (trim !== 'Unknown') {
          trim += '; '
        } else {
          trim = ''
        }
        trim += item.description
      }
    }
  }

  let assemblyPlant = 'Unknown'
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
    gvwrBrakeSystem,
    engineMotorDrivetrain,
    restraint,
    trim,
    assemblyPlant
  }
}

export { supportedWmis, decodeVin }
