import modelYears from '../data/modelYear'
import type Model from '../common/Model'

const supportedWmis: string[] = ['WVW', 'WVG', 'WV1', 'WV2', 'WV3', 'VWV', 'AAV', '1VW', '1V1', '1V2', '3VW', '3VV', '8AW', '9BW', 'WAU', 'TRU', '93V', '2V4']

interface series {
  description: string[]
  transmission: string
}

const seriesData: Record<number, Record<string, Record<string, series>>> = {
  2023: {
    'Golf GTI Hatchback': {
      H: { description: ['Golf GTI 2.0 TSI S'], transmission: 'M' },
      S: { description: ['Golf GTI 2.0 TSI SE'], transmission: 'M' },
      2: { description: ['Golf GTI 2.0 TSI SE w/ Leather Seating Pkg.'], transmission: 'M' },
      W: { description: ['Golf GTI 2.0 TSI Autobahn'], transmission: 'M' },
      6: { description: ['Golf GTI 2.0 TSI Autobahn - Seating Surfaces & Functionality Credit'], transmission: 'M' }
    },
    'Golf-R Hatchback': { // NOTE: The data sheets refer to this as `Golf-R` under the series section
      F: { description: ['Golf-R 2.0 TSI'], transmission: 'M' }
    },
    'Jetta Sedan': {
      4: { description: ['Jetta 1.5 TSI S'], transmission: 'M' },
      A: { description: ['Jetta 1.5 TSI Sport'], transmission: 'M' },
      5: { description: ['Jetta 1.5 TSI S'], transmission: 'A' },
      B: { description: ['Jetta 1.5 TSI Sport'], transmission: 'A' },
      E: { description: ['Jetta 1.5 TSI SE'], transmission: 'A' },
      7: { description: ['Jetta 1.5 TSI SE w/ Sunroof'], transmission: 'A' },
      G: { description: ['Jetta 1.5 TSI SEL'], transmission: 'A' }
    },
    'Jetta GLI Sedan': {
      1: { description: ['Jetta GLI 2.0 TSI Autobahn'], transmission: 'M' },
      2: { description: ['Jetta GLI 2.0 TSI Autobahn'], transmission: 'A' }
    },
    'Arteon Sedan': {
      S: { description: ['Arteon Sedan 2.0 TSI SE R-Line '], transmission: 'A' },
      A: { description: ['Arteon 4Motion Sedan 2.0 TSI SEL R-Line '], transmission: 'A' },
      T: { description: ['Arteon 4Motion Sedan 2.0 TSI SEL Premium R-Line'], transmission: 'A' }
    },
    'Atlas SUV': {
      D: { description: ['Atlas 2.0 TSI SE'], transmission: 'A' },
      W: { description: ['Atlas 2.0 TSI SE w/ Technology', 'Atlas 3.6 TSI SE w/ Technology'], transmission: 'A' },
      J: { description: ['Atlas 2.0 TSI SE w/ Technology w/ Sunroof Pkg.', 'Atlas 3.6 TSI SE w/ Technology w/ Sunroof Pkg.'], transmission: 'A' },
      L: { description: ['Atlas 4Motion 2.0 TSI SE'], transmission: 'A' },
      H: { description: ['Atlas 4Motion 2.0 TSI SE w/ Technology', 'Atlas 4Motion 3.6 TSI SE w/ Technology'], transmission: 'A' },
      K: { description: ['Atlas 4Motion 2.0 TSI SE w/ Technology w/ Sunroof Pkg.', 'Atlas 4Motion 3.6 TSI SE w/ Technology w/ Sunroof Pkg.'], transmission: 'A' },
      B: { description: ['Atlas 4Motion 2.0 TSI SEL', 'Atlas 4Motion 3.6 TSI SEL'], transmission: 'A' },
      S: { description: ['Atlas 4Motion 3.6 TSI SEL R-Line Black'], transmission: 'A' },
      F: { description: ['Atlas 4Motion 3.6 TSI SEL Premium R-Line'], transmission: 'A' }
    },
    'Atlas Cross Sport SUV': {
      D: { description: ['Atlas Cross Sport 2.0 TSI SE'], transmission: 'A' },
      W: { description: ['Atlas Cross Sport 2.0 TSI SE w/ Technology', 'Atlas Cross Sport 3.6 TSI SE w/ Technology'], transmission: 'A' },
      J: { description: ['Atlas Cross Sport 2.0 TSI SE w/ Technology w/ Sunroof Pkg.', 'Atlas Cross Sport 3.6 TSI SE w/ Technology w/ Sunroof Pkg.'], transmission: 'A' },
      L: { description: ['Atlas Cross Sport 4Motion 2.0 TSI SE'], transmission: 'A' },
      H: { description: ['Atlas Cross Sport 4Motion 2.0 TSI SE w/ Technology', 'Atlas Cross Sport 4Motion 3.6 TSI SE w/ Technology'], transmission: 'A' },
      K: { description: ['Atlas Cross Sport 4Motion 2.0 TSI SE w/ Technology w/ Sunroof Pkg.', 'Atlas Cross Sport 4Motion 3.6 TSI SE w/ Technology w/ Sunroof Pkg.'], transmission: 'A' },
      B: { description: ['Atlas Cross Sport 4Motion 2.0 TSI SEL', 'Atlas Cross Sport 4Motion 3.6 TSI SEL'], transmission: 'A' },
      S: { description: ['Atlas Cross Sport 4Motion 2.0 TSI SEL R-Line Black', 'Atlas Cross Sport 4Motion 3.6 TSI SEL R-Line Black'], transmission: 'A' },
      F: { description: ['Atlas Cross Sport 4Motion 3.6 TSI SEL Premium R-Line'], transmission: 'A' }
    },
    'ID.4 SUV': {
      C: { description: ['ID.4 RWD Pro'], transmission: 'A' },
      F: { description: ['ID.4 RWD Pro S'], transmission: 'A' },
      H: { description: ['ID.4 RWD Pro S Plus'], transmission: 'A' },
      D: { description: ['ID.4 AWD Pro'], transmission: 'A' },
      G: { description: ['ID.4 AWD Pro S'], transmission: 'A' },
      J: { description: ['ID.4 AWD Pro S Plus'], transmission: 'A' }
    },
    'Tiguan SUV': {
      R: { description: ['Tiguan 2.0 TSI S'], transmission: 'A' },
      3: { description: ['Tiguan 2.0 TSI SE'], transmission: 'A' },
      N: { description: ['Tiguan 2.0 TSI SE w/ Sunroof Pkg.'], transmission: 'A' },
      C: { description: ['Tiguan 2.0 TSI SE R-Line Black'], transmission: 'A' },
      F: { description: ['Tiguan 4Motion 2.0 TSI S'], transmission: 'A' },
      2: { description: ['Tiguan 4Motion 2.0 TSI SE'], transmission: 'A' },
      M: { description: ['Tiguan 4Motion 2.0 TSI SE w/ Sunroof Pkg.'], transmission: 'A' },
      8: { description: ['Tiguan 4Motion 2.0 TSI SE R-Line Black'], transmission: 'A' },
      4: { description: ['Tiguan 4Motion 2.0 TSI SEL R-Line Black'], transmission: 'A' }
    },
    'Taos SUV': {
      N: { description: ['Taos 4Motion 1.5 TSI SE w/ Sunroof'], transmission: 'A' },
      C: { description: ['Taos 1.5 TSI S'], transmission: 'A' },
      F: { description: ['Taos 4Motion 1.5 TSI S w/ IQ.DRIVE and ConveniencePkg'], transmission: 'A' },
      D: { description: ['Taos 1.5 TSI S w/ IQ.DRIVE Pkg. '], transmission: 'A' },
      S: { description: ['Taos 1.5 TSI SE'], transmission: 'A' },
      E: { description: ['Taos 1.5 TSI SE w/ Sunroof Pkg. '], transmission: 'A' },
      A: { description: ['Taos 4Motion 1.5 TSI S'], transmission: 'A' },
      Y: { description: ['Taos 4Motion 1.5 TSI SE'], transmission: 'A' },
      2: { description: ['Taos 4Motion 1.5 TSI SEL'], transmission: 'A' }
    }
  },

  2021: {
    'Golf Hatchback': {
      W: { description: ['Golf'], transmission: 'M6' },
      G: { description: ['Golf'], transmission: 'A8' }
    },
    'Golf GTI Hatchback': {
      5: { description: ['Golf GTI S', 'Golf GTI SE', 'Golf GTI Autobahn'], transmission: 'M6' },
      6: { description: ['Golf GTI S', 'Golf GTI SE', 'Golf GTI Autobahn'], transmission: 'A7' }
    },
    'Passat Sedan': {
      A: { description: ['Passat S'], transmission: 'A6' },
      S: { description: ['Passat SE'], transmission: 'A6' },
      M: { description: ['Passat R-Line'], transmission: 'A6' }
    },
    'Jetta Sedan': {
      N: { description: ['Jetta 1.4 TSI S', 'Jetta 1.4 TSI R-Line'], transmission: 'M6' },
      C: { description: ['Jetta 1.4 TSI S', 'Jetta 1.4 TSI SE, Jetta 1.4 TSI R-Line'], transmission: 'A8' },
      E: { description: ['Jetta 1.4 TSI SEL'], transmission: 'A8' },
      G: { description: ['Jetta 1.4 TSI SEL Premium'], transmission: 'A8' }
    },
    'Jetta GLI Sedan': {
      5: { description: ['Jetta GLI 2.0 TSI S', 'Jetta GLI 2.0 TSI Autobahn'], transmission: 'M6' },
      6: { description: ['Jetta GLI 2.0 TSI S', 'Jetta GLI 2.0 TSI Autobahn'], transmission: 'A7' }
    },
    'Arteon Sedan': {
      A: { description: ['Arteon SE'], transmission: 'A8' },
      H: { description: ['Arteon SEL R-Line'], transmission: 'A8' },
      S: { description: ['Arteon 4Motion SEL R-Line'], transmission: 'A8' },
      T: { description: ['Arteon 4Motion SEL Premium R-Line'], transmission: 'A8' }
    },
    'Tiguan SUV': {
      1: { description: ['Tiguan S'], transmission: 'A8' },
      3: { description: ['Tiguan SE', 'Tiguan SE R-Line Black', 'Tiguan SEL'], transmission: 'A8' },
      0: { description: ['Tiguan 4Motion S'], transmission: 'A8' },
      2: { description: ['Tiguan 4Motion SE', 'Tiguan 4Motion SE R-Line Black', 'Tiguan 4Motion SEL'], transmission: 'A8' },
      4: { description: ['Tiguan 4Motion SEL Premium R-Line'], transmission: 'A8' }
    },
    'Atlas SUV': {
      A: { description: ['Atlas 2.0 TSI S'], transmission: 'A8' },
      D: { description: ['Atlas 2.0 TSI SE'], transmission: 'A8' },
      W: { description: ['Atlas 2.0 TSI SE w/ Tech', 'Atlas 3.6 FSI SE w/ Tech'], transmission: 'A8' },
      J: { description: ['Atlas 2.0 TSI SE w/ Tech w/ Sunroof Pkg.', 'Atlas 3.6 FSI SE w/ Tech w/ Sunroof Pkg.'], transmission: 'A8' },
      M: { description: ['Atlas 3.6 FSI SE w/ Tech w/ Tech R-Line'], transmission: 'A8' },
      P: { description: ['Atlas 3.6 FSI SE w/ Tech w/ Tech R-Line w/ Sunroof Pkg.'], transmission: 'A8' },
      E: { description: ['Atlas 3.6 FSI SEL'], transmission: 'A8' },
      C: { description: ['Atlas 3.6 FSI SEL R-Line'], transmission: 'A8' },
      G: { description: ['Atlas 4Motion 2.0 TSI S'], transmission: 'A8' },
      L: { description: ['Atlas 4Motion 2.0 TSI SE'], transmission: 'A8' },
      H: { description: ['Atlas 4Motion 2.0 TSI SE w/ Tech', 'Atlas 4Motion 3.6 FSI SE w/ Tech'], transmission: 'A8' },
      K: { description: ['Atlas 4Motion 2.0 TSI SE w/ Tech w/ Sunroof Pkg.', 'Atlas 4Motion 3.6 FSI SE w/ Tech w/ Sunroof Pkg.'], transmission: 'A8' },
      N: { description: ['Atlas 4Motion 3.6 FSI SE w/ Tech R-Line'], transmission: 'A8' },
      R: { description: ['Atlas 4Motion 3.6 FSI SE w/ Tech R-Line w/ Sunroof Pkg.'], transmission: 'A8' },
      B: { description: ['Atlas 4Motion 2.0 TSI SEL', 'Atlas 4Motion 3.6 FSI SEL'], transmission: 'A8' },
      S: { description: ['Atlas 4Motion 3.6 FSI SEL R-Line'], transmission: 'A8' },
      T: { description: ['Atlas 4Motion 2.0 TSI SEL Premium', 'Atlas 4Motion 3.6 FSI SEL Premium'], transmission: 'A8' },
      F: { description: ['Atlas 4Motion 3.6 FSI SEL Premium R-Line'], transmission: 'A8' }
    },
    'Atlas Cross Sport SUV': {
      A: { description: ['Atlas Cross Sport 2.0 TSI S'], transmission: 'A8' },
      D: { description: ['Atlas Cross Sport 2.0 TSI SE'], transmission: 'A8' },
      W: { description: ['Atlas Cross Sport 2.0 TSI SE w/ Tech', 'Atlas Cross Sport 3.6 FSI SE w/ Tech'], transmission: 'A8' },
      J: { description: ['Atlas Cross Sport 2.0 TSI SE w/ Tech w/ Sunroof Pkg.', 'Atlas Cross Sport 3.6 FSI SE w/ Tech w/ Sunroof Pkg.'], transmission: 'A8' },
      M: { description: ['Atlas Cross Sport 3.6 FSI SE w/ Tech R-Line'], transmission: 'A8' },
      P: { description: ['Atlas Cross Sport 3.6 FSI SE w/ Tech R-Line w/ Sunroof Pkg.'], transmission: 'A8' },
      E: { description: ['Atlas Cross Sport 3.6 TSI SEL'], transmission: 'A8' },
      C: { description: ['Atlas Cross Sport 3.6 FSI SEL R-Line'], transmission: 'A8' },
      G: { description: ['Atlas Cross Sport 4Motion 2.0 TSI S'], transmission: 'A8' },
      L: { description: ['Atlas Cross Sport 4Motion 2.0 TSI SE'], transmission: 'A8' },
      H: { description: ['Atlas Cross Sport 4Motion 2.0 TSI SE w/ Tech', 'Atlas Cross Sport 4Motion 3.6 FSI SE w/ Tech'], transmission: 'A8' },
      K: { description: ['Atlas Cross Sport 4Motion 2.0 TSI SE w/ Tech w/ Sunroof Pkg.', 'Atlas Cross Sport 4Motion 3.6 FSI SE w/ Tech w/ Sunroof Pkg.'], transmission: 'A8' },
      N: { description: ['Atlas Cross Sport 4Motion 3.6 FSI SE w/ Tech R-Line'], transmission: 'A8' },
      R: { description: ['Atlas Cross Sport 4Motion 3.6 FSI SE w/ Tech R-Line w/ Sunroof Pkg.'], transmission: 'A8' },
      B: { description: ['Atlas Cross Sport 4Motion 2.0 TSI SEL', 'Atlas Cross Sport 4Motion 3.6 FSI SEL'], transmission: 'A8' },
      S: { description: ['Atlas Cross Sport 4Motion 3.6 FSI SEL R-Line'], transmission: 'A8' },
      T: { description: ['Atlas Cross Sport 4Motion 2.0 FSI SEL Premium', 'Atlas Cross Sport 4Motion 3.6 FSI SEL Premium'], transmission: 'A8' },
      F: { description: ['Atlas Cross Sport 4Motion 3.6 FSI SEL Premium R-Line'], transmission: 'A8' }
    },
    'ID.4 SUV': {
      D: { description: ['ID.4 RWD 1st Edition'], transmission: 'A1' }
    }
  },

  2020: {
    'Tiguan SUV': {
      1: { description: ['Tiguan S'], transmission: 'A8' },
      3: { description: ['Tiguan SE', 'Tiguan SE R-Line Black', 'Tiguan SEL'], transmission: 'A8' },
      0: { description: ['Tiguan 4Motion S'], transmission: 'A8' },
      2: { description: ['Tiguan 4Motion SE', 'Tiguan 4Motion SEL'], transmission: 'A8' },
      4: { description: ['Tiguan 4Motion SEL Premium R-Line'], transmission: 'A8' }
    },
    'Atlas Cross Sport SUV': {
      A: { description: ['Atlas Cross Sport 2.0 TSI S'], transmission: 'A8' },
      3: { description: ['Atlas Cross Sport 2.0 TSI SE'], transmission: 'A8' },
      Y: { description: ['Atlas Cross Sport 2.0 TSI SE w/ Tech'], transmission: 'A8' },
      5: { description: ['Atlas Cross Sport 2.0 TSI SE w/ Tech w/ Sunroof Pkg.'], transmission: 'A8' },
      E: { description: ['Atlas Cross Sport 2.0 TSI SEL'], transmission: 'A8' }
    }
  },

  2019: {
    'Golf Hatchback': {
      W: { description: ['Golf S', 'Golf SE'], transmission: 'M6' },
      G: { description: ['Golf S', 'Golf SE'], transmission: 'A8' }
    },
    'e-Golf Hatchback': {
      K: { description: ['e-Golf SE'], transmission: 'A1' },
      P: { description: ['e-Golf SEL Premium'], transmission: 'A1' }
    },
    'Golf GTI Hatchback': {
      5: { description: ['Golf GTI S', 'Golf GTI SE', 'Golf GTI Rabbit Edition', 'Golf GTI Autobahn'], transmission: 'M6' },
      6: { description: ['Golf GTI S', 'Golf GTI SE', 'Golf GTI Rabbit Edition', 'Golf GTI Autobahn'], transmission: 'A7' }
    },
    'Golf R Hatchback': {
      W: { description: ['Golf R Base w/ DCC & Nav.'], transmission: 'M6' },
      V: { description: ['Golf R Base w/ DCC & Nav.'], transmission: 'A7' }
    },
    'Golf SportWagen': {
      T: { description: ['Golf SportWagen 1.4 TSI S'], transmission: 'M6' },
      Y: { description: ['Golf SportWagen 1.4 TSI S', 'Golf SportWagen 1.4 TSI SE'], transmission: 'A8' },
      2: { description: ['Golf SportWagen 4Motion S'], transmission: 'M6' },
      1: { description: ['Golf SportWagen 4Motion S'], transmission: 'A6' }
    },
    'Golf Alltrack': {
      W: { description: ['Golf Alltrack 4Motion S', 'Golf Alltrack SE', 'Golf Alltrack SEL'], transmission: 'M6' },
      V: { description: ['Golf Alltrack 4Motion S', 'Golf Alltrack SE', 'Golf Alltrack SEL'], transmission: 'A6' }
    },
    'Jetta Sedan': {
      N: { description: ['Jetta 1.4 TSI S'], transmission: 'M6' },
      C: { description: ['Jetta 1.4 TSI S', 'Jetta SE, Jetta R-Line'], transmission: 'A8' },
      E: { description: ['Jetta 1.4 TSI SEL'], transmission: 'A8' },
      G: { description: ['Jetta 1.4 TSI SEL Premium', 'Jetta 1.4 TSI SEL Premium w/ CWP'], transmission: 'A8' },
      5: { description: ['Jetta GLI 2.0 TSI S', 'Jetta GLI TSI 35th Anniversary Ed.', 'Jetta GLI 2.0 TSI Autobahn'], transmission: 'M6' },
      6: { description: ['Jetta GLI 2.0 TSI S', 'Jetta GLI TSI 35th Anniversary Ed.', 'Jetta GLI 2.0 TSI Autobahn'], transmission: 'A8' }
    },
    'Passat Sedan': {
      L: { description: ['Passat Wolfsburg'], transmission: 'A6' },
      M: { description: ['Passat SE R-Line'], transmission: 'A6' }
    },
    'Beetle Coupe': {
      F: { description: ['Beetle S', 'Beetle Final Edition SE', 'Beetle Final Edition SEL'], transmission: 'A6' },
      J: { description: ['Beetle SE'], transmission: 'A6' }
    },
    'Beetle Convertible': {
      5: { description: ['Beetle S', 'Beetle Final Edition SE', 'Beetle Final Edition SEL', 'Beetle SE'], transmission: 'A6' }
    },
    'Tiguan SUV': {
      1: { description: ['Tiguan S'], transmission: 'A8' },
      3: { description: ['Tiguan SE', 'Tiguan SEL', 'Tiguan SEL R-Line', 'Tiguan SEL R-Line Jet-Black'], transmission: 'A8' },
      0: { description: ['Tiguan 4Motion S'], transmission: 'A8' },
      2: { description: ['Tiguan 4Motion SE', 'Tiguan 4Motion SEL', 'Tiguan 4Motion SEL R-Line', 'Tiguan 4Motion SEL R-Line Jet-Black'], transmission: 'A8' },
      4: { description: ['Tiguan 4Motion SEL Premium', 'Tiguan 4Motion SEL Premium R-Line'], transmission: 'A8' }
    },
    'Atlas SUV': {
      A: { description: ['Atlas 2.0 TSI S'], transmission: 'A8' },
      D: { description: ['Atlas 3.6 FSI SE'], transmission: 'A8' },
      W: { description: ['Atlas 3.6 FSI SE w/ Technology'], transmission: 'A8' },
      Y: { description: ['Atlas 3.6 FSI SE w/ Technology w/ Tech R-Line'], transmission: 'A8' },
      E: { description: ['Atlas 3.6 FSI SEL'], transmission: 'A8' },
      S: { description: ['Atlas 3.6 FSI SEL R-Line'], transmission: 'A8' },
      G: { description: ['Atlas 4Motion 3.6 FSI S'], transmission: 'A8' },
      L: { description: ['Atlas 4Motion 3.6 FSI SE'], transmission: 'A8' },
      U: { description: ['Atlas 4Motion 3.6 FSI SE w/ Technology'], transmission: 'A8' },
      X: { description: ['Atlas 4Motion 3.6 FSI SE w/ Technology w/ R-Line'], transmission: 'A8' },
      M: { description: ['Atlas 4Motion 3.6 FSI SEL'], transmission: 'A8' },
      R: { description: ['Atlas 4Motion 3.6 FSI SEL w/ R-Line'], transmission: 'A8' },
      N: { description: ['Atlas 4Motion 3.6 FSI SEL Premium'], transmission: 'A8' }
    }
  },

  2018: {
    'Golf Hatchback': {
      B: { description: ['Golf S', 'Golf SE'], transmission: 'M5' },
      G: { description: ['Golf S', 'Golf SE'], transmission: 'A6' }
    },
    'e-Golf Hatchback': {
      K: { description: ['e-Golf SE'], transmission: 'A1' },
      M: { description: ['e-Golf SEL'], transmission: 'A1' },
      P: { description: ['e-Golf SEL Premium'], transmission: 'A1' }
    },
    'Golf GTI Hatchback': {
      5: { description: ['Golf GTI S', 'Golf GTI SE', 'Golf GTI Autobahn'], transmission: 'M6' },
      6: { description: ['Golf GTI S', 'Golf GTI SE', 'Golf GTI Autobahn'], transmission: 'A6' }
    },
    'Golf R Hatchback': {
      W: { description: ['Golf R Base w/ DCC & Nav.'], transmission: 'M6' },
      U: { description: ['Golf R Base w/ DCC & Nav.'], transmission: 'M6' }, // Only some early production Golf R manual may have `U`
      V: { description: ['Golf R Base w/ DCC & Nav.'], transmission: 'A7' }
    },
    'Golf SportWagen': {
      7: { description: ['Golf SportWagen S'], transmission: 'M5' },
      D: { description: ['Golf SportWagen S', 'Golf SportWagen SE'], transmission: 'A6' },
      L: { description: ['Golf SportWagen SEL'], transmission: 'A6' },
      2: { description: ['Golf SportWagen S 4Motion'], transmission: 'M6' },
      1: { description: ['Golf SportWagen S 4Motion'], transmission: 'A6' }
    },
    'Golf Alltrack': {
      M: { description: ['Golf Alltrack S', 'Golf Alltrack SE'], transmission: 'M6' },
      H: { description: ['Golf Alltrack S', 'Golf Alltrack SE', 'Golf Alltrack SEL'], transmission: 'A6' }
    },
    'Jetta Sedan': {
      1: { description: ['Jetta 1.4 TSI S'], transmission: 'M5' },
      2: { description: ['Jetta 1.4 TSI S'], transmission: 'A6' },
      B: { description: ['Jetta 1.4 TSI SE', 'Jetta Wolfsburg'], transmission: 'M5' },
      D: { description: ['Jetta 1.4 TSI SE', 'Jetta Wolfsburg', 'Jetta 1.8 TSI Sport'], transmission: 'A6' },
      L: { description: ['Jetta 1.8 TSI SEL'], transmission: 'A6' },
      4: { description: ['Jetta 2.0 TSI GLI'], transmission: 'A6' }
    },
    'Beetle Coupe': {
      F: { description: ['Beetle S', 'Beetle Coast'], transmission: 'A6' },
      J: { description: ['Beetle SE'], transmission: 'A6' },
      S: { description: ['Beetle Dune'], transmission: 'A6' }
    },
    'Beetle Convertible': {
      5: { description: ['Beetle S', 'Beetle SE', 'Beetle Coast'], transmission: 'A6' },
      T: { description: ['Beetle Dune'], transmission: 'A6' }
    },
    'Passat Sedan': {
      A: { description: ['Passat 2.0 TSI S', 'Passat R-Line'], transmission: 'A6' },
      B: { description: ['Passat 2.0 TSI SE', 'Passat TSI SE w/ Technology', 'Passat 3.6 FSI V6 GT'], transmission: 'A6' },
      C: { description: ['Passat 2.0 TSI SEL Premium', 'Passat 3.6L FSI V6 SEL Premium'], transmission: 'A6' },
      J: { description: ['Passat 3.6 FSI V6 GT'], transmission: 'A6' }
    },
    'Tiguan Limited SUV': {
      A: { description: ['Tiguan Limited Base'], transmission: 'A6' },
      B: { description: ['Tiguan Limited Base 4Motion'], transmission: 'A6' }
    },
    'Tiguan SUV': {
      1: { description: ['Tiguan S'], transmission: 'A8' },
      3: { description: ['Tiguan SE', 'Tiguan SEL'], transmission: 'A8' },
      5: { description: ['Tiguan SEL Premium'], transmission: 'A8' },
      0: { description: ['Tiguan S 4Motion'], transmission: 'A8' },
      2: { description: ['Tiguan 4Motion SE', 'Tiguan SEL 4Motion'], transmission: 'A8' },
      4: { description: ['Tiguan SEL Premium 4Motion'], transmission: 'A8' }
    },
    'Atlas SUV': {
      A: { description: ['Atlas 2.0 TSI S', 'Atlas 3.6 TSI S'], transmission: 'A8' },
      B: { description: ['Atlas 3.6 FSI Launch Model'], transmission: 'A8' },
      C: { description: ['Atlas 2.0 TSI SE', 'Atlas 3.6 FSI SE'], transmission: 'A8' }, // Some early production vehicles may use `D` instead
      D: { description: ['Atlas 2.0 TSI SE w/ Technology', 'Atlas 3.6 FSI SE w/ Technology', 'Atlas 2.0 TSI SE', 'Atlas 3.6 FSI SE'], transmission: 'A8' },
      F: { description: ['Atlas 2.0 TSI SE w/ Technology w/ Tech R-Line', 'Atlas 3.6 FSI SE w/ Technology w/ Tech R-Line'], transmission: 'A8' },
      E: { description: ['Atlas 2.0 TSI SEL w/ R-Line', 'Atlas 3.6 FSI SEL w/ R-Line'], transmission: 'A8' },
      G: { description: ['Atlas 3.6 FSI S 4Motion'], transmission: 'A8' },
      H: { description: ['Atlas 3.6 FSI Launch Model 4Motion'], transmission: 'A8' },
      K: { description: ['Atlas 3.6 FSI SE 4Motion'], transmission: 'A8' }, // Some early production vehicles may use `L` instead
      L: { description: ['Atlas 3.6 FSI SE w/ Technology 4Motion'], transmission: 'A8' },
      P: { description: ['Atlas 3.6 FSI SE w/ Technology 4Motion w/ R-Line'], transmission: 'A8' },
      M: { description: ['Atlas 3.6 FSI SEL 4Motion'], transmission: 'A8' },
      R: { description: ['Atlas 3.6 FSI SEL 4Motion w/ R-Line'], transmission: 'A8' },
      N: { description: ['Atlas 3.6 FSI SEL Premium 4Motion'], transmission: 'A8' }
    }
  }
}

