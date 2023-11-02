import TransactionItem from "../components/TransactionItem";
import EditUserName from "../components/EditUserName";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "../styles/Sass/User.scss";

const User = () => {
	const userProfile = useSelector((state) => state.user);
	const token = useSelector((state) => state.auth.token);
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate("/signin");
		}
	}, [token, navigate]);

	return (
		<div className="user">
			<section className="user-section">
				<h2 className="user-section-welcome">Welcome back</h2>
				<p className="user-section-full-name">
					{userProfile
						? `${userProfile.firstName} ${userProfile.lastName} !`
						: "Loading..."}
				</p>
				<EditUserName />
			</section>
			<TransactionItem
				title="Argent Bank Checking (x8349)"
				amount={2082.79}
				amountDescription="Available Balance"
			/>
			<TransactionItem
				title="Argent Bank Savings (x6712)"
				amount={10928.42}
				amountDescription="Available Balance"
			/>
			<TransactionItem
				title="Argent Bank Checking (x8349)"
				amount={184.3}
				amountDescription="Current Balance
        "
			/>
		</div>
	);
};
export default User;
