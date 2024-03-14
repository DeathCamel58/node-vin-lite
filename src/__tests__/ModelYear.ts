import modelYear from '../data/modelYear'

describe('Yest Checks', () => {
  const vinYears = [
    {
      vin: '4T1F11AK0RU202786',
      year: 2024
    },
    {
      vin: '7G2TBEEB2PN000529',
      year: 2023
    },
    {
      vin: '5TDCZRAH1NS119403',
      year: 2022
    },
    {
      vin: '1FT8W3A64MEE16356',
      year: 2021
    },
    {
      vin: '5YJYGDEE9LF028427',
      year: 2020
    },
    {
      vin: '5YJXCDE24KF202884',
      year: 2019
    },
    {
      vin: '2T3RFREV4JW816186',
      year: 2018
    },
    {
      vin: '1FMCU0GD3HUD06748',
      year: 2017
    },
    {
      vin: '2T1BURHE1GC557727',
      year: 2016
    },
    {
      vin: '2T3WFREV4FW199821',
      year: 2015
    },
    {
      vin: '5TDJK3DC9ES076146',
      year: 2014
    },
    {
      vin: '1VWAH7A34DC031915',
      year: 2013
    },
    {
      vin: 'YV1672MS6B2530438',
      year: 2011
    },
    {
      vin: '2FMDK3KC3ABA05869',
      year: 2010
    },
    {
      vin: 'JTDKB20U897854532',
      year: 2009
    },
    {
      vin: 'VF9SA15CX8M795234',
      year: 2008
    },
    {
      vin: '4T1CE30P27U759275',
      year: 2007
    },
    {
      vin: '5TDZA22C56S456721',
      year: 2006
    },
    {
      vin: '3TMJU62N45M001886',
      year: 2005
    },
    {
      vin: 'JTEHT05J242067829',
      year: 2004
    },
    {
      vin: 'JTEGF21A230107826',
      year: 2003
    },
    {
      vin: '4T1BE30K12U042486',
      year: 2002
    },
    {
      vin: '4T1BF28K31U971444',
      year: 2001
    },
    {
      vin: 'JT3HT05J3Y0111623',
      year: 2000
    }
  ]

  // Test each valid VIN
  for (const data of vinYears) {
    test(`Model Year ${data.year} (${data.vin})`, () => {
      const result = modelYear(data.vin)

      expect(result).toBe(data.year)
    })
  }
})
