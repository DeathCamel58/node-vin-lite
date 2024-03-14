import modelYears from '../data/modelYear'
import type Model from '../common/Model'

const supportedWmis: string[] = ['ZFF', 'ZDF', 'ZSG']

const models: Record<string, Model[]> = {
  '01': [
    { description: 'Dino 308 GT4 (ZDF, Dino **)', startYear: 0, endYear: 2021 },
    { description: '308 GTBi (ZFF, Ferrari)', startYear: 0, endYear: 2021 },
    { description: '296 GTS', startYear: 2021, endYear: Infinity }
  ],
  '02': [
    { description: '308 GTSi', startYear: 0, endYear: 2021 },
    { description: 'Portofino M', startYear: 2021, endYear: Infinity }
  ],
  '03': [
    { description: '308 GTB', startYear: 0, endYear: 2021 },
    { description: '812 Competizione', startYear: 2021, endYear: Infinity }
  ],
  '04': [
    { description: '308 GTS', startYear: 0, endYear: 2021 },
    { description: '812 Competizione A', startYear: 2021, endYear: Infinity }
  ],
  '05': [
    { description: '512 BB', startYear: 0, endYear: 2021 },
    { description: 'Daytona SP3', startYear: 2021, endYear: Infinity }
  ],
  '06': [
    { description: '400i Automatic - Officially called "400 Automatic i"', startYear: 0, endYear: 2021 },
    { description: 'Purosangue', startYear: 2021, endYear: Infinity }
  ],
  '07': [
    { description: '400i 5-speed - Officially called "400 GTi"', startYear: 0, endYear: 2021 },
    { description: 'SF90 XX Stradale', startYear: 2021, endYear: Infinity }
  ],
  '08': [
    { description: 'Mondial 8', startYear: 0, endYear: 2021 },
    { description: 'SF90 XX Spider', startYear: 2021, endYear: Infinity }
  ],
  '09': [
    { description: '512 BBi', startYear: 0, endYear: 2021 },
    { description: 'Roma Spider', startYear: 2021, endYear: Infinity }
  ],
  10: [
    { description: '208 GTB Turbo', startYear: 0, endYear: 2021 }
  ],
  11: [
    { description: '208 GTS Turbo', startYear: 0, endYear: 2021 }
  ],
  12: [
    { description: '308 GTB QV - Officially called "308 GTB Quattrovalvole"', startYear: 0, endYear: 2021 }
  ],
  13: [
    { description: '308 GTS QV - Officially called "308 GTS Quattrovalvole"', startYear: 0, endYear: 2021 }
  ],
  14: [
    { description: 'Mondial QV Coupé - Officially called "Mondial Quattrovalvole"', startYear: 0, endYear: 2021 }
  ],
  15: [
    { description: 'Mondial QV Cabriolet - Officially called "Mondial Cabriolet"', startYear: 0, endYear: 2021 }
  ],
  16: [
    { description: '288 GTO - Officially called "GTO"', startYear: 0, endYear: 2021 }
  ],
  17: [
    { description: 'Testarossa - Tipo depending on engine type and/or catalyst', startYear: 0, endYear: 2021 }
  ],
  18: [
    { description: '308 Convertible', startYear: 0, endYear: 2021 }
  ],
  19: [
    { description: '328 GTB - /PB has 13 mm smaller wheelbase', startYear: 0, endYear: 2021 }
  ],
  20: [
    { description: '328 GTS - /PB has 13 mm smaller wheelbase', startYear: 0, endYear: 2021 }
  ],
  21: [
    { description: 'Mondial 3.2 Coupé - Officially called "3.2 Mondial"', startYear: 0, endYear: 2021 }
  ],
  24: [
    { description: '412 - Automatic gearbox', startYear: 0, endYear: 2021 }
  ],
  25: [
    { description: '412 - 5-speed gearbox', startYear: 0, endYear: 2021 }
  ],
  26: [
    { description: 'Mondial 3.2 Cabriolet - Officially called "3.2 Mondial Cabriolet"', startYear: 0, endYear: 2021 }
  ],
  27: [
    { description: 'GTB Turbo - /TP has 13 mm smaller wheelbase', startYear: 0, endYear: 2021 }
  ],
  28: [
    { description: 'GTS Turbo - /TP has 13 mm smaller wheelbase', startYear: 0, endYear: 2021 }
  ],
  29: [
    { description: '328 Cabriolet', startYear: 0, endYear: 2021 }
  ],
  30: [
    { description: 'Testarossa Spider', startYear: 0, endYear: 2021 }
  ],
  31: [
    { description: '412 Cabriolet', startYear: 0, endYear: 2021 }
  ],
  32: [
    { description: 'Mondial t Coupé - Officially called "Mondial t"', startYear: 0, endYear: 2021 }
  ],
  33: [
    { description: 'Mondial t Cabriolet', startYear: 0, endYear: 2021 }
  ],
  34: [
    { description: 'F40, F40 Competizione - F120AB/1 or /2 for US versions', startYear: 0, endYear: 2021 }
  ],
  35: [
    {
      description: '348 tb, 348 GTB - Including Challenge, Serie Speciale and GT Competizione',
      startYear: 0,
      endYear: 2021
    }
  ],
  36: [
    { description: '348 ts, 348 GTS - Including Challenge and Serie Speciale', startYear: 0, endYear: 2021 }
  ],
  37: [
    { description: '408 - Officially called "408 4RM"', startYear: 0, endYear: 2021 }
  ],
  40: [
    { description: '512 TR, F512 M', startYear: 0, endYear: 2021 }
  ],
  41: [
    { description: 'F355 Berlinetta, 355 F1 Berlinetta', startYear: 0, endYear: 2021 }
  ],
  42: [
    { description: 'F355 GTS, 355 F1 GTS', startYear: 0, endYear: 2021 }
  ],
  43: [
    { description: '348 Spider', startYear: 0, endYear: 2021 }
  ],
  44: [
    { description: '456 GT, 456 M GT', startYear: 0, endYear: 2021 }
  ],
  46: [
    { description: 'F50', startYear: 0, endYear: 2021 }
  ],
  48: [
    { description: 'F355 Spider, 355 F1 Spider', startYear: 0, endYear: 2021 }
  ],
  49: [
    { description: '550 Maranello', startYear: 0, endYear: 2021 }
  ],
  50: [
    { description: '456 GTA, 456 M GTA', startYear: 0, endYear: 2021 }
  ],
  51: [
    { description: '360 Modena, 360 Modena F1', startYear: 0, endYear: 2021 }
  ],
  52: [
    { description: '550 Barchetta Pininfarina', startYear: 0, endYear: 2021 }
  ],
  53: [
    { description: '360 Spider, 360 Spider F1', startYear: 0, endYear: 2021 }
  ],
  54: [
    { description: '612 Scaglietti, 612 Scaglietti F1', startYear: 0, endYear: 2021 }
  ],
  55: [
    { description: '575 M Maranello, 575 M Maranello F1', startYear: 0, endYear: 2021 }
  ],
  56: [
    { description: 'Enzo Ferrari', startYear: 0, endYear: 2021 }
  ],
  57: [
    { description: 'Challenge Stradale', startYear: 0, endYear: 2021 }
  ],
  58: [
    { description: 'F430, F430 F1', startYear: 0, endYear: 2021 }
  ],
  59: [
    { description: 'F430 Spider, F430 Spider F1', startYear: 0, endYear: 2021 }
  ],
  60: [
    { description: '599 GTB Fiorano, 599 GTB Fiorano F1', startYear: 0, endYear: 2021 }
  ],
  61: [
    { description: 'Superamerica', startYear: 0, endYear: 2021 }
  ],
  62: [
    { description: 'FXX', startYear: 0, endYear: 2021 }
  ],
  63: [
    { description: 'F430 Challenge', startYear: 0, endYear: 2021 }
  ],
  64: [
    { description: '430 Scuderia', startYear: 0, endYear: 2021 }
  ],
  65: [
    { description: 'California - "L" for 2+2, or "B" for 2 seater', startYear: 0, endYear: 2021 }
  ],
  66: [
    { description: 'Scuderia Spider 16M', startYear: 0, endYear: 2021 }
  ],
  67: [
    { description: '458 Italia', startYear: 0, endYear: 2021 }
  ],
  68: [
    { description: '458 Spider', startYear: 0, endYear: 2021 }
  ],
  69: [
    { description: '599 XX', startYear: 0, endYear: 2021 }
  ],
  70: [
    { description: '599 GTO', startYear: 0, endYear: 2021 }
  ],
  71: [
    { description: '458 Challenge', startYear: 0, endYear: 2021 }
  ],
  72: [
    { description: 'SA Aperta', startYear: 0, endYear: 2021 }
  ],
  73: [
    { description: 'FF', startYear: 0, endYear: 2021 }
  ],
  74: [
    { description: 'F12berlinetta', startYear: 0, endYear: 2021 }
  ],
  75: [
    { description: '458 Speciale', startYear: 0, endYear: 2021 }
  ],
  76: [
    { description: 'LaFerrari', startYear: 0, endYear: 2021 }
  ],
  77: [
    { description: 'California T', startYear: 0, endYear: 2021 }
  ],
  78: [
    { description: '458 Speciale A', startYear: 0, endYear: 2021 }
  ],
  79: [
    { description: '488 GTB', startYear: 0, endYear: 2021 }
  ],
  80: [
    { description: '488 Spider', startYear: 0, endYear: 2021 }
  ],
  81: [
    { description: 'F12tdf', startYear: 0, endYear: 2021 }
  ],
  82: [
    { description: 'GTC4Lusso, GTC4Lusso T', startYear: 0, endYear: 2021 }
  ],
  83: [
    { description: '812 Superfast - /BCG has GPF (Gasoline Particulate Filter)', startYear: 0, endYear: 2021 }
  ],
  84: [
    { description: 'FXX-K', startYear: 0, endYear: 2021 }
  ],
  85: [
    { description: 'F60 America', startYear: 0, endYear: 2021 }
  ],
  86: [
    { description: 'LaFerrari Aperta', startYear: 0, endYear: 2021 }
  ],
  87: [
    { description: '488 Challenge', startYear: 0, endYear: 2021 }
  ],
  88: [
    { description: 'J50', startYear: 0, endYear: 2021 }
  ],
  89: [
    { description: 'Portofino', startYear: 0, endYear: 2021 }
  ],
  90: [
    { description: '488 Pista', startYear: 0, endYear: 2021 }
  ],
  91: [
    { description: '488 Pista Spider', startYear: 0, endYear: 2021 }
  ],
  92: [
    { description: 'F8 Tributo', startYear: 0, endYear: 2021 }
  ],
  93: [
    { description: 'F8 Spider', startYear: 0, endYear: 2021 }
  ],
  94: [
    { description: 'Monza SP1, Monza SP2', startYear: 0, endYear: 2021 }
  ],
  95: [
    { description: 'SF90 Stradale - /HFB is with Assetto Fiorano package', startYear: 0, endYear: 2021 }
  ],
  96: [
    { description: 'SF90 Spider - /HGB is with Assetto Fiorano package', startYear: 0, endYear: 2021 }
  ],
  97: [
    { description: '812 GTS', startYear: 0, endYear: 2021 }
  ],
  98: [
    { description: 'Roma', startYear: 0, endYear: 2021 }
  ],
  99: [
    { description: '296 GTB', startYear: 0, endYear: 2021 }
  ]
}

