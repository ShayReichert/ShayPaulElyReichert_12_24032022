import './Home.scss'
import React, { useState, useEffect } from 'react'
import { getUserInfos } from '../../services/UserService'
import { UserInfos } from '../../models/User'
import Layout from '../../components/Layout/Layout'
import MenuVertical from '../../components/MenuVertical/MenuVertical'
import ChartActivityDaily from '../../components/ChartActivityDaily/ChartActivityDaily'
import ChartTiming from '../../components/ChartTiming/ChartTiming'
import ChartActivityType from '../../components/ChartActivityType/ChartActivityType'
import ChartScore from '../../components/ChartScore/ChartScore'
import CardNutriment from '../../components/CardNutriment/CardNutriment'
import { nutrimentData, nutrimentKeys } from '../../mocks/chartsData'

function Home() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [data, setData] = useState({})

  // let userId = 12
  let userId = 18

  useEffect(() => {
    getUserInfos(userId).then(
      (result) => {
        setData(new UserInfos(result.data))
        setIsLoaded(true)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [])

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
              <ChartTiming />

              <ChartActivityType />

              <ChartScore />
            </div>
          </div>

          <div className="right">
            <ul className="calory-wrapper">
              {nutrimentData.map((nutriment, key) => {
                return (
                  <CardNutriment
                    nutriment={nutriment}
                    count={nutrimentKeys[0][nutriment.key]}
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
