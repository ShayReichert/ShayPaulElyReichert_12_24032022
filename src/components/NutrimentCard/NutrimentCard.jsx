import './NutrimentCard.scss'
import PropTypes from 'prop-types'



function NutrimentCard(props) {
  const { name, src, alt, unit } = props.nutriment

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

export default NutrimentCard

NutrimentCard.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  unit: PropTypes.string,
  count: PropTypes.number.isRequired,
}

NutrimentCard.defaultProps = {
  name: '',
  src: '',
  alt: '',
  unit: '',
  count: '',
}