const safetySystems = {
  A: [
    { description: '3-point inertia belts with auto retractors for front', startYear: 0, endYear: 2003 },
    { description: 'Airbags for driver and passenger, 3-point manual seats belts with pretensioners and load limiter for front and rear, plus LATCH* system for rear seats', startYear: 2004, endYear: Infinity }
  ],
  B: [
    { description: '3-point inertia belts with auto retractors for front plus 3-point non-inertia belts for rear', startYear: 0, endYear: 2003 },
    { description: 'Airbag for driver, advanced airbags for passenger, 3-point manual seats belts with pretensioners and load limiter for front and rear, plus LATCH* system for rear seats (MY 2009-11: advanced airbags for driver and passenger)', startYear: 2004, endYear: Infinity }
  ],
  C: [
    { description: '3-point inertia belts with auto retractors for front plus 2-point inertia belts for rear', startYear: 0, endYear: 2003 },
    { description: 'Airbag for driver, advanced airbags for passenger, 3-point manual seats belts with pretensioners and load limiter, plus tether anchorage on passenger seat (MY 2009-11: advanced airbags for driver and passenger, plus side-airbags)', startYear: 2004, endYear: Infinity }
  ],
  D: [
    { description: '3-point inertia belts with auto retractors for front plus 3-point inertia belts for rear', startYear: 0, endYear: 2003 },
    { description: 'Airbag for driver, advanced airbags for passenger, 3-point manual seats belts with pretensioners and load limiter', startYear: 2004, endYear: Infinity }
  ],
  E: [
    { description: '3-point inertia belts with auto retractors for front plus 3-point inertia belts with auto retractors for rear', startYear: 0, endYear: 2003 }
  ],
  F: [
    { description: 'Airbags for driver and passenger, 3-point safety belts with pretensioners and load limiter, plus tether anchorage on passenger seat (MY 2011 and later: advanced airbags plus side-airbags)', startYear: 2004, endYear: Infinity }
  ],
  G: [
    { description: 'Passive restraint system (= active belts with manual lap belts)', startYear: 0, endYear: 2003 }
  ],
  H: [
    { description: 'Dual stage airbags and side-airbags, 3-point safety belts with pretensioners and load limiter, no passenger airbag ON/OFF switch', startYear: 2004, endYear: Infinity }
  ],
  J: [
    { description: '3-point belts with auto retractors for front, or optional 4-point Sabelt Harness (specifically for F40, Euro version)', startYear: 0, endYear: 2003 },
    { description: 'Advanced airbags and side-airbags, 3-point safety belts with pretensioners and load limiter for front and rear, plus two lower anchorages for each rear seat, no passenger airbag ON/OFF switch', startYear: 2004, endYear: Infinity }
  ],
  K: [
    { description: 'Passive restraint system plus 3-point inertia belts for rear', startYear: 0, endYear: 2003 },
    { description: 'Advanced airbags and side-airbags, 3-point safety belts with pretensioners and load limiter for front and rear, plus LATCH* system for rear seats, no passenger airbag ON/OFF switch', startYear: 2004, endYear: Infinity }
  ],
  L: [
    { description: 'Airbags, manual seat belts plus UCRA* in the rear seats', startYear: 0, endYear: 2003 },
    { description: 'Dual stage airbags and side-airbags, 3-point safety belts with pretensioners and load limiter, upper tether anchorage system on passenger seat and roll-over protection system', startYear: 2004, endYear: Infinity }
  ],
  M: [
    { description: 'Passive restraint system (Canada)', startYear: 0, endYear: 2003 },
    { description: 'Dual stage airbags and side-airbags, 3-point safety belts with pretensioners and load limiter and roll-over protection system', startYear: 2004, endYear: Infinity }
  ],
  N: [
    { description: 'Automatic passive restraint system', startYear: 0, endYear: 2003 },
    { description: 'Dual stage airbags and side head airbags, 3-point safety belts with retractor, pretensioners and load limiter for front and rear, plus LATCH* system for rear seats, no passenger airbag ON/OFF switch', startYear: 2004, endYear: Infinity }
  ],
  P: [
    { description: 'Airbags with 3-point inertia belts for front and inertia belts for rear', startYear: 0, endYear: 2003 },
    { description: 'Dual stage airbags and side head airbags, 3-point safety belts with retractor, pretensioners and load limiter for front and rear, plus two lower anchorages for the rear seats and a roll-over protection system', startYear: 2004, endYear: Infinity }
  ],
  R: [
    { description: 'Airbags, manual seat belts and force limiter', startYear: 0, endYear: 2003 },
    { description: '? - On Portofino M, Australian market', startYear: 2004, endYear: Infinity }
  ],
  S: [
    { description: 'Airbags, manual seat belts plus UCRA*', startYear: 0, endYear: 2003 },
    { description: 'Dual-stage driver airbag, 4 points safety belts, roll-over protection system', startYear: 2004, endYear: Infinity }
  ],
  T: [
    { description: 'Airbags, manual seats belts with pretensioners', startYear: 0, endYear: 2003 },
    { description: 'Front seating positions : 3 points safety belts, with retractor, pretensioner, load limiter, dual stage driver and passenger airbags, side airbag on front seats for thorax protection, side air bags for head protection of front and rear occupants; Rear seating positions : 3 points safety belts, with retractor, load limiter, and complete child restraint anchorages system (LATCH) for each one of the two rear seating positions;', startYear: 2004, endYear: Infinity }
  ],
  U: [
    { description: 'Airbags, manual seats belts with pretensioners plus UCRA*', startYear: 0, endYear: 2003 }
  ],
  V: [
    { description: 'Airbags, manual seats belts with pretensioners, force limiter and UCRA*', startYear: 0, endYear: 2003 }
  ],
  W: [
    { description: 'Airbags, manual seats belts with pretensioners, force limiter and LATCH*', startYear: 0, endYear: 2003 }
  ],
  X: [
    { description: '? - Racecars and prototypes', startYear: 0, endYear: Infinity }
  ],
  Y: [
    { description: 'Airbags for driver and passenger, 3-point manual seats belts with pretensioners and force limiter for front and rear', startYear: 0, endYear: 2003 }
  ],
  Z: [
    { description: 'Airbags for driver and passenger, 3-point manual seats belts with pretensioners and force limiter', startYear: 0, endYear: 2003 }
  ]

}

