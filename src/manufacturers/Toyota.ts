import modelYears from '../data/modelYear'
import type Model from '../common/Model'

const supportedWmis: string[] = ['JTD', 'JTK', 'JTN', 'JTX', 'JT1', 'JT2', 'JT7', 'JTA', 'JTB', 'JTF', 'JT4', 'JTG', 'JTE', 'JTL', 'JTM', 'JT3', 'JT5', 'JTH', 'JTJ', 'JT6', 'JT8', 'JAL', 'JDA', 'JD1', 'JD2', 'JD4', 'JF1', 'JHA', 'JHB', 'JHC', 'JHD', 'JHE', 'JHH', 'JH6', 'AHH', 'AHT', 'LFM', 'LVG', 'MBJ', 'MHF', 'MHK', 'MMK', 'MNK', 'MR0', 'MR1', 'MR2', 'NMT', 'PN1', 'PN2', 'RKL', 'RL4', 'SB1', 'TW1', 'VNK', 'WZ1', 'XW7', 'YAR', '1NX', '2AY', '2AZ', '2T1', '2T2', '2T3', '3MY', '3TM', '3TY', '4G3', '4T1', '4T3', '4T4', '4TA', '5PV', '5TB', '5TD', '5TE', '5TF', '5YF', '58A', '6T1', '7A4', '7H4', '7MU', '7SV', '8AJ', '9BR', '2TH', 'LTV', '4TS', '4TM', '4TD', '4TK', '2TC', '4TV', 'JTU', '4TF', 'JTP', '5TK', '2TS', '2TP', '2T6', '2TF', '5TL', '4T9', 'JTW', '2T9', '4TC', '5T2', '5T3', '4TL', '5TP', '2TK', '4T5', '4TZ', 'JT0', '4TU', '2TR', '4TH', '4TX', '5TN', '5T4', '2TL', '4TE', '2TD', '2TW', '5TY', '5TC', '5T1', 'JTY', '2TJ', '4T8', '5T9', '2TT', '4TB', '2T5', '5T5', '5TR', '2T0', '5TV', '2T4', '4TG', '4T0', '4TY', '4TW', '2TN', '4TT', '5TG', '5TZ', '5TS', '5TH', '2T8', '93R', 'JTR', '2TM', '2TZ', '5T8', '4T7', '2TU', '2TG', '5TU', '4TN', 'JTV', '5T7', 'JT9', 'JTS', '4TR', '5TT', '5TW', '2TA', '4TP', '4TJ', '2T7', 'JTZ', '4T6', 'JTT', '5TA', '2TE', '5TX', '5T0', '4T2', '2TV', '2TB', 'JTC', '2TY', '5TM', '5TJ', '2TX', '5T6']

const manufacturers = {
  F: [{ description: 'Fuji Heavy Industries LTD', startYear: 0, endYear: Infinity }],
  G: [{ description: 'GM', startYear: 0, endYear: Infinity }],
  M: [
    { description: 'Mazda (Mexico)', startYear: 0, endYear: Infinity },
    { description: 'Mazda Toyota Manufacturing USA', startYear: 0, endYear: Infinity }
  ],
  N: [{ description: 'NUMMI (Toyota car)', startYear: 0, endYear: Infinity }],
  T: [
    { description: 'NUMMI (Toyota truck)', startYear: 0, endYear: Infinity },
    { description: 'Toyota', startYear: 0, endYear: Infinity }
  ],
  Y: [{ description: 'Toyota (Mississippi, USA)', startYear: 0, endYear: Infinity }],
  8: [{ description: 'Toyota (Lexus - Kentucky, USA)', startYear: 0, endYear: Infinity }]
}

const vehicleTypes = {
  D: 'Passenger Car',
  K: 'Passenger Car',
  N: 'Passenger Car',
  X: 'Passenger Car',
  1: 'Passenger Car',
  2: 'Passenger Car',
  7: 'Passenger Car',
  A: 'Truck',
  B: 'Truck',
  F: 'Truck',
  4: 'Truck',
  G: 'Bus',
  E: 'Multipurpose Passenger Vehicle (SUV)',
  L: 'Multipurpose Passenger Vehicle (SUV)',
  M: 'Multipurpose Passenger Vehicle (SUV)',
  3: 'Multipurpose Passenger Vehicle (SUV)',
  5: 'Incomplete Vehicle (typically a convertible)'
}

