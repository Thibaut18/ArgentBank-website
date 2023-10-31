// component
import TransactionItem from "../components/TransactionItem";
// router
import { useNavigate } from "react-router-dom";

// redux
import { useSelector } from "react-redux";
// react
import { useEffect } from "react";

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
			</section>
			<TransactionItem
				accountName="Argent Bank Checking (x8349)"
				balanceAmount={2082.79}
				balanceStatus="Available Balance"
			/>
			<TransactionItem
				accountName="Argent Bank Savings (x6712)"
				balanceAmount={10928.42}
				balanceStatus="Available Balance"
			/>
			<TransactionItem
				accountName="Argent Bank Checking (x8349)"
				balanceAmount={184.3}
				balanceStatus="Current Balance
        "
			/>
		</div>
	);
};
export default User;
