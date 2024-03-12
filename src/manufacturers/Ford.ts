import modelYears from '../data/modelYear'
import type Model from '../common/Model'

const supportedWmis: string[] = ['AFA', 'JC0', 'JC2', 'KNJ', 'LFA', 'LJX', 'LVS', 'MAJ', 'MNA', 'MNB', 'MNC', 'MM0', 'MM6', 'MM7', 'MM8', 'MPB', 'NM0', 'PE1', 'PE3', 'PR8', 'RHA', 'RL0', 'SFA', 'TW2', 'UNI', 'VS6', 'WF0', 'WF1', 'XLC', 'X9F', 'Y4F', 'Z6F', '1F1', '1F6', '1F7', '1FA', '1FB', '1FC', '1FD', '1FM', '1FT', '1L1', '1LJ', '1LN', '1ME', '1MH', '1MR', '1YV', '1ZV', '1ZW', '2FA', '2FD', '2FM', '2FT', '2L1', '2LJ', '2LM', '2LN', '2ME', '2MH', '2MR', '3FA', '3FC', '3FD', '3FE', '3FM', '3FT', '3LN', '3MA', '3ME', '3FN', '3FR', '4F2', '4F4', '4M2', '4N2', '5L1', '5LD', '5LM', '5LT', '6FP', '6MP', '7A5', '8AF', '8XD', '9BF', '94T']

// TODO: Month Codes

// TODO: Figure these out
// const restraintSystem = {
//   A: { present: 'Active (Manual) Belt (Driver) & Passive (Motorized) Belt (Passenger) plus Driver-side Front Airbag (\'94 Tempo/Topaz)' },
//   B: { present: 'Active Belts plus Driver and Passenger Front Airbags & Side Airbags (1st row) (\'10-)' },
//   B: { present: 'Active belts (Manual)' },
//   C: { present: 'Active Belts and Driver-side Front Airbag' },
//   D: { present: 'Active Belts plus Driver and Passenger Front Airbags & Side Airbags (1st & 2nd row) & Driver-side Knee Airbags (\'10-)' },
//   F: { present: 'Active Belts and Driver and Passenger (Second Generation) Front Airbags' },
//   G: { present: 'Active Belts plus Driver and Passenger Front Airbags & Side Airbags (1st row) & Driver and Passenger Knee Airbags (\'17-\'22 Ford GT)' },
//   H: { present: 'Active Belts and Driver and Passenger Front and Side &/or Side Curtain Airbags (\'99-\'09)' },
//   H: { present: 'Active Belts plus Driver and Passenger Front Airbags & Side Airbags (1st & 2nd row) (\'10-)' },
//   K: { present: 'Active Belts and Driver and Passenger (Second Generation) Front Airbags (only applies to \'98-Early \'01 Escort ZX2)' },
//   L: { present: 'Active Belts and Driver and Passenger (First Generation) Front Airbags' },
//   P: { present: 'Passive belts (Motorized)' },
//   6: { present: 'Active Belts plus Driver and Passenger Front Airbags & Side Airbags (1st & 2nd row) & Driver and Passenger Knee Airbags (\'13-)' },
// };

// Format:
// If multiple models for a code:
// {
//   '<code>': [
//     {description: '<description>', startYear: <first model year>, endYear: <last model year>},
//     ... // As many as necessary
//   ]
// }
// TODO: Finish standardizing these. The ones using the wrong format won't resolve to a model

