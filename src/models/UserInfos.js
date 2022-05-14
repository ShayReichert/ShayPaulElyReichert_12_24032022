import energy from '../assets/energy.svg'
import chicken from '../assets/chicken.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'

export class UserInfos {
  constructor(data) {
    this.id = data.id
    this.userInfos = data.userInfos
    this.todayScore = data.todayScore ? data.todayScore : data.score
    this.keyData = data.keyData
  }

  getFirstName() {
    return this.userInfos.firstName
  }

  getScoreData() {
    const percentage = this.todayScore * 100

    const dataScore = [
      {
        name: 'hidden',
        percent: 100,
        fill: '#f8f7f7',
      },
      {
        name: 'score',
        percent: percentage,
        fill: '#FF0000',
      },
    ]

    return dataScore
  }

  getScorePercentage() {
    return this.todayScore * 100
  }

  getnutrimentInfos() {
    const nutrimentInfos = [
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

    return nutrimentInfos
  }
}
