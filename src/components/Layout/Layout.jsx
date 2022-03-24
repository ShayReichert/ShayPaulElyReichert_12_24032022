import Header from "../Header/Header";
import "./Layout.scss";

function Layout(props) {
  return (
    <div className="page-wrapper">
      <Header />
      <main id="main-wrapper" className="main-wrapper">
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
