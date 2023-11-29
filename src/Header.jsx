import Logo from './img/LogoScan.svg'
import RectTopRight from './img/RectTopRight.svg'

function Header() {
    return(
        <div className="header">
            <div className='header-one'>
                <img src={Logo} alt='Logo'/>
            </div>
            <div className='header-two'>
                <a href='#'>Главная</a>
                <a href='#'>Тарифы</a>
                <a href='#'>FAQ</a>                
            </div>
            <div className='header-three'>
                <a href='#' className='header-three-reg'>Зарегистрироваться</a>
                <img className='header-three-img' src={RectTopRight} alt='RectTopRight'/>
                <a href='#' className='header-three-enter'>Войти</a>
            </div>
        </div>
    );
};

export default Header;