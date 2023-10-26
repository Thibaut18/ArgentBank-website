import PropTypes from "prop-types";

const Banner = ({ bannerImg, titleA, titleB, titleC, bannerTxt }) => {
    return (
      <div className="banner">
        <img
          src={bannerImg}
          alt="banner"
          className="banner-img"
        />
        <section className="banner-titles">
            <h2 className="banner-titles-abc">{titleA}</h2>
            <h2 className="banner-titles-abc">{titleB}</h2>
            <h2 className="banner-titles-abc">{titleC}</h2>
            <p className="banner-txt">
              {bannerTxt}
            </p>
        </section>
      </div>
    );
  };

  Banner.propTypes = {
    bannerImg: PropTypes.string.isRequired,
    titleA: PropTypes.string.isRequired,
    titleB: PropTypes.string.isRequired,
    titleC: PropTypes.string.isRequired,
    bannerTxt: PropTypes.string.isRequired,
  };

  export default Banner;