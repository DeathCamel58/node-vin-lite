import VinLite from '../index'

describe('Ford', () => {
  const vinDecoder = new VinLite()

  describe('2017 Ford Escape (1FMCU0GD3HUD06748)', () => {
    const vin = '1FMCU0GD3HUD06748'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
        wmi: '1FM',
        vds: 'CU0GD3',
        vis: 'HUD06748',
        sequentialNumber: 'D06748',
        check: '3',
        location: {
          continent: 'North America',
          country: 'United States'
        },
        manufacturer: 'Ford Motor Company',
        modelYear: 2017,
        manufacturerInfo: {
          model: "Ford Escape SE 4x2 ('13-'19)",
          assemblyPlant: 'Louisville Assembly (Louisville, Kentucky)'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2021 Ford F-350 XL (1FT8W3A64MEE16356)', () => {
    const vin = '1FT8W3A64MEE16356'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
        wmi: '1FT',
        vds: '8W3A64',
        vis: 'MEE16356',
        sequentialNumber: 'E16356',
        check: '4',
        location: {
          continent: 'North America',
          country: 'United States'
        },
        manufacturer: 'Ford Motor Company',
        modelYear: 2021,
        manufacturerInfo: {
          model: "Ford F-Series, Super Duty F-350, Crew Cab, 2WD, Single Rear Wheels ('10-)",
          assemblyPlant: 'Kentucky Truck Assembly (Louisville, Kentucky)'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2010 Ford Edge Limited (2FMDK3KC3ABA05869)', () => {
    const vin = '2FMDK3KC3ABA05869'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
        wmi: '2FM',
        vds: 'DK3KC3',
        vis: 'ABA05869',
        sequentialNumber: 'A05869',
        check: '3',
        location: {
          continent: 'North America',
          country: 'Canada'
        },
        manufacturer: 'Ford Motor Company Canada',
        modelYear: 2010,
        manufacturerInfo: {
          model: "Ford Edge; Limited FWD ('10-'14)",
          assemblyPlant: 'Oakville Assembly (Oakville, Ontario, Canada)'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2024 Ford Mustang Dark Horse Fastback (1FA6P8R00R5501127)', () => {
    const vin = '1FA6P8R00R5501127'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
        wmi: '1FA',
        vds: '6P8R00',
        vis: 'R5501127',
        sequentialNumber: '501127',
        check: '0',
        location: {
          continent: 'North America',
          country: 'United States'
        },
        manufacturer: 'Ford Motor Company',
        modelYear: 2024,
        manufacturerInfo: {
          model: "Ford Mustang, Coupe; Dark Horse ('24)",
          assemblyPlant: 'Flat Rock Assembly plant (AutoAlliance International) (Flat Rock, Michigan)'
        }
      }

      expect(result).toEqual(expected)
    })
  })
})
