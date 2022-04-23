import './Home.scss'
import Layout from '../../components/Layout/Layout'
import MenuVertical from '../../components/MenuVertical/MenuVertical'
import ChartActivityDaily from '../../components/ChartActivityDaily/ChartActivityDaily'
import ChartTiming from '../../components/ChartTiming/ChartTiming'
import ChartActivityType from '../../components/ChartActivityType/ChartActivityType'
import ChartScore from '../../components/ChartScore/ChartScore'
import NutrimentCard from '../../components/NutrimentCard/NutrimentCard'
import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import apple from '../../assets/apple.svg'
import cheeseburger from '../../assets/cheeseburger.svg'

//  All Charts data (right)

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

const dataChart4 = [
  {
    name: 'hidden',
    percent: 100,
    fill: '#f8f7f7',
  },
  {
    name: 'score',
    percent: 33,
    fill: '#FF0000',
  },
]

// Nutriments Cards data (left)

const nutrimentData = [
  {
    name: 'calories',
    src: energy,
    alt: 'energy',
    key: 'calorieCount',
    unit: 'kCal',
  },
  {
    name: 'proteines',
    src: chicken,
    alt: 'chicken',
    key: 'proteinCount',
    unit: 'g',
  },
  {
    name: 'glucides',
    src: apple,
    alt: 'apple',
    key: 'carbohydrateCount',
    unit: 'g',
  },
  {
    name: 'lipides',
    src: cheeseburger,
    alt: 'cheeseburger',
    key: 'lipidCount',
    unit: 'g',
  },
]

const nutrimentKeys = [
  {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50,
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

              <ChartScore data={dataChart4} />
            </div>
          </div>

          <div className="right">
            <ul className="calory-wrapper">
              {nutrimentData.map((nutriment, key) => {
                return (
                  <NutrimentCard
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
