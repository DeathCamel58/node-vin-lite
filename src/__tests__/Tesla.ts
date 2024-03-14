import VinLite from '../index'

const vinDecoder = new VinLite()
const vehicles = [
  {
    vehicleName: '2017 Tesla Model S 75',
    vin: '5YJSA1E14HF184689',
    data: {
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
  },
  {
    vehicleName: '2019 Tesla Model X 75D',
    vin: '5YJXCDE24KF202884',
    data: {
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
  },
  {
    vehicleName: '2020 Tesla Model Y Long Range',
    vin: '5YJYGDEE9LF028427',
    data: {
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
  },
  {
    vehicleName: '2010 Tesla Roadster',
    vin: '5YJRE1A19A1000522',
    data: {
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
  },
  {
    vehicleName: '2023 Tesla Semi',
    vin: '7G2TBEEB2PN000529',
    data: {
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
  }
]

describe('Tesla', () => {
  for (const vehicle of vehicles) {
    describe(`${vehicle.vehicleName} (${vehicle.vin})`, () => {
      test('Decode VIN Data', () => {
        const result = vinDecoder.decode(vehicle.vin)

        expect(result).toEqual(vehicle.data)
      })
    })
  }
})
