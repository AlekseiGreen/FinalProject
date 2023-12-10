import Man from "./img/img_t_r.svg";


function Group_1() {
	return(
		<div className="Group_1">
			<div className="Group_11">СЕРВИС ПО ПОИСКУ ПУЛИКАЦИЙ <br/>О КОМПАНИИ<br/>ПО ЕГО ИНН</div>
			<div className="Group_12">
				<p>Комплексный анализ публикаций, получение данных<br/>
				в формате PDF на электронную почту.</p>
				<button href='#' className='Group_12-button'>Запросить данные</button>
			</div>
			<div className="Group_13">
				<img src={Man}/>
			</div>
		</div>
	);
};

export default Group_1;