// To find more, Google `site:*.dot.gov +Volkswagen "VIN Breakdown"`
const models: Record<string, Model[]> = {
  11: [{ description: 'Beetle (Brazilian, Mexican, Nigerian)', startYear: 0, endYear: Infinity }],
  13: [{ description: 'Scirocco 3', startYear: 0, endYear: Infinity }],
  14: [{ description: 'Caddy 1 (European Golf 1 pickup)', startYear: 0, endYear: Infinity }],
  15: [{ description: 'Cabriolet (1980 Beetle, Golf 1)', startYear: 0, endYear: Infinity }],
  16: [
    { description: 'Jetta 1', startYear: 0, endYear: Infinity },
    { description: 'Jetta 2 (early)', startYear: 0, endYear: Infinity },
    { description: 'Beetle (2012-on)', startYear: 0, endYear: Infinity }
  ],
  17: [{ description: 'Golf 1', startYear: 0, endYear: Infinity }],
  18: [{ description: 'Iltis', startYear: 0, endYear: Infinity }],
  19: [{ description: 'Golf 2 (early)', startYear: 0, endYear: Infinity }],
  '1C': [{ description: 'New Beetle (US market)', startYear: 0, endYear: Infinity }],
  '1E': [{ description: 'Golf 3 Cabriolet', startYear: 0, endYear: Infinity }],
  '1F': [{ description: 'Eos', startYear: 0, endYear: Infinity }],
  '1G': [
    { description: 'Golf', startYear: 0, endYear: Infinity },
    { description: 'Jetta 2 (late)', startYear: 0, endYear: Infinity }
  ],
  '1H': [
    { description: 'Golf', startYear: 0, endYear: Infinity },
    { description: 'Vento 3', startYear: 0, endYear: Infinity }
  ],
  '1J': [
    { description: 'Golf', startYear: 0, endYear: Infinity },
    { description: 'Bora 4', startYear: 0, endYear: Infinity }
  ],
  '1K': [
    { description: 'Golf', startYear: 0, endYear: Infinity },
    { description: 'Jetta 5', startYear: 0, endYear: Infinity },
    { description: 'Jetta 6', startYear: 0, endYear: Infinity }
  ],
  '1T': [{ description: 'Touran', startYear: 0, endYear: Infinity }],
  '1Y': [{ description: 'New Beetle Cabriolet', startYear: 0, endYear: Infinity }],
  24: [{ description: 'T3 Transporter Single/Double Cab Pickup', startYear: 0, endYear: Infinity }],
  25: [{ description: 'T3 Transporter Van, Kombi, Bus, Caravelle', startYear: 0, endYear: Infinity }],
  28: [{ description: 'LT Transporter 1', startYear: 0, endYear: Infinity }],
  '2D': [{ description: 'LT Transporter 2', startYear: 0, endYear: Infinity }],
  '2E': [{ description: 'Crafter 1', startYear: 0, endYear: Infinity }],
  '2H': [{ description: 'Amarok', startYear: 0, endYear: Infinity }],
  '2K': [
    { description: 'Caddy', startYear: 0, endYear: Infinity },
    { description: 'Caddy Maxi 3', startYear: 0, endYear: Infinity }
  ],
  30: [{ description: 'Fox (US model ex-Brazil)', startYear: 0, endYear: Infinity }],
  31: [{ description: 'Passat 2', startYear: 0, endYear: Infinity }],
  32: [{ description: 'Santana sedan', startYear: 0, endYear: Infinity }],
  33: [{ description: 'Passat 2 Variant', startYear: 0, endYear: Infinity }],
  '3A': [
    { description: 'Passat 3', startYear: 0, endYear: Infinity },
    { description: 'Passat 4', startYear: 0, endYear: Infinity }
  ],
  '3B': [{ description: 'Passat 5', startYear: 0, endYear: Infinity }],
  '3C': [
    { description: 'Passat 6', startYear: 0, endYear: Infinity },
    { description: 'Passat 7', startYear: 0, endYear: Infinity },
    { description: 'Passat 8', startYear: 0, endYear: Infinity },
    { description: 'Passat CC', startYear: 0, endYear: Infinity }
  ],
  '3D': [{ description: 'Phaeton', startYear: 0, endYear: Infinity }],
  '3H': [{ description: 'Arteon', startYear: 0, endYear: Infinity }],
  50: [{ description: 'Corrado (early)', startYear: 0, endYear: Infinity }],
  53: [
    { description: 'Scirocco 1', startYear: 0, endYear: Infinity },
    { description: 'Scirocco 2', startYear: 0, endYear: Infinity }
  ],
  '5K': [
    { description: 'Golf', startYear: 0, endYear: Infinity },
    { description: 'Jetta 6', startYear: 0, endYear: Infinity }
  ],
  '5M': [{ description: 'Golf Plus', startYear: 0, endYear: Infinity }],
  '5N': [
    { description: 'Tiguan 1', startYear: 0, endYear: Infinity },
    { description: 'Tiguan 2', startYear: 0, endYear: Infinity },
    { description: 'Tiguan Allspace', startYear: 0, endYear: Infinity }
  ],
  '5Z': [{ description: 'Fox (Europe)', startYear: 0, endYear: Infinity }],
  60: [{ description: 'Corrado (late)', startYear: 0, endYear: Infinity }],
  '6K': [{ description: 'Polo Classic, Variant 3', startYear: 0, endYear: Infinity }],
  '6N': [{ description: 'Polo 3', startYear: 0, endYear: Infinity }],
  '6R': [{ description: 'Polo 5', startYear: 0, endYear: Infinity }],
  '6X': [{ description: 'Lupo', startYear: 0, endYear: Infinity }],
  70: [{ description: 'T4 Transporter Vans and Pickups', startYear: 0, endYear: Infinity }],
  74: [{ description: 'Taro', startYear: 0, endYear: Infinity }],
  '7H': [
    { description: 'T5 Transporter', startYear: 0, endYear: Infinity },
    { description: 'T6.1 Transporter', startYear: 0, endYear: Infinity }
  ],
  '7J': [{ description: 'T6 Transporter', startYear: 0, endYear: Infinity }],
  '7L': [{ description: 'Touareg 1', startYear: 0, endYear: Infinity }],
  '7M': [{ description: 'Sharan', startYear: 0, endYear: Infinity }],
  '7P': [{ description: 'Touareg 2', startYear: 0, endYear: Infinity }],
  86: [{ description: 'Polo and Derby 1 and 2', startYear: 0, endYear: Infinity }],
  87: [{ description: 'Polo Coupe', startYear: 0, endYear: Infinity }],
  '9C': [{ description: 'New Beetle', startYear: 0, endYear: Infinity }],
  '9K': [{ description: 'Caddy 2 Van (ex-SEAT Ibiza)', startYear: 0, endYear: Infinity }],
  '9N': [{ description: 'Polo 4', startYear: 0, endYear: Infinity }],
  '9U': [{ description: 'Caddy 2 Pickup (ex-Skoda Felicia)', startYear: 0, endYear: Infinity }],
  A1: [{ description: 'T-Roc', startYear: 0, endYear: Infinity }],
  AA: [{ description: 'Up!', startYear: 0, endYear: Infinity }],
  AG: [{ description: 'New Beetle', startYear: 0, endYear: Infinity }],
  AH: [{ description: 'EOS', startYear: 0, endYear: Infinity }],
  AJ: [{ description: 'Jetta Sedan', startYear: 0, endYear: Infinity }],
  AL: [{ description: 'New Beetle Convertible', startYear: 0, endYear: Infinity }],
  AN: [
    { description: 'Arteon Sedan', startYear: 0, endYear: Infinity },
    { description: 'Passat CC', startYear: 0, endYear: Infinity }
  ],
  AT: [
    { description: 'Beetle Coupe', startYear: 0, endYear: Infinity },
    { description: 'Beetle Convertible', startYear: 0, endYear: Infinity }
  ],
  AU: [
    { description: 'Golf', startYear: 0, endYear: Infinity },
    { description: 'e-Golf', startYear: 0, endYear: Infinity },
    { description: 'Golf R Hatchback', startYear: 0, endYear: Infinity },
    { description: 'Golf GTI Hatchback', startYear: 0, endYear: Infinity },
    { description: 'Golf SportWagen', startYear: 0, endYear: Infinity },
    { description: 'Golf Alltrack', startYear: 0, endYear: Infinity },
    { description: 'Golf 7 (Golf/ e-Golf/ Golf GTI/ Golf R Hatchback/ Golf SportWagen/ Golf Alltrack)', startYear: 0, endYear: Infinity }
  ],
  AW: [{ description: 'Polo 6', startYear: 0, endYear: Infinity }],
  AX: [
    { description: 'Tiguan SUV', startYear: 0, endYear: Infinity },
    { description: 'Tiguan Limited SUV', startYear: 0, endYear: Infinity }
  ],
  A3: [{ description: 'Passat Sedan', startYear: 0, endYear: Infinity }],
  B2: [{ description: 'Taos SUV', startYear: 0, endYear: Infinity }],
  BU: [
    { description: 'Jetta Sedan', startYear: 0, endYear: Infinity },
    { description: 'Jetta GLI Sedan', startYear: 0, endYear: Infinity }
  ],
  BP: [{ description: 'Touareg II', startYear: 0, endYear: Infinity }],
  CA: [
    { description: 'Atlas SUV', startYear: 0, endYear: Infinity },
    { description: 'Atlas Cross Sport SUV', startYear: 0, endYear: Infinity }
  ],
  C1: [{ description: 'T-Cross', startYear: 0, endYear: Infinity }],
  CD: [
    { description: 'Golf GTI Hatchback', startYear: 0, endYear: Infinity },
    { description: 'Golf-R Hatchback', startYear: 0, endYear: Infinity },
    { description: 'Golf 8', startYear: 0, endYear: Infinity }
  ],
  E2: [{ description: 'ID.4 SUV', startYear: 0, endYear: Infinity }],
  E8: [{ description: 'ID.4 SUV', startYear: 0, endYear: Infinity }],
  SK: [{ description: 'Caddy 4', startYear: 0, endYear: Infinity }],
  SY: [{ description: 'Crafter 2', startYear: 0, endYear: Infinity }]
}

