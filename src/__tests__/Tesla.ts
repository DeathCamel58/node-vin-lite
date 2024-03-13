import VinLite from '../index'

describe('Tesla', () => {
  const vinDecoder = new VinLite()

  describe('2017 Tesla Model S 75 (5YJSA1E14HF184689)', () => {
    const vin = '5YJSA1E14HF184689'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
        wmi: '5YJ',
        vds: 'SA1E14',
        vis: 'HF184689',
        sequentialNumber: '184689',
        check: '4',
        location: {
          continent: 'North America',
          country: 'United States'
        },
        manufacturer: 'Tesla Inc.',
        modelYear: 2017,
        manufacturerInfo: {
          model: 'Model S',
          bodyType: '5 Door Hatchback LHD (Left-Hand Drive)',
          restraint: 'Manual Type 2 Seat Belts (Front, Rear*3) With Front Airbags, PODS, Side Inflatable Restraints, Knee Airbags (Front)',
          batteryType: 'Lithium-Ion Battery - Electric',
          motorDriveUnit: 'Single Motor - Three Phase A/C Induction',
          assemblyPlant: 'Fremont, CA, USA'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2019 Tesla Model X 75D (5YJXCDE24KF202884)', () => {
    const vin = '5YJXCDE24KF202884'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
        wmi: '5YJ',
        vds: 'XCDE24',
        vis: 'KF202884',
        sequentialNumber: '202884',
        check: '4',
        location: {
          continent: 'North America',
          country: 'United States'
        },
        manufacturer: 'Tesla Inc.',
        modelYear: 2019,
        manufacturerInfo: {
          model: 'Model X',
          bodyType: 'Class E (6001-7000 lbs) GVWR / MPV /5 Door (Left-Hand Drive)',
          restraint: 'Manual Type 2 Seat Belts (Front Row, Center Row*3) With Front Airbags, PODS, Side Inflatable Restraints [5-seat]',
          batteryType: 'Lithium-Ion Battery - Electric',
          motorDriveUnit: 'Dual Motor - Three Phase A/C Induction',
          assemblyPlant: 'Fremont, CA, USA'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2020 Tesla Model Y Long Range (5YJYGDEE9LF028427)', () => {
    const vin = '5YJYGDEE9LF028427'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
        wmi: '5YJ',
        vds: 'YGDEE9',
        vis: 'LF028427',
        sequentialNumber: '028427',
        check: '9',
        location: {
          continent: 'North America',
          country: 'United States'
        },
        manufacturer: 'Tesla Inc.',
        modelYear: 2020,
        manufacturerInfo: {
          model: 'Model Y',
          bodyType: 'Class D MPV, 5 Door (Left-Hand Drive)',
          restraint: 'Manual Type 2 Seat Belts (Front Row, Center Row*3) With Front Airbags, PODS, Side Inflatable Restraints [5-seat]',
          batteryType: 'Lithium-Ion Battery - Electric',
          motorDriveUnit: 'Dual Motor - Standard Model Y',
          assemblyPlant: 'Fremont, CA, USA'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2010 Tesla Roadster (5YJRE1A19A1000522)', () => {
    const vin = '5YJRE1A19A1000522'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
        wmi: '5YJ',
        vds: 'RE1A19',
        vis: 'A1000522',
        sequentialNumber: '000522',
        check: '9',
        location: {
          continent: 'North America',
          country: 'United States'
        },
        manufacturer: 'Tesla Inc.',
        modelYear: 2010,
        manufacturerInfo: {
          model: 'Roadster',
          bodyType: 'Convertible',
          restraint: 'Type 2 USA Seat Belts, Dual Airbags',
          batteryType: 'Lithium-Ion Battery - Electric',
          motorDriveUnit: 'Tesla M6B Motor',
          assemblyPlant: 'Menlo Park, CA, USA'
        }
      }

      expect(result).toEqual(expected)
    })
  })

  describe('2023 Tesla Semi (7G2TBEEB2PN000529)', () => {
    const vin = '7G2TBEEB2PN000529'

    test('Decode VIN Data', () => {
      const result = vinDecoder.decode(vin)

      const expected = {
        wmi: '7G2',
        vds: 'TBEEB2',
        vis: 'PN000529',
        sequentialNumber: '000529',
        check: '2',
        location: {
          continent: 'Spare Codes',
          country: 'Unassigned'
        },
        manufacturer: 'Tesla, Inc., Truck',
        modelYear: 2023,
        manufacturerInfo: {
          model: 'Semi',
          bodyType: 'Day Cab',
          batteryType: 'Electric',
          motorDriveUnit: 'Dual Drive Rear Axle, Air Brakes (Semi)',
          gvwr: 'Class 8 – Greater than 14968 kg. (33,001 lbs. and over)',
          assemblyPlant: 'Reno, NV, USA'
        }
      }

      expect(result).toEqual(expected)
    })
  })
})
