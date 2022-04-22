import './ChartScore.scss'
import PropTypes from 'prop-types'

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from 'recharts'

function ChartScore(props) {
  return (
    <div className="chart-score">
      <ResponsiveContainer width="100%" height={260}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          outerRadius="80%"
          barSize={10}
          data={props.data}
        >
          <text
            className="custom-rechart-title"
            x="10%"
            y={33}
            fill="#282D30"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="15">Score</tspan>
          </text>

          <text
            className="custom-rechart-title"
            x="50%"
            y="38%"
            fill="#282D30"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="26">12%</tspan>
          </text>

          <text
            className="custom-rechart-title"
            x="50%"
            y="50%"
            fill="#848484"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="16">de votre</tspan>
          </text>

          <text
            className="custom-rechart-title"
            x="50%"
            y="60%"
            fill="#848484"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="16">objectif</tspan>
          </text>
          <RadialBar
            label="false"
            startAngle={180}
            endAngle={0}
            background
            dataKey="percent"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartScore

ChartScore.propTypes = {
  data: PropTypes.array.isRequired,
}