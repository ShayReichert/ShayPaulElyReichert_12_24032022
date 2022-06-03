/**
 * @class
 * @classdesc Create a modeling class for the user average duration of sessions.
 */
export class UserTiming {
  /**
   * Create a UserTiming.
   * @param { Object } data JSON object from API
   * @param { Number } data.id The user ID
   * @param { Array.<Object.<{ day: Integer, sessionLength: Integer }>> } data.sessions User duration sessions
   */
  constructor(data) {
    this.id = data.userId
    this.sessions = data.sessions
  }

  /**
   * Get the user session infos formatted for the chart.
   * @return { Array.<Object.<{ day: String, sessionLength: Number }>> } User daily session duration
   */
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
        // Replace number by the corresponding letter of the week.
        day: dateConversion[session.day],
      }
    })
  }
}
