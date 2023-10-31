import PropTypes from "prop-types";
import "../styles/Sass/TransactionItem.scss";

const TransactionItem = ({ title, amount, amountDescription }) => {
	const formattedNumber = amount.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	});

	return (
		<section className="transaction-item-section">
			<div className="transaction-item-section-title-amount-amountDescription">
				<h3 className="transaction-item-section-title">{title}</h3>
				<p className="transaction-item-section-amount">{formattedNumber}</p>
				<p className="transaction-item-section-amountDescription">
					{amountDescription}
				</p>
			</div>
			<div className="transaction-item-section-btn-div">
				<button className="transaction-item-section-btn">
					View transactions
				</button>
			</div>
		</section>
	);
};

TransactionItem.propTypes = {
	title: PropTypes.string.isRequired,
	amount: PropTypes.number.isRequired,
	amountDescription: PropTypes.string.isRequired,
};

export default TransactionItem;
