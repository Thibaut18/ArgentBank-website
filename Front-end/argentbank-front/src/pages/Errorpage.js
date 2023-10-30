import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Sass/Errorpage.scss";

function ErrorPage() {
	const error = useRouteError();
	if (error) {
		console.error(error);
	}

	return (
		<div id="error-page">
			<div className="error-page-content">
				<h1 className="error-page-code">404</h1>
				<p className="error-page-txt">
					Oups! La page que vous demandez n&apos;existe pas.
				</p>
				<Link to="/homepage" className="error-page-back-to-homepage-link">
					Retourner sur la page n&apos;accueil
				</Link>
			</div>
		</div>
	);
}

export default ErrorPage;
