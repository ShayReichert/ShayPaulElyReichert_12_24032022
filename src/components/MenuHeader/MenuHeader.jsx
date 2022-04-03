import './MenuHeader.scss'
import logo from '../../assets/logo.svg'

function MenuHeader() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <img src={logo} className="logo" alt="logo" />
        <ul className="menu-header">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/">Profil</a>
          </li>
          <li>
            <a href="/">Réglage</a>
          </li>
          <li>
            <a href="/">Communauté</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default MenuHeader
