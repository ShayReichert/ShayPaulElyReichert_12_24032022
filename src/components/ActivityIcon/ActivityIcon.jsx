import './ActivityIcon.scss'
import PropTypes from 'prop-types'

function ActivityIcon(props) {
  const { name, src } = props.icon
  
  return (
    <li>
      <a href="/">
        <img src={src} className="activity-icon" alt={name} />
      </a>
    </li>
  )
}

export default ActivityIcon


ActivityIcon.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string.isRequired,
}

ActivityIcon.defaultProps = {
  name: '',
  src: '',
}