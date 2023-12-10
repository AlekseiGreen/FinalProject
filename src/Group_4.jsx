import Card from "./Card";
import imgLamp from "./img/imgLamp.svg";
import imgTarget from "./img/imgTarget.svg";
import imgBook from "./img/imgBook.svg";


function Group_4() {
	return(
		<div className="Group_4">
			<div className="Group_41">Наши тарифы</div>
			<div className="Group_42">
				<Card title="Beginer" preview="Для небольшого исследования" colorT="Card-tariff-colorY" imgT={imgLamp} buttonD="center"/>
				<Card title="Pro" preview="Для HR и фрилансеров" colorT="Card-tariff-colorT" imgT={imgTarget} buttonD="center"/>
				<Card title="Business" preview="Для корпоративных клиентов" colorT="Card-tariff-colorB" imgT={imgBook} buttonD="center"/>
			</div>
		</div>
	);
};

export default Group_4;
