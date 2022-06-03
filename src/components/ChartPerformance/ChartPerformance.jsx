import PropTypes from 'prop-types'
import { useApiRequest } from '../../services/ApiService'
import { UserPerformance } from '../../models/UserPerformance'
import { getData } from '../../utils/scripts/helpers'
import { ErrorMessage } from '../../components'
import './ChartPerformance.scss'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

/**
 * Component for generate a chart with different user performance.
 * @component
 * @param { * } props
 * @return { HTMLElement }
 */
function ChartPerformance(props) {
  const { data, error, isLoaded } = useApiRequest(
    `${process.env.REACT_APP_API_ROOT}/user/${props.userId}/performance`
  )

  const user = new UserPerformance(data)

  if (error) {
    return <ErrorMessage />
  } else if (!isLoaded) {
    return <div>Chargement...</div>
  } else {
    return (
      <div className="chart-performance">
        <ResponsiveContainer width="100%" height={260}>
          <RadarChart
            cx="50%"
            cy="50%"
            innerRadius="15%"
            outerRadius="90%"
            margin={{ top: 0, right: 50, left: 50, bottom: 0 }}
            data={getData(user, 'Performance')}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" />

            <Radar
              name="Level"
              dataKey="value"
              stroke="#FF0101B2"
              fill="#FF0101B2"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default ChartPerformance

ChartPerformance.propTypes = {
  userId: PropTypes.number.isRequired,
}

ChartPerformance.defaultProps = {
  userId: 0,
}
