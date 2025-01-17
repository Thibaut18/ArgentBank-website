import Banner from "../components/Banner";
import FeatureItem from "../components/FeatureItem";
import chatIcon from "../assets/icon-chat.png";
import moneyIcon from "../assets/icon-money.png";
import securityIcon from "../assets/icon-security.png";
import bannerImg from "../assets/bank-tree.webp";
import "../styles/Sass/Homepage.scss";

const Homepage = () => {
	return (
		<div className="main-section">
			<Banner
				bannerImg={bannerImg}
				subtitleA="No fees."
				subtitleB="No minimum deposit."
				subtitleC="High interest rates."
				bannerTxt="Open a savings account with Argent Bank today!"
			/>
			<section className="feature-items">
				<h2 className="sr-only">Features</h2>
				<FeatureItem
					featureIcon={chatIcon}
					featureAlt="chat-icon"
					featureTitle="You are our #1 priority"
					featureDescription="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
				/>
				<FeatureItem
					featureIcon={moneyIcon}
					featureAlt="money-icon"
					featureTitle="More savings means higher rates"
					featureDescription="The more you save with us, the higher your interest rate will be!"
				/>
				<FeatureItem
					featureIcon={securityIcon}
					featureAlt="security-icon"
					featureTitle="Security you can trust"
					featureDescription="We use top of the line encryption to make sure your data and money is always safe."
				/>
			</section>
		</div>
	);
};

export default Homepage;
