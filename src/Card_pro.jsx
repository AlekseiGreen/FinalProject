import imgTarget from "./img/imgTarget.svg";
import imgJackdaw from "./img/imgJackdaw.svg";


function Card_pro() {
    return(
        <div className="card-beginer">
            <div className="card-beginer-title">Pro</div>
            <div className="card-beginer-description">Для HR и фрилансеров</div>
            <div className="card-beginer-img"><img src={imgTarget} alt="IMG"></img></div>
            <div className="card-pro-background"></div>
            <div className="card-pro-price">1 299 ₽</div>
            <div className="card-pro-price-cross">2 600 ₽</div>
            <div className="card-beginer-price-description">или 279 ₽/мес. при рассрочке на 24 мес.</div>
            <div className="card-beginer-intarif">В тариф входит:</div>
            <div className="card-beginer-intarif-reviewOne">Все пункты тарифа Beginner</div>
            <div className="card-beginer-intarif-reviewTwo">Экспорт истории</div>
            <div className="card-beginer-intarif-reviewThree">Рекомендации по приоритетам</div>
            <div className="card-beginer-intarif-imgOne"><img src={imgJackdaw} alt="IMG"></img></div>
            <div className="card-beginer-intarif-imgTwo"><img src={imgJackdaw} alt="IMG"></img></div>
            <div className="card-beginer-intarif-imgThree"><img src={imgJackdaw} alt="IMG"></img></div>
            <div className="card-beginer-button">Перейти в личный кабинет</div>
        </div>
    );
};

export default Card_pro;
