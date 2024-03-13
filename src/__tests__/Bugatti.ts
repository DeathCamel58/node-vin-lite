import VinLite from '../index'

describe('Bugatti', () => {
  const vinDecoder = new VinLite()

  describe('2023 Bugatti Chiron Super Sport (VF9SW3V38PM795065)', () => {
    const vin = 'VF9SW3V38PM795065'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
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

      expect(result).toEqual(expected)
    })
  })

  describe('2009 Bugatti Veyron EB 16.4 (VF9SA15CX8M795234)', () => {
    const vin = 'VF9SA15CX8M795234'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
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

      expect(result).toEqual(expected)
    })
  })

  describe('2020 Bugatti Divo (VF9SD3V35LM795007)', () => {
    const vin = 'VF9SD3V35LM795007'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
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

      expect(result).toEqual(expected)
    })
  })
})
