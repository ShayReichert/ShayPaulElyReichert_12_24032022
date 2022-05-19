import PropTypes from 'prop-types'
import { useApiRequest } from '../../services/ApiService'
import { UserActivityDaily } from '../../models/UserActivityDaily'
import { getData } from '../../utils/scripts/helpers'
import { ErrorMessage } from '../../components'
import './ChartActivityDaily.scss'
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

function ChartActivityDaily(props) {
  const { data, error, isLoaded } = useApiRequest(
    `${process.env.REACT_APP_API_ROOT}/user/${props.userId}/activity`
  )

  const user = new UserActivityDaily(data)

  if (error) {
    return <ErrorMessage />
  } else if (!isLoaded) {
    return <div>Chargement...</div>
  } else {
    return (
      <div className="chart-activity-daily">
        <ResponsiveContainer width="99%" height={320}>
          <BarChart
            data={getData(user, 'ActivityDaily')}
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
              x={30}
              y={33}
              fill="#20253A"
              textAnchor="left"
              dominantBaseline="central"
            >
              <tspan fontSize="15">Activité quotidienne</tspan>
            </text>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis axisLine={false} tickLine={false} dataKey="day" />
            <YAxis axisLine={false} tickLine={false} orientation="right" />
            <Tooltip separator="" wrapperStyle={{ left: 21 }} />
            <Legend verticalAlign="top" align="right" />
            <Bar
              unit="kg"
              dataKey="kilogram"
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
    )
  }
}

export default ChartActivityDaily

ChartActivityDaily.propTypes = {
  userId: PropTypes.number.isRequired,
}

ChartActivityDaily.defaultProps = {
  userId: 0,
}
