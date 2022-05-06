import './ChartTiming.scss'
import { dataChartTiming } from '../../mocks/chartsData'

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function ChartTiming() {
  return (
    <div className="chart-timing">
      <ResponsiveContainer width="100%" height={260}>
        <LineChart
          width={300}
          height={100}
          data={dataChartTiming}
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
            dataKey="time"
            stroke="#fff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartTiming
