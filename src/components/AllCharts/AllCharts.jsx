import PropTypes from 'prop-types'
import { useApiRequest } from '../../services/ApiService'
import './AllCharts.scss'
import {
  ChartActivityDaily,
  ChartTiming,
  ChartPerformance,
  ChartScore,
  CardNutriment,
  ErrorMessage,
} from '../../components'

function AllCharts(props) {
  const { data, error, isLoaded } = useApiRequest(
    `${process.env.REACT_APP_API_ROOT}/user/${props.userId}`
  )

  if (error) {
    return <ErrorMessage />
  } else if (!isLoaded) {
    return <div>Chargement...</div>
  } else {
    return (
      <section className="charts-section">
        <div className="left">
          <div className="left-top">
            <ChartActivityDaily userId={props.userId} />
          </div>
          <div className="left-bottom">
            <ChartTiming userId={props.userId} />

            <ChartPerformance userId={props.userId} />

            <ChartScore userId={props.userId} />
          </div>
        </div>

        <div className="right">
          <ul className="calory-wrapper">
            {props.nutrimentInfos.map((nutriment, key) => {
              return (
                <CardNutriment
                  nutriment={nutriment}
                  count={props.nutrimentData[0][nutriment.key]}
                  key={key}
                />
              )
            })}
          </ul>
        </div>
      </section>
    )
  }
}

export default AllCharts

AllCharts.propTypes = {
  userId: PropTypes.number.isRequired,
  nutrimentInfos: PropTypes.array.isRequired,
  nutrimentData: PropTypes.array.isRequired,
}

AllCharts.defaultProps = {
  userId: 0,
  nutrimentInfos: [],
  nutrimentData: [],
}
