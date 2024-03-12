import * as fs from 'fs'
import * as path from 'path'

// Dynamic import of all manufacturer files
interface ManufacturerDecoder {
  supportedWmis: string[]
  decodeVin: (vin: string) => any
}

const manufacturers: Record<string, any> = {}
const manufacturerFiles = fs.readdirSync(path.join(__dirname, '../manufacturers'))

for (const file of manufacturerFiles) {
  const manufacturerName = path.basename(file)
  manufacturers[manufacturerName] = require(`../manufacturers/${manufacturerName}`)
}

// Function to get manufacturer decoding based on WMI
function getManufacturerDecoder (wmi: string): ManufacturerDecoder | null {
  for (const manufacturer in manufacturers) {
    const supportedWmis = manufacturers[manufacturer].supportedWmis
    if (supportedWmis.includes(wmi)) {
      return manufacturers[manufacturer]
    }
  }

  console.info('No manufacturer specific decoder found.')

  return null
}

export { getManufacturerDecoder }
