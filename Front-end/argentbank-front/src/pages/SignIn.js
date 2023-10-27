import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/Sass/SignIn.scss";

const SignIn = () => {
	return (
		<div className="sign-in-section">
			<section className="sign-in-section-content">
				<FontAwesomeIcon icon={faCircleUser} />
				<h1 className="sign-in-section-content-title">Sign In</h1>
				<form>
					<div className="sign-in-section-user-and-mdp">
						<label className="wait" htmlFor="username">
							Username
						</label>
						<input type="text" id="username" className="wait" />
					</div>
					<div className="sign-in-section-user-and-mdp">
						<label className="wait" htmlFor="password">
							Password
						</label>
						<input type="password" id="password" className="wait" />
					</div>
					<div>
						<input type="checkbox" id="remember-me" />
						<label
							className="sign-in-section-remember-me"
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