// TODO: Figure out these. It looks like every model has a different array of these?
const bodies = {
  A: '2DR Sedan 2WD',
  B: '4DR Sedan 2WD/Standard Cab Truck, 4WD, Standard Bed, Full-Size Frame',
  C: '2DR Coupe 2WD',
  D: '3DR Liftback Coupe 2WD (Celica, Supra)/Double Cab Truck, 4WD, Extra Long Bed, Full-Size Frame',
  E: '4DR Station Wagon 2WD (Corolla, Camry)/MPV, Double Cab Truck, 2WD, Extra Long Bed, Full-Size Frame',
  F: '2DR Convertible 2WD',
  G: '4DR Wagon 2WD',
  H: '4DR Wagon 4WD',
  J: '3DR Liftback 2WD (Yaris)/5DR Van AWD/Double Cab Truck, 2WD, Long Bed, Small Frame',
  K: '5DR Liftback 2WD (Yaris, Prius)/5DR Wagon 2WD (Matrix)/Double Cab Truck, 2WD, Extra Long Bed, Small Frame',
  L: '5DR Wagon 4WD (Matrix)/Double Cab Truck, 4WD, Long Bed, Small Frame',
  M: '5DR Door Van 2WD/Double Cab Truck, 4WD, Extra Long Bed, Small Frame',
  N: 'Standard Cab 1/2 Ton Truck, 2WD, Short Bed, Full-Size Frame',
  P: 'Standard Cab 1/2 Ton Truck, 4WD, Short Bed, Full-Size Frame',
  R: 'Standard Cab Truck, 4WD, Standard Bed, Full-Size Frame',
  S: '3DR Liftback 4WD',
  T: 'Extra Cab/Access Pickup, 2WD, Long Bed Small Frame',
  U: 'Extra Cab/Access Pickup, 4WD, Long Bed Small Frame',
  W: 'Extra Cab/Access Pickup, 4WD, Long Bed Small Frame TRD',
  X: '5DR Sport Utility Wagon',
  Y: 'Sport Van',
  Z: '5DR Wagon 2WD'
}

// Before 1996 for North America
const engineBefore1996 = {
  4: ['7A-FE Lean Burn'],
  A: ['3MZ-FE'],
  B: [
    '1NZ-FXE',
    '2AZ-FXE'
  ],
  C: ['5E-FE'],
  D: ['2JZ-GE'],
  E: ['2AZ-FE'],
  F: ['1MZ-FE'],
  G: ['5S-FE'],
  H: ['1UZ-FE'],
  K: ['2GR-FE'],
  L: ['2RZ-FE'],
  M: ['3RZ-FE'],
  N: [
    '5S-FNE',
    '5VZ-FE'
  ],
  P: ['3S-FE'],
  R: ['1ZZ-FE'],
  S: ['1BM'],
  T: [
    '2UZ-FE',
    '1NZ-FE',
    '3S-GTE'
  ],
  U: ['1GR-FE'],
  Y: ['2ZZ-GE']
}

