import logo from '../../assets/logo.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <img src={logo} className="logo" alt="logo" />
        <ul className="menu">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Réglage</a>
          </li>
          <li>
            <a href="#">Communauté</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
