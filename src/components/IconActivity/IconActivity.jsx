import './IconActivity.scss'
import PropTypes from 'prop-types'

function IconActivity(props) {
  const { name, src } = props.icon

  return (
    <li>
      <a href="/">
        <img src={src} className="activity-icon" alt={name} />
      </a>
    </li>
  )
}

export default IconActivity


IconActivity.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string.isRequired,
}

IconActivity.defaultProps = {
  name: '',
  src: '',
}