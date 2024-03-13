import manufacturerLocation, { type ManufacturerLocation } from './data/manufacturerLocation'
import modelYears from './data/modelYear'
import manufacturers from './data/manufacturerName'
import USACDNCheck from './lib/USACDNCheck'
import { getManufacturerDecoder } from './lib/findManufacturerDecoder'

interface VinData {
  // World Manufacturer Identifier - https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/World_Manufacturer_Identifier_(WMI)
  wmi: string

  // Vehicle Descriptor Section - https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Vehicle_Descriptor_Section
  vds: string

  // Vehicle Identifier Section - https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Vehicle_Identifier_Section
  vis: string

  sequentialNumber: string

  // Check Digit - https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit
  check: string

  // Manufacturer Continent - https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/World_Manufacturer_Identifier_(WMI)#WMI_Regions
  location: ManufacturerLocation

  // Manufacturer Name
  manufacturer: string

  // Manufacturer Specific Decoding
  manufacturerInfo?: {}

  // Model Year of the Vehicle
  modelYear: number
}

interface VinError {
  error: string
}

export default class VinDecoder {
  /**
    * Check if a VIN is valid
    *
    * This tests if the VIN is 17 characters long, and checks that the check digit is correct
    *
    * NOTE: Reference https://vpic.nhtsa.dot.gov/decoder/CheckDigit/Index/1VWAH7A34DC031915
    * @param vin {string} The VIN to check
    * @returns {boolean} Was the VIN valid
    */
  isValid (vin: string): boolean {
    // Define multiplier for each position in the VIN
    const multiplier = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2]

    // Define the characters that represent the numerical values in the VIN
    const vinValues = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      J: 1,
      K: 2,
      L: 3,
      M: 4,
      N: 5,
      P: 7,
      R: 9,
      S: 2,
      T: 3,
      U: 4,
      V: 5,
      W: 6,
      X: 7,
      Y: 8,
      Z: 9
    }

    // Convert VIN to uppercase for consistency
    vin = vin.toUpperCase()

    // Check if the VIN is the correct length
    if (vin.length !== 17) {
      return false
    }

    // Calculate the check digit
    let sum = 0
    for (let i = 0; i < 17; i++) {
      const char = vin[i]
      const value = vinValues[char] || parseInt(char, 10)
      sum += value * multiplier[i]
    }

    const remainder = sum % 11
    const checkDigit = (remainder === 10) ? 'X' : remainder.toString()

    // Check if the calculated check digit matches the actual check digit
    return vin[8] === checkDigit
  }

  /**
    * Decode VIN info
    * @param vin {string} The VIN to decode
    * @returns {object} The VIN's decoded information
    */
  decode (vin: string): VinData | VinError {
    vin = vin.toUpperCase()

    if (this.isValid(vin)) {
      const wmi = vin.slice(0, 3)
      const vds = vin.slice(3, 9)
      const vis = vin.slice(9)
      const sequentialNumber = vin.slice(11)
      const check = vin[8]
      const location = manufacturerLocation(vin)
      const manufacturer = manufacturers(vin)
      const modelYear = modelYears(vin)

      const manufacturerDecoder = getManufacturerDecoder(wmi)

      let manufacturerInfo = {}
      if (manufacturerDecoder !== null) {
        manufacturerInfo = manufacturerDecoder.decodeVin(vin)
      }

      return {
        wmi,
        vds,
        vis,
        sequentialNumber,
        check,
        location,
        manufacturer,
        manufacturerInfo,
        modelYear
      }
    } else {
      return {
        error: 'VIN code is incorrect'
      }
    }
  }

  USAValidate (vin: string): boolean {
    vin = vin.toUpperCase()
    return USACDNCheck.validate(vin)
  }
}
