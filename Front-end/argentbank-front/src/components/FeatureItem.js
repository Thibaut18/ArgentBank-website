import PropTypes from "prop-types";
import "../styles/Sass/FeatureItem.scss";

const FeatureItem = ({
	featureIcon,
	featureTitle,
	featureDescription,
	featureAlt,
}) => {
	return (
		<article className="feature-item">
			<img src={featureIcon} alt={featureAlt} className="feature-item-icon" />
			<h3 className="feature-item-title">{featureTitle}</h3>
			<p className="feature-item-description">{featureDescription}</p>
		</article>
	);
};

FeatureItem.propTypes = {
	featureIcon: PropTypes.string.isRequired,
	featureTitle: PropTypes.string.isRequired,
	featureDescription: PropTypes.string.isRequired,
	featureAlt: PropTypes.string.isRequired,
};

export default FeatureItem;