const models: Record<string, Model[]> = {
// const models = {
  A11: [
    { description: 'Ford Aerostar regular length passenger van (\'86-\'97)', startYear: 1986, endYear: 1997 }
  ],
  A14: [
    { description: 'Ford Aerostar regular length cargo van (\'86-\'97)', startYear: 1986, endYear: 1997 }
  ],
  A15: [
    { description: 'Ford Aerostar regular length cargo van w/side windows (\'86-\'94)', startYear: 1986, endYear: 1994 }
  ],
  A20: [
    { description: 'Mercury Monterey (\'04)', startYear: 2004, endYear: 2004 }
  ],
  A21: [
    { description: 'Ford Aerostar regular length passenger van 4WD (\'90-\'94)', startYear: 1990, endYear: 1994 },
    { description: 'Mercury Monterey; Convenience (\'05)', startYear: 2005, endYear: 2005 }
  ],
  A22: [
    { description: 'Mercury Monterey; Luxury (\'05-\'07)', startYear: 2005, endYear: 2007 }
  ],
  A23: [
    { description: 'Mercury Monterey; Premier (\'05)', startYear: 2005, endYear: 2005 }
  ],
  A24: [
    { description: 'Ford Aerostar regular length cargo van 4WD (\'90-\'94)', startYear: 1990, endYear: 1994 }
  ],
  A25: [
    { description: 'Ford Aerostar regular length cargo van w/side windows 4WD (\'90-\'94)', startYear: 1990, endYear: 1994 }
  ],
  A31: [
    { description: 'Ford Aerostar extended length passenger van (\'89-\'97)', startYear: 1989, endYear: 1997 }
  ],
  A34: [
    { description: 'Ford Aerostar extended length cargo van (\'89-\'94)', startYear: 1989, endYear: 1994 }
  ],
  A35: [
    { description: 'Ford Aerostar extended length cargo van w/side windows (\'89-\'94)', startYear: 1989, endYear: 1994 }
  ],
  A41: [
    { description: 'Ford Aerostar extended length passenger van 4WD (\'90-\'97)', startYear: 1990, endYear: 1997 }
  ],
  A44: [
    { description: 'Ford Aerostar extended length cargo van 4WD (\'90-\'94)', startYear: 1990, endYear: 1994 }
  ],
  A45: [
    { description: 'Ford Aerostar extended length cargo van w/side windows 4WD (\'90-\'94)', startYear: 1990, endYear: 1994 }
  ],
  A50: [
    { description: 'Ford Freestar S (\'04-\'05)', startYear: 2004, endYear: 2005 },
    { description: 'Ford Windstar Base model (\'00)', startYear: 2000, endYear: 2000 },
    { description: 'Ford Windstar LX 3-door (\'01)', startYear: 2001, endYear: 2001 },
    { description: 'Ford Windstar LX Base (\'02)', startYear: 2002, endYear: 2002 },
    { description: 'Ford Windstar Base model (\'03)', startYear: 2003, endYear: 2003 }
  ],
  A51: [
    { description: 'Ford Freestar SE (\'04-\'07)', startYear: 2004, endYear: 2007 },
    { description: 'Ford Windstar LX (\'99-\'00)', startYear: 1999, endYear: 2000 },
    { description: 'Ford Windstar LX 4-door (\'01)', startYear: 2001, endYear: 2001 },
    { description: 'Ford Windstar LX Standard (??)', startYear: 0, endYear: Infinity },
    { description: 'Ford Windstar LX Deluxe (\'02-\'03)', startYear: 2002, endYear: 2003 },
    { description: 'Ford Windstar passenger van (\'95-\'98)', startYear: 1995, endYear: 1998 }
  ],
  A52: [
    { description: 'Ford Freestar SEL (\'04-\'07)', startYear: 2004, endYear: 2007 },
    { description: 'Ford Windstar SE (\'99-\'03)', startYear: 1999, endYear: 2003 }
  ],
  A53: [
    { description: 'Ford Windstar SEL (\'99-\'03)', startYear: 1999, endYear: 2003 },
    { description: 'Ford Windstar Limited (\'00)', startYear: 2000, endYear: 2000 }
  ],
  A54: [
    { description: 'Ford Freestar cargo van (\'04-\'07)', startYear: 2004, endYear: 2007 },
    { description: 'Ford Windstar cargo van (\'95-\'03)', startYear: 1995, endYear: 2003 }
  ],
  A57: [
    { description: 'Ford Freestar SES (\'04-\'05)', startYear: 2004, endYear: 2005 },
    { description: 'Ford Windstar SE Sport (\'01)', startYear: 2001, endYear: 2001 }
  ],
  A58: [
    { description: 'Ford Freestar Limited (\'04-\'07)', startYear: 2004, endYear: 2007 },
    { description: 'Ford Windstar Limited (\'01-\'03)', startYear: 2001, endYear: 2003 }
  ],
  C35: [
    { description: 'Ford E-350 Chassis Cab (\'03-\'04)', startYear: 2003, endYear: 2004 }
  ],
  C45: [
    { description: 'Ford E-450 Chassis Cab (\'03-\'04)', startYear: 2003, endYear: 2004 }
  ],
  C55: [
    { description: 'Ford E-550 Chassis Cab (\'03)', startYear: 2003, endYear: 2003 }
  ],
  E01: [
    { description: 'Ford Econoline, Club Wagon E-100 regular length (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  E04: [
    { description: 'Ford Econoline, E-100 Cargo Van regular length (\'81-\'83)', startYear: 1981, endYear: 1983 }
  ],
  E05: [
    { description: 'Ford Econoline, E-100 Window Van regular length (\'81-\'83)', startYear: 1981, endYear: 1983 }
  ],
  E06: [
    { description: 'Ford Econoline, E-100 Display Van regular length (\'81-\'83)', startYear: 1981, endYear: 1983 }
  ],
  E0R: [
    { description: 'Ford Bronco; 4-door; Raptor (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  E11: [
    { description: 'Ford E-Series, E-150 wagon regular length (\'92-\'09)', startYear: 1992, endYear: 2009 },
    { description: 'Ford Econoline, Club Wagon E-150 regular length (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  E14: [
    { description: 'Ford E-Series, E-150 van regular length (\'92-\'09)', startYear: 1992, endYear: 2009 },
    { description: 'Ford Econoline, E-150 Cargo Van regular length (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  E15: [
    { description: 'Ford Econoline, E-150 Window Van regular length (\'81-\'87)', startYear: 1981, endYear: 1987 }
  ],
  E16: [
    { description: 'Ford Econoline, E-150 Display Van regular length (\'81-\'85)', startYear: 1981, endYear: 1985 }
  ],
  E1A: [
    { description: 'Ford Bronco; 2-door; Black Diamond (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  E1B: [
    { description: 'Ford Bronco; 4-door; Black Diamond (\'24-)', startYear: 2024, endYear: Infinity },
    { description: 'Ford E-Series, E-150 wagon regular length (\'10-\'14)', startYear: 2010, endYear: 2014 }
  ],
  E1C: [
    { description: 'Ford Transit 150, Cargo Van, Medium Roof, RWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 150, Cargo Van, Medium Roof, Sliding Passenger-Side Cargo Door, Regular (130 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  E1D: [
    { description: 'Ford Transit 150, Crew Van, Medium Roof, RWD (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 150, Cargo Van, Medium Roof, Dual Sliding Side Cargo-Doors, Regular (130 in.) wheelbase (\'16-\'19)', startYear: 2016, endYear: 2019 }
  ],
  E1E: [
    { description: 'Ford E-Series, E-150 van regular length (\'10-\'14)', startYear: 2010, endYear: 2014 }
  ],
  E1Y: [
    { description: 'Ford Transit 150, Cargo Van, Low Roof, RWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 150, Cargo Van, Low Roof, Sliding Passenger-Side Cargo Door, Regular (130 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  E1Z: [
    { description: 'Ford Transit 150, Crew Van, Low Roof, RWD (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 150, Cargo Van, Low Roof, 60/40 Passenger-Side Cargo Doors, Regular (130 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  E21: [
    { description: 'Ford Econoline, Club Wagon E-250 regular length (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  E24: [
    { description: 'Ford E-Series, E-250 van regular length (\'92-\'09)', startYear: 1992, endYear: 2009 },
    { description: 'Ford Econoline, E-250 Cargo Van regular length (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  E25: [
    { description: 'Ford E-Series, E-250 Super Duty cutaway (\'07-\'09)', startYear: 2007, endYear: 2009 },
    { description: 'Ford Econoline, E-250 Window Van regular length (\'81-\'87)', startYear: 1981, endYear: 1987 },
    { description: 'Ford Econoline, E-250HD Cargo Van regular length (\'91)', startYear: 1991, endYear: 1991 }
  ],
  E26: [
    { description: 'Ford Econoline, E-250 Display Van regular length (\'81-\'85)', startYear: 1981, endYear: 1985 }
  ],
  E27: [
    { description: 'Ford E-Series, E-250 (Super Duty) Commercial cutaway (\'94-\'99)', startYear: 1994, endYear: 1999 }
  ],
  E29: [
    { description: 'Ford E-Series, E-250 (Super Duty) Commercial stripped chassis (\'94-\'03)', startYear: 1994, endYear: 2003 }
  ],
  E2A: [
    { description: 'Ford Bronco; 2-door; Wildtrak (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  E2B: [
    { description: 'Ford Bronco; 4-door; Wildtrak (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  E2C: [
    { description: 'Ford Transit 150, Cargo Van, Medium Roof, AWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 150, Cargo Van, Medium Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  E2D: [
    { description: 'Ford Transit 150, Crew Van, Medium Roof, AWD (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 150, Cargo Van, Medium Roof, Dual Sliding Side Cargo-Doors, Long (148 in.) wheelbase (\'16-\'19)', startYear: 2016, endYear: 2019 }
  ],
  E2E: [
    { description: 'Ford E-Series, E-250 van regular length (\'10-\'14)', startYear: 2010, endYear: 2014 }
  ],
  E2F: [
    { description: 'Ford E-Series, E-250 Super Duty cutaway (\'10-\'12)', startYear: 2010, endYear: 2012 }
  ],
  E2Y: [
    { description: 'Ford Transit 150, Cargo Van, Low Roof, AWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 150, Cargo Van, Low Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  E30: [
    { description: 'Ford E-Series, E-350 (Super Duty) RV cutaway (\'92-\'99)', startYear: 1992, endYear: 1999 },
    { description: 'Ford Econoline, E-350 RV cutaway (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  E31: [
    { description: 'Ford E-Series, E-350 (Super Duty) wagon regular length (\'92-\'09)', startYear: 1992, endYear: 2009 }
  ],
  E33: [
    { description: 'Ford E-Series, E-350 (Super Duty) RV stripped chassis (\'92-\'93)', startYear: 1992, endYear: 1993 },
    { description: 'Ford Econoline, E-350 RV stripped chassis (\'85-\'91)', startYear: 1985, endYear: 1991 }
  ],
  E34: [
    { description: 'Ford E-Series, E-350 (Super Duty) van regular length (\'92-\'09)', startYear: 1992, endYear: 2009 },
    { description: 'Ford Econoline, E-350 Cargo Van regular length (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  E35: [
    { description: 'Ford E-Series, E-350 Super Duty cutaway (\'00-\'09)', startYear: 2000, endYear: 2009 },
    { description: 'Ford Econoline, E-350 Window Van regular length (\'81-\'87)', startYear: 1981, endYear: 1987 }
  ],
  E36: [
    { description: 'Ford Econoline, E-350 Display Van regular length (\'81-\'85)', startYear: 1981, endYear: 1985 }
  ],
  E37: [
    { description: 'Ford E-Series, E-350 (Super Duty) Commercial cutaway (\'92-\'99)', startYear: 1992, endYear: 1999 },
    { description: 'Ford Econoline, E-350 Commercial cutaway (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  E38: [
    { description: 'Ford Econoline, E-350 Cutaway w/Parcel Delivery Van (\'81-\'84)', startYear: 1981, endYear: 1984 }
  ],
  '': [
    { description: 'Ford E-Series, E-350 (Super Duty) Commercial stripped chassis (\'92-\'09)', startYear: 1992, endYear: 2009 },
    { description: 'Ford Econoline, E-350 Commercial stripped chassis (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  E3B: [
    { description: 'Ford E-Series, E-350 Super Duty wagon regular length (\'10-\'14)', startYear: 2010, endYear: 2014 }
  ],
  E3E: [
    { description: 'Ford E-Series, E-350 Super Duty van regular length (\'10-\'14)', startYear: 2010, endYear: 2014 }
  ],
  E3F: [
    { description: 'Ford E-Series, E-350 Super Duty cutaway (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  E3K: [
    { description: 'Ford E-Series, E-350 Super Duty stripped chassis (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  E40: [
    { description: 'Ford E-Series, E-Super Duty RV cutaway (\'96-\'98), E-450 Super Duty RV cutaway (\'99)', startYear: 1996, endYear: 1998 },
    { description: 'Ford E-Series, E-450 Super Duty RV cutaway (\'99)', startYear: 1999, endYear: Infinity }
  ],
  E45: [
    { description: 'Ford E-Series, E-450 Super Duty cutaway (\'00-\'09)', startYear: 2000, endYear: 2009 }
  ],
  E47: [
    { description: 'Ford E-Series, E-Super Duty Commercial cutaway (\'96-\'98), E-450 Super Duty Commercial cutaway (\'99)', startYear: 1996, endYear: 1998 },
    { description: 'Ford E-Series, E-450 Super Duty Commercial cutaway (\'99)', startYear: 1999, endYear: Infinity }
  ],
  E49: [
    { description: 'Ford E-Series, E-450 Super Duty stripped chassis (\'00-\'09)', startYear: 2000, endYear: 2009 }
  ],
  E4C: [
    { description: 'Ford Bronco; 2-door; Heritage Edition (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  E4D: [
    { description: 'Ford Bronco; 4-door; Heritage Edition (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  E4E: [
    { description: 'Ford Bronco; 2-door; Heritage Limited Edition (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  E4F: [
    { description: 'Ford E-Series, E-450 Super Duty cutaway (\'10-)', startYear: 2023, endYear: Infinity }
  ],
  E4G: [
    { description: 'Ford Bronco; 4-door; Heritage Limited Edition (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  E4H: [
    { description: 'Ford Bronco; 4-door; Everglades (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  E4K: [
    { description: 'Ford E-Series, E-450 Super Duty stripped chassis (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  E55: [
    { description: 'Ford E-Series, E-550 Super Duty cutaway (\'02-\'03)', startYear: 2002, endYear: 2003 }
  ],
  E5A: [
    { description: 'Ford Bronco; 2-door; 4x4; Base model, Big Bend, Black Diamond, Outer Banks (\'21-\'23)', startYear: 2021, endYear: 2023 }
  ],
  E5B: [
    { description: 'Ford Bronco; 4-door; 4x4; Base model, Big Bend, Black Diamond, Outer Banks (\'21-\'23)', startYear: 2021, endYear: 2023 }
  ],
  E5C: [
    { description: 'Ford Bronco; 2-door; Advanced 4x4; Base model, Big Bend, Black Diamond, Outer Banks, Badlands, Wildtrak (\'21-\'23)', startYear: 2021, endYear: 2023 }
  ],
  E5D: [
    { description: 'Ford Bronco; 4-door; Advanced 4x4; Base model, Big Bend, Black Diamond, Outer Banks, Badlands, Wildtrak (\'21-\'23)', startYear: 2021, endYear: 2023 },
    { description: 'Ford Bronco; 4-door; Advanced 4x4; Base model, Big Bend, Black Diamond, Outer Banks, Badlands, Everglades (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  E5E: [
    { description: 'Ford Bronco; 4-door; Advanced 4x4; First Edition (\'21)', startYear: 2021, endYear: 2021 }
  ],
  E5F: [
    { description: 'Ford Bronco; 2-door; Advanced 4x4; First Edition (\'21)', startYear: 2021, endYear: 2021 }
  ],
  E5J: [
    { description: 'Ford Bronco; 4-door; Advanced 4x4; Raptor (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  E6E: [
    { description: 'Ford Transit Connect; XL Cargo Van SWB w/Rear Liftgate (\'14-\'21)', startYear: 2014, endYear: 2021 }
  ],
  E6F: [
    { description: 'Ford Transit Connect; XLT Cargo Van SWB w/Rear Liftgate (\'14-\'21)', startYear: 2014, endYear: 2021 }
  ],
  E6S: [
    { description: 'Ford Transit Connect; XL Cargo Van SWB w/Rear Liftgate (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  E6T: [
    { description: 'Ford Transit Connect; XLT Cargo Van SWB w/Rear Liftgate (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  E7A: [
    { description: 'Ford Bronco; 2-door; Big Bend (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  E7B: [
    { description: 'Ford Bronco; 4-door; Big Bend (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  E7E: [
    { description: 'Ford Transit Connect; XL Cargo Van LWB w/Rear Liftgate (\'14-\'21)', startYear: 2014, endYear: 2021 }
  ],
  E7F: [
    { description: 'Ford Transit Connect; XLT Cargo Van LWB w/Rear Liftgate (\'14-\'21)', startYear: 2014, endYear: 2021 }
  ],
  E7S: [
    { description: 'Ford Transit Connect; XL Cargo Van LWB w/Rear Liftgate (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  E7T: [
    { description: 'Ford Transit Connect; XLT Cargo Van LWB w/Rear Liftgate (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  E8B: [
    { description: 'Ford Bronco; 4-door; Outer Banks (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  E8F: [
    { description: 'Ford Transit Connect; XLT Wagon SWB w/Rear Liftgate (\'14-\'18)', startYear: 2014, endYear: 2018 }
  ],
  E8G: [
    { description: 'Ford Transit Connect; Titanium Wagon SWB w/Rear Liftgate (\'17-\'18)', startYear: 2017, endYear: 2018 }
  ],
  E9A: [
    { description: 'Ford Bronco; 2-door; Badlands (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  E9B: [
    { description: 'Ford Bronco; 4-door; Badlands (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  E9E: [
    { description: 'Ford Transit Connect; XL Wagon LWB w/Rear Liftgate (\'14-\'23)', startYear: 2014, endYear: 2023 }
  ],
  E9F: [
    { description: 'Ford Transit Connect; XLT Wagon LWB w/Rear Liftgate (\'14-\'23)', startYear: 2014, endYear: 2023 }
  ],
  E9G: [
    { description: 'Ford Transit Connect; Titanium Wagon LWB w/Rear Liftgate (\'14-\'23)', startYear: 2014, endYear: 2023 }
  ],
  E9Z: [
    { description: 'Ford Transit 150, Cargo Van, Low Roof, 60/40 Passenger-Side Cargo Doors, Long (148 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 150, Crew Van, Low Roof, AWD (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  F02: [
    { description: 'Ford F-Series, F-150, Regular Cab, Flareside, 2WD (\'04-\'09)', startYear: 2004, endYear: 2009 }
  ],
  F04: [
    { description: 'Ford F-Series, F-150, Regular Cab, Flareside, 4WD (\'04-\'09)', startYear: 2004, endYear: 2009 }
  ],
  F07: [
    { description: 'Ford F-Series, F-150 Heritage, Regular Cab, Flareside, 2WD (\'04)', startYear: 2004, endYear: 2004 },
    { description: 'Ford F-Series, F-150, Regular Cab, Flareside, 2WD (\'97-\'03)', startYear: 1997, endYear: 2003 }
  ],
  F08: [
    { description: 'Ford F-Series, F-150 Heritage, Regular Cab, Flareside, 4WD (\'04)', startYear: 2004, endYear: 2004 },
    { description: 'Ford F-Series, F-150, Regular Cab, Flareside, 4WD (\'97-\'03)', startYear: 1997, endYear: 2003 }
  ],
  F10: [
    { description: 'Ford F-Series, F-100, Regular Cab, 2WD (\'81-\'83)', startYear: 1981, endYear: 1983 }
  ],
  F12: [
    { description: 'Ford F-Series, F-150, Regular Cab, Styleside, 2WD (\'04-\'09)', startYear: 2004, endYear: 2009 }
  ],
  F14: [
    { description: 'Ford F-Series, F-150, Regular Cab, 4WD (\'81-\'96)', startYear: 1981, endYear: 1996 },
    { description: 'Ford F-Series, F-150, Regular Cab, Styleside, 4WD (\'04-\'09)', startYear: 2004, endYear: 2009 }
  ],
  F15: [
    { description: 'Ford F-Series, F-150, Regular Cab, 2WD (\'81-\'96)', startYear: 1981, endYear: 1996 }
  ],
  F17: [
    { description: 'Ford F-Series, F-150 Heritage, Regular Cab, Styleside, 2WD (\'04)', startYear: 2004, endYear: 2004 },
    { description: 'Ford F-Series, F-150, Regular Cab, Styleside, 2WD (\'97-\'03)', startYear: 1997, endYear: 2003 }
  ],
  F18: [
    { description: 'Ford F-Series, F-150 Heritage, Regular Cab, Styleside, 4WD (\'04)', startYear: 2004, endYear: 2004 },
    { description: 'Ford F-Series, F-150, Regular Cab, Styleside, 4WD (\'97-\'03)', startYear: 1997, endYear: 2003 }
  ],
  F1C: [
    { description: 'Ford F-Series, F-150, Regular Cab, Styleside, 2WD (\'10-\'23)', startYear: 2010, endYear: 2023 }
  ],
  F1E: [
    { description: 'Ford F-Series, F-150, Regular Cab, Styleside, 4WD (\'10-\'23)', startYear: 2010, endYear: 2023 }
  ],
  F1K: [
    { description: 'Ford F-Series, F-150, Regular Cab, 2WD; XL (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  F1L: [
    { description: 'Ford F-Series, F-150, Regular Cab, 4WD; XL (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  F1P: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Cutaway, Low Roof, RWD, 9,950 lb. GVWR (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  F1Y: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Cargo Van, Low Roof, Long (148 in.) wheelbase, RWD (\'23-)', startYear: 2024, endYear: Infinity }
  ],
  F1Z: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Chassis Cab, Low Roof, RWD, 9,950 lb. GVWR (\'23-)', startYear: 2024, endYear: Infinity }
  ],
  F20: [
    { description: 'Ford F-Series, Super Duty F-250, Regular Cab, 2WD (\'99-\'09)', startYear: 2024, endYear: Infinity }
  ],
  F21: [
    { description: 'Ford F-Series, Super Duty F-250, Regular Cab, 4WD (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F25: [
    { description: 'Ford F-Series, F-250, Regular Cab, 2WD (\'81-\'97)', startYear: 1981, endYear: 1997 }
  ],
  F26: [
    { description: 'Ford F-Series, F-250, Regular Cab, 4WD (\'81-\'97)', startYear: 1981, endYear: 1997 }
  ],
  F27: [
    { description: 'Ford F-Series, F-250, Regular Cab, 2WD, Chassis Cab (\'81-\'85)', startYear: 1981, endYear: 1985 },
    { description: 'Ford F-Series, F-250, Regular Cab, Styleside, 2WD (\'97-\'99)', startYear: 1997, endYear: 1999 }
  ],
  F28: [
    { description: 'Ford F-Series, F-250, Regular Cab, 4WD, Chassis Cab (\'81-\'84)', startYear: 1981, endYear: 1984 },
    { description: 'Ford F-Series, F-250, Regular Cab, Styleside, 4WD (\'97-\'99)', startYear: 1997, endYear: 1999 }
  ],
  F2A: [
    { description: 'Ford F-Series, Super Duty F-250, Regular Cab, 2WD (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F2B: [
    { description: 'Ford F-Series, Super Duty F-250, Regular Cab, 4WD (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F2P: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Cutaway, Low Roof, AWD, 9,950 lb. GVWR (\'23-)', startYear: 2024, endYear: Infinity }
  ],
  F2Y: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Cargo Van, Low Roof, Long (148 in.) wheelbase, AWD (\'23-)', startYear: 2024, endYear: Infinity }
  ],
  F2Z: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Chassis Cab, Low Roof, AWD, 9,950 lb. GVWR (\'23-)', startYear: 2024, endYear: Infinity }
  ],
  F30: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 2WD, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F31: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 4WD, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F32: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 2WD, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F33: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 4WD, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F34: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 2WD, Chassis Cab, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F35: [
    { description: 'Ford F-Series, F-350, Regular Cab, 2WD (\'81-\'97)', startYear: 1981, endYear: 1997 },
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 4WD, Chassis Cab, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F36: [
    { description: 'Ford F-Series, F-350, Regular Cab, 2WD, Chassis Cab (\'81-\'97)', startYear: 1981, endYear: 1997 },
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F37: [
    { description: 'Ford F-Series, F-350, Regular Cab, 2WD, Chassis Cab (\'81-\'97)', startYear: 1981, endYear: 1997 },
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F38: [
    { description: 'Ford F-Series, F-350, Regular Cab, 4WD, Chassis Cab (\'81-\'97)', startYear: 1981, endYear: 1997 }
  ],
  F3A: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 2WD, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F3B: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 4WD, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F3C: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 2WD, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F3D: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 4WD, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F3E: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 2WD, Chassis Cab, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F3F: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 4WD, Chassis Cab, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F3G: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F3H: [
    { description: 'Ford F-Series, Super Duty F-350, Regular Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F46: [
    { description: 'Ford F-Series, Super Duty F-450, Regular Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F47: [
    { description: 'Ford F-Series, F-Super Duty, Regular Cab, 2WD, Chassis Cab (\'88-\'97)', startYear: 1988, endYear: 1997 },
    { description: 'Ford F-Series, Super Duty F-450, Regular Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F4C: [
    { description: 'Ford F-Series, Super Duty F-450, Regular Cab, 2WD, Dual Rear Wheels (\'19-)', startYear: 2019, endYear: null }
  ],
  F4D: [
    { description: 'Ford F-Series, Super Duty F-450, Regular Cab, 4WD, Dual Rear Wheels (\'19-)', startYear: 2019, endYear: null }
  ],
  F4G: [
    { description: 'Ford F-Series, Super Duty F-450, Regular Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: null }
  ],
  F4H: [
    { description: 'Ford F-Series, Super Duty F-450, Regular Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: null }
  ],

  F4U: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cargo Van, High Roof, Dual Sliding Side Cargo Doors, Long (148 in.) wheelbase Extended Length (\'16-\'19)', startYear: 2016, endYear: 2019 },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, AWD, 9,950 lb. GVWR (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  F4V: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Crew Van, High Roof, Long (148 in.) wheelbase Extended Length, RWD, 9,950 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  F4W: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Crew Van, High Roof, Long (148 in.) wheelbase Extended Length, AWD, 9,950 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  F4X: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, RWD, 9,950 lb. GVWR (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cargo Van, High Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase Extended Length (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  F56: [
    { description: 'Ford F-Series, Super Duty F-550, Regular Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F57: [
    { description: 'Ford F-Series, Super Duty F-550, Regular Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  F5G: [
    { description: 'Ford F-Series, Super Duty F-550, Regular Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F5H: [
    { description: 'Ford F-Series, Super Duty F-550, Regular Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  F5X: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Cargo Van, High Roof, Long (148 in.) wheelbase, RWD (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  F6K: [
    { description: 'Ford F-Series, Super Duty F-600, Regular Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'20-)', startYear: 202, endYear: Infinity }
  ],
  F6L: [
    { description: 'Ford F-Series, Super Duty F-600, Regular Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  F6P: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, 138 in. wheelbase, 9,950 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, RWD, 9,950 lb. GVWR (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  F6X: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Cargo Van, High Roof, Long (148 in.) wheelbase, AWD (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  F6Z: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, 138 in. wheelbase, 9,950 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, RWD, 9,950 lb. GVWR (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  F7C: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Cargo Van, Medium Roof, Long (148 in.) wheelbase, RWD (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  F7X: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, RWD (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  F8C: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Cargo Van, Medium Roof, Long (148 in.) wheelbase, AWD (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  F8P: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, 156 in. wheelbase, 9,950 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, AWD, 9,950 lb. GVWR (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  F8X: [
    { description: 'Ford Transit 350 HD, Single Rear Wheels, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, AWD (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  F8Z: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, 156 in. wheelbase, 9,950 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, AWD, 9,950 lb. GVWR (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  F9P: [{ description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, 178 in. wheelbase, 9,950 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 }],
  F9Z: [{ description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, 178 in. wheelbase, 9,950 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 }],
  J0W: [{ description: 'Lincoln Aviator; Livery, RWD (\'21-)', startYear: 2021, endYear: Infinity }],
  J0X: [{ description: 'Lincoln Aviator; Livery, AWD (\'21-)', startYear: 2021, endYear: Infinity }],
  J1A: [{ description: 'Lincoln MKC; FWD (\'15)', startYear: 2015, endYear: 2015 }],
  J1B: [{ description: 'Lincoln MKC Black Label; AWD (\'15)', startYear: 2015, endYear: 2015 }],
  J1C: [
    { description: 'Lincoln MKC; Premiere FWD (\'16-\'18)', startYear: 2016, endYear: 2018 },
    { description: 'Lincoln MKC; Base model FWD (\'19)', startYear: 2019, endYear: 2019 },
    { description: 'Lincoln Corsair; Base model FWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  J1D: [
    { description: 'Lincoln MKC; Premiere AWD (\'16-\'18)', startYear: 2016, endYear: 2018 },
    { description: 'Lincoln MKC; Base model AWD (\'19)', startYear: 2019, endYear: 2019 },
    { description: 'Lincoln Corsair; Base model AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  J2A: [{ description: 'Lincoln MKC; AWD (\'15)', startYear: 2015, endYear: 2015 }],
  J2B: [{ description: 'Lincoln MKC Black Label; FWD (\'15)', startYear: 2015, endYear: 2015 }],
  J2C: [
    { description: 'Lincoln MKC; Select FWD (\'16-\'19)', startYear: 2016, endYear: 2019 },
    { description: 'Lincoln Corsair; Reserve FWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  J2D: [
    { description: 'Lincoln MKC; Select AWD (\'16-\'19)', startYear: 2016, endYear: 2019 },
    { description: 'Lincoln Corsair; Reserve AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  J2H: [
    { description: 'Lincoln Navigator; 4x2 (\'10-\'15)', startYear: 2010, endYear: 2015 },
    { description: 'Lincoln Navigator; Select 4x2 (\'16-\'17)', startYear: 2016, endYear: 2017 },
    { description: 'Lincoln Navigator; Select 4x2 (\'18-\'19)', startYear: 2018, endYear: 2019 }
  ],
  J2J: [
    { description: 'Lincoln Navigator; 4x4 (\'10-\'15)', startYear: 2010, endYear: 2015 },
    { description: 'Lincoln Navigator; Select 4x4 (\'16-\'17)', startYear: 2016, endYear: 2017 },
    { description: 'Lincoln Navigator; Select 4x4 (\'18-\'19)', startYear: 2018, endYear: 2019 }
  ],
  J2K: [
    { description: 'Lincoln Navigator; Reserve 4x2 (\'16-\'17)', startYear: 2016, endYear: 2017 },
    { description: 'Lincoln Navigator; Reserve 4x2 (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  J2L: [
    { description: 'Lincoln Navigator; Reserve 4x4 (\'16-\'17)', startYear: 2016, endYear: 2017 },
    { description: 'Lincoln Navigator; Reserve 4x4 (\'18-)', startYear: 2018, endYear: 2018 }
  ],
  J2M: [
    { description: 'Lincoln Navigator; Premiere 4x2 (\'18)', startYear: 2018, endYear: 2018 },
    { description: 'Base model 4x2 (\'19-\'23)', startYear: 2019, endYear: 2023 }
  ],
  J2N: [
    { description: 'Lincoln Navigator; Premiere 4x4 (\'18)', startYear: 2018, endYear: 2018 },
    { description: 'Base model 4x4 (\'19-)', startYear: 2019, endYear: Infinity }
  ],
  J2T: [
    { description: 'Lincoln Navigator; Black Label 4x4 (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  J3C: [
    { description: 'Lincoln MKC; Reserve FWD (\'16-\'19)', startYear: 2016, endYear: 2019 }
  ],
  J3D: [
    { description: 'Lincoln MKC; Reserve AWD (\'16-\'19)', startYear: 2016, endYear: 2019 }
  ],
  J3H: [
    { description: 'Lincoln Navigator L; 4x2 (\'10-\'15)', startYear: 2010, endYear: 2015 },
    { description: 'Lincoln Navigator L; Select 4x2 (\'16-\'17)', startYear: 2016, endYear: 2017 },
    { description: 'Lincoln Navigator L; Select 4x2 (\'18-\'19)', startYear: 2018, endYear: 2019 }
  ],
  J3J: [
    { description: 'Lincoln Navigator L; 4x4 (\'10-\'15)', startYear: 2010, endYear: 2015 },
    { description: 'Lincoln Navigator L; Select 4x4 (\'16-\'17)', startYear: 2016, endYear: 2017 },
    { description: 'Lincoln Navigator L; Select 4x4 (\'18-\'19)', startYear: 2018, endYear: 2019 }
  ],
  J3K: [
    { description: 'Lincoln Navigator L; Reserve 4x2 (\'16-\'17)', startYear: 2016, endYear: 2017 },
    { description: 'Lincoln Navigator L; Reserve 4x2 (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  J3L: [
    { description: 'Lincoln Navigator L; Reserve 4x4 (\'16-\'17)', startYear: 2016, endYear: 2017 },
    { description: 'Lincoln Navigator L; Reserve 4x4 (\'18-)', startYear: 2018, endYear: 2023 }
  ],
  J3M: [
    { description: 'Lincoln Navigator L; Base model 4x2 (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  J3N: [
    { description: 'Lincoln Navigator L; Base model 4x4 (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  J3T: [
    { description: 'Lincoln Navigator L; Black Label 4x4 (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  J4C: [
    { description: 'Lincoln MKC Black Label; FWD (\'16-\'19)', startYear: 2016, endYear: 2019 }
  ],
  J4D: [
    { description: 'Lincoln MKC Black Label; AWD (\'16-\'19)', startYear: 2016, endYear: 2019 }
  ],
  J5A: [
    { description: 'Lincoln MKT; AWD (\'10-\'19)', startYear: 2010, endYear: 2019 }
  ],
  J5D: [
    { description: 'Lincoln Corsair; Grand Touring AWD (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  J5F: [
    { description: 'Lincoln MKT; FWD (\'10-\'18)', startYear: 2010, endYear: 2018 }
  ],
  J5L: [
    { description: 'Lincoln MKT Town Car; Hearse/Limo, AWD (\'12-\'19)', startYear: 2012, endYear: 2019 }
  ],
  J5M: [
    { description: 'Lincoln MKT Town Car; Livery, FWD (\'13-\'17)', startYear: 2013, endYear: 2017 }
  ],
  J5N: [
    { description: 'Lincoln MKT Town Car; Livery, AWD (\'13-\'19)', startYear: 2013, endYear: 2019 }
  ],
  J6J: [
    { description: 'Lincoln MKX FWD (\'10-\'15)', startYear: 2010, endYear: 2015 },
    { description: 'Lincoln MKX Premiere FWD (\'16-\'18)', startYear: 2016, endYear: 2018 },
    { description: 'Lincoln Nautilus Base model FWD (\'19-\'23)', startYear: 2019, endYear: 2023 }
  ],
  J6K: [
    { description: 'Lincoln MKX Select FWD (\'16-\'18)', startYear: 2016, endYear: 2018 },
    { description: 'Lincoln Nautilus Select FWD (\'19)', startYear: 2019, endYear: 2019 }
  ],
  J6L: [
    { description: 'Lincoln MKX Reserve FWD (\'16-\'18)', startYear: 2016, endYear: 2018 },
    { description: 'Lincoln Nautilus Reserve FWD (\'19-\'23)', startYear: 2019, endYear: 2023 }
  ],
  J6W: [
    { description: 'Lincoln Aviator; Base model, RWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  J6X: [
    { description: 'Lincoln Aviator; Base model, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  J7J: [
    { description: 'Lincoln MKX Black Label FWD (\'16-\'18)', startYear: 2016, endYear: 2018 },
    { description: 'Lincoln Nautilus Black Label FWD (\'19)', startYear: 2019, endYear: 2019 }
  ],
  J7W: [
    { description: 'Lincoln Aviator; Reserve, RWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  J7X: [
    { description: 'Lincoln Aviator; Reserve, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  J8J: [
    { description: 'Lincoln MKX AWD (\'10-\'15)', startYear: 2010, endYear: 2015 },
    { description: 'Lincoln MKX Premiere AWD (\'16-\'18)', startYear: 2016, endYear: 2018 },
    { description: 'Lincoln Nautilus Base model AWD (\'19-\'23)', startYear: 2019, endYear: 2023 }
  ],
  J8K: [
    { description: 'Lincoln MKX Select AWD (\'16-\'18)', startYear: 2016, endYear: 2018 },
    { description: 'Lincoln Nautilus Select AWD (\'19)', startYear: 2019, endYear: 2019 }
  ],
  J8L: [
    { description: 'Lincoln MKX Reserve AWD (\'16-\'18)', startYear: 2016, endYear: 2018 },
    { description: 'Lincoln Nautilus Reserve AWD (\'19-\'23)', startYear: 2019, endYear: 2023 }
  ],
  J8X: [
    { description: 'Lincoln Aviator; Grand Touring, AWD (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  J9J: [
    { description: 'Lincoln MKX Black Label AWD (\'16-\'18)', startYear: 2016, endYear: 2018 },
    { description: 'Lincoln Nautilus Black Label AWD (\'19-\'23)', startYear: 2019, endYear: 2023 }
  ],
  J9X: [{ description: 'Lincoln Aviator; Black Label, AWD (\'20-)', startYear: 2020, endYear: Infinity }],
  J9Y: [{ description: 'Lincoln Aviator; Black Label Grand Touring, AWD (\'20-\'23)', startYear: 2020, endYear: 2023 }],
  K01: [{ description: 'Ford Freestyle; SE, FWD (\'05-\'06)', startYear: 2005, endYear: 2006 }],
  K02: [{ description: 'Ford Freestyle (\'05-\'07)/Ford Taurus X (\'08-\'09); SEL, FWD', startYear: 2005, endYear: 2009 }],
  K03: [{ description: 'Ford Freestyle (\'05-\'07)/Taurus X (\'08-\'09); Limited, FWD', startYear: 2005, endYear: 2009 }],
  K04: [{ description: 'Ford Freestyle; SE, AWD (\'05-\'06)', startYear: 2005, endYear: 2006 }],
  K05: [{ description: 'Ford Freestyle (\'05-\'07)/Taurus X (\'08-\'09); SEL, AWD', startYear: 2005, endYear: 2009 }],
  K06: [{ description: 'Ford Freestyle (\'05-\'07)/Taurus X (\'08-\'09); Limited, AWD', startYear: 2005, endYear: 2009 }],
  K07: [{ description: 'Ford Taurus X; Eddie Bauer, FWD (\'08-\'09)', startYear: 2008, endYear: 2009 }],
  K08: [{ description: 'Ford Taurus X; Eddie Bauer, AWD (\'08-\'09)', startYear: 2008, endYear: 2009 }],
  K15: [{ description: 'Ford Expedition EL; 4x2, XLT (\'07-\'09)', startYear: 2007, endYear: 2009 }],
  K16: [{ description: 'Ford Expedition EL; 4x4, XLT (\'07-\'09)', startYear: 2007, endYear: 2009 }],
  K17: [{ description: 'Ford Expedition EL; 4x2, Eddie Bauer (\'07-\'09), King Ranch (\'08-\'09)', startYear: 2007, endYear: 2009 }],
  K18: [{ description: 'Ford Expedition EL; 4x4, Eddie Bauer (\'07-\'09), King Ranch (\'08-\'09)', startYear: 2007, endYear: 2009 }],
  K19: [{ description: 'Ford Expedition EL; 4x2, Limited (\'07-\'09)', startYear: 2007, endYear: 2009 }],
  K1C: [
    { description: 'Ford Transit 150, Passenger Van, Medium Roof, Regular (130 in.) wheelbase, RWD (\'20-\'22)', startYear: 2020, endYear: 2022 },
    { description: 'Ford Transit 150, Passenger Van, Medium Roof, Sliding Passenger-Side Cargo Door (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  K1F: [
    { description: 'Ford Expedition EL; 4x2, XLT (\'10)', startYear: 2010, endYear: 2010 },
    { description: 'Ford Expedition EL; 4x2, XL (\'11-\'17)', startYear: 2011, endYear: 2017 },
    { description: 'Ford Expedition Max; 4x2, XL (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  K1G: [
    { description: 'Ford Expedition EL; 4x4, XLT (\'10)', startYear: 2010, endYear: 2010 },
    { description: 'Ford Expedition EL; 4x4, XL (\'11-\'17)', startYear: 2011, endYear: 2017 },
    { description: 'Ford Expedition Max; 4x4, XL (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  K1H: [
    { description: 'Ford Expedition EL; 4x2, Eddie Bauer (\'10)', startYear: 2010, endYear: 2010 },
    { description: 'Ford Expedition EL; 4x2, XLT (\'11-\'17)', startYear: 2011, endYear: 2017 },
    { description: 'Ford Expedition EL; 4x2, King Ranch (\'10-\'17)', startYear: 2010, endYear: 2017 },
    { description: 'Ford Expedition Max; 4x2, XLT (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  K1J: [
    { description: 'Ford Expedition EL; 4x4, Eddie Bauer (\'10)', startYear: 2010, endYear: 2010 },
    { description: 'Ford Expedition EL; 4x4, XLT (\'11-\'17)', startYear: 2011, endYear: 2017 },
    { description: 'Ford Expedition EL; 4x4, King Ranch (\'10-\'17)', startYear: 2010, endYear: 2017 },
    { description: 'Ford Expedition Max; 4x4, XLT (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  K1K: [
    { description: 'Ford Expedition EL; 4x2, Limited (\'10-\'17)', startYear: 2010, endYear: 2017 },
    { description: 'Ford Expedition Max; 4x2, Limited (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  K1L: [
    { description: 'Ford Expedition EL; 4x2, Platinum (\'15-\'17)', startYear: 2015, endYear: 2017 },
    { description: 'Ford Expedition Max; 4x2, Platinum (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  K1M: [
    { description: 'Ford Expedition EL; 4x4, Platinum (\'15-\'17)', startYear: 2015, endYear: 2017 },
    { description: 'Ford Expedition Max; 4x4, Platinum (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  K1N: [
    { description: 'Ford Expedition Max; 4x2, King Ranch (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  K1P: [
    { description: 'Ford Expedition Max; 4x4, King Ranch (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  K1R: [
    { description: 'Ford Mustang Mach-E; RWD, Select (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  K1S: [
    { description: 'Ford Mustang Mach-E; AWD, Select (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  K1Y: [
    { description: 'Ford Transit 150, Passenger Van, Low Roof, Regular (130 in.) wheelbase, RWD (\'20-\'22)', startYear: 2020, endYear: 2022 },
    { description: 'Ford Transit 150, Passenger Van, Low Roof, Sliding Passenger-Side Cargo Door (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  K1Z: [
    { description: 'Ford Transit 150, Passenger Van, Low Roof, 60/40 Passenger-Side Cargo Doors (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  K20: [
    { description: 'Ford Expedition EL; 4x4, Limited (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  K2A: [
    { description: 'Ford Expedition EL; 4x4, Limited (\'10-\'17)', startYear: 2010, endYear: 2017 },
    { description: 'Ford Expedition Max; 4x4, Limited (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  K2C: [
    { description: 'Ford Transit 150, Passenger Van, Medium Roof, Regular (130 in.) wheelbase, AWD (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  K2R: [
    { description: 'Ford Mustang Mach-E; RWD, California Route 1 (\'21-\'22)', startYear: 2021, endYear: 2022 }
  ],
  K2S: [
    { description: 'Ford Mustang Mach-E; AWD, California Route 1 (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  K2Y: [
    { description: 'Ford Transit 150, Passenger Van, Low Roof, Regular (130 in.) wheelbase, AWD (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  K30: [
    { description: 'Ford Edge; Sport FWD (\'09)', startYear: 2009, endYear: 2009 }
  ],
  K36: [
    { description: 'Ford Edge; SE FWD (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  K38: [
    { description: 'Ford Edge; SEL FWD (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  K39: [
    { description: 'Ford Edge; SEL Plus FWD (\'07)', startYear: 2007, endYear: 2007 },
    { description: 'Ford Edge; Limited FWD (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  K3A: [
    { description: 'Ford Edge; Sport FWD (\'10-\'15)', startYear: 2010, endYear: 2015 }
  ],
  K3G: [
    { description: 'Ford Edge; SE FWD (\'10-\'21)', startYear: 2010, endYear: 2021 }
  ],
  K3J: [
    { description: 'Ford Edge; SEL FWD (\'10-\'21)', startYear: 2010, endYear: 2021 },
    { description: 'Ford Edge; ST-Line FWD (\'20-\'21)', startYear: 2020, endYear: 2021 }
  ],
  K3K: [
    { description: 'Ford Edge; Limited FWD (\'10-\'14)', startYear: 2010, endYear: 2014 },
    { description: 'Ford Edge; Titanium FWD (\'15-\'21)', startYear: 2015, endYear: 2021 }
  ],
  K3R: [
    { description: 'Ford Mustang Mach-E; RWD, Premium (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  K3S: [
    { description: 'Ford Mustang Mach-E; AWD, Premium (\'21-)', startYear: 2021, endYear: Infinity },
    { description: 'Ford Mustang Mach-E; AWD, First Edition (\'21)', startYear: 2021, endYear: 2021 }
  ],
  K40: [
    { description: 'Ford Edge; Sport AWD (\'09)', startYear: 2009, endYear: 2009 }
  ],
  K46: [
    { description: 'Ford Edge; SE AWD (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  K48: [
    { description: 'Ford Edge; SEL AWD (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  K49: [
    { description: 'Ford Edge; SEL Plus AWD (\'07)', startYear: 2007, endYear: 2007 },
    { description: 'Ford Edge; Limited AWD (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  K4A: [
    { description: 'Ford Edge; Sport AWD (\'10-\'18)', startYear: 2010, endYear: 2018 },
    { description: 'Ford Edge; ST AWD (\'19-\'24)', startYear: 2019, endYear: 2024 }
  ],
  K4G: [
    { description: 'Ford Edge; SE AWD (\'10-\'24)', startYear: 2010, endYear: 2024 }
  ],
  K4J: [
    { description: 'Ford Edge; SEL AWD (\'10-\'24)', startYear: 2010, endYear: 2024 },
    { description: 'Ford Edge; ST-Line AWD (\'20-\'24)', startYear: 2020, endYear: 2024 }
  ],
  K4K: [
    { description: 'Ford Edge; Limited AWD (\'10-\'14)', startYear: 2010, endYear: 2014 },
    { description: 'Ford Edge; Titanium AWD (\'15-\'24)', startYear: 2015, endYear: 2024 }
  ],
  K4S: [
    { description: 'Ford Mustang Mach-E; AWD, GT (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  K51: [
    { description: 'Ford Flex; SE, FWD (\'09)', startYear: 2009, endYear: 2009 }
  ],
  K52: [
    { description: 'Ford Flex; SEL, FWD (\'09)', startYear: 2009, endYear: 2009 }
  ],
  K53: [
    { description: 'Ford Flex; Limited, FWD (\'09)', startYear: 2009, endYear: 2009 }
  ],
  K5B: [
    { description: 'Ford Flex; SE FWD (\'10-\'19)', startYear: 2010, endYear: 2019 }
  ],
  K5C: [
    { description: 'Ford Flex; SEL FWD (\'10-\'19)', startYear: 2010, endYear: 2019 }
  ],
  K5D: [
    { description: 'Ford Flex; Limited FWD (\'10-\'19), Titanium FWD (\'11-\'12)', startYear: 2010, endYear: 2019 }
  ],
  K62: [
    { description: 'Ford Flex; SEL, AWD (\'09)', startYear: 2009, endYear: 2009 }
  ],
  K63: [
    { description: 'Ford Flex; Limited, AWD (\'09)', startYear: 2009, endYear: 2009 }
  ],
  K6C: [
    { description: 'Ford Flex; SEL AWD (\'10-\'19)', startYear: 2010, endYear: 2019 }
  ],
  K6D: [
    { description: 'Ford Flex; Limited AWD (\'10-\'19), Titanium AWD (\'11-\'12)', startYear: 2010, endYear: 2019 }
  ],
  K7A: [
    { description: 'Ford Explorer; Police Interceptor Utility, FWD (\'13)', startYear: 2013, endYear: 2013 }
  ],
  K7B: [
    { description: 'Ford Explorer; Base model, FWD (\'11-\'19)', startYear: 2011, endYear: 2019 },
    { description: 'Ford Explorer; Base model, RWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  K7D: [
    { description: 'Ford Explorer; XLT, FWD (\'11-\'19)', startYear: 2011, endYear: 2019 },
    { description: 'Ford Explorer; XLT, RWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  K7F: [
    { description: 'Ford Explorer; Limited, FWD (\'11-\'19)', startYear: 2011, endYear: 2019 },
    { description: 'Ford Explorer; Limited, RWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  K7G: [
    { description: 'Ford Explorer; ST, RWD (\'22-)', startYear: 2022, endYear: Infinity }
  ],
  K7H: [
    { description: 'Ford Explorer; Platinum, RWD (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  K7K: [
    { description: 'Ford Explorer; ST-Line, RWD (\'22-)', startYear: 202, endYear: Infinity }
  ],
  K7L: [
    { description: 'Ford Explorer; King Ranch, RWD (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  K8A: [
    { description: 'Ford Explorer; Police Interceptor Utility, AWD (\'13-\'19)', startYear: 2013, endYear: 2019 },
    { description: 'Ford Explorer; Police Interceptor Utility, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  K8B: [
    { description: 'Ford Explorer; Base model, AWD (\'11-\'19)', startYear: 2011, endYear: 2019 },
    { description: 'Ford Explorer; Base model, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  K8D: [
    { description: 'Ford Explorer; XLT, AWD (\'11-\'19)', startYear: 2011, endYear: 2019 },
    { description: 'Ford Explorer; XLT, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  K8F: [
    { description: 'Ford Explorer; Limited, AWD (\'11-\'19)', startYear: 2011, endYear: 2019 },
    { description: 'Ford Explorer; Limited, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  K8G: [
    { description: 'Ford Explorer; ST, AWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Explorer; Sport, AWD (\'13-\'19)', startYear: 2013, endYear: 2019 }
  ],
  K8H: [
    { description: 'Ford Explorer; Platinum, AWD (\'16-\'19)', startYear: 2016, endYear: 2019 },
    { description: 'Ford Explorer; Platinum, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  K8J: [
    { description: 'Ford Explorer; Timberline, AWD (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  K8K: [
    { description: 'Ford Explorer; ST-Line, AWD (\'22-)', startYear: 2022, endYear: Infinity }
  ],
  K8L: [
    { description: 'Ford Explorer; King Ranch, AWD (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  L27: [
    { description: 'Lincoln Navigator L; 4x2 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  L28: [
    { description: 'Lincoln Navigator L; 4x4 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  L2G: [
    { description: 'Lincoln MKZ FWD (\'10-\'16)', startYear: 2010, endYear: 2016 }
  ],
  L2J: [
    { description: 'Lincoln MKZ AWD (\'10-\'16)', startYear: 2010, endYear: 2016 }
  ],
  L2L: [
    { description: 'Lincoln MKZ Hybrid (\'11-\'16)', startYear: 2011, endYear: 2016 }
  ],
  L2M: [
    { description: 'Lincoln MKZ Black Label FWD (\'15-\'16)', startYear: 2015, endYear: 2016 }
  ],
  L2N: [
    { description: 'Lincoln MKZ Black Label AWD (\'15-\'16)', startYear: 2015, endYear: 2016 }
  ],
  L2P: [
    { description: 'Lincoln MKZ Hybrid Black Label (\'15-\'16)', startYear: 2015, endYear: 2016 }
  ],
  L5A: [
    { description: 'Lincoln MKZ; Premiere/Standard FWD (\'17-\'18/\'19-\'20)', startYear: 2017, endYear: 2020 }
  ],
  L5B: [
    { description: 'Lincoln MKZ; Premiere/Standard AWD (\'17-\'18/\'19-\'20)', startYear: 2017, endYear: 2020 }
  ],
  L5C: [
    { description: 'Lincoln MKZ; Select/Reserve I FWD (\'17-\'18/\'19)', startYear: 2017, endYear: 2019 }
  ],
  L5D: [
    { description: 'Lincoln MKZ; Select/Reserve I AWD (\'17-\'18/\'19)', startYear: 2017, endYear: 2019 }
  ],
  L5E: [
    { description: 'Lincoln MKZ; Reserve/Reserve II/Reserve FWD (\'17-\'18/\'19/\'20)', startYear: 2017, endYear: 2020 }
  ],
  L5F: [
    { description: 'Lincoln MKZ; Reserve/Reserve II/Reserve AWD (\'17-\'18/\'19/\'20)', startYear: 2017, endYear: 2020 }
  ],
  L5G: [
    { description: 'Lincoln MKZ Black Label FWD (\'17-\'18)', startYear: 2017, endYear: 2018 }
  ],
  L5H: [
    { description: 'Lincoln MKZ Black Label AWD (\'17-\'18)', startYear: 2017, endYear: 2018 }
  ],
  L5K: [
    { description: 'Lincoln MKZ Hybrid Premiere/Standard (\'17-\'18/\'19-\'20)', startYear: 2017, endYear: 2020 }
  ],
  L5L: [
    { description: 'Lincoln MKZ Hybrid Select/Reserve I/Reserve (\'17-\'18/\'19/\'20)', startYear: 2017, endYear: 2020 }
  ],
  L5M: [
    { description: 'Lincoln MKZ Hybrid Reserve/Reserve II (\'17-\'18/\'19)', startYear: 2017, endYear: 2019 }
  ],
  L5N: [
    { description: 'Lincoln MKZ Hybrid Black Label (\'17-\'18)', startYear: 2017, endYear: 2018 }
  ],
  L8C: [
    { description: 'Lincoln Town Car; Signature Limited (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  L8E: [
    { description: 'Lincoln Town Car; Executive L (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  L8F: [
    { description: 'Lincoln Town Car; Signature L (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  L8J: [
    { description: 'Lincoln Town Car; Executive (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  L9A: [
    { description: 'Lincoln Continental; Black Label FWD (\'17-\'20)', startYear: 2017, endYear: 2020 }
  ],
  L9B: [
    { description: 'Lincoln Continental; Black Label AWD (\'17-\'20)', startYear: 2017, endYear: 2020 }
  ],
  L9D: [
    { description: 'Lincoln MKS; FWD (\'10-\'16)', startYear: 2010, endYear: 2016 }
  ],
  L9E: [
    { description: 'Lincoln MKS; AWD (\'10-\'16)', startYear: 2010, endYear: 2016 }
  ],
  L9F: [
    { description: 'Lincoln MKS; EcoBoost AWD (\'10-\'16)', startYear: 2010, endYear: 2016 }
  ],
  L9H: [
    { description: 'Lincoln Continental; Livery AWD (\'17-\'20)', startYear: 2017, endYear: 2020 }
  ],
  L9N: [
    { description: 'Lincoln Continental; Reserve AWD (\'17-\'20)', startYear: 2017, endYear: 2020 }
  ],
  L9P: [
    { description: 'Lincoln Continental; Premiere/Standard FWD (\'17-\'20)', startYear: 2017, endYear: 2020 }
  ],
  L9R: [
    { description: 'Lincoln Continental; Reserve FWD (\'17-\'20)', startYear: 2017, endYear: 2020 }
  ],
  L9S: [
    { description: 'Lincoln Continental; Select FWD (\'17-\'19)', startYear: 2017, endYear: 2019 }
  ],
  L9T: [
    { description: 'Lincoln Continental; Select AWD (\'17-\'19)', startYear: 2017, endYear: 2019 }
  ],
  L9U: [
    { description: 'Lincoln Continental; Livery FWD (\'17-\'20)', startYear: 2017, endYear: 2020 }
  ],
  L9V: [
    { description: 'Lincoln Continental; Premiere/Standard AWD (\'17-\'20)', startYear: 2017, endYear: 2020 }
  ],
  M01: [
    { description: 'Mercury Milan; Base model V6, AWD (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  M02: [
    { description: 'Mercury Milan; Premier V6, AWD (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  M07: [
    { description: 'Mercury Milan; Base model, FWD (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  M08: [
    { description: 'Mercury Milan; Premier, FWD (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  M0C: [
    { description: 'Mercury Milan; Premier V6, AWD (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  M0H: [
    { description: 'Mercury Milan; Base model, FWD (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  M0J: [
    { description: 'Mercury Milan; Premier, FWD (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  M0L: [
    { description: 'Mercury Milan; Hybrid (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  M10: [
    { description: 'Mercury Tracer; Base model sedan (\'91-\'96)', startYear: 1991, endYear: 1996 },
    { description: 'Mercury Tracer; GS sedan (\'97-\'99)', startYear: 1997, endYear: 1999 }
  ],
  M11: [
    { description: 'Mercury Tracer; 3-d (\'88-\'89)', startYear: 1988, endYear: 1989 }
  ],
  M12: [
    { description: 'Mercury Tracer; 5-d (\'88-\'89)', startYear: 1988, endYear: 1989 }
  ],
  M13: [
    { description: 'Mercury Tracer; wagon (\'88-\'89)', startYear: 1988, endYear: 1989 },
    { description: 'Mercury Tracer; LS sedan (\'97-\'99)', startYear: 1997, endYear: 1999 }
  ],
  M14: [
    { description: 'Mercury Tracer; LTS sedan (\'91-\'96)', startYear: 1991, endYear: 1996 }
  ],
  M15: [
    { description: 'Mercury Tracer; Base model wagon (\'91-\'96)', startYear: 1991, endYear: 1996 },
    { description: 'Mercury Tracer; LS wagon (\'97-\'99)', startYear: 1997, endYear: 1999 }
  ],
  M20: [
    { description: 'Mercury Lynx L 3-d (\'87)', startYear: 1987, endYear: 1987 }
  ],
  M21: [
    { description: 'Mercury Lynx GS 3-d (\'87)', startYear: 1987, endYear: 1987 }
  ],
  M23: [
    { description: 'Mercury Lynx XR3 3-d (\'87)', startYear: 1987, endYear: 1987 }
  ],
  M25: [
    { description: 'Mercury Lynx GS 5-d (\'87)', startYear: 1987, endYear: 1987 }
  ],
  M26: [
    { description: 'Lincoln MKZ FWD (\'07-\'09)', startYear: 2007, endYear: 2009 },
    { description: 'Lincoln Zephyr (\'06)', startYear: 2006, endYear: 2006 }
  ],
  M28: [
    { description: 'Lincoln MKZ AWD (\'07-\'09)', startYear: 2007, endYear: 2009 },
    { description: 'Mercury Lynx GS wagon (\'87)', startYear: 1987, endYear: 1987 }
  ],
  M31: [
    { description: 'Mercury Topaz; 2-door sedan; GS (\'87-\'94)', startYear: 1987, endYear: 1994 }
  ],
  M33: [
    { description: 'Mercury Topaz; 2-door sedan; GS Sport (\'87), XR5 (\'88-\'92)', startYear: 1987, endYear: 1992 }
  ],
  M36: [
    { description: 'Mercury Topaz; 4-door sedan; GS (\'87-\'94)', startYear: 1987, endYear: 1994 }
  ],
  M37: [
    { description: 'Mercury Topaz; 4-door sedan; LS (\'87-\'92)', startYear: 1987, endYear: 1992 }
  ],
  M38: [
    { description: 'Mercury Topaz; 4-door sedan; GS Sport (\'87), LTS (\'88-\'92)', startYear: 1987, endYear: 1992 }
  ],
  M40: [
    { description: 'Mercury Montego; Luxury FWD (\'05-\'07)/Mercury Sable; Base model FWD (\'08-\'09)', startYear: 2005, endYear: 2009 }
  ],
  M41: [
    { description: 'Mercury Montego; Luxury AWD (\'05-\'06)/Mercury Sable; Base model AWD (\'08-\'09)', startYear: 2005, endYear: 2009 }
  ],
  M42: [
    { description: 'Mercury Montego; Premier FWD (\'05-\'07)/Mercury Sable; Premier FWD (\'08-\'09)', startYear: 2005, endYear: 2009 }
  ],
  M43: [
    { description: 'Mercury Montego; Premier AWD (\'05-\'07)/Mercury Sable; Premier AWD (\'08-\'09)', startYear: 2005, endYear: 2009 }
  ],
  M50: [
    { description: 'Mercury Sable; GS sedan (\'00-\'05)', startYear: 2000, endYear: 2005 },
    { description: 'Mercury Sable; GS Plus sedan (\'02-\'03)', startYear: 2002, endYear: 2003 },
    { description: 'Mercury Sable; GS sedan (\'87-\'99)', startYear: 1987, endYear: 1999 },
    { description: 'Mercury Sable; LS sedan (\'98)', startYear: 1998, endYear: 1998 }
  ],
  M51: [
    { description: 'Mercury Sable; G sedan (\'96-\'97)', startYear: 1996, endYear: 1997 }
  ],
  M53: [
    { description: 'Mercury Sable; LS sedan (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Mercury Sable; LS sedan (\'87-\'97)', startYear: 1987, endYear: 1997 },
    { description: 'Mercury Sable; LTS sedan (\'95)', startYear: 1998, endYear: 1995 },
    { description: 'Mercury Sable; LS Premium sedan (\'98)', startYear: 1998, endYear: 1998 },
    { description: 'Mercury Sable; LS sedan (\'99)', startYear: 1999, endYear: 1999 }
  ],
  M55: [
    { description: 'Mercury Sable; GS wagon (\'87-\'97)', startYear: 1987, endYear: 1997 },
    { description: 'Mercury Sable; LS wagon (\'98)', startYear: 1998, endYear: 1998 },
    { description: 'Mercury Sable; LS Premium sedan (\'00-\'04)', startYear: 2000, endYear: 2004 },
    { description: 'Mercury Sable; LS sedan (\'05)', startYear: 2005, endYear: 2005 }
  ],
  M58: [
    { description: 'Mercury Sable; GS wagon (\'00-\'04)', startYear: 2000, endYear: 2004 },
    { description: 'Mercury Sable; GS Plus wagon (\'02-\'03)', startYear: 2002, endYear: 2003 },
    { description: 'Mercury Sable; LS wagon (\'87-\'97)', startYear: 1987, endYear: 1997 },
    { description: 'Mercury Sable; LS Premium wagon (\'98)', startYear: 1998, endYear: 1998 },
    { description: 'Mercury Sable; LS wagon (\'99)', startYear: 1999, endYear: 1999 }
  ],
  M59: [
    { description: 'Mercury Sable; LS Premium wagon (\'00-\'04), LS wagon (\'05)', startYear: 2000, endYear: 2005 }
  ],
  M60: [
    { description: 'Mercury Cougar; LS (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Mercury Cougar; LS (\'89-\'92)', startYear: 1989, endYear: 1992 }
  ],
  M62: [
    { description: 'Mercury Cougar; XR7 (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Mercury Cougar; XR7 (\'89-\'97)', startYear: 1989, endYear: 1997 }
  ],
  M65: [
    { description: 'Mercury Mystique; Base model (\'97-Mid \'98), GS (\'95-\'00)', startYear: 1995, endYear: 2000 }
  ],
  M66: [
    { description: 'Mercury Mystique; LS (\'95-\'00)', startYear: 1995, endYear: 2000 }
  ],
  M72: [
    { description: 'Mercury Grand Marquis; LS 2-door (\'87)', startYear: 1987, endYear: 1987 }
  ],
  M74: [
    { description: 'Mercury Grand Marquis; GS 4-door (\'87-\'08)', startYear: 1987, endYear: 2008 }
  ],
  M75: [
    { description: 'Mercury Grand Marquis; LS 4-door (\'87-\'09)', startYear: 1987, endYear: 2009 },
    { description: 'Mercury Grand Marquis; LSE (\'01-\'05)', startYear: 2001, endYear: 2005 },
    { description: 'Mercury Marauder (\'03)', startYear: 2003, endYear: 2003 }
  ],
  M78: [
    { description: 'Mercury Grand Marquis; Colony Park GS wagon (\'87-\'91)', startYear: 1987, endYear: 1991 }
  ],
  M79: [
    { description: 'Mercury Grand Marquis; Colony Park LS wagon (\'87-\'91)', startYear: 1987, endYear: 1991 },
    { description: 'Mercury Marauder (\'04)', startYear: 2004, endYear: 2004 }
  ],
  M7F: [
    { description: 'Mercury Grand Marquis; LS 4-door (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  M81: [
    { description: 'Lincoln Town Car; Base model (\'87-\'91), Executive Series (\'92-\'04), Signature Series (\'04-\'07)', startYear: 1987, endYear: 2007 }
  ],
  M82: [
    { description: 'Lincoln Town Car; Signature Series (\'87-\'03), Signature Limited (\'05-\'09)', startYear: 1987, endYear: 2009 }
  ],
  M83: [
    { description: 'Lincoln Town Car; Cartier Designer Series (\'87-\'03), Ultimate (\'04), Designer Series (\'06-\'07)', startYear: 1987, endYear: 2007 }
  ],
  M84: [
    { description: 'Lincoln Town Car; Executive L (\'01-\'09)', startYear: 2001, endYear: 2009 }
  ],
  M85: [
    { description: 'Lincoln Town Car; Cartier L (\'01-\'03), Ultimate L (\'04), Signature L (\'05-\'09)', startYear: 2001, endYear: 2009 }
  ],
  M86: [
    { description: 'Lincoln LS; V6', startYear: NaN, endYear: NaN } // Add actual start and end years
  ],
  M87: [
    { description: 'Lincoln LS; V8', startYear: NaN, endYear: NaN } // Add actual start and end years
  ],
  M88: [
    { description: 'Lincoln Town Car; Executive Series (\'05-\'09)', startYear: 2005, endYear: 2009 }
  ],
  M89: [
    { description: 'Lincoln Town Car; Ballistic Protection Series (\'04-\'06)', startYear: 2004, endYear: 2006 }
  ],
  M91: [
    { description: 'Lincoln Mark VII; Base model (\'87)', startYear: 1987, endYear: 1987 },
    { description: 'Lincoln Mark VIII; Base model (\'93-\'98)', startYear: 1993, endYear: 1998 }
  ],
  M92: [
    { description: 'Lincoln Mark VII; Bill Blass Designer Series (\'87-\'92)', startYear: 1987, endYear: 1992 },
    { description: 'Lincoln Mark VIII; LSC (\'97-\'98)', startYear: 1997, endYear: 1998 }
  ],
  M93: [
    { description: 'Lincoln MKS; FWD (\'09)', startYear: 2009, endYear: 2009 },
    { description: 'Lincoln Mark VII; LSC (\'87-\'92)', startYear: 1987, endYear: 1992 }
  ],
  M94: [
    { description: 'Lincoln MKS; AWD (\'09)', startYear: 2009, endYear: 2009 }
  ],
  M97: [
    { description: 'Lincoln Continental (\'95-\'02)', startYear: 1995, endYear: 2002 },
    { description: 'Lincoln Continental; Base model (\'87)', startYear: 1987, endYear: 1987 },
    { description: 'Lincoln Continental; Base model (\'88-\'91)', startYear: 1988, endYear: 1991 },
    { description: 'Lincoln Continental; Executive Series (\'92-\'94)', startYear: 1992, endYear: 1994 }
  ],
  M98: [
    { description: 'Lincoln Continental; Givenchy Designer Series (\'87)', startYear: 1987, endYear: 1987 },
    { description: 'Lincoln Continental; Signature Series (\'88-\'94)', startYear: 1988, endYear: 1994 }
  ],
  N11: [
    { description: 'Nissan Quest (\'93-\'98)', startYear: 1993, endYear: 1998 },
    { description: 'Nissan Quest (\'99-\'00)', startYear: 1999, endYear: 2000 }
  ],
  N15: [
    { description: 'Nissan Quest; GXE (\'01-\'02)', startYear: 2001, endYear: 2002 }
  ],
  N16: [
    { description: 'Nissan Quest; SE (\'01-\'02)', startYear: 2001, endYear: 2002 }
  ],
  N17: [
    { description: 'Nissan Quest; GLE (\'01-\'02)', startYear: 2001, endYear: 2002 }
  ],
  N2K: [
    { description: 'Mercury Mariner Hybrid 4x2 (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  N3H: [
    { description: 'Mercury Mountaineer Base model 4x2 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  N3J: [
    { description: 'Mercury Mountaineer Premier 4x2 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  N3K: [
    { description: 'Mercury Mariner Hybrid 4x4 (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  N4H: [
    { description: 'Mercury Mountaineer Base model AWD (\'10)', startYear: 2010, endYear: 2010 }
  ],
  N4J: [
    { description: 'Mercury Mountaineer Premier 4x4 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  N8B: [
    { description: 'Mercury Mariner Base model 4x2 (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  N8H: [
    { description: 'Mercury Mariner Premier 4x2 (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  N9B: [
    { description: 'Mercury Mariner Base model 4x4 (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  N9H: [
    { description: 'Mercury Mariner Premier 4x4 (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  P01: [
    { description: 'Ford EXP (\'82-\'86)', startYear: 1982, endYear: 1986 },
    { description: 'Ford Fusion; SE V6, AWD (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  P02: [
    { description: 'Ford Fusion; SEL V6, AWD (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  P04: [
    { description: 'Ford Escort; 3-door hatchback; Base model (\'84-\'85), L (\'83-\'85)', startYear: 1983, endYear: 1985 }
  ],
  P05: [
    { description: 'Ford Escort; 3-door hatchback (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Escort; 3-door hatchback; GL (\'83-\'85)', startYear: 1983, endYear: 1985 }
  ],
  P06: [
    { description: 'Ford Escort; 3-door hatchback; GLX (\'83)', startYear: 1983, endYear: 1983 },
    { description: 'Ford Escort; 5-door hatchback (\'82)', startYear: 1982, endYear: 1982 },
    { description: 'Ford Fusion; S, FWD (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  P07: [
    { description: 'Ford Escort; 3-door hatchback; GT (\'83-\'85)', startYear: 1983, endYear: 1985 },
    { description: 'Ford Escort; 3-door hatchback; Turbo GT (\'84-\'85)', startYear: 1984, endYear: 1985 },
    { description: 'Ford Fusion; SE, FWD (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  P08: [
    { description: 'Ford Escort; wagon (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Fusion; SEL, FWD (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  P09: [
    { description: 'Ford Escort; wagon; L (\'83-\'85)', startYear: 1983, endYear: 1985 }
  ],
  P0A: [
    { description: 'Ford Fusion; Police Responder Hybrid, FWD (\'19-\'20)', startYear: 2019, endYear: 2020 }
  ],
  P0C: [
    { description: 'Ford Fusion; SEL V6, AWD (\'10-\'12)', startYear: 2010, endYear: 2012 },
    { description: 'Ford Fusion; SEL, FWD (\'19-\'20)', startYear: 2019, endYear: 2020 }
  ],
  P0D: [
    { description: 'Ford Fusion; Sport V6, AWD (\'10-\'12)', startYear: 2010, endYear: 2012 },
    { description: 'Ford Fusion; Titanium, AWD (\'13-\'20)', startYear: 2013, endYear: 2020 },
    { description: 'Ford Fusion; Titanium, Platinum, AWD (\'17-\'18)', startYear: 2017, endYear: 2018 }
  ],
  P0E: [
    { description: 'Ford Fusion; SEL, AWD (\'19)', startYear: 2019, endYear: 2019 }
  ],
  P0G: [
    { description: 'Ford Fusion; S, FWD (\'10-\'12)', startYear: 2010, endYear: 2012 },
    { description: 'Ford Fusion; S, FWD (\'13-\'20)', startYear: 2013, endYear: 2020 }
  ],
  P0H: [
    { description: 'Ford Fusion; SE, FWD (\'10-\'12)', startYear: 2010, endYear: 2012 },
    { description: 'Ford Fusion; SE, FWD (\'13-\'20)', startYear: 2013, endYear: 2020 }
  ],
  P0J: [
    { description: 'Ford Fusion; SEL, FWD (\'10-\'12)', startYear: 2010, endYear: 2012 }
  ],
  P0K: [
    { description: 'Ford Fusion; Sport V6, FWD (\'10-\'12)', startYear: 2010, endYear: 2012 },
    { description: 'Ford Fusion; Titanium, FWD (\'13-\'20)', startYear: 2013, endYear: 2020 },
    { description: 'Ford Fusion; Platinum, FWD (\'17-\'18)', startYear: 2017, endYear: 2018 }
  ],
  P0L: [
    { description: 'Ford Fusion; Hybrid (\'10-\'12)', startYear: 2010, endYear: 2012 },
    { description: 'Ford Fusion; Hybrid SE (\'13-\'20)', startYear: 2013, endYear: 2020 }
  ],
  P0M: [
    { description: 'Ford Fusion; Hybrid SEL (\'19-\'20)', startYear: 2019, endYear: 2020 }
  ],
  P0P: [
    { description: 'Ford Fusion; Energi SE (\'13-\'18)', startYear: 2013, endYear: 2018 }
  ],
  P0R: [
    { description: 'Ford Fusion; Hybrid Titanium (\'13-\'20); Hybrid Platinum, FWD (\'17-\'18)', startYear: 2013, endYear: 2020 }
  ],
  P0S: [
    { description: 'Ford Fusion; Energi Titanium (\'13-\'20); Energi Platinum, FWD (\'17-\'18)', startYear: 2013, endYear: 2020 }
  ],
  P0T: [
    { description: 'Ford Fusion; SE, AWD (\'13-\'14 Canada only) (\'15-\'20 US & Canada)', startYear: 2013, endYear: 2020 }
  ],
  P0U: [
    { description: 'Ford Fusion; Hybrid S (\'14-\'18)', startYear: 2014, endYear: 2018 }
  ],
  P0V: [
    { description: 'Ford Fusion; Sport V6, AWD (\'17-\'19)', startYear: 2017, endYear: 2019 }
  ],
  P0W: [
    { description: 'Ford Fusion; Special Service Vehicle Plug-in Hybrid, FWD (\'19-\'20)', startYear: 2019, endYear: 2020 }
  ],
  P0X: [
    { description: 'Ford Fusion; Taxi Hybrid, FWD (\'19)', startYear: 2019, endYear: 2019 }
  ],
  P10: [
    { description: 'Ford Mustang, Coupe; Base model, L/GL (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Escort, 4-door sedan; Base model (\'97)', startYear: 1997, endYear: 1997 },
    { description: 'Ford Escort, 4-door sedan; LX (\'98-\'02)', startYear: 1998, endYear: 2002 },
    { description: 'Ford Escort; 3-door hatchback; Pony (\'91)', startYear: 1991, endYear: 1991 },
    { description: 'Ford Escort; 3-door hatchback; Base model (\'92-\'96)', startYear: 1992, endYear: 1996 },
    { description: 'Ford Escort; wagon; GL (\'83-\'85)', startYear: 1983, endYear: 1985 }
  ],
  P11: [
    { description: 'Ford Escort, 2-door coupe; ZX2 (\'98-\'03)', startYear: 1998, endYear: 2003 },
    { description: 'Ford Escort; 3-door hatchback; LX (\'91-\'96)', startYear: 1991, endYear: 1996 },
    { description: 'Ford Escort; wagon; GLX (\'83)', startYear: 1983, endYear: 1983 },
    { description: 'Ford Escort; wagon; LX (\'84-\'85)', startYear: 1984, endYear: 1985 }
  ],
  P12: [
    { description: 'Ford Escort; 3-door hatchback; GT (\'91-\'96)', startYear: 1991, endYear: 1996 },
    { description: 'Ford Mustang, Coupe; Ghia, GLX (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P13: [
    { description: 'Ford Escort, 4-door sedan; LX (\'97)', startYear: 1997, endYear: 1997 },
    { description: 'Ford Escort, 4-door sedan; SE (\'98-\'99)', startYear: 1998, endYear: 1999 },
    { description: 'Ford Escort, 4-door sedan; Standard (\'00-\'02)', startYear: 2000, endYear: 2002 },
    { description: 'Ford Escort; 4-door sedan; LX (\'92-\'96)', startYear: 1992, endYear: 1996 },
    { description: 'Ford Escort; 5-door hatchback; Base model (\'84-\'85)', startYear: 1984, endYear: 1985 },
    { description: 'Ford Escort; 5-door hatchback; L (\'83-\'85)', startYear: 1983, endYear: 1985 },
    { description: 'Ford Mustang, Hatchback; Ghia, GLX (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P14: [
    { description: 'Ford Escort; 5-door hatchback; GL (\'83-\'85)', startYear: 1983, endYear: 1985 },
    { description: 'Ford Escort; 5-door hatchback; LX (\'91-\'96)', startYear: 1991, endYear: 1996 }
  ],
  P15: [
    { description: 'Ford Escort, wagon; LX (\'97)', startYear: 1997, endYear: 1997 },
    { description: 'Ford Escort, wagon; SE (\'98-\'99)', startYear: 1998, endYear: 1999 },
    { description: 'Ford Escort; 5-door hatchback; GLX (\'83)', startYear: 1983, endYear: 1983 },
    { description: 'Ford Escort; 5-door hatchback; LX (\'84-\'85)', startYear: 1984, endYear: 1985 },
    { description: 'Ford Escort; wagon; LX (\'91-\'96)', startYear: 1991, endYear: 1996 },
    { description: 'Ford Mustang, Hatchback; Base model (\'81)', startYear: 1981, endYear: 1981 }
  ],
  P16: [
    { description: 'Ford Escort; 4-door sedan; LX-E (\'92-\'93)', startYear: 1992, endYear: 1993 },
    { description: 'Ford Mustang, Hatchback; GL/GT (\'82)', startYear: 1982, endYear: 1982 }
  ],
  P17: [
    { description: 'Ford EXP; Luxury Coupe (\'87-\'88)', startYear: 1987, endYear: 1988 }
  ],
  P18: [
    { description: 'Ford EXP; Sport Coupe (\'87)', startYear: 1987, endYear: 1987 },
    { description: 'Ford Tempo, 2-door sedan; L (\'84-\'85)', startYear: 1984, endYear: 1985 }
  ],
  P19: [
    { description: 'Ford Tempo, 2-door sedan; GL (\'84-\'86)', startYear: 1984, endYear: 1986 }
  ],
  P1C: [
    { description: 'Ford EcoSport; SES AWD (\'18)', startYear: 2018, endYear: 2018 }
  ],
  P1R: [
    { description: 'Ford EcoSport; S FWD (\'18)', startYear: 2018, endYear: 2018 }
  ],
  P1S: [
    { description: 'Ford EcoSport; S AWD (\'18)', startYear: 2018, endYear: 2018 }
  ],
  P1T: [
    { description: 'Ford EcoSport; SE FWD (\'18)', startYear: 2018, endYear: 2018 }
  ],
  P1U: [
    { description: 'Ford EcoSport; SE AWD (\'18)', startYear: 2018, endYear: 2018 }
  ],
  P1V: [
    { description: 'Ford EcoSport; Titanium FWD (\'18)', startYear: 2018, endYear: 2018 }
  ],
  P1W: [
    { description: 'Ford EcoSport; Titanium AWD (\'18)', startYear: 2018, endYear: 2018 }
  ],
  P20: [
    { description: 'Ford Escort; 3-door hatchback; Pony (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Ford Fairmont; 2-d sedan (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Tempo, 2-door sedan; GLX (\'84-\'85)', startYear: 1984, endYear: 1985 },
    { description: 'Ford Tempo, 2-door sedan; LX (\'86)', startYear: 1986, endYear: 1986 }
  ],
  P21: [
    { description: 'Ford Escort; 3-door hatchback; GL (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Ford Fairmont; 4-d sedan (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Tempo, 4-door sedan; L (\'84-\'85)', startYear: 1984, endYear: 1985 }
  ],
  P22: [
    { description: 'Ford Fairmont; Futura 2-d coupe (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Tempo, 4-door sedan; GL (\'84-\'86)', startYear: 1984, endYear: 1986 }
  ],
  P23: [
    { description: 'Ford Escort; 3-door hatchback; GT (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Ford Fairmont; wagon (\'81)', startYear: 1981, endYear: 1981 },
    { description: 'Ford Five Hundred (\'05-\'06); SE, FWD', startYear: 2005, endYear: 2006 },
    { description: 'Ford Ford Taurus (\'09); SE, FWD', startYear: 2009, endYear: 2009 },
    { description: 'Ford Tempo, 4-door sedan; GLX (\'84-\'85)', startYear: 1984, endYear: 1985 },
    { description: 'Ford Tempo, 4-door sedan; LX (\'86)', startYear: 1986, endYear: 1986 }
  ],
  P24: [
    { description: 'Ford Five Hundred (\'05-\'07); SEL, FWD', startYear: 2005, endYear: 2007 },
    { description: 'Ford Taurus (\'08-\'09); SEL, FWD', startYear: 2008, endYear: 2009 }
  ],
  P25: [
    { description: 'Ford Escort; 5-door hatchback; GL (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Ford Five Hundred (\'05-\'07); Limited, FWD', startYear: 2005, endYear: 2007 },
    { description: 'Ford Taurus (\'08-\'09); Limited, FWD', startYear: 2008, endYear: 2009 }
  ],
  P26: [
    { description: 'Ford Five Hundred (\'05-\'06); SE, AWD', startYear: 2005, endYear: 2006 },
    { description: 'Ford Taurus (\'09); SE, AWD', startYear: 2009, endYear: 2009 },
    { description: 'Ford Granada; 2-d sedan (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Mustang, Coupe (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P27: [
    { description: 'Ford Five Hundred (\'05-\'07); SEL, AWD', startYear: 2005, endYear: 2007 },
    { description: 'Ford Taurus (\'08-\'09); SEL, AWD', startYear: 2008, endYear: 2009 },
    { description: 'Ford Granada; 4-d sedan (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Mustang, Convertible (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P28: [
    { description: 'Ford Escort; wagon; GL (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Ford Five Hundred (\'05-\'07); Limited, AWD', startYear: 2005, endYear: 2007 },
    { description: 'Ford Taurus (\'08-\'09); Limited, AWD', startYear: 2008, endYear: 2009 },
    { description: 'Ford Granada; wagon (\'82)', startYear: 1982, endYear: 1982 },
    { description: 'Ford Mustang, Hatchback (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P29: [
    { description: 'Ford Taurus; sedan (\'86)', startYear: 1986, endYear: 1986 }
  ],
  P2D: [
    { description: 'Ford Taurus; SE, FWD (\'10-\'19)', startYear: 2010, endYear: 2019 }
  ],
  P2E: [
    { description: 'Ford Taurus; SEL, FWD (\'10-\'19)', startYear: 2010, endYear: 2019 }
  ],
  P2F: [
    { description: 'Ford Taurus; Limited, FWD (\'10-\'19)', startYear: 2010, endYear: 2019 }
  ],
  P2H: [
    { description: 'Ford Taurus; SEL, AWD (\'10-\'19)', startYear: 2010, endYear: 2019 }
  ],
  P2J: [
    { description: 'Ford Taurus; Limited, AWD (\'10-\'19)', startYear: 2010, endYear: 2019 }
  ],
  P2K: [
    { description: 'Ford Taurus; SHO, AWD (\'10-\'19)', startYear: 2010, endYear: 2019 }
  ],
  P2L: [
    { description: 'Ford Taurus; Police Interceptor Sedan, FWD (\'13-\'19)', startYear: 2013, endYear: 2019 },
    { description: 'Ford Taurus; Special Service Police Sedan, FWD (\'14-\'18)', startYear: 2014, endYear: 2018 }
  ],
  P2M: [
    { description: 'Ford Taurus; Police Interceptor Sedan, AWD (\'13-\'19)', startYear: 2013, endYear: 2019 }
  ],
  P30: [
    { description: 'Ford Focus, 5-door hatchback; SVT (\'04)', startYear: 2004, endYear: 2004 },
    { description: 'Ford Taurus; wagon (\'86)', startYear: 1986, endYear: 1986 },
    { description: 'Ford Tempo, 2-door sedan; L (\'91)', startYear: 1991, endYear: 1991 }
  ],
  P31: [
    { description: 'Ford Escort; 3-door hatchback; Base model (\'85 1/2)', startYear: 1985, endYear: 1985 },
    { description: 'Ford Escort; 3-door hatchback; Pony (\'86)', startYear: 1986, endYear: 1986 },
    { description: 'Ford Escort; 3-door hatchback; L (\'85 1/2-\'86)', startYear: 1985, endYear: 1986 },
    { description: 'Ford Focus, 3-door hatchback; ZX3 (\'00-\'04)', startYear: 2000, endYear: 2004 },
    { description: 'Ford Focus, 3-door hatchback; ZX3 S/SE/SES (\'05-\'07)', startYear: 2005, endYear: 2007 },
    { description: 'Ford LTD; S 4-d sedan (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Tempo, 2-door sedan; GL (\'87-\'94)', startYear: 1987, endYear: 1994 }
  ],
  P32: [
    { description: 'Ford Escort; 3-door hatchback; GL (\'85 1/2)', startYear: 1985, endYear: 1985 },
    { description: 'Ford Escort; 3-door hatchback; LX (\'86)', startYear: 1986, endYear: 1986 },
    { description: 'Ford Focus, 2-door coupe; S (\'08)', startYear: 2008, endYear: 2008 },
    { description: 'Ford Focus, 2-door coupe; SE (\'09)', startYear: 2009, endYear: 2009 },
    { description: 'Ford LTD; 2-d sedan (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Tempo, 2-door sedan; LX (\'87)', startYear: 1987, endYear: 1987 }
  ],
  P33: [
    { description: 'Ford Escort; 3-door hatchback; GT (\'86)', startYear: 1985, endYear: 1986 },
    { description: 'Ford Focus, 2-door coupe; SE/SES (\'08)', startYear: 2008, endYear: 2008 },
    { description: 'Ford Focus, 2-door coupe; SES (\'09)', startYear: 2009, endYear: 2009 },
    { description: 'Ford Focus, Sedan; LX (\'00-\'04)', startYear: 2000, endYear: 2004 },
    { description: 'Ford LTD; 4-d sedan (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Tempo, 2-door sedan; Sport GL (\'87)', startYear: 1987, endYear: 1987 },
    { description: 'Ford Tempo, 2-door sedan; GLS (\'88-\'92)', startYear: 1988, endYear: 1992 }
  ],
  P34: [
    { description: 'Ford Escort; wagon; L (\'85 1/2-\'86)', startYear: 1985, endYear: 1986 },
    { description: 'Ford Focus, 4-door sedan; S (\'08-\'09)', startYear: 2009, endYear: 2009 },
    { description: 'Ford Focus, Sedan; SE (\'00-\'04)', startYear: 2000, endYear: 2004 },
    { description: 'Ford Focus, Sedan; ZX4 S/SE/SES (\'05-\'07)', startYear: 2005, endYear: 2007 },
    { description: 'Ford LTD; Crown Victoria 2-d sedan (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Tempo, 2-door sedan; AWD (\'87)', startYear: 1987, endYear: 1987 }
  ],
  P35: [
    { description: 'Ford Escort; wagon; GL (\'85 1/2)', startYear: 1985, endYear: 1985 },
    { description: 'Ford Escort; wagon; LX (\'86)', startYear: 1986, endYear: 1986 },
    { description: 'Ford Fairmont; 2-d sedan (\'83)', startYear: 1983, endYear: 1983 },
    { description: 'Ford Focus, 4-door sedan; SE/SES (\'08)', startYear: 2008, endYear: 2008 },
    { description: 'Ford Focus, 4-door sedan; SE (\'09)', startYear: 2009, endYear: 2009 },
    { description: 'Ford Focus, Wagon; ZTW (\'04)', startYear: 2004, endYear: 2004 },
    { description: 'Ford LTD; Crown Victoria 4-d sedan (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Tempo, 4-door sedan; L (\'91)', startYear: 1991, endYear: 1991 }
  ],
  P36: [
    { description: 'Ford Escort; 5-door hatchback; L (\'85 1/2-\'86)', startYear: 1985, endYear: 1986 },
    { description: 'Ford Fairmont; 4-d sedan (\'83)', startYear: 1983, endYear: 1983 },
    { description: 'Ford Focus, 4-door sedan; SES (\'09)', startYear: 2009, endYear: 2009 },
    { description: 'Ford Focus, Wagon; SE (\'00-\'04)', startYear: 2000, endYear: 2004 },
    { description: 'Ford Focus, Wagon; ZTW (\'02-\'03)', startYear: 2002, endYear: 2003 },
    { description: 'Ford Focus, Wagon; ZXW SE/SES (\'05-\'07)', startYear: 2005, endYear: 2007 },
    { description: 'Ford Tempo, 4-door sedan; GL (\'87-\'94)', startYear: 1987, endYear: 1994 }
  ],
  P37: [
    { description: 'Ford Escort; 5-door hatchback; GL (\'85 1/2), LX (\'86)', startYear: 1985, endYear: 1986 },
    { description: 'Ford Fairmont; Futura 2-d coupe (\'83)', startYear: 1983, endYear: 1983 },
    { description: 'Ford Focus, 4-door sedan; SEL (\'09)', startYear: 2009, endYear: 2009 },
    { description: 'Ford Focus, 5-door hatchback; ZX5 (\'02-\'04)', startYear: 2002, endYear: 2004 },
    { description: 'Ford Focus, 5-door hatchback; SVT (\'03)', startYear: 2003, endYear: 2003 },
    { description: 'Ford Focus, 5-door hatchback; ZX5 S/SE/SES (\'05-\'07)', startYear: 2005, endYear: 2007 },
    { description: 'Ford LTD; S wagon (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Tempo, 4-door sedan; LX (\'87-\'94)', startYear: 1987, endYear: 1994 }
  ],
  P38: [
    { description: 'Ford Focus, Sedan; ZTS (\'00-\'04)', startYear: 2000, endYear: 2004 },
    { description: 'Ford Focus, Sedan; ZTS ZX4 ST (\'05-)', startYear: 2000, endYear: Infinity },
    { description: 'Ford LTD; wagon (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Tempo, 4-door sedan; Sport GL (\'87)', startYear: 1987, endYear: 1987 },
    { description: 'Ford Tempo, 4-door sedan; GLS (\'88-\'92)', startYear: 1988, endYear: 1992 }
  ],
  P39: [
    { description: 'Ford Focus, 3-door hatchback; SVT (\'02-\'04)', startYear: 2002, endYear: 2004 },
    { description: 'Ford LTD; 4-d sedan (\'83-\'86)', startYear: 1983, endYear: 1986 },
    { description: 'Ford LTD; Country Squire wagon (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Ford Tempo, 4-door sedan; AWD (\'87-\'91)', startYear: 1987, endYear: 1991 }
  ],
  P3C: [
    { description: 'Ford Focus, 2-door coupe; SE (\'10)', startYear: 2010, endYear: 2010 }
  ],
  P3D: [
    { description: 'Ford Focus, 2-door coupe; SES (\'10)', startYear: 2010, endYear: 2010 }
  ],
  P3E: [
    { description: 'Ford Focus, 4-door sedan; S (\'10-\'11)', startYear: 2010, endYear: 2011 },
    { description: 'Ford Focus, 4-door sedan; S (\'12-\'18)', startYear: 2012, endYear: 2018 }
  ],
  P3F: [
    { description: 'Ford Focus, 4-door sedan; SE (\'10-\'11)', startYear: 2010, endYear: 2011 },
    { description: 'Ford Focus, 4-door sedan; SE (\'12-\'18)', startYear: 2012, endYear: 2018 }
  ],
  P3G: [
    { description: 'Ford Focus, 4-door sedan; SES (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  P3H: [
    { description: 'Ford Focus, 4-door sedan; SEL (\'10-\'11)', startYear: 2010, endYear: 2011 },
    { description: 'Ford Focus, 4-door sedan; SEL (\'12)', startYear: 2012, endYear: 2012 },
    { description: 'Ford Focus, 4-door sedan; SEL (\'17-\'18)', startYear: 2017, endYear: 2018 }
  ],
  P3J: [
    { description: 'Ford Focus, 4-door sedan; Titanium (\'12-\'18)', startYear: 2012, endYear: 2018 }
  ],
  P3K: [
    { description: 'Ford Focus, 5-door hatchback; SE (\'12-\'18)', startYear: 2012, endYear: 2018 }
  ],
  P3L: [
    { description: 'Ford Focus, 5-door hatchback; ST (\'13-\'18)', startYear: 2013, endYear: 2018 }
  ],
  P3M: [
    { description: 'Ford Focus, 5-door hatchback; SEL (\'12)', startYear: 2012, endYear: 2012 },
    { description: 'Ford Focus, 5-door hatchback; SEL (\'17-\'18)', startYear: 2017, endYear: 2018 }
  ],
  P3N: [
    { description: 'Ford Focus, 5-door hatchback; Titanium (\'12-\'18)', startYear: 2012, endYear: 2018 }
  ],
  P3R: [
    { description: 'Ford Focus, 5-door hatchback; Electric (\'12-\'18)', startYear: 2012, endYear: 2018 }
  ],
  P3T: [
    { description: 'Ford Focus, 5-door hatchback; RS (\'16-\'18)', startYear: 2016, endYear: 2018 }
  ],
  P40: [
    { description: 'Ford LTD; wagon (\'83-\'86)', startYear: 1983, endYear: 1986 },
    { description: 'Ford Mustang, Coupe; LX (\'87-\'93)', startYear: 1987, endYear: 1993 },
    { description: 'Ford Mustang, Coupe; V6 (\'94-\'04)', startYear: 1994, endYear: 2004 }
  ],
  P41: [
    { description: 'Ford Mustang, Hatchback; LX (\'87-\'93)', startYear: 1987, endYear: 1993 }
  ],
  P42: [
    { description: 'Ford LTD Crown Victoria; 2-d sedan (\'83-\'86)', startYear: 1983, endYear: 1986 },
    { description: 'Ford Mustang, Coupe; GT (\'94-\'04)', startYear: 1994, endYear: 2004 },
    { description: 'Ford Mustang, Coupe; GTS (\'95)', startYear: 1995, endYear: 1995 },
    { description: 'Ford Mustang, Coupe; Cobra (\'94-\'95)', startYear: 1994, endYear: 1995 },
    { description: 'Ford Mustang, Coupe; Cobra R (\'95)', startYear: 1995, endYear: 1995 },
    { description: 'Ford Mustang, Coupe; Bullitt (\'01)', startYear: 2001, endYear: 2001 },
    { description: 'Ford Mustang, Coupe; Mach 1 (\'03-\'04)', startYear: 2003, endYear: 2004 },
    { description: 'Ford Mustang, Hatchback; GT (\'87-\'93)', startYear: 1987, endYear: 1993 },
    { description: 'Ford Mustang, Hatchback; Cobra (\'93)', startYear: 1993, endYear: 1993 },
    { description: 'Ford Mustang, Hatchback; Cobra R (\'93)', startYear: 1993, endYear: 1993 },
    { description: 'Ford Thunderbird; All models (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P43: [
    { description: 'Ford LTD Crown Victoria; 4-d sedan (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P44: [
    { description: 'Ford LTD Crown Victoria; wagon, S wagon, Country Squire wagon (\'83-\'86)', startYear: 1983, endYear: 1986 },
    { description: 'Ford Mustang, Convertible; LX (\'87-\'93)', startYear: 1987, endYear: 1993 },
    { description: 'Ford Mustang, Convertible; V6 (\'94-\'04)', startYear: 1994, endYear: 2004 }
  ],
  P45: [
    { description: 'Ford Mustang, Convertible; GT (\'87-\'93)', startYear: 1987, endYear: 1993 },
    { description: 'Ford Mustang, Convertible; GT (\'94-\'04)', startYear: 1994, endYear: 2004 },
    { description: 'Ford Mustang, Convertible; Cobra (\'94-\'95)', startYear: 1994, endYear: 1995 }
  ],
  P46: [
    { description: 'Ford Mustang, Convertible; SVT Cobra (\'96-\'01)', startYear: 1996, endYear: 2001 },
    { description: 'Ford Thunderbird; All models (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P47: [
    { description: 'Ford Mustang, Coupe; SVT Cobra (\'96-\'01)', startYear: 1996, endYear: 2001 },
    { description: 'Ford Mustang, Coupe; SVT Cobra R (\'00)', startYear: 2000, endYear: 2000 }
  ],
  P48: [
    { description: 'Ford Mustang, Coupe; SVT Cobra (\'03-\'04)', startYear: 2003, endYear: 2004 }
  ],
  P49: [
    { description: 'Ford Mustang, Convertible; SVT Cobra (\'03-04)', startYear: 2011, endYear: 2019 }
  ],
  P4A: [
    { description: 'Ford Fiesta, Sedan, S (\'11-\'19)', startYear: 2011, endYear: 2019 }
  ],
  P4B: [
    { description: 'Ford Fiesta, Sedan, SE (\'11-\'19)', startYear: 2011, endYear: 2019 }
  ],
  P4C: [
    { description: 'Ford Fiesta, Sedan, SEL (\'11-\'12)', startYear: 2011, endYear: 2012 },
    { description: 'Ford Fiesta, Sedan, Titanium (\'13-\'18)', startYear: 2013, endYear: 2018 }
  ],
  P4D: [
    { description: 'Ford Fiesta, Hatchback, ST-Line (\'19)', startYear: 2019, endYear: 2019 }
  ],
  P4E: [
    { description: 'Ford Fiesta, Hatchback, SE (\'11-\'19)', startYear: 2011, endYear: 2019 }
  ],
  P4F: [
    { description: 'Ford Fiesta, Hatchback, SES (\'11-\'12)', startYear: 2011, endYear: 2012 },
    { description: 'Ford Fiesta, Hatchback, Titanium (\'13-\'18)', startYear: 2013, endYear: 2018 }
  ],
  P4G: [
    { description: 'Ford Fiesta, Hatchback, ST (\'14-\'19)', startYear: 2014, endYear: 2019 }
  ],
  P4T: [
    { description: 'Ford Fiesta, Hatchback, S (\'12-\'19)', startYear: 2012, endYear: 2019 }
  ],
  P50: [
    { description: 'Ford Taurus; L sedan (\'87-\'92)', startYear: 1987, endYear: 1992 }
  ],
  P51: [
    { description: 'Ford Taurus; MT5 sedan (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Ford Taurus; G sedan (\'96-\'97)', startYear: 1996, endYear: 1997 },
    { description: 'Mercury LN7 (\'83)', startYear: 1983, endYear: 1983 },
    { description: 'Mercury Lynx; 3-d hatchback; Base model, L (\'85 1/2-\'86)', startYear: 1985, endYear: 1986 }
  ],
  P52: [
    { description: 'Ford Taurus; GL sedan (\'87-\'97)', startYear: 1987, endYear: 1997 },
    { description: 'Ford Taurus; SE sedan (\'95)', startYear: 1995, endYear: 1995 },
    { description: 'Ford Taurus; LX sedan (\'98-\'99)', startYear: 1998, endYear: 1999 },
    { description: 'Ford Taurus; SE sedan (\'98)', startYear: 1998, endYear: 1998 },
    { description: 'Ford Taurus; LX sedan (\'00-\'04)', startYear: 2000, endYear: 2004 },
    { description: 'Mercury Lynx; 3-d hatchback; GS (\'85 1/2-\'86)', startYear: 1985, endYear: 1989 }
  ],
  P53: [
    { description: 'Ford Taurus; LX sedan (\'87-\'97)', startYear: 1987, endYear: 1997 },
    { description: 'Ford Taurus; SE Comfort sedan (\'98)', startYear: 1998, endYear: 1998 },
    { description: 'Ford Taurus; SE sedan (\'99)', startYear: 1999, endYear: 1999 },
    { description: 'Ford Taurus; SE sedan (\'00-\'07)', startYear: 2000, endYear: 2007 },
    { description: 'Mercury Lynx; 3-d hatchback; XR3 (\'86)', startYear: 1986, endYear: 1986 }
  ],
  P54: [
    { description: 'Ford Taurus; SHO (\'89-\'99)', startYear: 1989, endYear: 1999 },
    { description: 'Mercury Lynx; 3-d hatchback; Base model (\'84-\'85)', startYear: 1984, endYear: 1985 },
    { description: 'Mercury Lynx; 3-d hatchback; L (\'83-\'85)', startYear: 1983, endYear: 1985 }
  ],
  P55: [
    { description: 'Ford Taurus; L wagon (\'87-\'92)', startYear: 1987, endYear: 1992 },
    { description: 'Ford Taurus; SE Special Value Group (SVG)/SES sedan (\'00-\'04)', startYear: 2000, endYear: 2004 },
    { description: 'Mercury Lynx; 3-d hatchback; GS (\'83-\'85)', startYear: 1983, endYear: 1985 }
  ],
  P56: [
    { description: 'Ford Taurus; MT5 wagon (\'87)', startYear: 1987, endYear: 1987 },
    { description: 'Ford Taurus; SE Comfort/SEL sedan (\'00-\'07)', startYear: 2000, endYear: 2007 }
  ],
  P57: [
    { description: 'Ford Taurus; GL wagon (\'87-\'97)', startYear: 1987, endYear: 1997 },
    { description: 'Ford Taurus; SE wagon (\'98)', startYear: 1998, endYear: 1998 },
    { description: 'Mercury Lynx; 3-d hatchback; RS (\'83-\'84)', startYear: 1983, endYear: 1984 },
    { description: 'Mercury Lynx; 3-d hatchback; Turbo RS (\'84)', startYear: 1984, endYear: 1984 }
  ],
  P58: [
    { description: 'Ford Taurus; LX wagon (\'87-\'97)', startYear: 1987, endYear: 1997 },
    { description: 'Ford Taurus; SE Comfort wagon (\'98)', startYear: 1998, endYear: 1998 },
    { description: 'Ford Taurus; SE wagon (\'99)', startYear: 1999, endYear: 1999 },
    { description: 'Ford Taurus; SE wagon (\'00-\'05)', startYear: 2000, endYear: 2005 },
    { description: 'Mercury Lynx; 3-d hatchback; LS (\'83)', startYear: 1983, endYear: 1983 },
    { description: 'Mercury Lynx; wagon; L (\'85 1/2-\'86)', startYear: 1985, endYear: 1986 }
  ],
  P59: [
    { description: 'Ford Taurus; SEL wagon (\'02-\'05)', startYear: 2002, endYear: 2005 },
    { description: 'Mercury Lynx; wagon; GS (\'85 1/2-\'86)', startYear: 1985, endYear: 1986 }
  ],
  P5A: [
    { description: 'Ford C-Max; Hybrid SE (\'13-\'18)', startYear: 2013, endYear: 2018 }
  ],
  P5B: [
    { description: 'Ford C-Max; Hybrid SEL (\'13-\'16)', startYear: 2013, endYear: 2016 }
  ],
  P5C: [
    { description: 'Ford C-Max; Energi SEL (\'13-\'16)', startYear: 2013, endYear: 2016 }
  ],
  P5D: [
    { description: 'Ford C-Max; Hybrid Titanium (\'17-\'18)', startYear: 2017, endYear: 2018 }
  ],
  P5E: [
    { description: 'Ford C-Max; Energi SE (\'17)', startYear: 2017, endYear: 2017 }
  ],
  P5F: [
    { description: 'Ford C-Max; Energi Titanium (\'17)', startYear: 2017, endYear: 2017 }
  ],
  P60: [
    { description: 'Ford Thunderbird, Base model (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Ford Thunderbird; (\'02-\'05)', startYear: 2002, endYear: 2005 },
    { description: 'Ford Thunderbird; Base model (\'89-\'92)', startYear: 1989, endYear: 1992 },
    { description: 'Mercury Lynx; wagon; L (\'83-\'85)', startYear: 1983, endYear: 1985 }
  ],
  P61: [
    { description: 'Ford Thunderbird, Sport (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Mercury LN7 (\'82)', startYear: 1982, endYear: 1982 },
    { description: 'Mercury Lynx; wagon; GS (\'83-\'85)', startYear: 1983, endYear: 1985 }
  ],
  P62: [
    { description: 'Ford Thunderbird, LX (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Ford Thunderbird, LX (\'89-\'97)', startYear: 1989, endYear: 1997 },
    { description: 'Ford Thunderbird; James Bond Edition (\'03)', startYear: 2003, endYear: 2003 }
  ],
  P63: [
    { description: 'Ford Thunderbird; Pacific Coast Roadster Edition (\'04)', startYear: 2004, endYear: 2004 },
    { description: 'Mercury Lynx; 3-d hatchback (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Mercury Lynx; 5-d hatchback; L (\'85 1/2-\'86)', startYear: 1985, endYear: 1986 },
    { description: 'Mercury Lynx; wagon; LS (\'83)', startYear: 1983, endYear: 1983 }
  ],
  P64: [
    { description: 'Ford Thunderbird, Super Coupe (\'89-\'95)', startYear: 1989, endYear: 1995 },
    { description: 'Ford Thunderbird, Turbo Coupe (\'87-\'88)', startYear: 1987, endYear: 1988 },
    { description: 'Ford Thunderbird; Neiman Marcus Edition (\'02)', startYear: 2002, endYear: 2002 },
    { description: 'Mercury Lynx; 5-d hatchback (\'82)', startYear: 1982, endYear: 1982 },
    { description: 'Mercury Lynx; 5-d hatchback; GS (\'85 1/2-\'86)', startYear: 1985, endYear: 1986 }
  ],
  P65: [
    { description: 'Ford Contour; Base model (\'97-Mid \'98)', startYear: 1997, endYear: 1998 },
    { description: 'Ford Contour; GL (\'95-Mid \'98)', startYear: 1995, endYear: 1998 },
    { description: 'Ford Contour; LX (Mid \'98-\'99)', startYear: 1998, endYear: 1999 },
    { description: 'Mercury Lynx; 5-d hatchback; Base model (\'84)', startYear: 1984, endYear: 1984 },
    { description: 'Mercury Lynx; 5-d hatchback; L (\'83-\'85)', startYear: 1983, endYear: 1985 },
    { description: 'Mercury Lynx; 5-d hatchback; LTS (\'83)', startYear: 1983, endYear: 1983 },
    { description: 'Mercury Lynx; wagon (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P66: [
    { description: 'Ford Contour; LX (\'95-Mid \'98)', startYear: 1995, endYear: 1998 },
    { description: 'Ford Contour; SE (Mid \'98-\'00)', startYear: 1998, endYear: 1999 },
    { description: 'Mercury Lynx; 5-d hatchback; GS (\'83-\'85)', startYear: 1983, endYear: 1985 }
  ],
  P67: [
    { description: 'Ford Contour; SE (\'95-Mid \'98)', startYear: 1995, endYear: 1998 },
    { description: 'Mercury Capri; Base, L, RS, Turbo RS, Black Magic (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P68: [
    { description: 'Ford Contour; SVT (\'98-\'00)', startYear: 1998, endYear: 2000 },
    { description: 'Mercury Capri; GS (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Mercury Lynx; 5-d hatchback; LS (\'83)', startYear: 1983, endYear: 1983 },
    { description: 'Mercury Lynx; 5-d hatchback; LTS (\'84)', startYear: 1984, endYear: 1984 }
  ],
  P69: [
    { description: 'Ford Thunderbird; 50th Anniversary "Cashmere" Limited Edition (\'05)', startYear: 2005, endYear: 2005 }
  ],
  P70: [
    { description: 'Ford Crown Victoria; Long Wheelbase - Fleet/Taxi/Commercial (\'02-\'09)', startYear: 2002, endYear: 2009 },
    { description: 'Ford LTD Crown Victoria; 2-d sedan (\'87)', startYear: 1987, endYear: 1987 },
    { description: 'Mercury Zephyr; 2-d sedan; (\'81)', startYear: 1981, endYear: 1981 }
  ],
  P71: [
    { description: 'Ford Crown Victoria; Police Interceptor (\'93-\'09)', startYear: 1993, endYear: 2009 },
    { description: 'Ford LTD Crown Victoria; LX 2-d sedan (\'87)', startYear: 1987, endYear: 1987 },
    { description: 'Mercury Zephyr; 4-d sedan; (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P72: [
    { description: 'Ford Crown Victoria; (S) Fleet/Taxi/Commercial (\'92-\'09)', startYear: 1992, endYear: 2009 },
    { description: 'Ford Crown Victoria; Police (\'92)', startYear: 1992, endYear: 1992 },
    { description: 'Ford LTD Crown Victoria; S 4-d sedan (\'87-\'91)', startYear: 1987, endYear: 1991 },
    { description: 'Mercury Topaz GS 2-door sedan (\'84-\'86)', startYear: 1984, endYear: 1986 },
    { description: 'Mercury Zephyr; Z-7 2-d coupe; (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P73: [
    { description: 'Ford Crown Victoria; Base model (\'92-\'08)', startYear: 1992, endYear: 2008 },
    { description: 'Ford LTD Crown Victoria; 4-d sedan (\'87-\'91)', startYear: 1987, endYear: 1991 },
    { description: 'Mercury Topaz LS 2-door sedan (\'84-\'86)', startYear: 1984, endYear: 1986 },
    { description: 'Mercury Zephyr; wagon; (\'81)', startYear: 1981, endYear: 1981 }
  ],
  P74: [
    { description: 'Ford Crown Victoria; LX (\'92-\'09) & LX Sport (\'02-\'06)', startYear: 1992, endYear: 2009 },
    { description: 'Ford LTD Crown Victoria; LX 4-d sedan (\'87-\'91)', startYear: 1987, endYear: 1991 }
  ],
  P75: [
    { description: 'Ford Crown Victoria; Touring Sedan (\'92)', startYear: 1992, endYear: 1992 },
    { description: 'Ford LTD Crown Victoria; S wagon (\'87)', startYear: 1987, endYear: 1987 },
    { description: 'Mercury Topaz GS 4-door sedan (\'84-\'86)', startYear: 1984, endYear: 1986 }
  ],
  P76: [
    { description: 'Ford LTD Crown Victoria; wagon (\'87-\'91)', startYear: 1987, endYear: 1991 },
    { description: 'Mercury Cougar; 2-d sedan (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Mercury Topaz LS 4-door sedan (\'84-\'86)', startYear: 1984, endYear: 1986 }
  ],
  P77: [
    { description: 'Ford LTD Crown Victoria; LX wagon (\'87-\'91)', startYear: 1987, endYear: 1991 },
    { description: 'Mercury Cougar; 4-d sedan (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P78: [
    { description: 'Ford LTD Crown Victoria; Country Squire wagon (\'87-\'91)', startYear: 1987, endYear: 1991 },
    { description: 'Mercury Cougar; wagon (\'82)', startYear: 1982, endYear: 1982 }
  ],
  P79: [
    { description: 'Ford LTD Crown Victoria; Country Squire LX wagon (\'87-\'91)', startYear: 1987, endYear: 1991 },
    { description: 'Mercury Capri; All models (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P7A: [
    { description: 'Ford Crown Victoria; Long Wheelbase - Fleet/Taxi/Commercial (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  P7B: [
    { description: 'Ford Crown Victoria; Police Interceptor (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  P7C: [
    { description: 'Ford Crown Victoria; (S) Fleet/Taxi/Commercial (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  P7E: [
    { description: 'Ford Crown Victoria; LX (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  P80: [
    { description: 'Mazda 6; 4-d sedan (\'03-\'08)*', startYear: 2003, endYear: 2008 },
    { description: 'Mazda 6; SV (Special Value) (\'09)', startYear: 2009, endYear: 2009 },
    { description: 'Merkur XR4Ti (\'85-\'86)', startYear: 1985, endYear: 1986 }
  ],
  P81: [
    { description: 'Mazda 6; Sport (\'09)', startYear: 2009, endYear: 2009 },
    { description: 'Mercury Marquis 4-door sedan (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P82: [
    { description: 'Mazda 6; Touring, Grand Touring (\'09)', startYear: 2009, endYear: 2009 },
    { description: 'Mazda 6; wagon (\'04-\'07)', startYear: 2004, endYear: 2007 },
    { description: 'Mercury Marquis Brougham 2-door sedan (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P83: [
    { description: 'Mercury Marquis Brougham 4-door sedan (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P84: [
    { description: 'Mazda 6; 5-d hatchback (\'04-\'08)', startYear: 2004, endYear: 2008 },
    { description: 'Mercury Grand Marquis 2-door sedan (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P85: [
    { description: 'Mercury Grand Marquis 4-door sedan (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P86: [
    { description: 'Mercury Zephyr; 4-d sedan; (\'83)', startYear: 1983, endYear: 1983 }
  ],
  P87: [
    { description: 'Mercury Marquis wagon (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  P88: [
    { description: 'Ford EXP; Luxury Coupe (\'88 1/2)', startYear: 1988, endYear: 1988 },
    { description: 'Mercury Marquis Colony Park wagon (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Mercury Sable wagon (\'86)', startYear: 1986, endYear: 1986 }
  ],
  P89: [
    { description: 'Mercury Marquis 4-door sedan (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P8A: [
    { description: 'Ford Mustang, Coupe; V6 (\'10-\'14)', startYear: 2010, endYear: 2014 },
    { description: 'Ford Mustang, Coupe; V6 (\'15-\'17)', startYear: 2015, endYear: 2017 }
  ],
  P8C: [
    { description: 'Ford Mustang, Coupe; GT (\'10-\'14), Boss 302 (\'11-\'12)', startYear: 2010, endYear: 2014 },
    { description: 'Ford Mustang, Coupe; GT (\'15-\'23)', startYear: 2015, endYear: 2023 },
    { description: 'Ford Mustang, Coupe; GT (\'24)', startYear: 2024, endYear: 2024 }
  ],
  P8E: [
    { description: 'Ford Mustang, Convertible; V6 (\'10-\'14)', startYear: 2010, endYear: 2014 },
    { description: 'Ford Mustang, Convertible; V6 (\'15-\'17)', startYear: 2015, endYear: 2017 }
  ],
  P8F: [
    { description: 'Ford Mustang, Convertible; GT (\'10-\'14)', startYear: 2010, endYear: 2014 },
    { description: 'Ford Mustang, Convertible; GT (\'15-\'23)', startYear: 2015, endYear: 2023 },
    { description: 'Ford Mustang, Convertible; GT (\'24)', startYear: 2024, endYear: 2024 }
  ],
  P8J: [
    { description: 'Ford Mustang, Coupe; Shelby GT350/GT350R (\'15-\'20)', startYear: 2015, endYear: 2020 },
    { description: 'Ford Mustang, Coupe; Shelby GT500 (\'10-\'14)', startYear: 2010, endYear: 2014 }
  ],
  P8K: [
    { description: 'Ford Mustang, Convertible; Shelby GT500 (\'10-\'14)', startYear: 2010, endYear: 2014 },
    { description: 'Ford Mustang, Coupe; Bullitt (\'19-\'20)', startYear: 2019, endYear: 2020 }
  ],
  P8R: [
    { description: 'Ford Mustang, Coupe; 50th Anniversary Limited Edition (\'15)', startYear: 2015, endYear: 2015 },
    { description: 'Ford Mustang, Coupe; Dark Horse (\'24)', startYear: 2024, endYear: 2024 },
    { description: 'Ford Mustang, Coupe; Mach 1 (\'21-\'23)', startYear: 2021, endYear: 2023 }
  ],
  P8S: [
    { description: 'Ford Mustang, Coupe; Shelby GT500 (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  P8T: [
    { description: 'Ford Mustang, Coupe; EcoBoost I4 (\'15-\'23)', startYear: 2015, endYear: 2023 },
    { description: 'Ford Mustang, Coupe; EcoBoost I4 (\'24)', startYear: 2024, endYear: 2024 }
  ],
  P8U: [
    { description: 'Ford Mustang, Convertible; EcoBoost I4 (\'15-\'23)', startYear: 2015, endYear: 2023 },
    { description: 'Ford Mustang, Convertible; EcoBoost I4 (\'24)', startYear: 2024, endYear: 2024 }
  ],
  P90: [
    { description: 'Ford Escort; 3-door hatchback; Pony (\'88 1/2-\'90)', startYear: 1988, endYear: 1990 },
    { description: 'Ford GT (\'05-\'06)', startYear: 2005, endYear: 2006 },
    { description: 'Mercury Cougar XR-7; 2-d coupe (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Mercury Marquis wagon (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P91: [
    { description: 'Ford Escort; 3-door hatchback; LX (\'88 1/2-\'90)', startYear: 1988.5, endYear: 1990 }
  ],
  P92: [
    { description: 'Mercury Cougar; All models (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P93: [
    { description: 'Ford Escort; 3-door hatchback; GT (\'88 1/2-\'90)', startYear: 1988, endYear: 1990 },
    { description: 'Lincoln Town Car; 2-d (\'81)', startYear: 1981, endYear: 1981 },
    { description: 'Mercury Grand Marquis 2-door sedan (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P94: [
    { description: 'Lincoln Town Car; 4-d (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Mercury Grand Marquis Colony Park wagon (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P95: [
    { description: 'Ford Escort; 5-door hatchback; LX (\'88 1/2-\'90)', startYear: 1988, endYear: 1990 },
    { description: 'Lincoln Continental Mark VI; 2-d (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Mercury Grand Marquis 4-door sedan (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P96: [
    { description: 'Lincoln Continental Mark VI; 4-d (\'81-\'82)', startYear: 1981, endYear: 1982 },
    { description: 'Lincoln Town Car; All models (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P97: [
    { description: 'Lincoln Continental; All models (\'83-\'86)', startYear: 1983, endYear: 1986 }
  ],
  P98: [
    { description: 'Ford Escort; wagon; LX (\'88 1/2-\'90)', startYear: 1988, endYear: 1990 },
    { description: 'Lincoln Continental Mark VI; 2-d (\'83)', startYear: 1983, endYear: 1983 },
    { description: 'Lincoln Continental; All models (\'82)', startYear: 1982, endYear: 1982 },
    { description: 'Lincoln Mark VII; All models (\'84-\'86)', startYear: 1984, endYear: 1986 }
  ],
  P99: [
    { description: 'Lincoln Continental Mark VI; 4-d (\'83)', startYear: 1983, endYear: 1983 }
  ],
  P9C: [
    { description: 'Ford GT (\'17-\'22)', startYear: 2017, endYear: 2022 }
  ],
  P9D: [
    { description: 'Ford GT (\'20-\'22) Carbon Series', startYear: 2020, endYear: 2022 }
  ],
  P9E: [
    { description: 'Ford GT (\'20-\'22) Heritage Edition', startYear: 2020, endYear: 2022 }
  ],
  P9F: [
    { description: 'Ford GT (\'21-\'22) Liquid Carbon Series', startYear: 2021, endYear: 2022 }
  ],
  P9G: [
    { description: 'Ford GT (\'21-\'22) Studio Collection 1', startYear: 2021, endYear: 2022 }
  ],
  P9H: [
    { description: 'Ford GT (\'21-\'22) Studio Collection 2', startYear: 2021, endYear: 2022 }
  ],
  P9J: [
    { description: 'Ford GT (\'21-\'22) Studio Collection 3', startYear: 2021, endYear: 2022 }
  ],
  P9K: [
    { description: 'Ford GT (\'22) Final Edition', startYear: 2022, endYear: 2022 }
  ],
  R08: [
    { description: 'Ford Ranger EV Regular Cab 4x2 (\'99-\'01)', startYear: 1999, endYear: 2001 }
  ],
  R10: [
    { description: 'Ford Ranger Regular Cab 4x2 (\'83-\'09), Ranger EV (\'98)', startYear: 1983, endYear: 2009 }
  ],
  R11: [
    { description: 'Ford Ranger Regular Cab 4x4 (\'83-\'08)', startYear: 1983, endYear: 2008 }
  ],
  R12: [
    { description: 'Ford Ranger Chassis Cab 4x2 (\'84-\'86)', startYear: 1984, endYear: 1986 },
    { description: 'Mazda B-Series Regular Cab 4x2 (\'94-\'09)', startYear: 1994, endYear: 2009 }
  ],
  R13: [
    { description: 'Mazda B-Series Regular Cab 4x4 (\'94-\'01)', startYear: 1994, endYear: 2001 }
  ],
  R14: [
    { description: 'Ford Ranger SuperCab 2-door 4x2 (\'02-\'09)', startYear: 2002, endYear: 2009 },
    { description: 'Ford Ranger SuperCab 4x2 (\'86-\'01)', startYear: 1986, endYear: 2001 }
  ],
  R15: [
    { description: 'Ford Ranger SuperCab 2-door 4x4 (\'02-\'09)', startYear: 2002, endYear: 2009 },
    { description: 'Ford Ranger SuperCab 4x4 (\'86-\'01)', startYear: 1986, endYear: 2001 }
  ],
  R16: [
    { description: 'Mazda B-Series Cab Plus 2-door 4x2 (\'02-\'04)', startYear: 2002, endYear: 2004 },
    { description: 'Mazda B-Series Cab Plus 4x2 (\'94-\'01)', startYear: 1994, endYear: 2001 }
  ],
  R17: [
    { description: 'Mazda B-Series Cab Plus 2-door 4x4 (\'02-\'04)', startYear: 2002, endYear: 2004 },
    { description: 'Mazda B-Series Cab Plus 4x4 (\'94-\'01)', startYear: 1994, endYear: 2001 }
  ],
  R1A: [
    { description: 'Ford Ranger Regular Cab 4x2 (\'10-\'11)', startYear: 2010, endYear: 2011 },
    { description: 'Ford Ranger SuperCab, Box Delete, 4x2 (\'19-\'21)', startYear: 2019, endYear: 2021 }
  ],
  R1C: [
    { description: 'Ford Transit 250, Cargo Van, Medium Roof, Sliding Passenger-Side Cargo Door, Regular (130 in.) wheelbase (\'15-\'19)', startYear: 2016, endYear: 2019 },
    { description: 'Ford Transit 250, Cargo Van, Medium Roof, RWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  R1D: [
    { description: 'Ford Transit 250, Cargo Van, Medium Roof, Dual Sliding Side Cargo-Doors, Regular (130 in.) wheelbase (\'16-\'19)', startYear: 2016, endYear: 2019 },
    { description: 'Ford Transit 250, Crew Van, Medium Roof, RWD (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  R1E: [
    { description: 'Ford Ranger SuperCab 2-door 4x2 (\'10-\'11)', startYear: 2010, endYear: 2011 },
    { description: 'Ford Ranger SuperCab 4x2 (\'19-\'23)', startYear: 2019, endYear: 2023 }
  ],
  R1F: [
    { description: 'Ford Ranger SuperCab 2-door 4x4 (\'10-\'11)', startYear: 2010, endYear: 2011 },
    { description: 'Ford Ranger SuperCab 4x4 (\'19-\'23)', startYear: 2019, endYear: 2023 }
  ],
  R1V: [
    { description: 'Ford Transit 250, Crew Van, High Roof, Long (148 in.) wheelbase, RWD (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  R1X: [
    { description: 'Ford Transit 250, Cargo Van, High Roof, Long (148 in.) wheelbase, RWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  R1Y: [
    { description: 'Ford Transit 250, Cargo Van, Low Roof, RWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 250, Cargo Van, Low Roof, Sliding Passenger-Side Cargo Door, Regular (130 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  R1Z: [
    { description: 'Ford Transit 250, Crew Van, Low Roof, RWD (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 250, Cargo Van, Low Roof, 60/40 Passenger-Side Cargo Doors, Regular (130 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  R2C: [
    { description: 'Ford Transit 250, Cargo Van, Medium Roof, AWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 250, Cargo Van, Medium Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  R2D: [
    { description: 'Ford Transit 250, Crew Van, Medium Roof, AWD (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 250, Cargo Van, Medium Roof, Dual Sliding Side Cargo-Doors, Long (148 in.) wheelbase (\'16-\'19)', startYear: 2016, endYear: 2019 }
  ],
  R2U: [
    { description: 'Ford Transit 250, Cargo Van, High Roof, Dual Sliding Side Cargo-Doors, Long (148 in.) wheelbase (\'16-\'19)', startYear: 2016, endYear: 2019 }
  ],
  R2V: [
    { description: 'Ford Transit 250, Crew Van, High Roof, Long (148 in.) wheelbase, AWD (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  R2X: [
    { description: 'Ford Transit 250, Cargo Van, High Roof, Long (148 in.) wheelbase, AWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 250, Cargo Van, High Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  R2Y: [
    { description: 'Ford Transit 250, Cargo Van, Low Roof, AWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 250, Cargo Van, Low Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  R2Z: [
    { description: 'Ford Transit 250, Crew Van, Low Roof, AWD (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 250, Cargo Van, Low Roof, 60/40 Passenger-Side Cargo Doors, Long (148 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  R3U: [
    { description: 'Ford Transit 250, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, AWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 250, Cargo Van, High Roof, Dual Sliding Side Cargo-Doors, Long (148 in.) wheelbase Extended Length (\'16-\'19)', startYear: 2016, endYear: 2019 }
  ],
  R3X: [
    { description: 'Ford Transit 250, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, RWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 250, Cargo Van, High Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase Extended Length (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  R44: [
    { description: 'Ford Ranger SuperCab 4-door 4x2 (\'02-\'09)', startYear: 2002, endYear: 2009 }
  ],
  R45: [
    { description: 'Ford Ranger SuperCab 4-door 4x4 (\'02-\'09)', startYear: 2002, endYear: 2009 }
  ],
  R46: [
    { description: 'Mazda B-Series Cab Plus 4 (4-door) 4x2 (\'02-\'09)', startYear: 2002, endYear: 2009 }
  ],
  R47: [
    { description: 'Mazda B-Series Cab Plus 4 (4-door) 4x4 (\'02-\'09)', startYear: 2002, endYear: 2009 }
  ],
  R4B: [
    { description: 'Ford Ranger XL 4x2 SuperCrew (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  R4E: [
    { description: 'Ford Ranger SuperCab 4-door 4x2 (\'10-\'11)', startYear: 2010, endYear: 2011 },
    { description: 'Ford Ranger SuperCrew 4x2 (\'19-\'23)', startYear: 2019, endYear: 2023 }
  ],
  R4F: [
    { description: 'Ford Ranger SuperCab 4-door 4x4 (\'10-\'11)', startYear: 2010, endYear: 2011 },
    { description: 'Ford Ranger SuperCrew 4x4 (\'19-\'23)', startYear: 2019, endYear: 2023 }
  ],
  R4G: [
    { description: 'Ford Ranger XLT 4x2 SuperCrew (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  R4H: [
    { description: 'Ford Ranger XLT 4x4 SuperCrew (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  R4J: [
    { description: 'Ford Ranger Lariat 4x2 SuperCrew (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  R4K: [
    { description: 'Ford Ranger Lariat 4x4 SuperCrew (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  R4L: [
    { description: 'Ford Ranger Raptor 4x4 SuperCrew (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  R4P: [
    { description: 'Ford Ranger XL 4x4 SuperCrew (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  R5P: [
    { description: 'Ford Transit 250, Single Rear Wheels, Cutaway, Low Roof, 138 in. wheelbase, 9,000 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 250, Single Rear Wheels, Cutaway, Low Roof, RWD, 9,070 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 250, Single Rear Wheels, Cutaway, Low Roof, RWD, 9,150 lb. GVWR (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  R5Z: [
    { description: 'Ford Transit 250, Single Rear Wheels, Chassis Cab, Low Roof, 138 in. wheelbase, 9,000 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 250, Single Rear Wheels, Chassis Cab, Low Roof, RWD, 9,070 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 250, Single Rear Wheels, Chassis Cab, Low Roof, RWD, 9,150 lb. GVWR (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  R7P: [
    { description: 'Ford Transit 250, Single Rear Wheels, Cutaway, Low Roof, 156 in. wheelbase, 9,000 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 250, Single Rear Wheels, Cutaway, Low Roof, AWD, 9,070 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 250, Single Rear Wheels, Cutaway, Low Roof, AWD, 9,150 lb. GVWR (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  R7Z: [
    { description: 'Ford Transit 250, Single Rear Wheels, Chassis Cab, Low Roof, 156 in. wheelbase, 9,000 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 250, Single Rear Wheels, Chassis Cab, Low Roof, AWD, 9,070 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 250, Single Rear Wheels, Chassis Cab, Low Roof, AWD, 9,150 lb. GVWR (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  R9A: [
    { description: 'Ford Bronco Sport Base model (\'21-\'23)', startYear: 2021, endYear: 2023 }
  ],
  R9B: [
    { description: 'Ford Bronco Sport Big Bend (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  R9C: [
    { description: 'Ford Bronco Sport Outer Banks (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  R9D: [
    { description: 'Ford Bronco Sport Badlands (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  R9F: [
    { description: 'Ford Bronco Sport First Edition (\'21)', startYear: 2021, endYear: Infinity }
  ],
  R9G: [
    { description: 'Ford Bronco Sport Heritage Edition (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  R9H: [
    { description: 'Ford Bronco Sport Heritage Limited Edition (\'23)', startYear: 2023, endYear: Infinity }
  ],
  R9K: [
    { description: 'Ford Bronco Sport Free Wheeling (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  S11: [
    { description: 'Ford Econoline, Club Wagon E-150 extended length (\'81-\'82)', startYear: 1981, endYear: 1982 }
  ],
  S14: [
    { description: 'Ford E-Series, E-150 van extended length (\'09)', startYear: 2009, endYear: 2009 },
    { description: 'Ford Econoline, E-150 Cargo Van extended length (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  S15: [
    { description: 'Ford Econoline, E-150 Window Van extended length (\'81-\'87)', startYear: 1981, endYear: 1987 }
  ],
  S16: [
    { description: 'Ford Econoline, E-150 Display Van extended length (\'81-\'84)', startYear: 1981, endYear: 1984 }
  ],
  S1E: [
    { description: 'Ford E-Series, E-150 van extended length (\'10-\'14)', startYear: 2010, endYear: 2014 }
  ],
  S21: [
    { description: 'Ford Econoline, Club Wagon E-250 extended length (\'83-\'84)', startYear: 1983, endYear: 1984 }
  ],
  S24: [
    { description: 'Ford E-Series, E-250 van extended length (\'92-\'09)', startYear: 1992, endYear: 2009 },
    { description: 'Ford Econoline, E-250 Cargo Van extended length (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  S25: [
    { description: 'Ford Econoline, E-250 Window Van extended length (\'81-\'85)', startYear: 1981, endYear: 1985 }
  ],
  S26: [
    { description: 'Ford Econoline, E-250 Display Van extended length (\'81-\'84)', startYear: 1981, endYear: 1984 }
  ],
  S2E: [
    { description: 'Ford E-Series, E-250 van extended length (\'10-\'14)', startYear: 2010, endYear: 2014 }
  ],
  S2F: [
    { description: 'Ford EcoSport; S FWD (\'19-\'21)', startYear: 2019, endYear: 2021 }
  ],
  S2G: [
    { description: 'Ford EcoSport; SE FWD (\'19-\'21)', startYear: 2019, endYear: 2021 }
  ],
  S2K: [
    { description: 'Ford EcoSport; Titanium FWD (\'19-\'21)', startYear: 2019, endYear: 2021 }
  ],
  S31: [
    { description: 'Ford E-Series, E-350 (Super Duty) wagon extended length (\'92-\'09)', startYear: 1992, endYear: 2009 },
    { description: 'Ford Econoline, Club Wagon E-350 extended length (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  S34: [
    { description: 'Ford E-Series, E-350 (Super Duty) van extended length (\'92-\'09)', startYear: 1992, endYear: 2009 },
    { description: 'Ford Econoline, E-350 Cargo Van extended length (\'81-\'91)', startYear: 1981, endYear: 1991 }
  ],
  S35: [
    { description: 'Ford Econoline, E-350 Window Van extended length (\'81-\'87)', startYear: 1981, endYear: 1987 }
  ],
  S36: [
    { description: 'Ford Econoline, E-350 Display Van extended length (\'81-\'84)', startYear: 1981, endYear: 1984 }
  ],
  S3B: [
    { description: 'Ford E-Series, E-350 Super Duty wagon extended length (\'10-\'14)', startYear: 2010, endYear: 2014 }
  ],
  S3E: [
    { description: 'Ford E-Series, E-350 Super Duty van extended length (\'10-\'14)', startYear: 2010, endYear: 2014 }
  ],
  S3F: [
    { description: 'Ford EcoSport; S AWD (\'19-\'22)', startYear: 2019, endYear: 2022 }
  ],
  S3G: [
    { description: 'Ford EcoSport; SE AWD (\'19-\'22)', startYear: 2019, endYear: 2022 }
  ],
  S3J: [
    { description: 'Ford EcoSport; SES AWD (\'19-\'22)', startYear: 2019, endYear: 2022 }
  ],
  S3K: [
    { description: 'Ford EcoSport; Titanium AWD (\'19-\'22)', startYear: 2019, endYear: 2022 }
  ],
  S4U: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cargo Van, High Roof, Dual Sliding Side Cargo Doors, Long (148 in.) wheelbase Extended Length (\'16-\'19)', startYear: 2016, endYear: 2019 },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, AWD, 10,360 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  S4V: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Crew Van, High Roof, Long (148 in.) wheelbase Extended Length, RWD, 10,360 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  S4W: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Crew Van, High Roof, Long (148 in.) wheelbase Extended Length, AWD, 10,360 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  S4X: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cargo Van, High Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase Extended Length (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, RWD, 10,360 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  S6A: [
    { description: 'Ford Transit Connect; XL Cargo Van w/rear- & side-door window glass (\'10-\'13)', startYear: 2010, endYear: 2013 }
  ],
  S6B: [
    { description: 'Ford Transit Connect; XLT Cargo Van w/rear- & side-door window glass (\'10-\'13)', startYear: 2010, endYear: 2013 }
  ],
  S6E: [
    { description: 'Ford Transit Connect; XL Cargo Van SWB w/Swing-Out Rear Cargo Doors (\'14-\'21)', startYear: 2014, endYear: 2021 }
  ],
  S6F: [
    { description: 'Ford Transit Connect; XLT Cargo Van SWB w/Swing-Out Rear Cargo Doors (\'14-\'21)', startYear: 2014, endYear: 2021 }
  ],
  S6P: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, 138 in. wheelbase, 10,360 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, RWD, 10,360 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  S6S: [
    { description: 'Ford Transit Connect; XL Cargo Van SWB w/Swing-Out Rear Cargo Doors (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  S6T: [
    { description: 'Ford Transit Connect; XLT Cargo Van SWB w/Swing-Out Rear Cargo Doors (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  S6Z: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, 138 in. wheelbase, 10,360 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, RWD, 10,360 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  S7A: [
    { description: 'Ford Transit Connect; XL Cargo Van w/no rear- or side-door window glass (\'10-\'13)', startYear: 2010, endYear: 2013 }
  ],
  S7B: [
    { description: 'Ford Transit Connect; XLT Cargo Van w/no rear- or side-door window glass (\'10-\'13)', startYear: 2010, endYear: 2013 }
  ],
  S7C: [
    { description: 'Ford Transit Connect; XL Cargo Van w/rear-door window glass but no side-door window glass (\'10-\'13)', startYear: 2010, endYear: 2013 }
  ],
  S7D: [
    { description: 'Ford Transit Connect; XLT Cargo Van w/rear-door window glass but no side-door window glass (\'10-\'13)', startYear: 2010, endYear: 2013 }
  ],
  S7E: [
    { description: 'Ford Transit Connect; XL Cargo Van LWB w/Swing-Out Rear Cargo Doors (\'14-\'21)', startYear: 2014, endYear: 2021 }
  ],
  S7F: [
    { description: 'Ford Transit Connect; XLT Cargo Van LWB w/Swing-Out Rear Cargo Doors (\'14-\'21)', startYear: 2014, endYear: 2021 }
  ],
  S7P: [
    { description: 'Ford Transit Connect; XL Cargo Van LWB w/Swing-Out Rear Cargo Doors for Canada Post (\'14-\'18)', startYear: 2014, endYear: 2018 }
  ],
  S7R: [
    { description: 'Ford Transit Connect; XLT Cargo Van LWB w/Swing-Out Rear Cargo Doors for Canada Post (\'14-\'15)', startYear: 2014, endYear: 2015 }
  ],
  S7S: [
    { description: 'Ford Transit Connect; XL Cargo Van LWB w/Swing-Out Rear Cargo Doors (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  S7T: [
    { description: 'Ford Transit Connect; XLT Cargo Van LWB w/Swing-Out Rear Cargo Doors (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  S7U: [
    { description: 'Ford Transit Connect; XL Cargo Van LWB w/Swing-Out Rear Cargo Doors for US Postal Service (\'19-\'23)', startYear: 2019, endYear: 2023 }
  ],
  S8A: [
    { description: 'Ford Transit Connect; XLT Cargo Van w/no rear- or side-door window glass for Canada Post (\'11-\'13)', startYear: 2011, endYear: 2013 }
  ],
  S8F: [
    { description: 'Ford Transit Connect; XLT Wagon SWB w/Swing-Out Rear Cargo Doors (\'14-\'18)', startYear: 2014, endYear: 2018 }
  ],
  S8P: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, 156 in. wheelbase, 10,360 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, AWD, 10,360 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  S8Z: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, 156 in. wheelbase, 10,360 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, AWD, 10,360 lb. GVWR (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  S9A: [
    { description: 'Ford Transit Connect; XL Wagon w/rear- & side-door window glass (\'10)', startYear: 2010, endYear: 2010 }
  ],
  S9B: [
    { description: 'Ford Transit Connect; XLT Wagon w/rear- & side-door window glass (\'10-\'13)', startYear: 2010, endYear: 2013 }
  ],
  S9C: [
    { description: 'Ford Transit Connect; XLT Premium Wagon w/rear- & side-door window glass & rear-quarter (3rd row) window glass (\'11-\'13)', startYear: 2011, endYear: 2013 }
  ],
  S9E: [
    { description: 'Ford Transit Connect; XL Wagon LWB w/Swing-Out Rear Cargo Doors (\'14-\'23)', startYear: 2014, endYear: 2023 }
  ],
  S9F: [
    { description: 'Ford Transit Connect; XLT Wagon LWB w/Swing-Out Rear Cargo Doors (\'14-\'23)', startYear: 2014, endYear: 2023 }
  ],
  S9P: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, 178 in. wheelbase, 10,360 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  S9Z: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, 178 in. wheelbase, 10,360 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  T01: [
    { description: 'Mercury Capri; Base model (\'91-\'94)', startYear: 1991, endYear: 1994 }
  ],
  T03: [
    { description: 'Mercury Capri; XR2 (\'91-\'94)', startYear: 1991, endYear: 1994 }
  ],
  T05: [
    { description: 'Ford Aspire; 3-door hatchback; Base model (\'94-\'97)', startYear: 1994, endYear: 1997 },
    { description: 'Ford Festiva; L (\'90-\'93)', startYear: 1990, endYear: 1993 }
  ],
  T06: [
    { description: 'Ford Aspire; 5-door hatchback; Base model (\'94-\'97)', startYear: 1994, endYear: 1997 },
    { description: 'Ford Festiva; L (\'88-\'89)', startYear: 1988, endYear: 1989 },
    { description: 'Ford Festiva; L Plus (\'88-\'90)', startYear: 1988, endYear: 1990 },
    { description: 'Ford Festiva; GL (\'91-\'93)', startYear: 1991, endYear: 1993 }
  ],
  T07: [
    { description: 'Ford Aspire; 3-door hatchback; SE (\'94-\'95)', startYear: 1994, endYear: 1995 },
    { description: 'Ford Festiva; LX (\'88-\'90)', startYear: 1988, endYear: 1990 }
  ],
  T20: [
    { description: 'Ford Probe; GL/Base/SE', startYear: 0, endYear: 0 }
  ],
  T21: [
    { description: 'Ford Probe; LX (\'89-\'92)', startYear: 1989, endYear: 1992 }
  ],
  T22: [
    { description: 'Ford Probe; GT', startYear: 0, endYear: 0 }
  ],
  T60: [
    { description: 'Mercury Cougar; I4 (\'99-\'02)', startYear: 1999, endYear: 2002 }
  ],
  T61: [
    { description: 'Mercury Cougar; V6 (\'99-\'02)', startYear: 1999, endYear: 2002 }
  ],
  T80: [
    { description: 'Ford Mustang, Coupe; V6 (\'05-\'09)', startYear: 2005, endYear: 2009 },
    { description: 'Merkur XR4Ti (\'87-\'89)', startYear: 1987, endYear: 1989 }
  ],
  T81: [
    { description: 'Merkur Scorpio (\'88-\'89)', startYear: 1988, endYear: 1989 }
  ],
  T82: [
    { description: 'Ford Mustang, Coupe; GT (\'05-\'09), Shelby GT-H (\'06), Shelby GT (\'07-\'08), Bullitt (\'08-\'09)', startYear: 2005, endYear: 2009 }
  ],
  T84: [
    { description: 'Ford Mustang, Convertible; V6 (\'05-\'09)', startYear: 2005, endYear: 2009 }
  ],
  T85: [
    { description: 'Ford Mustang, Convertible; GT (\'05-\'09), Shelby GT-H (\'07), Shelby GT (\'08)', startYear: 2005, endYear: 2009 }
  ],
  T88: [
    { description: 'Ford Mustang, Coupe; Shelby GT500 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  T89: [
    { description: 'Ford Mustang, Convertible; Shelby GT500 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U01: [
    { description: 'Ford Escape XLS 4x2 (\'01-\'02)', startYear: 2001, endYear: 2002 }
  ],
  U02: [
    { description: 'Ford Escape XLS 4x2 (\'03-\'09)', startYear: 2003, endYear: 2009 },
    { description: 'Ford Escape XLS 4x4 (\'01-\'02)', startYear: 2001, endYear: 2002 }
  ],
  U03: [
    { description: 'Ford Escape XLT 4x2 (\'01-\'02)', startYear: 2001, endYear: 2002 },
    { description: 'Ford Escape XLT 4x2 (\'03-\'09)', startYear: 2003, endYear: 2009 }
  ],
  UU0401: [
    { description: 'Ford Escape Limited 4x2 (\'03-\'09)', startYear: 2003, endYear: 2009 },
    { description: 'Ford Escape XLT 4x4 (\'01-\'02)', startYear: 2001, endYear: 2002 }
  ],
  U06: [
    { description: 'Mazda Tribute DX 4x4 (\'01-\'02)', startYear: 2001, endYear: 2002 }
  ],
  U07: [
    { description: 'Mazda Tribute DX 4x2 (\'01-\'02)', startYear: 2001, endYear: 2002 }
  ],
  U08: [
    { description: 'Mazda Tribute LX 4x4 (\'01-\'02)', startYear: 2001, endYear: 2002 }
  ],
  U09: [
    { description: 'Mazda Tribute LX 4x2 (\'01-\'02)', startYear: 2001, endYear: 2002 }
  ],
  U0B: [
    { description: 'Ford Escape SE Sport Hybrid 4x2 (\'20), SE Hybrid 4x2 (\'21-\'22)', startYear: 2021, endYear: 2022 }
  ],
  U0C: [
    { description: 'Ford Escape SEL Hybrid 4x2 (\'21-\'22)', startYear: 2021, endYear: 2022 },
    { description: 'Ford Escape XLS 4x2 (\'10-\'12)', startYear: 2010, endYear: 2012 }
  ],
  U0D: [
    { description: 'Ford Escape Titanium Hybrid 4x2 (\'20-\'22)', startYear: 2020, endYear: 2022 },
    { description: 'Ford Escape XLT 4x2 (\'10-\'12)', startYear: 2010, endYear: 2012 }
  ],
  U0E: [
    { description: 'Ford Escape Limited 4x2 (\'10-\'12)', startYear: 2010, endYear: 2012 },
    { description: 'Ford Escape Plug-in Hybrid 4x2 (\'23-)', startYear: 2023, endYear: Infinity },
    { description: 'Ford Escape SE Plug-in Hybrid 4x2 (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  U0F: [
    { description: 'Ford Escape Base model 4x2 (\'23-)', startYear: 2023, endYear: Infinity },
    { description: 'Ford Escape S 4x2 (\'13-\'19)', startYear: 2013, endYear: 2019 },
    { description: 'Ford Escape S 4x2 (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  U0G: [
    { description: 'Ford Escape Active 4x2 (\'23-)', startYear: 2023, endYear: Infinity },
    { description: 'Ford Escape SE 4x2 (\'13-\'19)', startYear: 2013, endYear: 2019 },
    { description: 'Ford Escape SE 4x2 (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  U0H: [
    { description: 'Ford Escape SEL 4x2 (\'13)', startYear: 2013, endYear: 2013 },
    { description: 'Ford Escape SEL 4x2 (\'18-\'19)', startYear: 2018, endYear: 2019 },
    { description: 'Ford Escape SEL 4x2 (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  U0J: [
    { description: 'Ford Escape Platinum 4x2 (\'23-)', startYear: 2023, endYear: Infinity },
    { description: 'Ford Escape Titanium 4x2 (\'13-\'19)', startYear: 2013, endYear: 2019 }
  ],
  U0K: [
    { description: 'Ford Escape SEL Plug-in Hybrid 4x2 (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  U0L: [
    { description: 'Ford Escape Titanium Plug-in Hybrid 4x2 (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  U0M: [
    { description: 'Ford Escape ST-Line 4x2 (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  U12: [
    { description: 'Ford Bronco II 4x2 (\'87-\'90)', startYear: 1987, endYear: 1990 }
  ],
  U13: [
    { description: 'Ford Expedition; 4x2, XLS (\'04-\'06)', startYear: 2004, endYear: 2006 }
  ],
  U14: [
    { description: 'Ford Bronco II 4x4 (\'84-\'90)', startYear: 1984, endYear: 1990 },
    { description: 'Ford Expedition; 4x4, XLS (\'04-\'06)', startYear: 2004, endYear: 2006 }
  ],
  U15: [
    { description: 'Ford Bronco (\'81-\'96)', startYear: 1981, endYear: 1996 },
    { description: 'Ford Expedition; 4x2, XLT (\'00-\'09)', startYear: 2000, endYear: 2009 }
  ],
  U16: [
    { description: 'Ford Expedition; 4x4, XLT (\'00-\'09), NBX (\'04-\'05)', startYear: 2000, endYear: 2009 }
  ],
  U17: [
    { description: 'Ford Expedition; 4x2, All models (\'97-\'99)', startYear: 1997, endYear: 1999 },
    { description: 'Ford Expedition; 4x2, Eddie Bauer (\'00-\'09)', startYear: 2000, endYear: 2009 },
    { description: 'Ford Expedition; 4x2, King Ranch (\'05-\'06)', startYear: 2005, endYear: 2006 },
    { description: 'Ford Expedition; 4x2, King Ranch (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  U18: [
    { description: 'Ford Expedition; 4x4, All models (\'97-\'99)', startYear: 1997, endYear: 1999 },
    { description: 'Ford Expedition; 4x4, Eddie Bauer (\'00-\'09)', startYear: 2000, endYear: 2009 },
    { description: 'Ford Expedition; 4x4, King Ranch (\'05-\'06)', startYear: 2005, endYear: 2006 },
    { description: 'Ford Expedition; 4x4, King Ranch (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  U19: [
    { description: 'Ford Expedition; 4x2, Limited (\'05-\'09)', startYear: 2005, endYear: 2009 }
  ],
  U1F: [
    { description: 'Ford Expedition; 4x2, XL (\'18-)', startYear: 2018, endYear: Infinity },
    { description: 'Ford Expedition; 4x2, XL STX (\'21-)', startYear: 2021, endYear: Infinity },
    { description: 'Ford Expedition; 4x2, XLT (\'10)', startYear: 2010, endYear: 2010 },
    { description: 'Ford Expedition; 4x2, XL (\'11-\'17)', startYear: 2011, endYear: 2017 }
  ],
  U1G: [
    { description: 'Ford Expedition; 4x4, XL (\'18-)', startYear: 2018, endYear: Infinity },
    { description: 'Ford Expedition; 4x4, XL STX (\'21-)', startYear: 2018, endYear: Infinity },
    { description: 'Ford Expedition; 4x4, XLT (\'10)', startYear: 2010, endYear: 2010 },
    { description: 'Ford Expedition; 4x4, XL (\'11-\'17)', startYear: 2011, endYear: 2017 }
  ],
  U1H: [
    { description: 'Ford Expedition; 4x2, Eddie Bauer (\'10)', startYear: 2010, endYear: 2010 },
    { description: 'Ford Expedition; 4x2, XLT (\'11-\'17)', startYear: 2011, endYear: 2017 },
    { description: 'Ford Expedition; 4x2, King Ranch (\'10-\'17)', startYear: 2010, endYear: 2017 },
    { description: 'Ford Expedition; 4x2, XLT (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  U1J: [
    { description: 'Ford Expedition; 4x4, Eddie Bauer (\'10)', startYear: 2010, endYear: 2010 },
    { description: 'Ford Expedition; 4x4, XLT (\'11-\'17)', startYear: 2011, endYear: 2017 },
    { description: 'Ford Expedition; 4x4, King Ranch (\'10-\'17)', startYear: 2010, endYear: 2017 },
    { description: 'Ford Expedition; 4x4, XLT (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  U1K: [
    { description: 'Ford Expedition; 4x2, Limited (\'10-\'17)', startYear: 2010, endYear: 2017 },
    { description: 'Ford Expedition; 4x2, Limited (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  U1L: [
    { description: 'Ford Expedition; 4x2, Platinum (\'15-\'17)', startYear: 2015, endYear: 2017 },
    { description: 'Ford Expedition; 4x2, Platinum (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  U1M: [
    { description: 'Ford Expedition; 4x4, Platinum (\'15-\'17)', startYear: 2015, endYear: 2017 },
    { description: 'Ford Expedition; 4x4, Platinum (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  U1N: [
    { description: 'Ford Expedition; 4x2, King Ranch (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  U1P: [
    { description: 'Ford Expedition; 4x4, King Ranch (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  U1R: [
    { description: 'Ford Expedition; 4x4, Timberline (\'22-)', startYear: 2022, endYear: Infinity }
  ],
  U20: [
    { description: 'Ford Expedition; 4x4, Limited (\'05-\'09)', startYear: 2005, endYear: 2009 }
  ],
  U22: [
    { description: 'Ford Explorer 2-door 4x2 (\'91-\'99)', startYear: 1991, endYear: 1999 }
  ],
  U23: [
    { description: 'Ford Explorer Sport Trac; Limited AWD (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  U24: [
    { description: 'Ford Explorer 2-door 4x4 (\'91-\'99)', startYear: 1991, endYear: 1999 }
  ],
  U27: [
    { description: 'Lincoln Navigator; 4x2 (\'98-\'09)', startYear: 1998, endYear: 2009 }
  ],
  U28: [
    { description: 'Lincoln Navigator; 4x4 (\'98-\'09)', startYear: 1998, endYear: 2009 }
  ],
  U29: [
    { description: 'Mercury Mariner Hybrid 4x2 (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  U2A: [
    { description: 'Ford Expedition; 4x4, Limited (\'10-\'17)', startYear: 2010, endYear: 2017 },
    { description: 'Ford Expedition; 4x4, Limited (\'18-)', startYear: 2018, endYear: Infinity }
  ],
  U2D: [
    { description: 'Ford Explorer Sport Trac; Limited AWD (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U31: [
    { description: 'Ford Explorer Sport Trac; XLT 4x2 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U32: [
    { description: 'Ford Explorer 4-door 4x2 (\'91-\'99)', startYear: 1991, endYear: 1999 }
  ],
  U33: [
    { description: 'Ford Explorer Sport Trac; Limited 4x2 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U34: [
    { description: 'Ford Explorer 4-door 4x4 (\'91-\'99)', startYear: 1991, endYear: 1999 }
  ],
  U35: [
    { description: 'Ford Explorer 4-door AWD (\'96-\'99)', startYear: 1996, endYear: 1999 }
  ],
  U36: [
    { description: 'Mercury Mountaineer Convenience 4x2 (\'06)', startYear: 2006, endYear: 2006 }
  ],
  U37: [
    { description: 'Mercury Mountaineer Luxury 4x2 (\'06), Base model 4x2 (\'07-\'09)', startYear: 2006, endYear: 2009 }
  ],
  U38: [
    { description: 'Mercury Mountaineer Premier 4x2 (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  U39: [
    { description: 'Mercury Mariner Hybrid 4x4 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U3B: [
    { description: 'Ford Explorer Sport Trac; XLT 4x2 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U3D: [
    { description: 'Ford Explorer Sport Trac; Limited 4x2 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U40: [
    { description: 'Ford Excursion XLT 4x2 (\'00-\'05), XLS 4x2 (\'04-\'05)', startYear: 2000, endYear: 2005 }
  ],
  U41: [
    { description: 'Ford Excursion XLT 4x4 (\'00-\'05), XLS 4x4 (\'04-\'05)', startYear: 2000, endYear: 2005 }
  ],
  U42: [
    { description: 'Ford Excursion Limited 4x2 (\'00-\'05)', startYear: 2000, endYear: 2005 },
    { description: 'Mazda Navajo 2-door 4x2 (\'92-\'94)', startYear: 1992, endYear: 1994 }
  ],
  U43: [
    { description: 'Ford Excursion Limited 4x4 (\'00-\'05)', startYear: 2000, endYear: 2005 }
  ],
  U44: [
    { description: 'Ford Excursion Eddie Bauer 4x2 (\'03-\'05)', startYear: 2003, endYear: 2005 },
    { description: 'Mazda Navajo 2-door 4x4 (\'91-\'94)', startYear: 1991, endYear: 1994 }
  ],
  U45: [
    { description: 'Ford Excursion Eddie Bauer 4x4 (\'03-\'05)', startYear: 2003, endYear: 2005 }
  ],
  U46: [
    { description: 'Mercury Mountaineer Convenience AWD (\'06)', startYear: 2006, endYear: 2006 }
  ],
  U47: [
    { description: 'Mercury Mountaineer Luxury AWD, Base model AWD (\'07-\'09) (\'06)', startYear: 2007, endYear: 2009 },
    { description: 'Mercury Mountaineer Luxury AWD, Base model AWD (\'06)', startYear: 2006, endYear: 2006 }
  ],
  U48: [
    { description: 'Mercury Mountaineer Premier AWD (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  U49: [
    { description: 'Ford Escape Hybrid 4x2 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U4K: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Passenger Van, High Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase Ext. Length, RWD (\'15-)', startYear: 2015, endYear: 2015 }
  ],
  U51: [
    { description: 'Ford Explorer Sport Trac; XLT 4x4 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U52: [
    { description: 'Mercury Mountaineer 4x2 (\'97-\'99)', startYear: 1997, endYear: 1999 }
  ],
  U53: [
    { description: 'Ford Explorer Sport Trac; Limited 4x4 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U54: [
    { description: 'Mercury Mountaineer 4x4 (\'98-\'99)', startYear: 1998, endYear: 1999 }
  ],
  U55: [
    { description: 'Mercury Mountaineer AWD (\'97-\'99)', startYear: 1997, endYear: 1999 }
  ],
  U56: [
    { description: 'Mercury Mariner 4x2 (\'05-\'06)', startYear: 2005, endYear: 2006 }
  ],
  U57: [
    { description: 'Mercury Mariner 4x4 (\'05-\'06)', startYear: 2005, endYear: 2006 }
  ],
  U59: [
    { description: 'Ford Escape Hybrid 4x4 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U5B: [
    { description: 'Ford Explorer Sport Trac; XLT 4x4 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U5D: [
    { description: 'Ford Explorer Sport Trac; Limited 4x4 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U5K: [
    { description: 'Ford Escape Hybrid 4x4 (\'10-\'12)', startYear: 2010, endYear: 2012 }
  ],
  U5X: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Passenger Van, High Roof, Long (148 in.) wheelbase Extended Length, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  U60: [
    { description: 'Ford Explorer Sport; 2-door; 4x2 (\'01-\'03)', startYear: 2001, endYear: 2003 },
    { description: 'Ford Explorer; Sport 2-door; 4x2 (\'00)', startYear: 2000, endYear: 2000 }
  ],
  U61: [
    { description: 'Ford Explorer; XL 4-door; 4x2 (\'00)', startYear: 2000, endYear: 2000 }
  ],
  U62: [
    { description: 'Ford Explorer; XLS 4-door; 4x2 (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Ford Explorer; XLS 4x2 (\'02-\'05), XLS Sport 4x2 (\'03-\'05)', startYear: 2002, endYear: 2005 },
    { description: 'Ford Explorer; XLS 4x2 (\'06)', startYear: 2006, endYear: 2006 }
  ],
  U63: [
    { description: 'Ford Explorer; XLT 4-door; 4x2 (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Ford Explorer; XLT 4x2 (\'02-\'05), XLT Sport 4x2 (\'03-\'05), NBX 4x2 (\'03)', startYear: 2002, endYear: 2005 },
    { description: 'Ford Explorer; XLT 4x2 (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  U64: [
    { description: 'Ford Explorer; Eddie Bauer 4-door; 4x2 (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Ford Explorer; Eddie Bauer 4x2 (\'02-\'05)', startYear: 2002, endYear: 2005 },
    { description: 'Ford Explorer; Eddie Bauer 4x2 (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  U65: [
    { description: 'Ford Explorer; Limited 4-door; 4x2 (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Ford Explorer; Limited 4x2 (\'02-\'05)', startYear: 2002, endYear: 2005 },
    { description: 'Ford Explorer; Limited 4x2 (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  U66: [
    { description: 'Mercury Mountaineer 4x2 (\'00-\'05)', startYear: 2000, endYear: 2005 }
  ],
  U67: [
    { description: 'Ford Explorer Sport Trac; 4x2 (\'01-\'05)', startYear: 2001, endYear: 2005 }
  ],
  U68: [
    { description: 'Lincoln Aviator 4x2 (\'03-\'05)', startYear: 2003, endYear: 2005 },
    { description: 'Lincoln MKX FWD (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U6D: [
    { description: 'Ford Explorer; XLT 4x2 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U6E: [
    { description: 'Ford Explorer; Eddie Bauer 4x2 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U6F: [
    { description: 'Ford Explorer; Limited 4x2 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U6P: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, RWD (\'20-)', startYear: 2020, endYear: 2020 }
  ],
  U6Z: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, RWD (\'20-)', startYear: 2020, endYear: 2020 }
  ],
  U70: [
    { description: 'Ford Explorer Sport; 2-door; 4x4 (\'01-\'03)', startYear: 2001, endYear: 2003 },
    { description: 'Ford Explorer; Sport 2-door; 4x4 (\'00)', startYear: 2000, endYear: 2000 }
  ],
  U71: [
    { description: 'Ford Explorer; XL 4-door; 4x4 (\'00)', startYear: 2000, endYear: 2000 }
  ],
  U72: [
    { description: 'Ford Explorer; XLS 4-door; 4x4 (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Ford Explorer; XLS 4x4 (\'02-\'05), XLS Sport 4x4 (\'03-\'05)', startYear: 2002, endYear: 2005 },
    { description: 'Ford Explorer; XLS 4x4 (\'06)', startYear: 2006, endYear: 2006 }
  ],
  U73: [
    { description: 'Ford Explorer; XLT 4-door; 4x4 (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Ford Explorer; XLT 4x4 (\'02-\'05), XLT Sport 4x4 (\'03-\'05), NBX 4x4 (\'03-\'04)', startYear: 2002, endYear: 2005 },
    { description: 'Ford Explorer; XLT 4x4 (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  U74: [
    { description: 'Ford Explorer; Eddie Bauer 4-door; 4x4 (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Ford Explorer; Eddie Bauer 4x4 (\'02-\'05)', startYear: 2002, endYear: 2005 },
    { description: 'Ford Explorer; Eddie Bauer 4x4 (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  U75: [
    { description: 'Ford Explorer; Limited 4-door; 4x4 (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Ford Explorer; Limited 4x4 (\'02-\'05)', startYear: 2002, endYear: 2005 },
    { description: 'Ford Explorer; Limited 4x4 (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  U76: [
    { description: 'Mercury Mountaineer 4x4 (\'00-\'01)', startYear: 2000, endYear: 2001 }
  ],
  U77: [
    { description: 'Ford Explorer Sport Trac; 4x4 (\'01-\'05)', startYear: 2001, endYear: 2005 }
  ],
  U78: [
    { description: 'Lincoln Aviator 4x4 & AdvanceTrac (\'03)', startYear: 2003, endYear: 2003 }
  ],
  U7D: [
    { description: 'Ford Explorer; XLT 4x4 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U7E: [
    { description: 'Ford Explorer; Eddie Bauer 4x4 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U7F: [
    { description: 'Ford Explorer; Limited 4x4 (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U80: [
    { description: 'Mercury Mariner Convenience 4x2 (\'07)', startYear: 2007, endYear: 2007 }
  ],
  U81: [
    { description: 'Mercury Mariner Base model 4x2 (\'08-\'09)', startYear: 2008, endYear: 2009 },
    { description: 'Mercury Mariner Luxury 4x2 (\'07)', startYear: 2007, endYear: 2007 }
  ],
  U82: [
    { description: 'Ford Explorer; XLS AWD (\'03-\'04), XLS Sport AWD (\'03-\'04)', startYear: 2003, endYear: 2004 }
  ],
  U83: [
    { description: 'Ford Explorer; XLT 4-door; AWD (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Ford Explorer; XLT AWD (\'03-\'04), XLT Sport AWD (\'03-\'04)', startYear: 2003, endYear: 2004 },
    { description: 'Ford Explorer; XLT AWD (\'09)', startYear: 2009, endYear: 2009 }
  ],
  U84: [
    { description: 'Ford Explorer; Eddie Bauer 4-door; AWD (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Ford Explorer; Eddie Bauer AWD (\'03-\'04)', startYear: 2003, endYear: 2004 },
    { description: 'Ford Explorer; Eddie Bauer AWD (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  U85: [
    { description: 'Ford Explorer; Limited 4-door; AWD (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Ford Explorer; Limited AWD (\'03-\'04)', startYear: 2003, endYear: 2004 },
    { description: 'Ford Explorer; Limited AWD (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  U86: [
    { description: 'Mercury Mountaineer AWD (\'00-\'05)', startYear: 2000, endYear: 2005 }
  ],
  U87: [
    { description: 'Mercury Mariner Premier 4x2 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U88: [
    { description: 'Lincoln Aviator AWD (\'03-\'05)', startYear: 2003, endYear: 2005 },
    { description: 'Lincoln MKX AWD (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U8D: [
    { description: 'Ford Explorer; XLT AWD (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U8F: [
    { description: 'Ford Explorer; Limited AWD (\'10)', startYear: 2010, endYear: 2010 }
  ],
  U8P: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cutaway, Low Roof, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  U8U: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, AWD, 11,000 lb. GVWR (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  U8X: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, RWD, 11,000 lb. GVWR (\'21-)', startYear: 2021, endYear: Infinity }
  ],
  U8Z: [
    { description: 'Ford Transit 350 HD, Dual Rear Wheels, Chassis Cab, Low Roof, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  U90: [
    { description: 'Mercury Mariner Convenience 4x4 (\'07)', startYear: 2007, endYear: 2007 }
  ],
  U91: [
    { description: 'Mercury Mariner Base model 4x4 (\'08-\'09)', startYear: 2008, endYear: 2009 },
    { description: 'Mercury Mariner Luxury 4x4 (\'07)', startYear: 2007, endYear: 2007 }
  ],
  U92: [
    { description: 'Ford Escape XLS 4x4 (\'03-\'09)', startYear: 2003, endYear: 2009 }
  ],
  U93: [
    { description: 'Ford Escape XLT 4x4 (\'03-\'09)', startYear: 2003, endYear: 2009 }
  ],
  U94: [
    { description: 'Ford Escape Limited 4x4 (\'03-\'09)', startYear: 2003, endYear: 2009 }
  ],
  U95: [
    { description: 'Ford Escape Hybrid 4x2 (\'05-\'06)', startYear: 2005, endYear: 2006 }
  ],
  U96: [
    { description: 'Ford Escape Hybrid 4x4 (\'05-\'06)', startYear: 2005, endYear: 2006 }
  ],
  U97: [
    { description: 'Mercury Mariner Premier 4x4 (\'07-\'09)', startYear: 2007, endYear: 2009 }
  ],
  U98: [
    { description: 'Mercury Mariner Hybrid 4x4 (\'06)', startYear: 2006, endYear: 2006 }
  ],
  U9B: [
    { description: 'Ford Escape SE Sport Hybrid 4x4 (\'20)', startYear: 2020, endYear: 2020 },
    { description: 'Ford Escape SE Hybrid 4x4 (\'21-\'22)', startYear: 2021, endYear: 2022 }
  ],
  U9C: [
    { description: 'Ford Escape SEL Hybrid 4x4 (\'21-\'22)', startYear: 2021, endYear: 2022 },
    { description: 'Ford Escape XLS 4x4 (\'10-\'12)', startYear: 2010, endYear: 2012 }
  ],
  U9D: [
    { description: 'Ford Escape Titanium Hybrid 4x4 (\'20-\'22)', startYear: 2020, endYear: 2020 },
    { description: 'Ford Escape XLT 4x4 (\'10-\'12)', startYear: 2010, endYear: 2012 }
  ],
  U9E: [
    { description: 'Ford Escape Limited 4x4 (\'10-\'12)', startYear: 2010, endYear: 2012 }
  ],
  U9F: [
    { description: 'Ford Escape Base model 4x4 (\'23-)', startYear: 2023, endYear: Infinity },
    { description: 'Ford Escape S 4x4 (\'20-\'22)', startYear: 2023, endYear: 2023 }
  ],
  U9G: [
    { description: 'Ford Escape Active 4x4 (\'23-)', startYear: 2023, endYear: Infinity },
    { description: 'Ford Escape SE 4x4 (\'13-\'19)', startYear: 2013, endYear: 2019 },
    { description: 'Ford Escape SE 4x4 (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  U9H: [
    { description: 'Ford Escape SEL 4x4 (\'13)', startYear: 2013, endYear: 2013 },
    { description: 'Ford Escape SEL 4x4 (\'18-\'19)', startYear: 2018, endYear: 2019 },
    { description: 'Ford Escape SEL 4x4 (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  U9J: [
    { description: 'Ford Escape Platinum 4x4 (\'23-)', startYear: 2023, endYear: Infinity },
    { description: 'Ford Escape Titanium 4x4 (\'13-\'19)', startYear: 2013, endYear: 2019 },
    { description: 'Ford Escape Titanium 4x4 (\'20-\'22)', startYear: 2020, endYear: 2022 }
  ],
  U9M: [
    { description: 'Ford Escape ST-Line 4x4 (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  U9N: [
    { description: 'Ford Escape ST-Line Select 4x4 (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  U9P: [
    { description: 'Ford Escape ST-Line Elite 4x4 (\'23-)', startYear: 2023, endYear: Infinity }
  ],
  V11: [
    { description: 'Mercury Villager; All passenger vans (\'93-\'99)', startYear: 1993, endYear: 1999 },
    { description: 'Mercury Villager; Base model (\'00-\'01)', startYear: 2000, endYear: 2001 },
    { description: 'Mercury Villager; Popular (\'02)', startYear: 2002, endYear: 2002 }
  ],
  V12: [
    { description: 'Mercury Villager; Sport (\'00-\'02)', startYear: 2000, endYear: 2002 },
    { description: 'Mercury Villager; Sport Plus (\'02)', startYear: 2002, endYear: 2002 }
  ],
  V14: [
    { description: 'Mercury Villager; Estate (\'00-\'02)', startYear: 2000, endYear: 2002 },
    { description: 'Mercury Villager; Estate Premium (\'02)', startYear: 2002, endYear: 2002 },
    { description: 'Mercury Villager; cargo van (\'93-\'98)', startYear: 1993, endYear: 1998 }
  ],
  W02: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), Flareside, 2WD (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  W04: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), Flareside, 4WD (\'06-\'09)', startYear: 2006, endYear: 2009 }
  ],
  W05: [
    { description: 'Lincoln Blackwood (\'02)', startYear: 2002, endYear: 2002 }
  ],
  W07: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), Styleside, 2WD (\'01-\'03)', startYear: 2001, endYear: 2003 }
  ],
  W08: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), Styleside, 4WD (\'01-\'03)', startYear: 2001, endYear: 2003 }
  ],
  W12: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), Styleside, 2WD (\'04-\'09)', startYear: 2004, endYear: 2009 }
  ],
  W14: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), Styleside, 4WD (\'04-\'09)', startYear: 2004, endYear: 2009 }
  ],
  W16: [
    { description: 'Lincoln Mark LT 4x2 (\'06-\'08)', startYear: 2006, endYear: 2008 }
  ],
  W18: [
    { description: 'Lincoln Mark LT 4x4 (\'06-\'08)', startYear: 2006, endYear: 2008 }
  ],
  W1B: [
    { description: 'Ford F-Series, F-150 Lightning EV, SuperCrew (Crew Cab), 4WD; Pro (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W1C: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), Styleside, 2WD (\'10-\'23)', startYear: 2010, endYear: 2023 }
  ],
  W1D: [
    { description: 'Ford Transit 350, Cargo Van, Medium Roof, Dual Sliding Side Cargo-Doors, Regular (130 in.) wheelbase (\'17-\'19)', startYear: 2017, endYear: 2019 },
    { description: 'Ford Transit 350, Crew Van, Medium Roof, RWD (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  W1E: [
    { description: 'Ford F-Series, F-150 Lightning EV, SuperCrew (Crew Cab), Styleside, 4WD (\'22-\'23)', startYear: 2022, endYear: 2023 },
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), Styleside, 4WD (\'10-\'23)', startYear: 2010, endYear: 2023 }
  ],
  W1K: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 2WD; XL (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W1L: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 4WD; XL (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W1P: [
    { description: 'Ford F-Series, F-150 Police Responder, SuperCrew (Crew Cab), Styleside, 4WD (\'18-\'23)', startYear: 2018, endYear: 2023 },
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 4WD; Police Responder (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W1R: [
    { description: 'Ford F-Series, F-150 Raptor, SuperCrew (Crew Cab), Styleside, 4WD (\'11-\'14)', startYear: 2011, endYear: 2014 },
    { description: 'Ford F-Series, F-150 Raptor, SuperCrew (Crew Cab), Styleside, 4WD (\'17-\'23)', startYear: 2017, endYear: 2023 },
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 4WD; Raptor, Raptor R (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W1S: [
    { description: 'Ford F-Series, F-150 Special Service Vehicle (SSV), SuperCrew (Crew Cab), Styleside, 2WD (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  W1T: [
    { description: 'Ford F-Series, F-150 Special Service Vehicle (SSV), SuperCrew (Crew Cab), Styleside, 4WD (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  W1V: [
    { description: 'Ford Transit 350, Crew Van, High Roof, Long (148 in.) wheelbase, RWD (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  // TODO: Use Infinity instead of Infinity
  W1X: [
    { description: 'Ford Transit 350, Cargo Van, High Roof, Long (148 in.) wheelbase, RWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  W1Y: [
    { description: 'Ford Transit 350, Cargo Van, Low Roof, RWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 350, Cargo Van, Low Roof, Sliding Passenger-Side Cargo Door, Regular (130 in.) wheelbase (\'17-\'19)', startYear: 2017, endYear: 2019 }
  ],
  W1Z: [
    { description: 'Ford Transit 350, Crew Van, Low Roof, RWD (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 350, Cargo Van, Low Roof, 60/40 Passenger-Side Cargo Doors, Regular (130 in.) wheelbase (\'17-\'19)', startYear: 2017, endYear: 2019 }
  ],
  W20: [
    { description: 'Ford F-Series, Super Duty F-250, Crew Cab, 2WD (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W21: [
    { description: 'Ford F-Series, Super Duty F-250, Crew Cab, 4WD (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W25: [
    { description: 'Ford F-Series, F-250, Crew Cab, 2WD (\'96-\'97)', startYear: 1996, endYear: 1997 }
  ],
  W26: [
    { description: 'Ford F-Series, F-250, Crew Cab, 4WD (\'96-\'97)', startYear: 1996, endYear: 1997 }
  ],
  W2A: [
    { description: 'Ford F-Series, Super Duty F-250, Crew Cab, 2WD (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W2B: [
    { description: 'Ford F-Series, Super Duty F-250, Crew Cab, 4WD (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W2C: [
    { description: 'Ford Transit 350, Cargo Van, Medium Roof, AWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 350, Cargo Van, Medium Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  W2D: [
    { description: 'Ford Transit 350, Crew Van, Medium Roof, AWD (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 350, Cargo Van, Medium Roof, Dual Sliding Side Cargo-Doors, Long (148 in.) wheelbase (\'16-\'19)', startYear: 2016, endYear: 2019 }
  ],
  W2K: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 2WD; STX (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W2L: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 4WD; STX (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W2U: [
    { description: 'Ford Transit 350, Cargo Van, High Roof, Dual Sliding Side Cargo-Doors, Long (148 in.) wheelbase (\'16-\'19)', startYear: 2016, endYear: 2019 }
  ],
  W2V: [
    { description: 'Ford Transit 350, Crew Van, High Roof, Long (148 in.) wheelbase, AWD (\'20-\'23)', startYear: 2020, endYear: 2023 }
  ],
  W2X: [
    { description: 'Ford Transit 350, Cargo Van, High Roof, Long (148 in.) wheelbase, AWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 350, Cargo Van, High Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  W2Y: [
    { description: 'Ford Transit 350, Cargo Van, Low Roof, AWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 350, Cargo Van, Low Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  W2Z: [
    { description: 'Ford Transit 350, Crew Van, Low Roof, AWD (\'20-\'23)', startYear: 2020, endYear: 2023 },
    { description: 'Ford Transit 350, Cargo Van, Low Roof, 60/40 Passenger-Side Cargo Doors, Long (148 in.) wheelbase (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  W30: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 2WD, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W31: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 4WD, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W32: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 2WD, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W33: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 4WD, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W34: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 2WD, Chassis Cab, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W35: [
    { description: 'Ford F-Series, F-350, Crew Cab, 2WD (\'83-\'97)', startYear: 1983, endYear: 1997 },
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 4WD, Chassis Cab, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W36: [
    { description: 'Ford F-Series, F-350, Crew Cab, 4WD (\'83-\'97)', startYear: 1983, endYear: 1997 },
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W37: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W3A: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 2WD, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W3B: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 4WD, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W3C: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 2WD, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W3D: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 4WD, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W3E: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 2WD, Chassis Cab, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W3F: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 4WD, Chassis Cab, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W3G: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W3H: [
    { description: 'Ford F-Series, Super Duty F-350, Crew Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W3K: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 2WD; XLT (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W3L: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 4WD; XLT (\'24-)', startYear: 2024, endYear: Infinity },
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), F-150 Lightning EV; XLT, Flash (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W3U: [
    { description: 'Ford Transit 350, Cargo Van, High Roof, Dual Sliding Side Cargo-Doors, Long (148 in.) wheelbase Extended Length (\'16-\'19)', startYear: 2016, endYear: 2019 },
    { description: 'Ford Transit 350, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  W3X: [
    { description: 'Ford Transit 350, Cargo Van, High Roof, Sliding Passenger-Side Cargo Door, Long (148 in.) wheelbase Extended Length (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350, Cargo Van, High Roof, Long (148 in.) wheelbase Extended Length, RWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  W42: [
    { description: 'Ford F-Series, Super Duty F-450, Crew Cab, 2WD, Dual Rear Wheels (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  W43: [
    { description: 'Ford F-Series, Super Duty F-450, Crew Cab, 4WD, Dual Rear Wheels (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  W46: [
    { description: 'Ford F-Series, Super Duty F-450, Crew Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W47: [
    { description: 'Ford F-Series, Super Duty F-450, Crew Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W4C: [
    { description: 'Ford F-Series, Super Duty F-450, Crew Cab, 2WD, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W4D: [
    { description: 'Ford F-Series, Super Duty F-450, Crew Cab, 4WD, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W4G: [
    { description: 'Ford F-Series, Super Duty F-450, Crew Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W4H: [
    { description: 'Ford F-Series, Super Duty F-450, Crew Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W4L: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 4WD; Tremor (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W56: [
    { description: 'Ford F-Series, Super Duty F-550, Crew Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W57: [
    { description: 'Ford F-Series, Super Duty F-550, Crew Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  W5G: [
    { description: 'Ford F-Series, Super Duty F-550, Crew Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W5H: [
    { description: 'Ford F-Series, Super Duty F-550, Crew Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  W5L: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 4WD; Lariat (\'24-)', startYear: 2024, endYear: Infinity },
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 4WD; F-150 Lightning EV; Lariat (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W5P: [
    { description: 'Ford Transit 350, Single Rear Wheels, Cutaway, Low Roof, 138 in. wheelbase, 9,500 lb. GVWR (\'17-\'19)', startYear: 2017, endYear: 2019 },
    { description: 'Ford Transit 350, Single Rear Wheels, Cutaway, Low Roof, RWD, 9,500 lb. GVWR (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  W5Z: [
    { description: 'Ford Transit 350, Single Rear Wheels, Chassis Cab, Low Roof, 138 in. wheelbase, 9,500 lb. GVWR (\'17-\'19)', startYear: 2017, endYear: 2019 },
    { description: 'Ford Transit 350, Single Rear Wheels, Chassis Cab, Low Roof, RWD, 9,500 lb. GVWR (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  W6L: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 4WD; King Ranch (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W7L: [
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 4WD; Platinum (\'24-)', startYear: 2024, endYear: Infinity },
    { description: 'Ford F-Series, F-150, SuperCrew (Crew Cab), 4WD; F-150 Lightning EV; Platinum (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W7P: [
    { description: 'Ford Transit 350, Single Rear Wheels, Cutaway, Low Roof, 156 in. wheelbase, 9,500 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350, Single Rear Wheels, Cutaway, Low Roof, AWD, 9,500 lb. GVWR (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  W7Z: [
    { description: 'Ford Transit 350, Single Rear Wheels, Chassis Cab, Low Roof, 156 in. wheelbase, 9,500 lb. GVWR (\'15-\'19)', startYear: 2015, endYear: 2019 },
    { description: 'Ford Transit 350, Single Rear Wheels, Chassis Cab, Low Roof, AWD, 9,500 lb. GVWR (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  W8A: [
    { description: 'Ford Maverick XL FWD (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W8B: [
    { description: 'Ford Maverick XL AWD (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W8C: [
    { description: 'Ford Maverick XLT Tremor AWD (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W8E: [
    { description: 'Ford Maverick FWD (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  W8F: [
    { description: 'Ford Maverick AWD (\'22-\'23)', startYear: 2022, endYear: 2023 }
  ],
  W8G: [
    { description: 'Ford Maverick with Tremor pkg. & Advanced AWD (\'23)', startYear: 2024, endYear: Infinity }
  ],
  W8H: [
    { description: 'Ford Maverick XLT FWD (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W8J: [
    { description: 'Ford Maverick XLT AWD (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W8M: [
    { description: 'Ford Maverick Lariat FWD (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W8R: [
    { description: 'Ford Maverick Lariat Tremor AWD (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W8S: [
    { description: 'Ford Maverick Lariat AWD (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  W9C: [
    { description: 'Ford Transit 350, Cargo Van, Medium Roof, RWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 350, Cargo Van, Medium Roof, Sliding Passenger-Side Cargo Door, Regular (130 in.) wheelbase (\'17-\'19)', startYear: 2017, endYear: 2019 }
  ],
  X02: [
    { description: 'Ford F-Series, F-150, Super Cab, Flareside, 2WD (\'04-\'09)', startYear: 2004, endYear: 2009 }
  ],
  X04: [
    { description: 'Ford F-Series, F-150, Super Cab, Flareside, 4WD (\'04-\'09)', startYear: 2004, endYear: 2009 }
  ],
  X07: [
    { description: 'Ford F-Series, F-150 Heritage, Super Cab, Flareside, 2WD (\'04)', startYear: 2004, endYear: 2004 },
    { description: 'Ford F-Series, F-150, Super Cab, Flareside, 2WD (\'97-\'03)', startYear: 1997, endYear: 2003 }
  ],
  X08: [
    { description: 'Ford F-Series, F-150 Heritage, Super Cab, Flareside, 4WD (\'04)', startYear: 2004, endYear: 2004 },
    { description: 'Ford F-Series, F-150, Super Cab, Flareside, 4WD (\'97-\'03)', startYear: 1997, endYear: 2003 }
  ],
  X12: [
    { description: 'Ford F-Series, F-150, Super Cab, Styleside, 2WD (\'04-\'09)', startYear: 2004, endYear: 2009 }
  ],
  X14: [
    { description: 'Ford F-Series, F-150, Super Cab, 4WD (\'81-\'96)', startYear: 1981, endYear: 1996 },
    { description: 'Ford F-Series, F-150, Super Cab, Styleside, 4WD (\'04-\'09)', startYear: 2004, endYear: 2009 }
  ],
  X15: [
    { description: 'Ford F-Series, F-150, Super Cab, 2WD (\'81-\'96)', startYear: 1981, endYear: 1996 }
  ],
  X17: [
    { description: 'Ford F-Series, F-150 Heritage, Super Cab, Styleside, 2WD (\'04)', startYear: 2004, endYear: 2004 },
    { description: 'Ford F-Series, F-150, Super Cab, Styleside, 2WD (\'97-\'03)', startYear: 1997, endYear: 2003 }
  ],
  X18: [
    { description: 'Ford F-Series, F-150 Heritage, Super Cab, Styleside, 4WD (\'04)', startYear: 2004, endYear: 2004 },
    { description: 'Ford F-Series, F-150, Super Cab, Styleside, 4WD (\'97-\'03)', startYear: 1997, endYear: 2003 }
  ],
  X1C: [
    { description: 'Ford F-Series, F-150, Super Cab, Styleside, 2WD (\'10-\'23)', startYear: 2010, endYear: 2023 }
  ],
  X1E: [
    { description: 'Ford F-Series, F-150, Super Cab, Styleside, 4WD (\'10-\'23)', startYear: 2010, endYear: 2023 },
    { description: 'Ford F-Series, F-150 Raptor, Super Cab, Styleside, 4WD (\'10)', startYear: 2010, endYear: 2010 }
  ],
  X1K: [
    { description: 'Ford F-Series, F-150, Super Cab, 2WD; XL (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  X1L: [
    { description: 'Ford F-Series, F-150, Super Cab, 4WD; XL (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  X1R: [
    { description: 'Ford F-Series, F-150 Raptor, Super Cab, Styleside, 4WD (\'11-\'14)', startYear: 2011, endYear: 2014 },
    { description: 'Ford F-Series, F-150 Raptor, Super Cab, Styleside, 4WD (\'17-\'20)', startYear: 2017, endYear: 2020 }
  ],
  X20: [
    { description: 'Ford F-Series, Super Duty F-250, Super Cab, 2WD (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  X21: [
    { description: 'Ford F-Series, Super Duty F-250, Super Cab, 4WD (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  X25: [
    { description: 'Ford F-Series, F-250, Super Cab, 2WD (\'81-\'97)', startYear: 1981, endYear: 1997 }
  ],
  X26: [
    { description: 'Ford F-Series, F-250, Super Cab, 4WD (\'81-\'97)', startYear: 1981, endYear: 1997 }
  ],
  X27: [
    { description: 'Ford F-Series, F-250, Super Cab, Styleside, 2WD (\'97-\'99)', startYear: 1997, endYear: 1999 }
  ],
  X28: [
    { description: 'Ford F-Series, F-250, Super Cab, Styleside, 4WD (\'97-\'99)', startYear: 1997, endYear: 1999 }
  ],
  X2A: [
    { description: 'Ford F-Series, Super Duty F-250, Super Cab, 2WD (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X2B: [
    { description: 'Ford F-Series, Super Duty F-250, Super Cab, 4WD (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X2C: [
    { description: 'Ford Transit 350, Passenger Van, Medium Roof, Long (148 in.) wheelbase, RWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 350, Passenger Van, Medium Roof, Sliding Passenger-Side Cargo Door (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  X2K: [
    { description: 'Ford F-Series, F-150, Super Cab, 2WD; STX (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  X2L: [
    { description: 'Ford F-Series, F-150, Super Cab, 4WD; STX (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  X2X: [
    { description: 'Ford Transit 350, Passenger Van, High Roof, Long (148 in.) wheelbase, RWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 350, Passenger Van, High Roof, Sliding Passenger-Side Cargo Door (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  X2Y: [
    { description: 'Ford Transit 350, Passenger Van, Low Roof, Long (148 in.) wheelbase, RWD (\'20-)', startYear: 2020, endYear: Infinity },
    { description: 'Ford Transit 350, Passenger Van, Low Roof, Sliding Passenger-Side Cargo Door (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  X2Z: [
    { description: 'Ford Transit 350, Passenger Van, Low Roof, 60/40 Passenger-Side Cargo Doors (\'15-\'19)', startYear: 2015, endYear: 2019 }
  ],
  X30: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 2WD, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  X31: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 4WD, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  X32: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 2WD, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  X33: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 4WD, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  X34: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 2WD, Chassis Cab, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  X35: [
    { description: 'Ford F-Series, F-350, Super Cab, 2WD (\'88-\'97)', startYear: 1988, endYear: 1997 },
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 4WD, Chassis Cab, Single Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  X36: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  X37: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'99-\'09)', startYear: 1999, endYear: 2009 }
  ],
  X3A: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 2WD, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X3B: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 4WD, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X3C: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 2WD, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X3D: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 4WD, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X3E: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 2WD, Chassis Cab, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X3F: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 4WD, Chassis Cab, Single Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X3G: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X3H: [
    { description: 'Ford F-Series, Super Duty F-350, Super Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X3K: [
    { description: 'Ford F-Series, F-150, Super Cab, 2WD; XLT (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  X3L: [
    { description: 'Ford F-Series, F-150, Super Cab, 4WD; XLT (\'24-)', startYear: 2024, endYear: Infinity }
  ],
  X46: [
    { description: 'Ford F-Series, Super Duty F-450, Super Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'02-\'09)', startYear: 2002, endYear: 2009 }
  ],
  X47: [
    { description: 'Ford F-Series, Super Duty F-450, Super Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'02-\'09)', startYear: 2002, endYear: 2009 }
  ],
  X4G: [
    { description: 'Ford F-Series, Super Duty F-450, Super Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X4H: [
    { description: 'Ford F-Series, Super Duty F-450, Super Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X56: [
    { description: 'Ford F-Series, Super Duty F-550, Super Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'02-\'09)', startYear: 2002, endYear: 2009 }
  ],
  X57: [
    { description: 'Ford F-Series, Super Duty F-550, Super Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'02-\'09)', startYear: 2002, endYear: 2009 }
  ],
  X5G: [
    { description: 'Ford F-Series, Super Duty F-550, Super Cab, 2WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X5H: [
    { description: 'Ford F-Series, Super Duty F-550, Super Cab, 4WD, Chassis Cab, Dual Rear Wheels (\'10-)', startYear: 2010, endYear: Infinity }
  ],
  X9C: [
    { description: 'Ford Transit 350, Passenger Van, Medium Roof, Long (148 in.) wheelbase, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  X9X: [
    { description: 'Ford Transit 350, Passenger Van, High Roof, Long (148 in.) wheelbase, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  X9Y: [
    { description: 'Ford Transit 350, Passenger Van, Low Roof, Long (148 in.) wheelbase, AWD (\'20-)', startYear: 2020, endYear: Infinity }
  ],
  Y0C: [
    { description: 'Mazda Tribute i 4x2 (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  Y0G: [
    { description: 'Mazda Tribute s 4x2 (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  Y1C: [
    { description: 'Mazda B-Series Regular Cab 4x2 (\'10) (Canada only)', startYear: 2010, endYear: 2010 }
  ],
  Y4G: [
    { description: 'Mazda B-Series Cab Plus 4 (4-door) 4x2 (\'10) (Canada only)', startYear: 2010, endYear: 2010 }
  ],
  Y4H: [
    { description: 'Mazda B-Series Cab Plus 4 (4-door) 4x4 (\'10) (Canada only)', startYear: 2010, endYear: 2010 }
  ],
  Y9C: [
    { description: 'Mazda Tribute i 4x4 (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  Y9G: [
    { description: 'Mazda Tribute s 4x4 (\'10-\'11)', startYear: 2010, endYear: 2011 }
  ],
  Z02: [
    { description: 'Mazda Tribute DX 4x2 (\'03-\'06)', startYear: 2003, endYear: 2006 },
    { description: 'Mazda Tribute i 4x2 (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  Z04: [
    { description: 'Mazda Tribute LX 4x2 (\'03-\'06)', startYear: 2003, endYear: 2006 }
  ],
  Z06: [
    { description: 'Mazda Tribute ES 4x2 (\'03-\'06)', startYear: 2003, endYear: 2006 },
    { description: 'Mazda Tribute s 4x2 (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  Z49: [
    { description: 'Mazda Tribute Hybrid 4x2 (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  Z59: [
    { description: 'Mazda Tribute Hybrid 4x4 (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  Z8A: [
    { description: 'Mazda 6; SV (Special Value) (\'10)', startYear: 2010, endYear: 2010 }
  ],
  Z8B: [
    { description: 'Mazda 6; Sport (\'10-\'13)', startYear: 2010, endYear: 2013 }
  ],
  Z8C: [
    { description: 'Mazda 6; Touring, Touring Plus, Grand Touring (\'10-\'11), Grand Touring (\'12-\'13)', startYear: 2010, endYear: 2013 }
  ],
  Z8D: [
    { description: 'Mazda 6; Touring (\'12-\'13)', startYear: 2012, endYear: 2013 }
  ],
  Z8E: [
    { description: 'Mazda 6; Touring Plus (\'12-\'13)', startYear: 2012, endYear: 2013 }
  ],
  Z92: [
    { description: 'Mazda Tribute DX 4x4 (\'03-\'06)', startYear: 2003, endYear: 2006 },
    { description: 'Mazda Tribute i 4x4 (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ],
  Z94: [
    { description: 'Mazda Tribute LX 4x4 (\'03-\'06)', startYear: 2003, endYear: 2006 }
  ],
  Z96: [
    { description: 'Mazda Tribute ES 4x4 (\'03-\'06)', startYear: 2003, endYear: 2006 },
    { description: 'Mazda Tribute s 4x4 (\'08-\'09)', startYear: 2008, endYear: 2009 }
  ]
}

const assemblyPlants = {
  0: [
    { description: 'Detroit Chassis LLC plant (Detroit, Michigan)', details: 'since 2000 model year', startYear: 2000, endYear: Infinity },
    { description: 'Mazda plant: Hiroshima, Japan', details: '1981-1982 Ford Courier', startYear: 1981, endYear: 1982 }
  ],
  1: [{ description: 'Almussafes, Valencia province, Spain', details: '2014-2023 Ford Transit Connect', startYear: 2014, endYear: 2023 }],
  2: [{ description: 'Ford Lio Ho plant: Zhongli District, Taoyuan, Taiwan', details: '1987-1988 Mercury Tracer hatchback (Canada only)', startYear: 1987, endYear: 1988 }],
  4: [{ description: 'Saarlouis, Germany', details: '2016-2018 Ford Focus RS (only the RS model)', startYear: 2016, endYear: 2018 }],
  5: [{ description: 'Flat Rock Assembly plant (AutoAlliance International) (Flat Rock, Michigan)', details: 'Previously known as Mazda Motor Manufacturing USA', startYear: 0, endYear: Infinity }],
  6: [
    { description: 'Kia Motors Sohari plant: Gwangmyeong, South Korea', details: '1988-1993 Ford Festiva', startYear: 1988, endYear: 1993 },
    { description: 'Kia Motors Sohari plant: Gwangmyeong, South Korea', details: '1994-1997 Ford Aspire', startYear: 1994, endYear: 1997 }
  ],
  8: [{ description: 'Broadmeadows, Victoria, Australia', details: '1991-1994 Mercury Capri', startYear: 1991, endYear: 1994 }],
  A: [{ description: 'Atlanta Assembly (Hapeville, Georgia)', details: 'through 2007 model year', startYear: 0, endYear: 2007 }],
  B: [{ description: 'Oakville Assembly (Oakville, Ontario, Canada)', details: '', startYear: 0, endYear: Infinity }],
  C: [
    { description: 'Chennai, Tamil Nadu, India', details: '2018-2022 Ford EcoSport', startYear: 2018, endYear: 2022 },
    { description: 'Ontario Truck (Oakville, Ontario, Canada)', details: 'through 2004 model year', startYear: 0, endYear: 2004 }
  ],
  D: [
    { description: 'Ipiranga, Sao Paulo state, Brazil', details: '1986-1990 Ford Cargo truck', startYear: 1986, endYear: 1990 },
    { description: 'Ohio Assembly (Avon Lake, Ohio)', details: '', startYear: 0, endYear: Infinity }
  ],
  E: [
    { description: 'Cologne, Germany', details: '1988-1989 Merkur Scorpio', startYear: 1988, endYear: 1989 },
    { description: 'Kentucky Truck Assembly (Louisville, Kentucky)', details: 'For light duty vehicles (pickups/chassis cab pickups/SUVs) since 1994 model year', startYear: 1994, endYear: Infinity }
  ],
  F: [
    { description: 'Dearborn Assembly (Dearborn, Michigan)', details: 'through 2004 model year', startYear: 0, endYear: 2004 },
    { description: 'Dearborn Truck Assembly (Dearborn, Michigan)', details: 'since 2005 model year', startYear: 2005, endYear: Infinity }
  ],
  G: [{ description: 'Chicago Assembly (Chicago, Illinois)', details: '', startYear: 0, endYear: Infinity }],
  H: [
    { description: 'Lorain Assembly (Lorain, Ohio)', details: 'through 2006 model year', startYear: 0, endYear: 2006 },
    { description: 'Multimatic, Inc. plant (Markham, Ontario, Canada)', details: 'from 2017-2022 model year', startYear: 2017, endYear: 2022 }
  ],
  J: [{ description: 'IMMSA plant (Monterrey, Nuevo León, Mexico)', details: 'from 1988-2000 model year', startYear: 1988, endYear: 2000 }],
  K: [{ description: 'Kansas City Assembly (Claycomo, Missouri)', details: '', startYear: 0, endYear: Infinity }],
  L: [{ description: 'Michigan Assembly (formerly Michigan Truck) (Wayne, Michigan)', details: '', startYear: 0, endYear: Infinity }],
  M: [
    { description: 'Cuautitlán Assembly (Cuautitlán Izcalli, Mexico State, Mexico)', details: '', startYear: 0, endYear: Infinity },
    { description: 'Karmann plant: Rheine, Germany', details: '1985-1989 Merkur XR4Ti', startYear: 1985, endYear: 1989 }
  ],
  N: [
    { description: 'Chicago SHO Center (Chicago, Illinois)', details: 'since 2021 model year', startYear: 2021, endYear: Infinity },
    { description: 'Norfolk Assembly (Norfolk, Virginia)', details: 'through 2007 model year', startYear: 0, endYear: 2007 }
  ],
  P: [{ description: 'Twin Cities Assembly (St. Paul, Minnesota)', details: 'Closed 2011', startYear: 0, endYear: 2011 }],
  R: [
    { description: 'Hermosillo Stamping & Assembly (Hermosillo, Sonora, Mexico)', details: 'since 1988 model year', startYear: 1988, endYear: Infinity },
    { description: 'San Jose Assembly (Milpitas, California)', details: 'through 1983 model year', startYear: 0, endYear: 1983 }
  ],
  S: [{ description: 'Ford New Model Programs Development Center (Allen Park, Michigan)', details: '(Pilot & Pre-Production)', startYear: 0, endYear: Infinity }],
  T: [
    { description: 'Edison Assembly (Edison, New Jersey)', details: 'through 2004 model year', startYear: 0, endYear: 2004 },
    { description: 'Ford Otosan plant: Golcuk, Kocaeli province, Turkey', details: '2010-2013 Ford Transit Connect', startYear: 2010, endYear: 2013 }
  ],
  U: [{ description: 'Louisville Assembly (Louisville, Kentucky)', details: '', startYear: 0, endYear: Infinity }],
  V: [
    { description: 'Blue Diamond Truck Co. plant (General Escobedo, Nuevo León, Mexico)', details: 'from 2004-2015 model year', startYear: 2004, endYear: 2015 },
    { description: 'Kentucky Truck Assembly (Louisville, Kentucky)', details: 'For medium- & heavy-duty commercial trucks & bus chassis through 1998 model year', startYear: 0, endYear: 1998 }
  ],
  W: [
    { description: 'Ford Rouge Electric Vehicle Center (Dearborn, Michigan)', details: 'since 2022 model year', startYear: 2022, endYear: Infinity },
    { description: 'Wayne Stamping & Assembly (Wayne, Michigan)', details: 'through 2011 model year', startYear: 0, endYear: 2011 }
  ],
  X: [{ description: 'St. Thomas Assembly (Talbotville, Ontario, Canada)', details: 'Closed 2011', startYear: 0, endYear: 2011 }],
  Y: [{ description: 'Wixom Assembly (Wixom, Michigan)', details: 'through 2007 model year', startYear: 0, endYear: 2007 }],
  Z: [{ description: 'St. Louis Assembly (Hazelwood, Missouri)', details: 'through 2006 model year', startYear: 0, endYear: 2006 }]
}

interface FordSpecific {
  model: string
  assemblyPlant: string
}

/**
 * Decodes Ford's manufacturer specific VIN data
 *
 * Source: https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Ford/VIN_Codes
 * @param vin {string} The VIN to check
 */
function decodeVin (vin: string): FordSpecific | null {
  // const restraintDigit = vin[3];
  const lineSeriesBodyDigit = vin.slice(4, 7)
  // const engineDigit = vin[7];
  const modelYear: number = modelYears(vin)
  const assemblyPlantDigit = vin[10]

  let model = 'Unknown'
  if (models[lineSeriesBodyDigit] !== undefined) {
    const modelMatches = models[lineSeriesBodyDigit]

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
    assemblyPlant
  }
}

export { supportedWmis, decodeVin }
