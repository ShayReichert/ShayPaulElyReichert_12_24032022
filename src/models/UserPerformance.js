/**
 * @class
 * @classdesc Create a modeling class for the user performance.
 */
export class UserPerformance {
  /**
   * Create a UserPerformance.
   * @param { Object } data JSON object from API
   * @param { Number } data.id The user ID
   * @param { Object.<String, String> } data.kind The different performance categories
   * @param { Array.<Object.<{ kind: Integer, value: Number }>> } data.data User's score for each performance categories
   */
  constructor(data) {
    this.id = data.userId
    this.performanceKind = data.kind
    this.userPerformance = data.data
  }

  /**
   * Get the user performances score formatted for the chart.
   * @return { Array.<Object.<{ kind: String, value: Number }>> } User performance category and score.
   */
  getPerformance() {
    const userPerformance = [...this.userPerformance]

    return userPerformance.map((perf) => {
      return {
        ...perf,
        // Replace number with the name of the performance category.
        kind: this.performanceKind[perf.kind],
      }
    })
  }
}
