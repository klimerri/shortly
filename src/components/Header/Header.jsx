import logo from "../../../images/logo.svg"
import "./Header.scss"

function Header() {
  return (
    <div className="header__container">
        <div className="header__left">
            <img src={logo}></img>
            <a className="header__link" href="#">Features</a>
            <a className="header__link" href="#">Pricing</a>
            <a className="header__link" href="#">Resources</a>
        </div>
        <div className="header__right">
            <a className="header__link" href="#">Login</a>
            <a className="header__link_blue" href="#">Sign Ip</a>
        </div>
    </div>
  )
}

export default Header
