import './ChartActivityType.scss'
import PropTypes from 'prop-types'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

function ChartActivityType(props) {
  return (
    <div className="chart-activity-type">
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart
          cx="50%"
          cy="50%"
          innerRadius="15%"
          outerRadius="90%"
          margin={{ top: 0, right: 40, left: 40, bottom: 0 }}
          data={props.data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="activity" />

          <Radar
            name="Level"
            dataKey="level"
            stroke="#FF0101B2"
            fill="#FF0101B2"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartActivityType

ChartActivityType.propTypes = {
  data: PropTypes.array.isRequired,
}
