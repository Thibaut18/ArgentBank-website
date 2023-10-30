import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/Sass/SignIn.scss";

const SignIn = () => {
	return (
		<div className="sign-in-section">
			<section className="sign-in-section-content">
				<FontAwesomeIcon icon={faCircleUser} className="sign-in-section-icon" />
				<h1 className="sign-in-section-content-title">Sign In</h1>
				<form>
					<div className="sign-in-section-user-and-mdp">
						<label
							className="sign-in-section-user-and-mdp-label"
							htmlFor="username"
						>
							Username
						</label>
						<input
							type="text"
							id="username"
							className="sign-in-section-user-and-mdp-input"
						/>
					</div>
					<div className="sign-in-section-user-and-mdp">
						<label
							className="sign-in-section-user-and-mdp-label"
							htmlFor="password"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							className="sign-in-section-user-and-mdp-input"
						/>
					</div>
					<div className="sign-in-section-remember-me">
						<input type="checkbox" id="remember-me" />
						<label
							className="sign-in-section-remember-me-label"
							htmlFor="remember-me"
						>
							Remember me
						</label>
					</div>

					<button className="sign-in-section-btn"> Sign In</button>
				</form>
			</section>
		</div>
	);
};

export default SignIn;
