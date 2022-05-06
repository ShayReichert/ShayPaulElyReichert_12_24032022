import './MenuVertical.scss'
import IconActivity from '../IconActivity/IconActivity'
import meditation from '../../assets/meditation.svg'
import swimming from '../../assets/swimming.svg'
import cycling from '../../assets/cycling.svg'
import bodybuilding from '../../assets/bodybuilding.svg'

const activitiesIcons = [
  {
    name: 'meditation',
    src: meditation,
  },
  {
    name: 'swimming',
    src: swimming,
  },
  {
    name: 'cycling',
    src: cycling,
  },
  {
    name: 'bodybuilding',
    src: bodybuilding,
  },
]

function MenuVertical() {
  return (
    <div className="menu-vertical-wrapper">
      <div className="menu-vertical">
        <ul className="activity-wrapper">
          {activitiesIcons.map((icon, key) => (
            <IconActivity icon={icon} key={key} />
          ))}
        </ul>
      </div>
      <div className="copyright">
        <span>Copyright, SportSee {new Date().getFullYear()}</span>
      </div>
    </div>
  )
}

export default MenuVertical
