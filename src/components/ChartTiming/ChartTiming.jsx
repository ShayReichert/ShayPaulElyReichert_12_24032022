import PropTypes from 'prop-types'
import { useApiRequest } from '../../services/ApiService'
import { UserTiming } from '../../models/UserTiming'
import { getData } from '../../utils/scripts/helpers'
import { ErrorMessage } from '../../components'
import './ChartTiming.scss'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function ChartTiming(props) {
  const { data, error, isLoaded } = useApiRequest(
    `${process.env.REACT_APP_API_ROOT}/user/${props.userId}/average-sessions`
  )

  const user = new UserTiming(data)

  if (error) {
    return <ErrorMessage />
  } else if (!isLoaded) {
    return <div>Chargement...</div>
  } else {
    return (
      <div className="chart-timing">
        <ResponsiveContainer width="100%" height={260}>
          <LineChart
            width={300}
            height={100}
            data={getData(user, 'Timing')}
            margin={{ top: 35, right: 15, left: 15, bottom: 10 }}
          >
            <text
              className="custom-rechart-title"
              x={30}
              y={33}
              fill="#ffffffab"
              textAnchor="left"
              dominantBaseline="central"
            >
              <tspan fontSize="15">Durée moyenne des</tspan>
            </text>
            <text
              className="custom-rechart-title"
              x={30}
              y={53}
              fill="#ffffffab"
              textAnchor="left"
              dominantBaseline="central"
            >
              <tspan fontSize="15"> sessions</tspan>
            </text>
            <CartesianGrid
              vertical={false}
              horizontal={false}
              strokeDasharray="3 3"
            />
            <XAxis axisLine={false} tickLine={false} dataKey="day" />
            <Tooltip separator="" />
            <Line
              unit=" min"
              dot={false}
              type="monotone"
              dataKey="sessionLength"
              stroke="#fff"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default ChartTiming

ChartTiming.propTypes = {
  userId: PropTypes.number.isRequired,
}

ChartTiming.defaultProps = {
  userId: 0,
}
