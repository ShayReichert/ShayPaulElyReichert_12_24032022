import './Home.scss'
import { useApiRequest } from '../../services/ApiService'
import { UserInfos } from '../../models/UserInfos'
import { Layout, MenuVertical, AllCharts } from '../../components'
import { getData } from '../../utils/scripts/helpers'
import { globalConfig } from '../../config'

function Home() {
  const { data, error, isLoaded } = useApiRequest(
    `${process.env.REACT_APP_API_ROOT}/user/${globalConfig.userId}`
  )
  const user = new UserInfos(data)

  let firstName = ''
  let nutrimentInfos = []
  let nutrimentData = []

  if (isLoaded && !error) {
    firstName = getData(user, 'FirstName')
    nutrimentInfos = getData(user, 'nutrimentInfos')
    nutrimentData.push(getData(user, 'nutrimentData'))
  } else if (error) {
    console.error(error)
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
        <AllCharts
          userId={globalConfig.userId}
          nutrimentInfos={nutrimentInfos}
          nutrimentData={nutrimentData}
        />
      </div>
    </Layout>
  )
}

export default Home
