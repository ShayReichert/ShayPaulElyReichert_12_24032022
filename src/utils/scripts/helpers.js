import { useDataFromMock } from './config'
import {
  mockDataActivityDaily,
  mockDataChartTiming,
  mockDataPerformance,
} from '../../mocks/chartsData'

export function getData(user, dataType) {
  if (useDataFromMock) {
    return getDataFromMock(dataType)
  } else {
    return getDataFromAPI(user, dataType)
  }
}

function getDataFromMock(dataType) {
  switch (dataType) {
    case 'ActivityDaily':
      return mockDataActivityDaily
    case 'Timing':
      return mockDataChartTiming
    case 'Performance':
      return mockDataPerformance
    default:
      console.log("Wrong 'dataType' argument")
  }
}

function getDataFromAPI(user, dataType) {
  switch (dataType) {
    case 'ActivityDaily':
    case 'Timing':
      return user.getSessions()
    case 'Performance':
      return user.getPerformance()
    case '':
      console.log("Empty 'dataType' argument")
      break

    default:
      console.error("Wrong 'dataType' argument")
  }
}
