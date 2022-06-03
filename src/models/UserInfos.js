import energy from '../assets/energy.svg'
import chicken from '../assets/chicken.svg'
import apple from '../assets/apple.svg'
import cheeseburger from '../assets/cheeseburger.svg'

/**
 * @class
 * @classdesc Create a modeling class for the user infos.
 */
export class UserInfos {
  /**
   * Create a UserInfos.
   * @param { Object } data JSON object from API
   * @param { Number } data.id The user ID
   * @param { ?Number } data.todayScore The user's daily score
   * @param { ?Number } data.score The user's daily score
   * @param { Object } data.keyData Nutrient information
   */
  constructor(data) {
    this.id = data.id
    this.userInfos = data.userInfos
    this.todayScore = data.todayScore ? data.todayScore : data.score
    this.keyData = data.keyData
  }

  /**
   * Get the user first name.
   * @return { String } User first name
   */
  getFirstName() {
    return this.userInfos.firstName
  }

  /**
   * Get the user score in percentage and formatted for the chart.
   * @return { Array.<{ name: String, percent: Number, fill: String }>  } User's daily score, with infos for chart
   */
  getScoreData() {
    const percentage = this.todayScore * 100

    const dataScore = [
      // this hidden object is a hack for rechart, to generate the first gray circle
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

  /**
   * Get the user score in percentage.
   * @return { Number } User's daily score
   */
  getScorePercentage() {
    return this.todayScore * 100
  }

  /**
   * Get all infos to generate nutrient cards.
   * @return { Array.<{ name: String, src: String, alt: String, key: String, unit: String }> } Nutrients infos
   */
  getNutrientInfos() {
    const nutrientInfos = [
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

    return nutrientInfos
  }
}