const assemblyPlants = {
  A: [{ description: 'Ingolstadt, Germany', startYear: 0, endYear: Infinity }],
  B: [{ description: 'Brussels, Belgium', startYear: 0, endYear: Infinity }],
  C: [{ description: 'Chattanooga, USA', startYear: 0, endYear: Infinity }],

  // `D` can also be `Barcelona, Spain`
  // Ref: https://checkcar.vin/vin-decoder/volkswagen
  D: [{ description: 'Bratislava, Slovakia', startYear: 0, endYear: Infinity }],
  E: [{ description: 'Emden, Germany', startYear: 0, endYear: Infinity }],
  F: [{ description: 'Ipiranga / Resende, Brazil', startYear: 0, endYear: Infinity }],

  // `G` can also be `Kaluga, Russia`
  // Ref: https://checkcar.vin/vin-decoder/volkswagen
  G: [{ description: 'Graz, Austria', startYear: 0, endYear: Infinity }],
  H: [{ description: 'Hanover, Germany', startYear: 0, endYear: Infinity }],
  K: [{ description: 'Osnabrück, Germany', startYear: 0, endYear: Infinity }],
  L: [{ description: 'Lagos, Nigeria', startYear: 0, endYear: Infinity }],
  M: [{ description: 'Puebla, Mexico', startYear: 0, endYear: Infinity }],
  N: [{ description: 'Neckarsulm, Germany', startYear: 0, endYear: Infinity }],
  P: [{ description: 'Mosel, Germany or Anchieta, Brazil', startYear: 0, endYear: Infinity }],
  R: [{ description: 'Martorell, Spain', startYear: 0, endYear: Infinity }],
  S: [{ description: 'Salzgitter, Germany', startYear: 0, endYear: Infinity }],

  // `T` can also be `Sarajevo, Bosnia`
  // Ref: https://checkcar.vin/vin-decoder/volkswagen
  T: [
    { description: 'Sarajevo, Yugoslavia (up to 1994)', startYear: 0, endYear: 1994 },
    { description: 'Taubaté, Brazil', startYear: 1995, endYear: Infinity }
  ],
  U: [{ description: 'Uitenhage, South Africa', startYear: 0, endYear: Infinity }],
  V: [
    { description: 'Westmoreland, USA (up to 1994)', startYear: 0, endYear: 1994 },
    { description: 'Palmela, Portugal (from 1994)', startYear: 1995, endYear: Infinity }
  ],
  W: [{ description: 'Wolfsburg, Germany', startYear: 0, endYear: Infinity }],
  X: [{ description: 'Poznan, Poland', startYear: 0, endYear: Infinity }],

  // `Y` can also be `Barcelona`
  // Ref: https://checkcar.vin/vin-decoder/volkswagen
  Y: [{ description: 'Pamplona, Spain', startYear: 0, endYear: Infinity }],
  Z: [{ description: 'Zuffenhausen, Germany', startYear: 0, endYear: Infinity }],
  1: [{ description: 'Győr, Hungary', startYear: 0, endYear: Infinity }],
  2: [{ description: 'Anting, China', startYear: 0, endYear: Infinity }],
  3: [{ description: 'Changchun, China', startYear: 0, endYear: Infinity }],
  4: [{ description: 'Curitiba, Brazil', startYear: 0, endYear: Infinity }],
  6: [{ description: 'Düsseldorf, Germany (Mercedes-Benz)', startYear: 0, endYear: Infinity }],
  7: [{ description: 'Ludwigsfelde, Germany (Mercedes-Benz)', startYear: 0, endYear: Infinity }],
  8: [{ description: 'Dresden, Germany or General Pacheco, Argentina', startYear: 0, endYear: Infinity }]
}

