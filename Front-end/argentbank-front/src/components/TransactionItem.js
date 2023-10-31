import PropTypes from "prop-types";

const TransactionItem = ({ accountName, balanceAmount, balanceStatus }) => {
	const formattedNumber = balanceAmount.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	});

	return (
		<section className="transaction-item-section">
			<div className="transaction-item-section-name-amount-status">
				<div>
					<h3 className="transaction-item-name">{accountName}</h3>
					<p className="transaction-item-amount">{formattedNumber}</p>
					<p className="transaction-item-status">{balanceStatus}</p>
				</div>
				<div>
					<button className="transaction-item-btn">View transactions</button>
				</div>
			</div>
		</section>
	);
};

TransactionItem.propTypes = {
	accountName: PropTypes.string.isRequired,
	balanceAmount: PropTypes.number.isRequired,
	balanceStatus: PropTypes.string.isRequired,
};

export default TransactionItem;
