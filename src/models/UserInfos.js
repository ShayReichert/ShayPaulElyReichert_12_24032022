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
}
