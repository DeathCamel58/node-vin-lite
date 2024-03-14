// Manufacturer modules
import * as BugattiDecoder from '../manufacturers/Bugatti'
import * as FordDecoder from '../manufacturers/Ford'
import * as FerrariDecoder from '../manufacturers/Ferrari'
import * as TeslaDecoder from '../manufacturers/Tesla'
import * as ToyotaDecoder from '../manufacturers/Toyota'
import * as VolkswagenDecoder from '../manufacturers/Volkswagen'
import * as VolvoDecoder from '../manufacturers/Volvo'
// Import other manufacturer modules as needed

// Dynamic import of all manufacturer files
interface ManufacturerDecoder {
  supportedWmis: string[]
  decodeVin: (vin: string) => any
}

const manufacturers: Record<string, any> = {
  bugattiDecoder: BugattiDecoder,
  fordDecoder: FordDecoder,
  ferrariDecoder: FerrariDecoder,
  teslaDecoder: TeslaDecoder,
  toyotaDecoder: ToyotaDecoder,
  volkswagenDecoder: VolkswagenDecoder,
  volvoDecoder: VolvoDecoder
}

// Function to get manufacturer decoding based on WMI
function getManufacturerDecoder (wmi: string): ManufacturerDecoder | null {
  for (const manufacturerName in manufacturers) {
    const supportedWmis = manufacturers[manufacturerName].supportedWmis
    if (supportedWmis.includes(wmi)) {
      return manufacturers[manufacturerName]
    }
  }

  console.info('No manufacturer specific decoder found.')

  return null
}

export { getManufacturerDecoder }