interface VolkswagenSpecific {
  model: string
  series: string
  transmission: string
  assemblyPlant: string
}

/**
 * Decodes Volkswagen's manufacturer specific VIN data
 *
 * Source: http://www.clubvw.org.au/vwvin
 * @param vin {string} The VIN to check
 */
function decodeVin (vin: string): VolkswagenSpecific | null {
  const modelCode = vin.slice(6, 8)
  const modelYear: number = modelYears(vin)
  const assemblyPlantDigit = vin[10]

  let model = 'Unknown'
  const matchModels: string[] = []
  if (models[modelCode] !== undefined) {
    const modelMatches = models[modelCode]

    for (const item of modelMatches) {
      if (item.startYear <= modelYear && modelYear <= item.endYear) {
        if (model !== 'Unknown') {
          model += '; '
        } else {
          model = ''
        }
        matchModels.push(item.description)
        model += item.description
      }
    }
  }

  let series = 'Unknown'
  let transmission = 'Unknown'
  for (const match of matchModels) {
    if (seriesData[modelYear] !== undefined && seriesData[modelYear][match] !== undefined) {
      const thisSeries = seriesData[modelYear][match]

      if (thisSeries[vin[3]] !== undefined) {
        if (series !== 'Unknown') {
          series += '; '
        } else {
          series = ''
        }

        if (transmission !== 'Unknown') {
          transmission += '; '
        } else {
          transmission = ''
        }

        series += thisSeries[vin[3]].description
        transmission += thisSeries[vin[3]].transmission
      }
    }
  }

  let assemblyPlant = 'Unknown'
  if (assemblyPlants[assemblyPlantDigit] !== undefined) {
    const plants = assemblyPlants[assemblyPlantDigit]

    for (const plant of plants) {
      if (plant.startYear <= modelYear && modelYear <= plant.endYear) {
        if (assemblyPlant !== 'Unknown') {
          assemblyPlant += '; '
        } else {
          assemblyPlant = ''
        }
        assemblyPlant += plant.description
      }
    }
  }

  return {
    model,
    series,
    transmission,
    assemblyPlant
  }
}

export { supportedWmis, decodeVin }
