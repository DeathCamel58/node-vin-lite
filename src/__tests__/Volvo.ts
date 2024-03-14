import VinLite from '../index'

const vinDecoder = new VinLite()
const vehicles = [
  {
    vehicleName: '2011 Volvo S40 T5',
    vin: 'YV1672MS6B2530438',
    data: {
      wmi: 'YV1',
      vds: '672MS6',
      vis: 'B2530438',
      sequentialNumber: '530438',
      check: '6',
      location: {
        continent: 'Europe',
        country: 'Sweden'
      },
      manufacturer: 'Volvo Cars',
      modelYear: 2011,
      manufacturerInfo: {
        // model: "Ford Escape SE 4x2 ('13-'19)",
        assemblyPlant: 'Belgium Ghent Plant VCG 22',
        gearbox: 'AW70/71/72 lock-up / AW42 Auto (USA - CDN Check Code)'
      }
    }
  }
]

describe('Volvo', () => {
  for (const vehicle of vehicles) {
    describe(`${vehicle.vehicleName} (${vehicle.vin})`, () => {
      test('Decode VIN Data', () => {
        const result = vinDecoder.decode(vehicle.vin)

        expect(result).toEqual(vehicle.data)
      })
    })
  }
})