const engines = {
  A: [
    { description: 'F106B040 - US version', startYear: 0, endYear: 1985 },
    { description: 'F113B - Euro version, Bosch KE Jetronic', startYear: 1986, endYear: 2001 },
    { description: 'F133F', startYear: 2004, endYear: 2008 },
    { description: 'F154CB', startYear: 2015, endYear: Infinity }
  ],
  B: [
    {
      description: 'F106A021 - Euro version, wet sump. Only used on a few late UK versions.',
      startYear: 0,
      endYear: 1985
    },
    { description: 'F117 - Prototype, only two cars made', startYear: 1986, endYear: 2001 },
    { description: 'F133E', startYear: 2001, endYear: 2015 },
    { description: 'F140FG', startYear: 2016, endYear: Infinity }
  ],
  C: [
    { description: 'F106A - Euro version, dry sump. Only used on a few late UK versions.', startYear: 0, endYear: 1985 },
    { description: 'F105C046 - Swiss/Swedish version (without catalyst)', startYear: 1986, endYear: 1986 },
    { description: 'F105C046 - Swiss/Swedish version (with catalyst)', startYear: 1987, endYear: 1989 },
    { description: 'F105C046 - Swiss/Swedish version, (without catalyst)', startYear: 1990, endYear: 2001 },
    { description: 'F140B', startYear: 2001, endYear: 2015 },
    { description: 'F140GA', startYear: 2016, endYear: Infinity }
  ],
  D: [
    { description: 'F102B - Only used on a few late UK versions', startYear: 0, endYear: 1985 },
    { description: 'F101E010/46 - Swiss/Swedish version', startYear: 1986, endYear: 2001 },
    { description: 'F131F', startYear: 2001, endYear: 2015 }
  ],
  E: [
    { description: 'F101C', startYear: 0, endYear: 1985 },
    { description: '? - Single prototype for 348 engine', startYear: 1986, endYear: 2001 },
    { description: 'F136E', startYear: 2001, endYear: 2015 }
  ],
  F: [
    { description: 'F119D040 - US version, Motronic 2.5', startYear: 1989, endYear: 1990 },
    { description: 'F140C', startYear: 2001, endYear: 2015 },
    { description: 'F154BE', startYear: 2015, endYear: Infinity }
  ],
  G: [
    {
      description: 'F106A - US version. Although listed in official documents, it was never used.',
      startYear: 0,
      endYear: 1986
    },
    { description: 'F120A - Euro version', startYear: 1986, endYear: 2001 },
    { description: 'F133G', startYear: 2001, endYear: 2015 },
    { description: '? - Based on the 488 engine', startYear: 2015, endYear: Infinity }
  ],
  H: [
    { description: 'F106B - Euro version', startYear: 0, endYear: 1986 },
    { description: 'F140DA', startYear: 2001, endYear: 2015 },
    { description: 'F154CD', startYear: 2015, endYear: Infinity }
  ],
  J: [
    { description: 'F110A', startYear: 0, endYear: 1986 },
    { description: 'F133H', startYear: 2007, endYear: 2011 }
  ],
  K: [
    { description: 'F106D - Italian version', startYear: 0, endYear: 1986 },
    { description: 'F119D - Euro version (with catalyst)', startYear: 1986, endYear: 1990 },
    { description: 'F119DL - Euro version (without catalyst)', startYear: 1986, endYear: 1990 },
    { description: 'F119DG - Euro version (with catalyst)', startYear: 1991, endYear: 2001 },
    { description: 'F119DLG - Euro version (without catalyst)', startYear: 1991, endYear: 2001 },
    { description: 'F136ED', startYear: 2001, endYear: 2015 }
  ],
  L: [
    { description: 'F105A - Euro version', startYear: 0, endYear: 1986 },
    { description: 'F113D040', startYear: 1986, endYear: 2001 },
    { description: 'F136IB - DCT (F1)', startYear: 2001, endYear: 2015 },
    { description: 'F154CG', startYear: 2015, endYear: Infinity }
  ],
  M: [
    { description: 'F105A040 - US version, 230 HP', startYear: 1983, endYear: 1983 },
    { description: 'F120D040 - US version', startYear: 1986, endYear: 2001 },
    { description: 'F136IB - Manual gearbox, only used on a few cars', startYear: 2001, endYear: 2015 },
    { description: 'F140GC', startYear: 2015, endYear: Infinity }
  ],
  N: [
    { description: 'F106B040 - Australian version', startYear: 0, endYear: 1986 },
    { description: 'F136FB', startYear: 2001, endYear: 2015 },
    { description: 'F154FA - Elektro: F159AA on front axle and F178AA on rear axle', startYear: 2015, endYear: Infinity }
  ],
  P: [
    { description: 'F114B', startYear: 0, endYear: 1986 },
    { description: 'F129B - Motronic 2.7', startYear: 1994, endYear: 1995 },
    { description: 'F140CF', startYear: 2001, endYear: 2015 }
  ],
  R: [
    { description: 'F105A024 - Australian version', startYear: 0, endYear: 1986 },
    { description: 'F119G040 - US version, Motronic 2.7', startYear: 1991, endYear: 1995 },
    { description: 'F140CE', startYear: 2001, endYear: 2015 },
    { description: 'F154BH', startYear: 2015, endYear: Infinity }
  ],
  S: [
    { description: 'F113A040 - US version, Bosch KE Jetronic', startYear: 0, endYear: 1986 },
    { description: 'F116B - Motronic 2.7', startYear: 1992, endYear: 1996 },
    { description: 'F140EB', startYear: 2001, endYear: 2015 },
    { description: 'F163BC - Elektro: F178AB', startYear: 2015, endYear: Infinity }
  ],
  T: [
    { description: 'F113A - Euro version, Bosch K Jetronic', startYear: 0, endYear: 1986 },
    { description: 'F130B', startYear: 1986, endYear: 2001 },
    { description: 'F136IH - -30/+30', startYear: 2001, endYear: 2015 },
    { description: 'F140HB', startYear: 2015, endYear: Infinity }
  ],
  U: [
    { description: 'F105E040 - US version, 235 HP', startYear: 1984, endYear: 1986 },
    { description: 'F119H - Euro version', startYear: 1986, endYear: 2001 },
    { description: 'F140FC', startYear: 2001, endYear: 2015 },
    { description: 'F140HC', startYear: 2015, endYear: Infinity }
  ],
  V: [
    { description: 'F113G040', startYear: 1986, endYear: 2001 },
    { description: 'F136FL', startYear: 2001, endYear: 2015 },
    { description: 'F140IA', startYear: 2015, endYear: Infinity }
  ],
  W: [
    { description: 'F105C - Euro version', startYear: 0, endYear: 1986 },
    { description: 'F116C - Motronic 5.2', startYear: 1997, endYear: 2003 },
    { description: 'F140ED', startYear: 2001, endYear: 2015 },
    { description: 'F154FB - V12', startYear: 2015, endYear: Infinity }
  ],
  X: [
    { description: 'F105C040 - US version', startYear: 0, endYear: 1986 },
    { description: 'F129C - Motronic 5.2', startYear: 1996, endYear: 1999 },
    { description: 'F154BB', startYear: 2001, endYear: 2015 }
  ],
  Y: [
    { description: 'F101E010 - Euro version', startYear: 0, endYear: 1986 },
    { description: 'F101E011 - UK version', startYear: 0, endYear: 1986 },
    { description: 'F131B', startYear: 1986, endYear: 2001 },
    { description: 'F154BD - V8', startYear: 2001, endYear: 2015 }
  ],
  Z: [
    { description: 'F106N - Italian version', startYear: 0, endYear: 1986 },
    { description: 'F133A', startYear: 1986, endYear: 2001 },
    { description: 'F140FE', startYear: 2001, endYear: 2015 }
  ]
}

