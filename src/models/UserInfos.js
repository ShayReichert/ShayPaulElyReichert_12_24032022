export class UserInfos {
  constructor(data) {
    this.id = data.id
    this.userInfos = data.userInfos
    this.todayScore = data.todayScore ? data.todayScore : data.score
    this.keyData = data.keyData
  }

  getFirstName() {
    return `${this.userInfos.firstName}`
  }

  getScoreData() {
    const percentage = this.todayScore * 100;

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
}
