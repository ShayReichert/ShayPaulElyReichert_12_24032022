import './TimingChart.scss'
import PropTypes from 'prop-types'

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function TimingChart(props) {
  return (
    <div className="chart-activity-daily">
      <ResponsiveContainer width="30%" height={260}>
        <LineChart
          width={300}
          height={100}
          data={props.data}
          margin={{ top: 35, right: 15, left: 15, bottom: 10 }}
        >
          <text
            className="custom-rechart-title"
            x={20}
            y={33}
            fill="#ffffffab"
            textAnchor="left"
            dominantBaseline="central"
          >
            <tspan fontSize="15">Durée moyenne des</tspan>
          </text>
          <text
            className="custom-rechart-title"
            x={20}
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

export default TimingChart

TimingChart.propTypes = {
  data: PropTypes.array.isRequired,
}
