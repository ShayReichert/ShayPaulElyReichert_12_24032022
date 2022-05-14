import energy from '../assets/energy.svg'
import chicken from '../assets/chicken.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'

//  All Charts data (right)

export const mockDataActivityDaily = [
  {
    calories: 356,
    day: '1',
    kilogram: 68,
  },
  {
    calories: 201,
    day: '2',
    kilogram: 66,
  },
  {
    calories: 356,
    day: '3',
    kilogram: 68,
  },
  {
    calories: 209,
    day: '4',
    kilogram: 65,
  },
  {
    calories: 211,
    day: '5',
    kilogram: 64,
  },
  {
    calories: 123,
    day: '6',
    kilogram: 61,
  },
  {
    calories: 333,
    day: '7',
    kilogram: 64,
  },
  {
    calories: 122,
    day: '8',
    kilogram: 65,
  },
  {
    calories: 323,
    day: '9',
    kilogram: 65,
  },
  {
    day: '10',
    calories: 218,
    kilogram: 69,
  },
]

export const mockDataChartTiming = [
  {
    day: 'L',
    sessionLength: 10,
  },
  {
    day: 'M',
    sessionLength: 30,
  },
  {
    day: 'M',
    sessionLength: 30,
  },
  {
    day: 'J',
    sessionLength: 40,
  },
  {
    day: 'V',
    sessionLength: 68,
  },
  {
    day: 'S',
    sessionLength: 20,
  },
  {
    day: 'D',
    sessionLength: 50,
  },
]

export const mockDataPerformance = [
  {
    kind: 'Intensité',
    value: 120,
  },
  {
    kind: 'Vitesse',
    value: 98,
  },
  {
    kind: 'Force',
    value: 86,
  },
  {
    kind: 'Endurance',
    value: 99,
  },
  {
    kind: 'Energie',
    value: 85,
  },
  {
    kind: 'Cardio',
    value: 65,
  },
]

export const mockDataScore = [
  {
    name: 'hidden',
    percent: 100,
    fill: '#f8f7f7',
  },
  {
    name: 'score',
    percent: 33,
    fill: '#FF0000',
  },
]

// Nutriments Cards data (left)

export const mockDataNutriment = [
  {
    name: 'calories',
    src: energy,
    alt: 'energy',
    key: 'calorieCount',
    unit: 'kCal',
  },
  {
    name: 'proteines',
    src: chicken,
    alt: 'chicken',
    key: 'proteinCount',
    unit: 'g',
  },
  {
    name: 'glucides',
    src: apple,
    alt: 'apple',
    key: 'carbohydrateCount',
    unit: 'g',
  },
  {
    name: 'lipides',
    src: cheeseburger,
    alt: 'cheeseburger',
    key: 'lipidCount',
    unit: 'g',
  },
]

export const mockKeysNutriment = [
  {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50,
  },
]