import PropTypes from 'prop-types'
import './IconActivity.scss'

/**
 * Component for generate an activity icon.
 * @component
 * @param { * } props
 * @return { HTMLElement }
 */
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