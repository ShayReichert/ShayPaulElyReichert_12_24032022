import './Home.scss'
import React, { useState, useEffect } from 'react'
import { getUserMainData } from '../../services/UserService'
import { UserInfos } from '../../models/UserInfos'
import {
  Layout,
  MenuVertical,
  ChartActivityDaily,
  ChartTiming,
  ChartPerformance,
  ChartScore,
  CardNutriment,
} from '../../components'

import { userId } from '../../utils/scripts/config'
import { getData } from '../../utils/scripts/helpers'

function Home() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    getUserMainData(userId).then(
      (result) => {
        setUser(new UserInfos(result.data))
        setIsLoaded(true)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [userId])

  let firstName = ''
  let nutrimentInfos = []
  let nutrimentData = []

  if (isLoaded && !error) {
    firstName = getData(user, 'FirstName')
    nutrimentInfos = getData(user, 'nutrimentInfos')
    nutrimentData.push(getData(user, 'nutrimentData'))
  } else if (error) {
    console.error(error.message)
  }

  return (
    <Layout>
      <MenuVertical />
      <div className="content-wrapper">
        <section className="title-section">
          <h1>
            Bonjour <span className="text-primary">{firstName}</span>
          </h1>
          <p className="subtitle">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </section>

        <section className="charts-section">
          <div className="left">
            <div className="left-top">
              <ChartActivityDaily userId={userId} />
            </div>
            <div className="left-bottom">
              <ChartTiming userId={userId} />

              <ChartPerformance userId={userId} />

              <ChartScore userId={userId} />
            </div>
          </div>

          <div className="right">
            <ul className="calory-wrapper">
              {nutrimentInfos.map((nutriment, key) => {
                return (
                  <CardNutriment
                    nutriment={nutriment}
                    count={nutrimentData[0][nutriment.key]}
                    key={key}
                  />
                )
              })}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home