const markets = {
  A: [
    { description: 'Left-Hand Drive, North America', startYear: 0, endYear: 1995 },
    { description: 'Left-Hand Drive, North America/Middle East', startYear: 1996, endYear: 2007 },
    { description: 'Left-Hand Drive, North America', startYear: 2008, endYear: Infinity }
  ],
  B: [{ description: 'Left-Hand Drive, Europe', startYear: 0, endYear: Infinity }],
  C: [
    { description: 'Right-Hand Drive, UK - Used for all RHD markets, except Australia and New Zealand (after 1994)', startYear: 0, endYear: Infinity }
  ],
  D: [
    { description: 'Right-Hand Drive, Australia', startYear: 0, endYear: 1994 },
    { description: 'Right-Hand Drive, Australia/New Zealand', startYear: 1995, endYear: Infinity }
  ],
  E: [{ description: 'Left-Hand Drive, China (Excluding Hong Kong)', startYear: 2006, endYear: Infinity }],
  L: [
    { description: 'Left-Hand Drive, Latin/Central America/Middle East/South Kora', startYear: 2007, endYear: 2007 },
    { description: 'Left-Hand Drive, Latin/Central America', startYear: 2008, endYear: Infinity }
  ],
  J: [{ description: 'Left-Hand Drive, Japan', startYear: 0, endYear: Infinity }],
  S: [{ description: 'Left-Hand Drive, Switzerland/Sweden', startYear: 1980, endYear: 1995 }],
  T: [
    { description: 'Left-Hand Drive, Middle East', startYear: 0, endYear: 1995 },
    { description: 'Left-Hand Drive, Middle East', startYear: 2007, endYear: Infinity }
  ],
  X: [{ description: 'Other - Used for one-offs, prototypes, and race versions', startYear: 0, endYear: Infinity }]
}

