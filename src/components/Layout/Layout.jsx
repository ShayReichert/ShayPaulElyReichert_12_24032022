import PropTypes from 'prop-types'
import MenuHeader from '../MenuHeader/MenuHeader'
import './Layout.scss'

function Layout(props) {
  return (
    <div className="page-wrapper">
      <MenuHeader />
      <main id="main-wrapper" className="main-wrapper">
        {props.children}
      </main>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

Layout.defaultProps = {
  children: [],
}
