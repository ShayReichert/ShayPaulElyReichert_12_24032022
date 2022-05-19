import '../../config'
import {
  mockDataFirstName,
  mockDataActivityDaily,
  mockDataChartTiming,
  mockDataPerformance,
  mockDataScore,
  mockDataScorePercentage,
  mockInfosNutriment,
  mockDataNutriment,
} from '../../mocks/chartsData'

export function getData(user, dataType) {
  if (global.config.useDataFromMock) {
    console.log('MOCK MODE ON')
    return getDataFromMock(dataType)
  } else {
    return getDataFromAPI(user, dataType)
  }
}

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
    case 'nutrimentInfos':
      return mockInfosNutriment
    case 'nutrimentData':
      return mockDataNutriment
    case '':
      console.error("Empty 'dataType' argument")
      break
    default:
      console.error("Wrong 'dataType' argument")
  }
}

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
    case 'nutrimentInfos':
      return user.getnutrimentInfos()
    case 'nutrimentData':
      return user.keyData
    case '':
      console.error("Empty 'dataType' argument")
      break
    default:
      console.error("Wrong 'dataType' argument")
  }
}