const assemblyPlants = {
  0: [{ description: 'Maranello, Italy', startYear: 0, endYear: Infinity }]
}

interface FerrariSpecific {
  model: string
  engine: string
  safetySystem: string
  market: string
  assemblyPlant: string
}

/**
 * Decodes Ferrari's manufacturer specific VIN data
 *
 * Sources:
 * * https://www.red-headed.com/vin.html (better source)
 * * https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Ferrari/VIN_Codes
 * @param vin {string} The VIN to check
 */
function decodeVin (vin: string): FerrariSpecific | null {
  const modelYear: number = modelYears(vin)

  // Determine which position of the VIN store which parts based on the model year
  const vinIndices = {
    engine: 3,
    safetySystem: 4,
    modelNumber: 5
  }

  if (modelYear >= 2010) {
    vinIndices.engine = 5
    vinIndices.safetySystem = 6
    vinIndices.modelNumber = 3
  }

  let model = 'Unknown'
  const modelString = vin.slice(vinIndices.modelNumber, vinIndices.modelNumber + 2)
  if (models[modelString] !== undefined) {
    const modelMatches = models[modelString]

    for (const item of modelMatches) {
      if (item.startYear <= modelYear && modelYear <= item.endYear) {
        if (model !== 'Unknown') {
          model += '; '
        } else {
          model = ''
        }
        model += item.description
      }
    }
  }

  let safetySystem = 'Unknown'
  if (safetySystems[vin[vinIndices.safetySystem]] !== undefined) {
    const safetySystemMatches = safetySystems[vin[vinIndices.safetySystem]]

    for (const item of safetySystemMatches) {
      if (item.startYear <= modelYear && modelYear <= item.endYear) {
        if (safetySystem !== 'Unknown') {
          safetySystem += '; '
        } else {
          safetySystem = ''
        }
        safetySystem += item.description
      }
    }
  }

  let engine = 'Unknown'
  if (engines[vin[vinIndices.engine]] !== undefined) {
    const marketMatches = engines[vin[vinIndices.engine]]

    for (const item of marketMatches) {
      if (item.startYear <= modelYear && modelYear <= item.endYear) {
        if (engine !== 'Unknown') {
          engine += '; '
        } else {
          engine = ''
        }
        engine += item.description
      }
    }
  }

  let market = 'Unknown'
  if (markets[vin[7]] !== undefined) {
    const marketMatches = markets[vin[7]]

    for (const item of marketMatches) {
      if (item.startYear <= modelYear && modelYear <= item.endYear) {
        if (market !== 'Unknown') {
          market += '; '
        } else {
          market = ''
        }
        market += item.description
      }
    }
  }

  let assemblyPlant = 'Unknown'
  if (assemblyPlants[vin[10]] !== 'Unknown') {
    const plants = assemblyPlants[vin[10]]

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
    engine,
    safetySystem,
    market,
    assemblyPlant
  }
}

export { supportedWmis, decodeVin }
