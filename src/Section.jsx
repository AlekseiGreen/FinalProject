import { Link } from 'react-router-dom';
import Man from "./img/img_t_r.svg";
import RectWhite from "./img/RectWhite.svg";


function Section() {
	return(
		<div className="section">
			<div className="section-title">СЕРВИС ПО ПОИСКУ ПУЛИКАЦИЙ О КОМПАНИИ<br/>ПО ЕГО ИНН</div>
			<div className="section-description">
				Комплексный анализ публикаций, получение данных	в формате PDF на электронную почту.
			</div>
			<Link to='/Search'><div className='section-button'>Запросить данные</div></Link>
			<div className="section-img">
				<img src={Man} alt="IMG"/>
			</div>
			<div className="section-img-rectWhite"><img src={RectWhite} alt="IMG"/></div>
		</div>
	);
};

export default Section;
