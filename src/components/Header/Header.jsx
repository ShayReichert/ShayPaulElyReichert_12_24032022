import logo from "../../assets/logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="menu">
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
      </ul>
    </header>
  );
}

export default Header;
