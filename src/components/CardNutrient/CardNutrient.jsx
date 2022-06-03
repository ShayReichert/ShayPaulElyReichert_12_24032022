import PropTypes from 'prop-types'
import './CardNutrient.scss'

/**
 * Component for generate a card with nutrient info.
 * @component
 * @param { * } props
 * @return { HTMLElement }
 */
function CardNutrient(props) {
  const { name, src, alt, unit } = props.nutrient

  return (
    <li className={`calory-card ${alt}-card`}>
      <div className="content">
        <div className={`icon ${alt}-icon`}>
          <img src={src} className="calory-icon" alt={alt} />
        </div>
        <div className="text">
          <div className="count">
            {props.count}
            {unit}
          </div>
          <div className="name">{name}</div>
        </div>
      </div>
    </li>
  )
}

export default CardNutrient

CardNutrient.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  unit: PropTypes.string,
  count: PropTypes.number.isRequired,
}

CardNutrient.defaultProps = {
  name: '',
  src: '',
  alt: '',
  unit: '',
  count: '',
}
