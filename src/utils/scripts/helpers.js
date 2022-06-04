import { globalConfig } from '../../config'
import {
  mockDataFirstName,
  mockDataActivityDaily,
  mockDataChartTiming,
  mockDataPerformance,
  mockDataScore,
  mockDataScorePercentage,
  mockInfosNutrient,
  mockDataNutrient,
} from '../../mocks/chartsData'

/**
 * Fetch data from mock or from API according to the settings of the global configuration.
 * @param { Object } user
 * @param { String } dataType
 * @return { Function(dataType<String>) } getDataFromMock
 * @return { Function(user<Object>, dataType<String>) } getDataFromAPI
 */
export function getData(user, dataType) {
  if (globalConfig.useDataFromMock) {
    console.log('MOCK MODE ON')
    return getDataFromMock(dataType)
  } else {
    return getDataFromAPI(user, dataType)
  }
}

/**
 * Retrieve data from mock.
 * @param { String } dataType
 * @return { String | Array | Number | Object } getDataFromMock
 */
function getDataFromMock(dataType) {
  switch (dataType) {
    case 'FirstName':
      return mockDataFirstName
    case 'ActivityDaily':
      return mockDataActivityDaily
    case 'Timing':
      return mockDataChartTiming
    case 'Performance':
      return mockDataPerformance
    case 'ScoreData':
      return mockDataScore
    case 'ScorePercentage':
      return mockDataScorePercentage
    case 'NutrientInfos':
      return mockInfosNutrient
    case 'NutrientData':
      return mockDataNutrient
    case '':
      console.error("Empty 'dataType' argument")
      break
    default:
      console.error("Wrong 'dataType' argument")
  }
}

/**
 * Retrieve data from API.
 * @param { Object } user
 * @param { String } dataType
 * @return { String | Array | Number } getDataFromAPI
 */
function getDataFromAPI(user, dataType) {
  switch (dataType) {
    case 'FirstName':
      return user.getFirstName()
    case 'ActivityDaily':
    case 'Timing':
      return user.getSessions()
    case 'Performance':
      return user.getPerformance()
    case 'ScoreData':
      return user.getScoreData()
    case 'ScorePercentage':
      return user.getScorePercentage()
    case 'NutrientInfos':
      return user.getNutrientInfos()
    case 'NutrientData':
      return user.keyData
    case '':
      console.error("Empty 'dataType' argument")
      break
    default:
      console.error("Wrong 'dataType' argument")
  }
}
