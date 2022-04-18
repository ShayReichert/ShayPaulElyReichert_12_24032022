import './ActivityDailyChart.scss'
import PropTypes from 'prop-types'

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

function ActivityDailyChart(props) {

  return (
    <div className="chart-activity-daily">
      <ResponsiveContainer width="99%" height={320}>
        <BarChart
          data={props.data}
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
          <XAxis axisLine={false} tickLine={false} dataKey="day" />
          <YAxis axisLine={false} tickLine={false} orientation="right" />
          <Tooltip
            separator=""
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
  )
}

export default ActivityDailyChart

ActivityDailyChart.propTypes = {
  data: PropTypes.array.isRequired,
}