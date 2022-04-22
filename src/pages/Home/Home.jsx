import './Home.scss'
import Layout from '../../components/Layout/Layout'
import MenuVertical from '../../components/MenuVertical/MenuVertical'
import ChartActivityDaily from '../../components/ChartActivityDaily/ChartActivityDaily'
import ChartTiming from '../../components/ChartTiming/ChartTiming'
import ChartActivityType from '../../components/ChartActivityType/ChartActivityType'

const dataChart1 = [
  {
    day: '1',
    calories: 356,
    poids: 68,
  },
  {
    day: '2',
    calories: 201,
    poids: 66,
  },
  {
    day: '3',
    calories: 356,
    poids: 68,
  },
  {
    day: '4',
    calories: 209,
    poids: 65,
  },
  {
    day: '5',
    calories: 211,
    poids: 64,
  },
  {
    day: '6',
    calories: 123,
    poids: 61,
  },
  {
    day: '7',
    calories: 333,
    poids: 64,
  },
  {
    day: '8',
    calories: 122,
    poids: 65,
  },
  {
    day: '9',
    calories: 323,
    poids: 65,
  },
  {
    day: '10',
    calories: 218,
    poids: 69,
  },
]

const dataChart2 = [
  {
    day: 'L',
    time: 10,
  },
  {
    day: 'M',
    time: 30,
  },
  {
    day: 'M',
    time: 30,
  },
  {
    day: 'J',
    time: 40,
  },
  {
    day: 'V',
    time: 68,
  },
  {
    day: 'S',
    time: 20,
  },
  {
    day: 'D',
    time: 50,
  },
]

const dataChart3 = [
  {
    activity: 'Intensité',
    level: 120,
  },
  {
    activity: 'Vitesse',
    level: 98,
  },
  {
    activity: 'Force',
    level: 86,
  },
  {
    activity: 'Endurance',
    level: 99,
  },
  {
    activity: 'Energie',
    level: 85,
  },
  {
    activity: 'Cardio',
    level: 65,
  },
]

function Home() {
  return (
    <Layout>
      <MenuVertical />
      <div className="content-wrapper">
        <section className="title-section">
          <h1>
            Bonjour <span className="text-primary">Thomas</span>
          </h1>
          <p className="subtitle">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </section>
        <section className="charts-section">
          <div className="left">
            <div className="left-top">
              <ChartActivityDaily data={dataChart1} />
            </div>
            <div className="left-bottom">
              <ChartTiming data={dataChart2} />

              <ChartActivityType data={dataChart3} />

              <div className="chart-score"></div>
            </div>
          </div>

          <div className="right">Calories column</div>
        </section>
      </div>
    </Layout>
  )
}

export default Home
