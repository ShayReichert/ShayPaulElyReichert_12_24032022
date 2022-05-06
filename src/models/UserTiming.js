export class UserTiming {
  constructor(data) {
    this.id = data.userId
    this.sessions = data.sessions
  }

  getID() {
    return `${this.id}`
  }

  getSessions() {
    const sessions = [...this.sessions]
    const dateConversion = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
    }

    return sessions.map((session) => {
      return {
        ...session,
        day: dateConversion[session.day],
      }
    })
  }
}