// 1996-Present in North America; 2002-Present for the rest of the world
const engineAfter1996 = {
  1: ['A25A-FKS - Gasoline, Port + Direct, L4, 2L'],
  2: ['A25A-FXS, 3NM - Gasoline (Hybrid), Port + Direct, L4, 2.5L'],
  3: [
    'A25A-FXS, 3NM (Li) - Gasoline (Hybrid), Port + Direct, L4, 2.5L',
    'M20A-FKS - Gasoline, Port + Direct, L4, 2L'
  ],
  4: ['M20A-FKS - Gasoline, Port + Direct, L4, 2L'],
  5: ['V35A-FTS - Gasoline (Hybrid), Port + Direct, V6, 3.4L'],
  6: [
    'A25A-FKS - Gasoline, Port + Direct, L4, 2L',
    'M20A-FXS, 3NM - Gasoline (Hybrid), Port + Direct, L4, 2L'
  ],
  8: ['2GR-FKS - Gasoline, Port + Direct, V6, 3.5L'],
  9: [
    '2ZR-FXE - Gasoline (Hybrid), Port, L4, 1.8L',
    'M20A-FXS, 3NM, 1MM - Gasoline (Hybrid), Port + Direct, L4, 2L'
  ],
  A: [
    '1XM Motor (Front) - 150kW',
    '2ZR-FXE, 1NM - Gasoline (Hybrid), Port, L4, 1.8L',
    '2ZR-FXE, 1NM + 1SM - Gasoline (Hybrid), Port, L4, 1.8L',
    '8AR-FTS - Gasoline, Port + Direct, L4, 2L',
    '4A-FE',
    '2AD-FTV (2005+)'
  ],
  B: [
    '1YM Motor (Front, Rear) - 80kW (Front, Rear)',
    '2ZR-FXE, 1NM - Gasoline (Hybrid), Port, L4, 1.8L',
    '7A-FE',
    '1HZ',
    '1HD',
    '2AD-FHV (2005+)'
  ],
  C: [
    '2C',
    '2CT',
    '2CT-E'
  ],
  D: [
    '1NZ-FXE - Gasoline (Hybrid), Port, L4, 1.5L',
    '1NZ-FXE, 1LM - Gasoline (Hybrid), Port, L4, 1.5L'
  ],
  E: [
    '2JZ-GT',
    '2JZ-GTE',
    '2AZ-FE'
  ],
  F: [
    '1MZ-FE',
    '2AR-FE'
  ],
  H: [
    '3ZR-FAE - Gasoline, Port, L4, 2L',
    '1AZ-FE',
    '1NR-FE'
  ],
  J: [
    '1FZ-FE',
    '1AZ-FSE'
  ],
  L: ['2SZ-FE'],
  N: [
    '5VZ-FE',
    '2ZR-FXE'
  ],
  P: [
    '2AZ-FSE',
    '2UR-FAE - Gasoline, Port + Direct, V8, 5L',
    '2UR-GSE - Gasoline, Port + Direct, V8, 5L'
  ],
  R: ['1ZZ-FE'],
  S: [
    '3S-FE',
    '2ZR-FXE',
    'Electric -- RAV4 EV only'
  ],
  T: ['2UZ-FE'],
  U: [
    '1GR-FE - Gasoline, Port, V6, 4.0L',
    '2ZR-FE (Corolla Conquest 2010)'
  ],
  V: [
    '1NR-FE',
    '1VD-FTV'
  ],
  W: [
    '2NZ-FE',
    '1CD-FTV',
    'A25A-FXS, 3NM+4NM - Gasoline (Hybrid), Port + Direct, L4, 2.5L'
  ],
  X: [
    '2TR-FE - Gasoline, Port, L4, 2.7L'
  ],
  Y: [
    '3UR-FE - Gasoline, Port, V8, 5.7L',
    '2ZZ-GE'
  ],
  Z: [
    '2GR-FKS - Gasoline, Port + Direct, V6, 3.5L',
    '2JZ-FE',
    '1ZZ-FE',
    '3ZZ-FE'
  ]
}

