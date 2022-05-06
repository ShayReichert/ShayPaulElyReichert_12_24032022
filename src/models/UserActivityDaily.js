export class UserActivityDaily {
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
