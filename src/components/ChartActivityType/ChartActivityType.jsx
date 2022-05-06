import './ChartActivityType.scss'
import { dataChartActivityType } from '../../mocks/chartsData'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

function ChartActivityType() {
  return (
    <div className="chart-activity-type">
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart
          cx="50%"
          cy="50%"
          innerRadius="15%"
          outerRadius="90%"
          margin={{ top: 0, right: 40, left: 40, bottom: 0 }}
          data={dataChartActivityType}
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