// TODO: Find more of these with a search like `site:*.dot.gov +Toyota "Vehicle identification number coding system"`
// TODO: Probably change to dict
// TODO: It looks like this can change based on the model/year
const restraints = {
  0: 'Manual Belts w/2 Airbags and Side Curtain Airbags',
  1: 'Seat Belt: All seats\nFrontal Airbag: Driver & Passenger Seats\nCurtain Shield Airbag: All Rows\nSide Airbag: All Rows\nKnee Airbag: Driver & Passenger Seats',
  // 1: 'Seat Belt: All seats\nFrontal Airbag: Driver & Passenger Seats\nCurtain Shield Airbag: All Rows\nSide Airbag: 1st & 2nd Rows\nKnee Airbag: Driver & Passenger Seats',
  2: 'Manual Belts w/2 Airbags (North America), 1 Airbag (Driver Seat) (International)',
  3: 'Seat Belt: All seats\nFrontal Airbag: Driver & Passenger Seats\nCurtain Shield Airbag: All Rows\nSide Airbag: 1st Row\nKnee Airbag: Driver Seat Only',
  5: 'Seat Belt: All seats\nFrontal Airbag: Driver & Passenger Seats\nCurtain Shield Airbag: All Rows\nSide Airbag: 1st Row\nKnee Airbag: Driver & Passenger Seats',
  6: 'Manual Belts w/2 Airbags, Side Airbags, Side Curtain Shield Airbags, and Knee Airbag (Driver Seat)',
  8: 'Manual Belts w/2 Airbags and Side Airbags',
  9: 'Manual Belts w/2 Airbags, Side Airbags, and Front Curtain Airbags.',
  A: 'Seat Belt: All seats\nFrontal Airbag: Driver & Passenger Seats\nCurtain Shield Airbag: 1st & 2nd Rows\nSide Airbag: 1st Row\nKnee Airbag: Driver & Passenger Seats',
  D: 'Manual Belts w/2 Airbags, Side Airbags, Three-Row Curtain Shield Airbags, and Knee Airbag',
  F: 'Manual Belts w/2 Airbags, Side Airbags, and Knee Airbag',
  I: 'Seat Belt: All seats\nFrontal Airbag: Driver & Passenger Seats\nCurtain Shield Airbag: All Rows\nSide Airbag: All Rows\nKnee Airbag: Driver & Passenger Seats',
  M: 'Seat Belt: All seats\nFrontal Airbag: Driver & Passenger Seats\nCurtain Shield Airbag: All Rows\nSide Airbag: All Rows\nKnee Airbag: Driver Seat Only\nCushion Airbag: Passenger Seat Only',
  R: 'Seat Belt: All seats\nFrontal Airbag: Driver & Passenger Seats\nCurtain Shield Airbag: All Rows\nSide Airbag: 1st Row\nKnee Airbag: Driver Seat Only\nCushion Airbag: Passenger Seat Only'
}

