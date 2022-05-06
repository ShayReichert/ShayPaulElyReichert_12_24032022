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

export class UserDailyActivities {
  constructor(data) {
    this.id = data.userId
    this.sessions = data.sessions
  }

  getID() {
    return `${this.id}`
  }

  getSessions() {
    const sessions = [...this.sessions]

    return this.#sortSessions(sessions).map((session) => {
      return {
        ...session,
        day: session.day.slice(-2),
      }
    })
  }

  // #privateFunction
 #sortSessions(sessions) {
    const sortByMoreRecents = sessions.sort(function (a, b) {
      return new Date(b.day) - new Date(a.day)
    })

    const lastTenSessions = sortByMoreRecents.slice(0, 10)

    return lastTenSessions.sort(function (a, b) {
      return new Date(a.day) - new Date(b.day)
    })
  }
}

//  Comment gérer le switch sur le mock ?
//  export class MockUser {
//    constructor(data) {
//      this.id = data.id
//      this.userInfos = data.userInfos
//      this.todayScore = data.todayScore ? data.todayScore : data.score
//      this.keyData = data.keyData
//    }

//    getFirstName() {
//      return `${this.userInfos.firstName}`
//    }
//  }
