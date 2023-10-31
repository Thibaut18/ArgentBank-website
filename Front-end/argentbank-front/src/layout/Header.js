import { NavLink } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";
import "../styles/Sass/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoggedOut } from "../features/auth/authSlice";
import { setUserProfile } from "../features/auth/userProfileSlice";
import { usePostProfileMutation } from "../features/api/apiSlice";

function Header() {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.isLoggedIn);
	const userProfile = useSelector((state) => state.user);
	const [postProfile] = usePostProfileMutation();

	useEffect(() => {
		if (token) {
			postProfile(token)
				.unwrap()
				.then((data) => {
					dispatch(setUserProfile(data.body));
				})
				.catch((error) => {
					console.error("Erreur lors de la récupération du profil:", error);
				});
		}
	}, [token]);

	const handleLogout = () => {
		dispatch(setLoggedOut());
	};

	return (
		<div className="header">
			<NavLink to="/homepage">
				<img src={logo} alt="Logo ArgentBank" className="header-logo" />
			</NavLink>
			<h1 className="sr-only">ArgentBank</h1>
			{token ? (
				<div className="header-nav-signed-user">
					<NavLink to="/user" className="header-nav-signed-user-name-and-icon">
						<FontAwesomeIcon icon={faCircleUser} className="header-nav-icon" />{" "}
						{userProfile ? `${userProfile.firstName}` : ""}
					</NavLink>
					<NavLink
						to="/"
						onClick={handleLogout}
						className="header-nav-sign-out"
					>
						<FontAwesomeIcon icon={faSignOutAlt} className="header-nav-icon" />
						Sign Out
					</NavLink>
				</div>
			) : (
				<nav className="header-nav">
					<NavLink to="/signin" className="header-nav-sign">
						<FontAwesomeIcon icon={faCircleUser} className="header-nav-icon" />
						Sign In
					</NavLink>
				</nav>
			)}
		</div>
	);
}

export default Header;
