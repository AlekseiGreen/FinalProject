import FindCard from './FindCard.jsx';
import imgDoc from "./img/imgDoc.svg";
import imgFold from "./img/imgFold.svg";
import imgManRock from "./img/imgManRock.svg";


function FindMain() {
    return(
        <div className="findMain">
            <div className="findMain-top">
                <div className="findMain-title">Найдите необходимые данные в пару кликов.</div>
                <div className="findMain-description">Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</div>
                <div className="findMain-imgDoc"><img src={imgDoc} alt="IMG"/></div>
                <div className="findMain-imgFold"><img src={imgFold} alt="IMG"/></div>
            </div>
            <div className="findMain-bottom">
                <FindCard />
                <div className="findMain-imgManRock"><img src={imgManRock} alt="IMG"/></div>
            </div>
        </div>
    );
};

export default FindMain;
