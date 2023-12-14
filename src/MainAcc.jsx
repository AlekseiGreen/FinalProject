import imgCharacters from "./img/imgCharacters.svg";
import imgGoogle from "./img/imgGoogle.svg";
import imgFacebook from "./img/imgFacebook.svg";
import imgYandex from "./img/imgYandex.svg";
import imgLock from "./img/imgLock.svg";


function MainAcc() {
    return(
    <div className="MainAcc">
      <div className="MainAcc-title">
        Для оформления подписки на тариф, необходимо авторизоваться.
      </div>
      <div className="MainAcc-img">
        <img src={imgCharacters} alt="IMG"/>
      </div>
      <div className="MainAcc-box">
        <div className="MainAcc-box-comein">Войти</div>
        <div className="MainAcc-box-comein-underline"></div>
        <div className="MainAcc-box-register">Зарегистрироваться</div>
        <div className="MainAcc-box-register-line"></div>
        <div className="MainAcc-box-log">Логин и номер телефона:</div>
        <input className="MainAcc-box-log-telephone"/>
        <div className="MainAcc-box-password">Пароль:</div>
        <input className="MainAcc-box-password-enter"/>
        <div href='#' className="MainAcc-box-button">Войти</div>
        <div className="MainAcc-box-restore">Восстановить пароль</div>
        <div  className="MainAcc-box-loginVia">Войти через:</div>
        <div className="MainAcc-box-google"><img src={imgGoogle} alt="GOOGLE"/></div>
        <div className="MainAcc-box-facebook"><img src={imgFacebook} alt="FACEBOOK"/></div>
        <div className="MainAcc-box-yandex"><img src={imgYandex} alt="YANDEX"/></div>
        <div className="MainAcc-box-lock"><img src={imgLock} alt="LOCK"/></div>
      </div>
    </div>
    )
};

export default MainAcc;