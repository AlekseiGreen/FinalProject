import iconsLeft from "./img/iconsLeft.svg";
import iconsRight from "./img/iconsRight.svg";
import imgClock from "./img/imgClock.svg"
import imgLens from "./img/imgLens.svg"
import imgGuard from "./img/imgGuard.svg"
import Group_222n from "./Group_222n";


function Group_2() {

	function clickLeft() {
		console.log('Click Left');
	}

	function clickRight() {
		console.log('Click Right');
	}

	return(
		<div className="Group_2">
			<p className="Group_21">ПОЧЕМУ ИМЕННО МЫ</p>
			<div className="Group_22">
				<div className="Group_221">
					<a onClick={clickLeft}><img src={iconsLeft}/></a>
				</div>
				<div className="Group_222">
				<Group_222n imgR={imgClock} title="Высокая и оперативная скорость обработки заявки"/>
				<Group_222n imgR={imgLens} title="Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"/>
				<Group_222n imgR={imgGuard} title="Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству"/>
				</div>
				<div className="Group_223">
					<a onClick={clickRight}><img src={iconsRight}/></a>
				</div>
			</div>			
		</div>
	);
};

export default Group_2;