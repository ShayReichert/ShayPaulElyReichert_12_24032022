import './Home.scss'
import React, { useState, useEffect } from 'react'
import { getUserMainData } from '../../services/UserService'
import { UserInfos } from '../../models/UserInfos'
import Layout from '../../components/Layout/Layout'
import MenuVertical from '../../components/MenuVertical/MenuVertical'
import ChartActivityDaily from '../../components/ChartActivityDaily/ChartActivityDaily'
import ChartTiming from '../../components/ChartTiming/ChartTiming'
import ChartPerformance from '../../components/ChartPerformance/ChartPerformance'
import ChartScore from '../../components/ChartScore/ChartScore'
import CardNutriment from '../../components/CardNutriment/CardNutriment'
import { mockDataNutriment, mockKeysNutriment } from '../../mocks/chartsData'
import { userId } from '../../utils/scripts/config'

function Home() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState({})

  useEffect(() => {
    getUserMainData(userId).then(
      (result) => {
        setData(new UserInfos(result.data))
        setIsLoaded(true)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [userId])

  let firstName = ''
  if (isLoaded && !error) {
    firstName = data.getFirstName()
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

              <ChartScore />
            </div>
          </div>

          <div className="right">
            <ul className="calory-wrapper">
              {mockDataNutriment.map((nutriment, key) => {
                return (
                  <CardNutriment
                    nutriment={nutriment}
                    count={mockKeysNutriment[0][nutriment.key]}
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
