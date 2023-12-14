import Card_beginer from "./Card_beginer.jsx";
import Card_pro from "./Card_pro.jsx";
import Card_business from "./Card_business.jsx";

import imgTarget from "./img/imgTarget.svg";
import imgBook from "./img/imgBook.svg";


function Section_four() {
	return(
		<div className="section-four">
			<div className="section-four-title">Наши тарифы</div>
			<div className="section-four-cards">
				<Card_beginer />
				<Card_pro />
				<Card_business />
			</div>
		</div>
	);
};

export default Section_four;
