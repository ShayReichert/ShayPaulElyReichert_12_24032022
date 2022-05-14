export class UserPerformance {
  constructor(user) {
    this.id = user.userId
    this.globalData = user
    this.performanceKind = user.kind
    this.userPerformance = user.data
  }user

  getID() {
    return `${this.id}`
  }

  getPerformance() {
    const userPerformance = [...this.userPerformance]

    return userPerformance.map((perf) => {
      return {
        ...perf,
        kind: this.performanceKind[perf.kind],
      }
    })
  }
}
