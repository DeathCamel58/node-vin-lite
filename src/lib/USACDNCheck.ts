// source https://en.wikipedia.org/wiki/Vehicle_identification_number
function transliterate (c: string): number {
  return '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'.indexOf(c) % 10
}

function getCheckDigit (vin: string): string {
  const map = '0123456789X'
  const weights = '8765432X098765432'
  let sum = 0
  for (let i = 0; i < 17; ++i) { sum += transliterate(vin[i]) * map.indexOf(weights[i]) }
  return map[sum % 11]
}

export default class VinDecoder {
  static validate (vin: string): boolean {
    if (vin.length !== 17) return false
    return getCheckDigit(vin) === vin[8]
  }
}
