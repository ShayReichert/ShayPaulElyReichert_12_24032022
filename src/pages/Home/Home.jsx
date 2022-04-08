import './Home.scss'
import Layout from '../../components/Layout/Layout'
import MenuVertical from '../../components/MenuVertical/MenuVertical'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  
} from 'recharts'

const data = [
  {
    name: '1',
    calories: 356,
    poids: 68,
  },
  {
    name: '2',
    calories: 201,
    poids: 66,
  },
  {
    name: '3',
    calories: 356,
    poids: 68,
  },
  {
    name: '4',
    calories: 209,
    poids: 65,
  },
  {
    name: '5',
    calories: 211,
    poids: 64,
  },
  {
    name: '6',
    calories: 123,
    poids: 61,
  },
  {
    name: '7',
    calories: 333,
    poids: 64,
  },
  {
    name: '8',
    calories: 122,
    poids: 65,
  },
  {
    name: '9',
    calories: 323,
    poids: 65,
  },
  {
    name: '10',
    calories: 218,
    poids: 69,
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
            <div className="chart-activity-daily">
              <ResponsiveContainer width="99%" height={320}>
                <BarChart
                  // width={700}
                  data={data}
                  margin={{
                    top: 112,
                    right: 30,
                    left: 20,
                    bottom: 10,
                  }}
                  barSize={7}
                  barGap={8}
                >
                  <text
                    className="custom-rechart-title"
                    x={20}
                    y={33}
                    fill="#20253A"
                    textAnchor="left"
                    dominantBaseline="central"
                  >
                    <tspan fontSize="15">Activité quotidienne</tspan>
                  </text>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis axisLine={false} tickLine={false} dataKey="name" />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    orientation="right"
                  />
                  <Tooltip
                    separator=""
                    labelStyle={{ color: 'green' }}
                    wrapperStyle={{ left: 21 }}
                  />
                  <Legend verticalAlign="top" align="right" />
                  <Bar
                    unit="kg"
                    dataKey="poids"
                    fill="#282D30"
                    legendType="circle"
                    radius={[10, 10, 0, 0]}
                    name="Poids (kg)"
                  />
                  <Bar
                    unit="Kcal"
                    dataKey="calories"
                    fill="#E60000"
                    legendType="circle"
                    radius={[10, 10, 0, 0]}
                    name="Calories brûlées (kCal)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="right">Calories column</div>
        </section>
      </div>
    </Layout>
  )
}

export default Home
