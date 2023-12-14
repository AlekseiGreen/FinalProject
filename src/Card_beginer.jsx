import imgLamp from "./img/imgLamp.svg";
import imgJackdaw from "./img/imgJackdaw.svg";


function Card_beginer() {
    return(
        <div className="card-beginer">
            <div className="card-beginer-title">Beginner</div>
            <div className="card-beginer-description">Для небольшого исследования</div>
            <div className="card-beginer-img"><img src={imgLamp} alt="IMG"></img></div>
            <div className="card-beginer-background"></div>
            <div className="card-beginer-price">799 ₽</div>
            <div className="card-beginer-price-cross">1 200 ₽</div>
            <div className="card-beginer-price-description">или 150 ₽/мес. при рассрочке на 24 мес.</div>
            <div className="card-beginer-intarif">В тариф входит:</div>
            <div className="card-beginer-intarif-reviewOne">Безлимитная история запросов</div>
            <div className="card-beginer-intarif-reviewTwo">Безопасная сделка</div>
            <div className="card-beginer-intarif-reviewThree">Поддержка 24/7</div>
            <div className="card-beginer-intarif-imgOne"><img src={imgJackdaw} alt="IMG"></img></div>
            <div className="card-beginer-intarif-imgTwo"><img src={imgJackdaw} alt="IMG"></img></div>
            <div className="card-beginer-intarif-imgThree"><img src={imgJackdaw} alt="IMG"></img></div>
            <div className="card-beginer-button">Перейти в личный кабинет</div>
        </div>
    );
};

export default Card_beginer;