import { NavLink } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";
/* import "../styles/Sass/header.scss"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <NavLink to="/homepage">
        <img src={logo} alt="Logo ArgentBank" className="header-logo" />
      </NavLink>
      <nav className="header-nav">
      <FontAwesomeIcon icon={faCircleUser} />
      <p>Sign In</p>
      </nav>
    </div>
  )
}

export default Header