const models: Record<string, Model[]> = {
  0: [
    { description: 'MR2', startYear: 0, endYear: Infinity },
    { description: 'MR2 Spyder', startYear: 0, endYear: Infinity }
  ],
  1: [
    { description: 'Tundra', startYear: 0, endYear: Infinity },
    { description: 'Lexus ES, ES Hybrid', startYear: 0, endYear: Infinity }
  ],
  3: [
    { description: 'Echo', startYear: 0, endYear: Infinity },
    { description: 'Yaris Verso', startYear: 0, endYear: Infinity }
  ],
  4: [
    { description: 'Yaris', startYear: 0, endYear: Infinity },
    { description: 'Scion xA', startYear: 0, endYear: Infinity },
    { description: 'Scion xB', startYear: 0, endYear: Infinity },
    { description: 'Scion xD', startYear: 0, endYear: Infinity },
    { description: 'Urban Cruiser', startYear: 0, endYear: Infinity }
  ],
  6: [{ description: 'Hilux', startYear: 0, endYear: Infinity }],
  7: [{ description: 'Scion tC', startYear: 0, endYear: Infinity }],
  A: [
    { description: 'bZ4X', startYear: 2023, endYear: Infinity },
    { description: 'Highlander', startYear: 0, endYear: Infinity },
    { description: 'Sequoia', startYear: 0, endYear: Infinity },
    { description: 'Celica RWD', startYear: 0, endYear: Infinity },
    { description: 'Supra', startYear: 0, endYear: Infinity }
  ],
  B: [
    { description: 'Avalon', startYear: 0, endYear: Infinity },
    { description: 'Avensis Verso', startYear: 0, endYear: Infinity },
    { description: 'Ipsum?', startYear: 0, endYear: Infinity }
  ],
  C: [
    { description: 'Sienna', startYear: 0, endYear: Infinity },
    { description: 'Previa', startYear: 0, endYear: Infinity },
    { description: 'Aygo', startYear: 0, endYear: Infinity }
  ],
  D: [{ description: 'T100', startYear: 0, endYear: Infinity }],
  E: [
    { description: 'Corolla', startYear: 0, endYear: Infinity },
    { description: 'Matrix', startYear: 0, endYear: Infinity },
    { description: 'Auris', startYear: 0, endYear: Infinity }
  ],
  F: [{ description: 'FJ Cruiser', startYear: 0, endYear: Infinity }],
  G: [
    { description: 'Hilux', startYear: 0, endYear: Infinity },
    { description: 'Fortuner', startYear: 0, endYear: Infinity }
  ],
  H: [
    { description: 'Highlander', startYear: 0, endYear: Infinity },
    { description: 'Lexus UX, UX Hybrid', startYear: 0, endYear: Infinity }
  ],
  J: [
    { description: 'Land Cruiser', startYear: 0, endYear: Infinity },
    { description: 'Land Cruiser Prado', startYear: 0, endYear: Infinity }
  ],
  K: [
    { description: 'Camry, Camry Hybrid', startYear: 0, endYear: Infinity },
    { description: 'Aurion(TRD)', startYear: 0, endYear: Infinity }
  ],
  L: [
    { description: 'Lexus GS F', startYear: 0, endYear: Infinity },
    { description: 'Tercel', startYear: 0, endYear: Infinity },
    { description: 'Paseo', startYear: 0, endYear: Infinity },
    { description: 'Avensis', startYear: 0, endYear: Infinity }
  ],
  M: [{ description: 'Previa', startYear: 0, endYear: Infinity }],
  N: [
    { description: 'Tacoma', startYear: 0, endYear: Infinity },
    { description: 'Older Trucks', startYear: 0, endYear: Infinity }
  ],
  P: [
    { description: 'Prius Prime', startYear: 0, endYear: Infinity },
    { description: 'Camry Solara', startYear: 0, endYear: Infinity }
  ],
  R: [
    { description: '4Runner', startYear: 0, endYear: Infinity },
    { description: 'Corolla Verso', startYear: 0, endYear: Infinity }
  ],
  S: [{ description: 'Fortuner', startYear: 0, endYear: Infinity }],
  T: [{ description: 'Celica FWD', startYear: 0, endYear: Infinity }],
  U: [{ description: 'Prius', startYear: 0, endYear: Infinity }],
  V: [{ description: 'RAV4, RAV4 Hybrid', startYear: 0, endYear: Infinity }],
  W: [{ description: 'MR2 (non-spyder models)', startYear: 0, endYear: Infinity }],
  X: [
    { description: 'C-HR', startYear: 0, endYear: Infinity },
    { description: 'Cressida', startYear: 0, endYear: Infinity }
  ]
}

