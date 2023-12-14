import logo_D from "./img/logo_D.svg";


function Footer() {
    return(
        <div className="footer">
            <img className="footer-logo" src={logo_D} alt="logo"/>
            <div className="footer-contact">г. Москва, Цветной б-р, 40
                                                        +7 495 771 21 11
                                                        info@skan.ru</div>
            <div className="footer-copyR">Copyright. 2022</div>
        </div>
    );
};

export default Footer;
