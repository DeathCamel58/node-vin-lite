import VinLite from '../index'

const vinDecoder = new VinLite()
const vehicles = [
  {
    vehicleName: '2023 Bugatti Chiron Super Sport',
    vin: 'VF9SW3V38PM795065',
    data: {
      wmi: 'VF9',
      vds: 'SW3V38',
      vis: 'PM795065',
      sequentialNumber: '795065',
      check: '8',
      location: {
        continent: 'Europe',
        country: 'France'
      },
      manufacturer: 'Bugatti France',
      modelYear: 2023,
      manufacturerInfo: {
        model: 'Chiron Super Sport 300+, Super Sport',
        assemblyPlant: 'Molsheim, France'
      }
    }
  },
  {
    vehicleName: '2009 Bugatti Veyron EB 16.4',
    vin: 'VF9SA15CX8M795234',
    data: {
      wmi: 'VF9',
      vds: 'SA15CX',
      vis: '8M795234',
      sequentialNumber: '795234',
      check: 'X',
      location: {
        continent: 'Europe',
        country: 'France'
      },
      manufacturer: 'Bugatti France',
      modelYear: 2008, // This is weird, as the vehicle is 2009, but the VIN says 2008
      manufacturerInfo: {
        model: 'Veyron EB 16.4',
        assemblyPlant: 'Molsheim, France'
      }
    }
  },
  {
    vehicleName: '2020 Bugatti Divo',
    vin: 'VF9SD3V35LM795007',
    data: {
      wmi: 'VF9',
      vds: 'SD3V35',
      vis: 'LM795007',
      sequentialNumber: '795007',
      check: '5',
      location: {
        continent: 'Europe',
        country: 'France'
      },
      manufacturer: 'Bugatti France',
      modelYear: 2020,
      manufacturerInfo: {
        model: 'Divo',
        assemblyPlant: 'Molsheim, France'
      }
    }
  }
]

describe('Bugatti', () => {
  for (const vehicle of vehicles) {
    describe(`${vehicle.vehicleName} (${vehicle.vin})`, () => {
      test('Decode VIN Data', () => {
        const result = vinDecoder.decode(vehicle.vin)

        expect(result).toEqual(vehicle.data)
      })
    })
  }
})
