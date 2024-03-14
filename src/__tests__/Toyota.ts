import VinLite from '../index'

const vinDecoder = new VinLite()
const vehicles = [
  {
    vehicleName: '2021 Toyota RAV4 XLE',
    vin: '2T3P1RFV8MW222306',
    data: {
      wmi: '2T3',
      vds: 'P1RFV8',
      vis: 'MW222306',
      sequentialNumber: '222306',
      check: '8',
      location: {
        continent: 'North America',
        country: 'Canada'
      },
      manufacturer: 'TMMC, Toyota Multipurpose Passenger Vehicle (SUV)',
      modelYear: 2021,
      manufacturerInfo: {
        model: 'RAV4, RAV4 Hybrid',
        assemblyPlant: 'Woodstock, ON, Canada (TMMC); Graz, Austria (Magna Steyr)',
        manufacturer: 'NUMMI (Toyota truck); Toyota',
        vehicleType: 'Multipurpose Passenger Vehicle (SUV)',
        engine: 'A25A-FKS - Gasoline, Port + Direct, L4, 2L',
        restraint: 'Seat Belt: All seats\n' +
          'Frontal Airbag: Driver & Passenger Seats\n' +
          'Curtain Shield Airbag: All Rows\n' +
          'Side Airbag: 1st Row\n' +
          'Knee Airbag: Driver Seat Only\n' +
          'Cushion Airbag: Passenger Seat Only'
      }
    }
  },
  {
    vehicleName: '2020 Toyota Tacoma TRD Sport',
    vin: '3TMAZ5CN8LM114957',
    data: {
      wmi: '3TM',
      vds: 'AZ5CN8',
      vis: 'LM114957',
      sequentialNumber: '114957',
      check: '8',
      location: {
        continent: 'North America',
        country: 'Mexico'
      },
      manufacturer: 'TMMBC, Toyota Truck',
      modelYear: 2020,
      manufacturerInfo: {
        model: 'Tacoma; Older Trucks',
        assemblyPlant: 'Tijuana, Baja CA, Mexico (TMMBC)',
        manufacturer: 'NUMMI (Toyota truck); Toyota',
        vehicleType: 'Multipurpose Passenger Vehicle (SUV)',
        engine: '2GR-FKS - Gasoline, Port + Direct, V6, 3.5L; 2JZ-FE; 1ZZ-FE; 3ZZ-FE',
        restraint: 'Seat Belt: All seats\n' +
          'Frontal Airbag: Driver & Passenger Seats\n' +
          'Curtain Shield Airbag: All Rows\n' +
          'Side Airbag: 1st Row\n' +
          'Knee Airbag: Driver & Passenger Seats'
      }
    }
  },
  {
    vehicleName: '2023 Toyota Camry SE',
    vin: '4T1G11AK9PU822683',
    data: {
      wmi: '4T1',
      vds: 'G11AK9',
      vis: 'PU822683',
      sequentialNumber: '822683',
      check: '9',
      location: {
        continent: 'North America',
        country: 'United States'
      },
      manufacturer: 'TMMK, Toyota Passenger Car',
      modelYear: 2023,
      manufacturerInfo: {
        model: 'Camry, Camry Hybrid; Aurion(TRD)',
        assemblyPlant: 'Georgetown, KY, US (TMMK)',
        manufacturer: 'NUMMI (Toyota truck); Toyota',
        vehicleType: 'Passenger Car',
        engine: 'A25A-FKS - Gasoline, Port + Direct, L4, 2L',
        restraint: 'Seat Belt: All seats\n' +
          'Frontal Airbag: Driver & Passenger Seats\n' +
          'Curtain Shield Airbag: All Rows\n' +
          'Side Airbag: All Rows\n' +
          'Knee Airbag: Driver & Passenger Seats'
      }
    }
  }
]

describe('Toyota', () => {
  for (const vehicle of vehicles) {
    describe(`${vehicle.vehicleName} (${vehicle.vin})`, () => {
      test('Decode VIN Data', () => {
        const result = vinDecoder.decode(vehicle.vin)

        expect(result).toEqual(vehicle.data)
      })
    })
  }
})
