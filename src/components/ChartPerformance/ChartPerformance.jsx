import PropTypes from 'prop-types'
import { useApiRequest } from '../../services/ApiService'
import { UserPerformance } from '../../models/UserPerformance'
import { getData } from '../../utils/scripts/helpers'
import './ChartPerformance.scss'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

function ChartPerformance(props) {
  const { data, error, isLoaded } = useApiRequest(
    `${process.env.REACT_APP_API_ROOT}/user/${props.userId}/performance`
  )

  const user = new UserPerformance(data)

  if (error) {
    return <div>Une erreur est survenue lors du chargement des données</div>
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
