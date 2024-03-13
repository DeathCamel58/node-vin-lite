import VinLite from '../index'

describe('Validity Checks', () => {
  const vinDecoder = new VinLite()

  describe('Valid', () => {
    const validVins = [
      '1FMCU0GD3HUD06748',
      '1FT8W3A64MEE16356',
      '2FMDK3KC3ABA05869',
      '5YJSA1E14HF184689',
      '5YJXCDE24KF202884',
      '5YJYGDEE9LF028427',
      '5YJRE1A19A1000522',
      '7G2TBEEB2PN000529',
      'VF9SW3V38PM795065',
      'VF9SA15CX8M795234',
      'VF9SD3V35LM795007',
      '2T3P1RFV8MW222306',
      '3TMAZ5CN8LM114957',
      '4T1G11AK9PU822683',
      '1V2WR2CA5KC539715',
      '1VWAH7A34DC031915',
      '3VVNB7AX4PM041275',
      '3VWEB7BU2LM046002',
      'YV1672MS6B2530438'
    ]

    // Test each valid VIN
    for (const vin of validVins) {
      test(vin, () => {
        const result = vinDecoder.isValid(vin)

        expect(result).toBeTruthy()
      })
    }
  })

  describe('Invalid', () => {
    const invalidVins = [
      '1FMCU0GD3HUD06747',
      'VF9SW3V38PM795066',
      '2T3P1RFV8MW222307',
      '3VWLX7AJ4DM203038',
      'YV1672MS6B2530439'
    ]

    // Test each invalid VIN
    for (const vin of invalidVins) {
      test(vin, () => {
        const result = vinDecoder.isValid(vin)

        expect(result).toBeFalsy()
      })
    }
  })
})
