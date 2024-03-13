import vinLite from '../index'

describe('Volvo', () => {
  describe('2011 Volvo S40 T5 (YV1672MS6B2530438)', () => {
    const vin = 'YV1672MS6B2530438'

    test('Decode VIN Data', () => {
      const result = vinLite.decode(vin)

      const expected = {
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

      expect(result).toEqual(expected)
    })
  })
})
