import vinLite from '../index'

describe('Volkswagen', () => {
  describe('2019 Volkswagen Atlas SE w/Technology (1V2WR2CA5KC539715)', () => {
    const vin = '1V2WR2CA5KC539715'

    test('Valid VIN detection', () => {
      const result = vinLite.isValid(vin)

      expect(result).toBeTruthy()
    })

    test('Decode VIN Data', () => {
      const result = vinLite.decode(vin)

      const expected = {
        wmi: '1V2',
        vds: 'WR2CA5',
        vis: 'KC539715',
        sequentialNumber: '539715',
        check: '5',
        location: {
          continent: 'North America',
          country: 'United States'
        },
        manufacturer: 'Volkswagen USA',
        modelYear: 2019,
        manufacturerInfo: {
          model: 'Atlas SUV; Atlas Cross Sport SUV',
          series: 'Atlas 3.6 FSI SE w/ Technology',
          transmission: 'A8',
          assemblyPlant: 'Chattanooga, USA'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2013 Volkswagen Passat S (1VWAH7A34DC031915)', () => {
    const vin = '1VWAH7A34DC031915'

    test('Valid VIN detection', () => {
      const result = vinLite.isValid(vin)

      expect(result).toBeTruthy()
    })

    test('Decode VIN Data', () => {
      const result = vinLite.decode(vin)

      const expected = {
        wmi: '1VW',
        vds: 'AH7A34',
        vis: 'DC031915',
        sequentialNumber: '031915',
        check: '4',
        location: {
          continent: 'North America',
          country: 'United States'
        },
        manufacturer: 'Volkswagen USA',
        modelYear: 2013,
        manufacturerInfo: {
          model: 'Passat Sedan',
          series: 'Unknown',
          transmission: 'Unknown',
          assemblyPlant: 'Chattanooga, USA'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2023 Volkswagen Tiguan SE (3VVNB7AX4PM041275)', () => {
    const vin = '3VVNB7AX4PM041275'

    test('Valid VIN detection', () => {
      const result = vinLite.isValid(vin)

      expect(result).toBeTruthy()
    })

    test('Decode VIN Data', () => {
      const result = vinLite.decode(vin)

      const expected = {
        wmi: '3VV',
        vds: 'NB7AX4',
        vis: 'PM041275',
        sequentialNumber: '041275',
        check: '4',
        location: {
          continent: 'North America',
          country: 'Mexico'
        },
        manufacturer: 'Volkswagen Mexico',
        modelYear: 2023,
        manufacturerInfo: {
          model: 'Tiguan SUV; Tiguan Limited SUV',
          series: 'Tiguan 2.0 TSI SE w/ Sunroof Pkg.',
          transmission: 'A',
          assemblyPlant: 'Puebla, Mexico'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2020 Volkswagen Jetta SEL (3VWEB7BU2LM046002)', () => {
    const vin = '3VWEB7BU2LM046002'

    test('Valid VIN detection', () => {
      const result = vinLite.isValid(vin)

      expect(result).toBeTruthy()
    })

    test('Decode VIN Data', () => {
      const result = vinLite.decode(vin)

      const expected = {
        wmi: '3VW',
        vds: 'EB7BU2',
        vis: 'LM046002',
        sequentialNumber: '046002',
        check: '2',
        location: {
          continent: 'North America',
          country: 'Mexico'
        },
        manufacturer: 'Volkswagen Mexico',
        modelYear: 2020,
        manufacturerInfo: {
          model: 'Jetta Sedan; Jetta GLI Sedan',
          series: 'Unknown',
          transmission: 'Unknown',
          assemblyPlant: 'Puebla, Mexico'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  test('Invalid VIN detection (3VWLX7AJ4DM203038)', () => {
    const result = vinLite.isValid('3VWLX7AJ4DM203038')

    expect(result).toBeFalsy()
  })
})
