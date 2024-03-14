import VinLite from '../index'

const vinDecoder = new VinLite()
const vehicles = [
  {
    vehicleName: '2018 Ferrari 488 Spider',
    vin: 'ZFF80AMA2J0234235',
    data: {
      wmi: 'ZFF',
      vds: '80AMA2',
      vis: 'J0234235',
      sequentialNumber: '234235',
      check: '2',
      location: {
        continent: 'Europe',
        country: 'Italy'
      },
      manufacturer: 'Ferrari',
      modelYear: 2018,
      manufacturerInfo: {
        model: '488 Spider',
        engine: 'F154CB',
        safetySystem: 'Dual stage airbags and side-airbags, 3-point safety belts with pretensioners and load limiter and roll-over protection system',
        market: 'Left-Hand Drive, North America',
        assemblyPlant: 'Maranello, Italy'
      }
    }
  },
  {
    vehicleName: '2021 Ferrari 812 GTS',
    vin: 'ZFF97CMA7M0257848',
    data: {
      wmi: 'ZFF',
      vds: '97CMA7',
      vis: 'M0257848',
      sequentialNumber: '257848',
      check: '7',
      location: {
        continent: 'Europe',
        country: 'Italy'
      },
      manufacturer: 'Ferrari',
      modelYear: 2021,
      manufacturerInfo: {
        model: '812 GTS',
        engine: 'F140GA',
        safetySystem: 'Dual stage airbags and side-airbags, 3-point safety belts with pretensioners and load limiter and roll-over protection system',
        market: 'Left-Hand Drive, North America',
        assemblyPlant: 'Maranello, Italy'
      }
    }
  },
  {
    vehicleName: '2012 Ferrari California',
    vin: 'ZFF65LJA5C0182871',
    data: {
      wmi: 'ZFF',
      vds: '65LJA5',
      vis: 'C0182871',
      sequentialNumber: '182871',
      check: '5',
      location: {
        continent: 'Europe',
        country: 'Italy'
      },
      manufacturer: 'Ferrari',
      modelYear: 2012,
      manufacturerInfo: {
        model: 'California - "L" for 2+2, or "B" for 2 seater',
        engine: 'F136IB - DCT (F1)',
        safetySystem: 'Advanced airbags and side-airbags, 3-point safety belts with pretensioners and load limiter for front and rear, plus two lower anchorages for each rear seat, no passenger airbag ON/OFF switch',
        market: 'Left-Hand Drive, North America',
        assemblyPlant: 'Maranello, Italy'
      }
    }
  }
]

describe('Ferrari', () => {
  for (const vehicle of vehicles) {
    describe(`${vehicle.vehicleName} (${vehicle.vin})`, () => {
      test('Decode VIN Data', () => {
        const result = vinDecoder.decode(vehicle.vin)

        expect(result).toEqual(vehicle.data)
      })
    })
  }
})
