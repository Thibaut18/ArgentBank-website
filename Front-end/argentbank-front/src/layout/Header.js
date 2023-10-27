import { NavLink } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";
import "../styles/Sass/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
	return (
		<div className="header">
			<NavLink to="/homepage">
				<img src={logo} alt="Logo ArgentBank" className="header-logo" />
			</NavLink>
			<h1 className="sr-only">ArgentBank</h1>
			<nav className="header-nav">
				<NavLink to="/signin" className="header-nav-sign">
					<FontAwesomeIcon
						icon={faCircleUser}
						className="header-nav-user-icon"
					/>
					Sign In
				</NavLink>
			</nav>
		</div>
	);
}

export default Header;
