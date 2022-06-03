/**
 * @class
 * @classdesc Create a modeling class for the user's daily activities.
 */
export class UserActivityDaily {
  /**
   * Create a UserActivityDaily.
   * @param { Object } data JSON object from API
   * @param { Number } data.id The user ID
   * @param { Array.<Object> } data.sessions User sessions information
   */
  constructor(data) {
    this.id = data.userId
    this.sessions = data.sessions
  }

  /**
   * Get the user session formatted for the chart.
   * @return { Array.<{ calories: Number, day: String, kilogram: Number }> } User sessions data for each day
   */
  getSessions() {
    const sessions = [...this.sessions]

    return this._sortSessions(sessions).map((session) => {
      return {
        ...session,
        // Format the date : '2019-11-04' => '04'
        day: session.day.slice(-2),
      }
    })
  }

  /**
   * Get the 10 most recent sessions.
   * @private
   * @param { Array.<Object> } data.sessions User sessions data
   * @return { Array.<Object> } Return the last 10 sessions, in ascending order
   */
  _sortSessions(sessions) {
    // Sort sessions in descending order, to retrieve the most recent ones
    const sortByMoreRecents = sessions.sort(function (a, b) {
      return new Date(b.day) - new Date(a.day)
    })

    const lastTenSessions = sortByMoreRecents.slice(0, 10)

    // Reorder sessions in ascending order
    return lastTenSessions.sort(function (a, b) {
      return new Date(a.day) - new Date(b.day)
    })
  }
}
