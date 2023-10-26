import Banner from "../components/Banner";
import FeatureItem from "../components/FeatureItem";
import chatIcon from "../assets/icon-chat.png";
import moneyIcon from "../assets/icon-money.png";
import securityIcon from "../assets/icon-security.png";
import bannerImg from "../assets/bank-tree.jpeg";

const Homepage = () => {
  return (
    <>
      <Banner
        bannerImg={bannerImg}
        titleA="No fees."
        titleB="No minimum deposit."
        titleC="High interest rates."
        bannerTxt="Open a savings account with Argent Bank today!"
      />
      <section className="feature-items">
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
    </>
  );
};

export default Homepage;