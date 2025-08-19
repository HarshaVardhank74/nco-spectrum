export interface NCOOccupation {
  id: string;
  divisionCode: string;
  divisionTitle: string;
  subDivisionCode: string;
  subDivisionTitle: string;
  groupCode: string;
  groupTitle: string;
  familyCode: string;
  familyTitle: string;
  occupationCode: string;
  occupationTitle: string;
  skillLevel: 1 | 2 | 3 | 4;
  sector: string;
}

export const mockNCOData: NCOOccupation[] = [
  {
    id: "1",
    divisionCode: "1",
    divisionTitle: "Managers",
    subDivisionCode: "11",
    subDivisionTitle: "Chief Executives, Senior Officials and Legislators",
    groupCode: "111",
    groupTitle: "Legislators and Senior Officials",
    familyCode: "1111",
    familyTitle: "Legislators",
    occupationCode: "1111.0100",
    occupationTitle: "Elected Official, Union Government",
    skillLevel: 4,
    sector: "Government"
  },
  {
    id: "2",
    divisionCode: "1",
    divisionTitle: "Managers",
    subDivisionCode: "11",
    subDivisionTitle: "Chief Executives, Senior Officials and Legislators",
    groupCode: "111",
    groupTitle: "Legislators and Senior Officials",
    familyCode: "1112",
    familyTitle: "Senior Government Officials",
    occupationCode: "1112.0200",
    occupationTitle: "Diplomat",
    skillLevel: 4,
    sector: "Government"
  },
  {
    id: "3",
    divisionCode: "2",
    divisionTitle: "Professionals",
    subDivisionCode: "21",
    subDivisionTitle: "Science and Engineering Professionals",
    groupCode: "211",
    groupTitle: "Physical and Earth Science Professionals",
    familyCode: "2111",
    familyTitle: "Physicists and Astronomers",
    occupationCode: "2111.0100",
    occupationTitle: "Physicist, General",
    skillLevel: 4,
    sector: "Education & Research"
  },
  {
    id: "4",
    divisionCode: "2",
    divisionTitle: "Professionals",
    subDivisionCode: "21",
    subDivisionTitle: "Science and Engineering Professionals",
    groupCode: "213",
    groupTitle: "Life Science Professionals",
    familyCode: "2131",
    familyTitle: "Biologists, Botanists, Zoologists and Related Professionals",
    occupationCode: "2131.0200",
    occupationTitle: "Marine Biologist",
    skillLevel: 4,
    sector: "Education & Research"
  },
  {
    id: "5",
    divisionCode: "3",
    divisionTitle: "Technicians and Associate Professionals",
    subDivisionCode: "31",
    subDivisionTitle: "Science and Engineering Associate Professionals",
    groupCode: "311",
    groupTitle: "Physical and Engineering Science Technicians",
    familyCode: "3111",
    familyTitle: "Chemical and Physical Science Technicians",
    occupationCode: "3111.0100",
    occupationTitle: "Chemistry Technician",
    skillLevel: 3,
    sector: "Manufacturing"
  },
  {
    id: "6",
    divisionCode: "4",
    divisionTitle: "Clerical Support Workers",
    subDivisionCode: "41",
    subDivisionTitle: "General and Keyboard Clerks",
    groupCode: "411",
    groupTitle: "General Office Clerks",
    familyCode: "4110",
    familyTitle: "General Office Clerks",
    occupationCode: "4110.0100",
    occupationTitle: "Administrative Assistant",
    skillLevel: 2,
    sector: "Administration"
  },
  {
    id: "7",
    divisionCode: "5",
    divisionTitle: "Service and Sales Workers",
    subDivisionCode: "51",
    subDivisionTitle: "Personal Service Workers",
    groupCode: "511",
    groupTitle: "Travel Service Workers",
    familyCode: "5111",
    familyTitle: "Travel Attendants and Travel Stewards",
    occupationCode: "5111.0100",
    occupationTitle: "Flight Attendant",
    skillLevel: 2,
    sector: "Tourism & Hospitality"
  },
  {
    id: "8",
    divisionCode: "6",
    divisionTitle: "Skilled Agricultural, Forestry and Fishery Workers",
    subDivisionCode: "61",
    subDivisionTitle: "Market-oriented Skilled Agricultural Workers",
    groupCode: "611",
    groupTitle: "Market Gardeners and Crop Growers",
    familyCode: "6111",
    familyTitle: "Field Crop and Vegetable Growers",
    occupationCode: "6111.0100",
    occupationTitle: "Wheat Farmer",
    skillLevel: 2,
    sector: "Agriculture"
  },
  {
    id: "9",
    divisionCode: "7",
    divisionTitle: "Craft and Related Trades Workers",
    subDivisionCode: "71",
    subDivisionTitle: "Building and Related Trades Workers",
    groupCode: "711",
    groupTitle: "Building Frame and Related Trades Workers",
    familyCode: "7111",
    familyTitle: "House Builders",
    occupationCode: "7111.0100",
    occupationTitle: "Construction Supervisor",
    skillLevel: 3,
    sector: "Construction"
  },
  {
    id: "10",
    divisionCode: "8",
    divisionTitle: "Plant and Machine Operators and Assemblers",
    subDivisionCode: "81",
    subDivisionTitle: "Stationary Plant and Machine Operators",
    groupCode: "811",
    groupTitle: "Mining and Mineral Processing Plant Operators",
    familyCode: "8111",
    familyTitle: "Mining Plant Operators",
    occupationCode: "8111.0100",
    occupationTitle: "Coal Mine Operator",
    skillLevel: 2,
    sector: "Mining"
  },
  {
    id: "11",
    divisionCode: "9",
    divisionTitle: "Elementary Occupations",
    subDivisionCode: "91",
    subDivisionTitle: "Cleaners and Helpers",
    groupCode: "911",
    groupTitle: "Domestic, Hotel and Office Cleaners and Helpers",
    familyCode: "9111",
    familyTitle: "Domestic Cleaners and Helpers",
    occupationCode: "9111.0100",
    occupationTitle: "Housekeeper",
    skillLevel: 1,
    sector: "Services"
  }
];

export const divisions = [
  { code: "1", title: "Managers", count: 2 },
  { code: "2", title: "Professionals", count: 2 },
  { code: "3", title: "Technicians and Associate Professionals", count: 1 },
  { code: "4", title: "Clerical Support Workers", count: 1 },
  { code: "5", title: "Service and Sales Workers", count: 1 },
  { code: "6", title: "Skilled Agricultural, Forestry and Fishery Workers", count: 1 },
  { code: "7", title: "Craft and Related Trades Workers", count: 1 },
  { code: "8", title: "Plant and Machine Operators and Assemblers", count: 1 },
  { code: "9", title: "Elementary Occupations", count: 1 }
];

export const sectors = [
  "Government",
  "Education & Research", 
  "Manufacturing",
  "Administration",
  "Tourism & Hospitality",
  "Agriculture",
  "Construction",
  "Mining",
  "Services"
];

export const skillLevels = [
  { level: 1, name: "Elementary", description: "Primary education or first stage of basic education" },
  { level: 2, name: "Semi-skilled", description: "Secondary or post-secondary non-tertiary education" },
  { level: 3, name: "Skilled", description: "Short-cycle tertiary education" },
  { level: 4, name: "Highly skilled", description: "Bachelor's level or equivalent" }
];