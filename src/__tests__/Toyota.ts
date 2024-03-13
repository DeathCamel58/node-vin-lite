import vinLite from '../index'

describe('Toyota', () => {
  describe('2021 Toyota RAV4 XLE (2T3P1RFV8MW222306)', () => {
    const vin = '2T3P1RFV8MW222306'

    test('Valid VIN detection', () => {
      const result = vinLite.isValid(vin)

      expect(result).toBeTruthy()
    })

    test('Decode VIN Data', () => {
      const result = vinLite.decode(vin)

      const expected = {
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
          model: 'RAV4',
          assemblyPlant: 'Woodstock, ON, Canada (TMMC); Graz, Austria (Magna Steyr)',
          manufacturer: 'NUMMI (Toyota truck); Toyota',
          vehicleType: 'Multipurpose Passenger Vehicle (SUV)',
          engine: 'Unknown',
          body: 'Standard Cab 1/2 Ton Truck, 4WD, Short Bed, Full-Size Frame'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2020 Toyota Tacoma TRD Sport (3TMAZ5CN8LM114957)', () => {
    const vin = '3TMAZ5CN8LM114957'

    test('Valid VIN detection', () => {
      const result = vinLite.isValid(vin)

      expect(result).toBeTruthy()
    })

    test('Decode VIN Data', () => {
      const result = vinLite.decode(vin)

      const expected = {
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
          model: 'Tacoma/Older Trucks',
          assemblyPlant: 'Tijuana, Baja CA, Mexico (TMMBC)',
          manufacturer: 'NUMMI (Toyota truck); Toyota',
          vehicleType: 'Multipurpose Passenger Vehicle (SUV)',
          engine: '3.5L 2GR-FKS V6 (278 hp), 2JZ-FE, 1ZZ-FE, 3ZZ-FE',
          body: '2DR Sedan 2WD'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2023 Toyota Camry SE (4T1G11AK9PU822683)', () => {
    const vin = '4T1G11AK9PU822683'

    test('Valid VIN detection', () => {
      const result = vinLite.isValid(vin)

      expect(result).toBeTruthy()
    })

    test('Decode VIN Data', () => {
      const result = vinLite.decode(vin)

      const expected = {
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
          model: 'Camry/Aurion(TRD)',
          assemblyPlant: 'Georgetown, KY, US (TMMK)',
          manufacturer: 'NUMMI (Toyota truck); Toyota',
          vehicleType: 'Passenger Car',
          engine: 'Unknown',
          body: '4DR Wagon 2WD'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  test('Invalid VIN detection (2T3P1RFV8MW222307)', () => {
    const result = vinLite.isValid('2T3P1RFV8MW222307')

    expect(result).toBeFalsy()
  })
})