const assemblyPlants = {
  0: [{ description: 'Japan', startYear: 0, endYear: Infinity }],
  1: [{ description: 'Japan', startYear: 0, endYear: Infinity }],
  2: [{ description: 'Japan', startYear: 0, endYear: Infinity }],
  3: [{ description: 'Japan', startYear: 0, endYear: Infinity }],
  4: [{ description: 'Japan', startYear: 0, endYear: Infinity }],
  5: [{ description: 'Japan', startYear: 0, endYear: Infinity }],
  6: [{ description: 'Japan', startYear: 0, endYear: Infinity }],
  7: [
    { description: 'Japan', startYear: 0, endYear: Infinity },
    { description: 'Lordstown, OH, US (GM plant)', startYear: 0, endYear: Infinity }
  ],
  8: [{ description: 'Japan', startYear: 0, endYear: Infinity }],
  9: [{ description: 'Japan', startYear: 0, endYear: Infinity }],
  A: [
    { description: 'Motomachi plant, Toyota City, Japan', startYear: 0, endYear: Infinity },
    { description: 'Onnaing-Valenciennes, France (TMMF)', startYear: 0, endYear: Infinity }
  ],
  C: [{ description: 'Cambridge, ON, Canada (TMMC)', startYear: 0, endYear: Infinity }],
  D: [{ description: 'Nagakusa plant, Obu, Japan (Toyota Industries plant)', startYear: 0, endYear: Infinity }],
  E: [{ description: 'Burnaston, Derbyshire, England, United Kingdom (TMMUK)', startYear: 0, endYear: Infinity }],
  J: [
    { description: 'Takaoka plant, Toyota City, Japan', startYear: 0, endYear: Infinity },
    { description: 'Vigo, Spain (PSA/Stellantis plant)', startYear: 0, endYear: Infinity }
  ],
  K: [{ description: 'Hamura, Japan (Hino Motors plant)', startYear: 0, endYear: Infinity }],
  M: [{ description: 'Tijuana, Baja CA, Mexico (TMMBC)', startYear: 0, endYear: Infinity }],
  N: [{ description: 'Kolín, Czech Republic (TPCA/TMMCZ)', startYear: 0, endYear: Infinity }],
  P: [{ description: 'Blue Springs, MS, US (TMMMS)', startYear: 0, endYear: Infinity }],
  R: [
    { description: 'Lafayette, IN, US (Subaru of Indiana Automotive)', startYear: 0, endYear: Infinity },
    { description: 'Adapazari, Sakarya province, Turkey (TMMT)', startYear: 0, endYear: Infinity }
  ],
  S: [{ description: 'Princeton, IN, US (TMMI)', startYear: 0, endYear: Infinity }],
  T: [{ description: 'Apaseo el Grande, Guanajuato, Mexico (TMMGT)', startYear: 0, endYear: Infinity }],
  U: [{ description: 'Georgetown, KY, US (TMMK)', startYear: 0, endYear: Infinity }],
  V: [{ description: 'Huntsville, AL, US (MTM USA)', startYear: 0, endYear: Infinity }],
  W: [
    { description: 'Woodstock, ON, Canada (TMMC)', startYear: 0, endYear: Infinity },
    { description: 'Graz, Austria (Magna Steyr)', startYear: 0, endYear: Infinity }
  ],
  X: [
    { description: 'San Antonio, TX, US (TMMTX)', startYear: 0, endYear: Infinity },
    { description: 'Altona, Victoria, Australia (Toyota Australia)', startYear: 0, endYear: Infinity }
  ],
  Y: [{ description: 'Salamanca, Guanajuato, Mexico (Mazda de Mexico Vehicle Operation)', startYear: 0, endYear: Infinity }],
  Z: [
    { description: 'Fremont, CA, US (NUMMI)', startYear: 0, endYear: Infinity },
    { description: 'Lieu-Saint-Amand, France (Sevel Nord - PSA/Stellantis plant)', startYear: 0, endYear: Infinity }
  ]
}

interface ToyotaSpecific {
  model: string
  assemblyPlant: string
  vehicleType: string
  manufacturer: string
  engine: string
  // body: string
  restraint: string
}

/**
 * Decodes Toyota's manufacturer specific VIN data
 *
 * Source: https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Toyota/VIN_Codes
 * @param vin {string} The VIN to check
 */
function decodeVin (vin: string): ToyotaSpecific | null {
  const vehicleType = vehicleTypes[vin[2]]
  const modelYear: number = modelYears(vin)

  // let body = 'Unknown'
  // if (bodies[vin[3]] !== undefined) {
  //   body = bodies[vin[3]]
  // }

  let manufacturer = 'Unknown'
  if (manufacturers[vin[1]] !== undefined) {
    const manufacturerItem = manufacturers[vin[1]]

    for (const item of manufacturerItem) {
      if (item.startYear <= modelYear && modelYear <= item.endYear) {
        if (manufacturer !== 'Unknown') {
          manufacturer += '; '
        } else {
          manufacturer = ''
        }
        manufacturer += item.description
      }
    }
  }

  let engine = 'Unknown'
  let engines: string[]
  const engineCharacter = vin[4]
  if (modelYear < 1996) {
    if (engineBefore1996[engineCharacter] !== undefined) {
      engines = engineBefore1996[engineCharacter]
    }
  } else {
    if (engineAfter1996[engineCharacter] !== undefined) {
      engines = engineAfter1996[engineCharacter]
    }
  }
  for (const item of engines) {
    if (engine === 'Unknown') {
      engine = ''
    } else {
      engine += '; '
    }

    engine += item
  }

  let restraint = 'Unknown'
  if (restraints[vin[5]] !== undefined) {
    restraint = restraints[vin[5]]
  }

  let model = 'Unknown'
  const modelCode = vin[7]
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
    assemblyPlant,
    vehicleType,
    manufacturer,
    engine,
    // body,
    restraint
  }
}

export { supportedWmis, decodeVin }
