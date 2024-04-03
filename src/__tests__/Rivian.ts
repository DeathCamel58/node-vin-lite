import VinLite from '../index'

const vinDecoder = new VinLite()
const vehicles = [
  {
    vehicleName: '2022 Rivian R1S Launch Edition',
    vin: '7PDSGABL7NN002333',
    data: {
      wmi: '7PD',
      vds: 'SGABL7',
      vis: 'NN002333',
      sequentialNumber: '002333',
      check: '7',
      location: {
        continent: 'Spare Codes',
        country: 'Unassigned'
      },
      manufacturer: 'Rivian',
      modelYear: 2022,
      manufacturerInfo: {
        assemblyPlant: 'Normal, IL',
        engineMotorDrivetrain: 'Electric, Large/Standard Pack, Quad-Motor, AWD',
        gvwrBrakeSystem: '8,001-9,000 lbs.; Hydraulic Brakes',
        model: 'R1S 4-door MPV',
        restraint: '2x front airbags; 2x knee airbags; 2x front row side airbags; 2x curtain airbags; 2x front row 3-point seat belts; 3x second row 3-point seat belts; 2x third row 3-point seat belts.',
        trim: 'Launch Edition'
      }
    }
  },
  {
    vehicleName: '2023 Rivian R1T Adventure',
    vin: '7FCTGAAA7PN023076',
    data: {
      wmi: '7FC',
      vds: 'TGAAA7',
      vis: 'PN023076',
      sequentialNumber: '023076',
      check: '7',
      location: {
        continent: 'Spare Codes',
        country: 'Unassigned'
      },
      manufacturer: 'Rivian',
      modelYear: 2023,
      manufacturerInfo: {
        assemblyPlant: 'Normal, IL',
        engineMotorDrivetrain: 'Electric, Large/Standard Pack, Quad-Motor, AWD',
        gvwrBrakeSystem: '8,001-9,000 lbs.; Hydraulic Brakes',
        model: 'R1T 4-door Pickup Truck',
        restraint: '2x front airbags; 2x knee airbags; 2x front row side airbags; 2x curtain airbags; 2x front row 3-point seat belts; 3x second row 3-point seat belts.',
        trim: 'Adventure'
      }
    }
  }
]

describe('Rivian', () => {
  for (const vehicle of vehicles) {
    describe(`${vehicle.vehicleName} (${vehicle.vin})`, () => {
      test('Decode VIN Data', () => {
        const result = vinDecoder.decode(vehicle.vin)

        expect(result).toEqual(vehicle.data)
      })
    })
  }
})
