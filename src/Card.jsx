

function Card(props) {

    let classN = 'Group_12-button ';
    classN = classN + props.buttonD;

    return(
        <div className="Card-tariff">
            <div className={props.colorT}>
                <div className="card-tariff-title">{props.title}</div>
                <div className="card-tariff-preview">{props.preview}</div>
                <div className="card-tariff-img"><img src={props.imgT} alt="IMG"/></div>
            </div>
            <div>
                <dev>Текущий тариф</dev>
                <div>799Р 1200Р</div>
                <div>или 150Р/мес. при рассрочке на 24 мес.</div>
                <ul>
                    <p>Безлимитная история запросов</p>
                    
                    <li>Безлимитная история запросов</li>
                    <li>Безопасная сделка</li>
                    <li>Поддержка 24/7</li>
                </ul>
                <button href='#' className={classN}>Подробнее</button>
            </div>
	    </div>
    );
};

export default Card;
