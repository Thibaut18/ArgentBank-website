import PropTypes from "prop-types";
import "../styles/Sass/Banner.scss";

const Banner = ({ bannerImg, subtitleA, subtitleB, subtitleC, bannerTxt }) => {
	return (
		<div className="banner">
			<img src={bannerImg} alt="banner" className="banner-img" />
			<section className="banner-titles-and-txt">
				<h2 className="sr-only">Promoted Content</h2>
				<p className="banner-subtitles-abc">{subtitleA}</p>
				<p className="banner-subtitles-abc">{subtitleB}</p>
				<p className="banner-subtitles-abc">{subtitleC}</p>
				<p className="banner-txt">{bannerTxt}</p>
			</section>
		</div>
	);
};

Banner.propTypes = {
	bannerImg: PropTypes.string.isRequired,
	subtitleA: PropTypes.string.isRequired,
	subtitleB: PropTypes.string.isRequired,
	subtitleC: PropTypes.string.isRequired,
	bannerTxt: PropTypes.string.isRequired,
};

export default Banner;
