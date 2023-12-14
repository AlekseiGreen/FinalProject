import { Link } from 'react-router-dom';
import Logo from './img/LogoScan.svg'
import RectTopRight from './img/RectTopRight.svg'

function Header() {
    return(
        <div className="header">
            <div className='header-one'>
                <img src={Logo} alt='Logo'/>
            </div>
            <div className='header-two'>
                <Link to='/'>Главная</Link>
                <Link to='/'>Тарифы</Link>
                <Link to='/'>FAQ</Link>                
            </div>
            <div className='header-three'>
                <Link to='/Account' className='header-three-reg'>Зарегистрироваться</Link>
                <img className='header-three-img' src={RectTopRight} alt='RectTopRight'/>
                <Link to='/Account' className='header-three-enter'>Войти</Link>
            </div>
        </div>
    );
};

export default Header;