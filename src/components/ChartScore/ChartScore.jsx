import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getUserMainData } from '../../services/UserService'
import { UserInfos } from '../../models/UserInfos'
import { getData } from '../../utils/scripts/helpers'
import './ChartScore.scss'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

function ChartScore(props) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    getUserMainData(props.userId).then(
      (result) => {
        setUser(new UserInfos(result.data))
        setIsLoaded(true)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [props.userId])

  if (error) {
    return <div>Erreur : {error.message}</div>
  } else if (!isLoaded) {
    return <div>Chargement...</div>
  } else {
    return (
      <div className="chart-score">
        <ResponsiveContainer width="100%" height={260}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="80%"
            outerRadius="80%"
            barSize={10}
            data={getData(user, 'ScoreData')}
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
              <tspan fontSize="26">{getData(user, 'ScorePercentage')}%</tspan>
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
}

export default ChartScore

ChartScore.propTypes = {
  userId: PropTypes.number.isRequired,
}

ChartScore.defaultProps = {
  userId: 0,
}
