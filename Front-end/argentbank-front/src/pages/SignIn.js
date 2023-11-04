import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetTokenMutation } from "../features/api/apiSlice";
import { setLoggedIn } from "../features/auth/authSlice";
import "../styles/Sass/SignIn.scss";

const SignIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [shakingAnimation, setShakingAnimation] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const [getToken, { isLoading, isError }] = useGetTokenMutation();

	const token = useSelector((state) => state.auth.isLoggedIn);
	useEffect(() => {
		if (token) {
			navigate("/user");
		}
	}, [token, navigate]);

	const handleSubmit = (e) => {
		e.preventDefault();
		getToken({ email, password })
			.unwrap()
			.then((data) => {
				const receivedToken = data.body.token;
				setErrorMessage("");
				dispatch(setLoggedIn(receivedToken));
				navigate("/user");
			})
			.catch((error) => {
				setShakingAnimation(true);
				setTimeout(() => {
					setShakingAnimation(false);
				}, 500);
				setErrorMessage(error.data.message);
			});
	};

	const handleEmailInput = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordInput = (e) => {
		setPassword(e.target.value);
	};
	return (
		<div className="sign-in-section">
			<section
				className={`sign-in-section-content ${
					shakingAnimation ? "errorShaking" : ""
				}`}
			>
				<FontAwesomeIcon icon={faCircleUser} className="sign-in-section-icon" />
				<h1 className="sign-in-section-content-title">Sign In</h1>
				<p className="error-message">{isError && errorMessage}</p>
				<form onSubmit={handleSubmit}>
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
							className={`sign-in-section-user-and-mdp-input ${
								isError ? "error-input" : ""
							}`}
							onChange={handleEmailInput}
							value={email}
							required
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
							className={`sign-in-section-user-and-mdp-input ${
								isError ? "error-input" : ""
							}`}
							onChange={handlePasswordInput}
							value={password}
							required
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
					<button className="sign-in-section-btn">
						{isLoading ? "Loading..." : "Sign In"}
					</button>
				</form>
			</section>
		</div>
	);
};

export default SignIn;
