import imgBook from "./img/imgBook.svg";
import imgJackdaw from "./img/imgJackdaw.svg";


function Card_business() {
    return(
        <div className="card-beginer">
            <div className="card-business-title">Business</div>
            <div className="card-business-description">Для корпоративных клиентов</div>
            <div className="card-beginer-img"><img src={imgBook} alt="IMG"></img></div>
            <div className="card-business-background"></div>
            <div className="card-pro-price">2 379 ₽</div>
            <div className="card-pro-price-cross">3 700 ₽</div>
            {/* <div className="card-beginer-price-description">или 279 ₽/мес. при рассрочке на 24 мес.</div> */}
            <div className="card-beginer-intarif">В тариф входит:</div>
            <div className="card-beginer-intarif-reviewOne">Все пункты тарифа Pro</div>
            <div className="card-beginer-intarif-reviewTwo">Безлимитное количество запросов</div>
            <div className="card-beginer-intarif-reviewThree">Приоритетная поддержка</div>
            <div className="card-beginer-intarif-imgOne"><img src={imgJackdaw} alt="IMG"></img></div>
            <div className="card-beginer-intarif-imgTwo"><img src={imgJackdaw} alt="IMG"></img></div>
            <div className="card-beginer-intarif-imgThree"><img src={imgJackdaw} alt="IMG"></img></div>
            <div className="card-beginer-button">Перейти в личный кабинет</div>
        </div>
    );
};

export default Card_business;
