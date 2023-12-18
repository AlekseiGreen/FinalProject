function FindCard() {
    return(
        <div className="findCard">
            <div className="findCard-title findCard-pos-one">ИНН компании</div>
            <div className="findCard-star findCard-star-pos-one">*</div>
            <div><input className="findCard-input-one"/></div>
            <div className="findCard-title findCard-pos-two">Тотальность</div>
            <div><input className="findCard-input-two"/></div>
            <div className="findCard-title findCard-pos-three">Количество документов в выдаче</div>
            <div className="findCard-star findCard-star-pos-two">*</div>
            <div><input className="findCard-input-three"/></div>
            <div className="findCard-title findCard-pos-four">Диапазон поиска</div>
            <div className="findCard-star findCard-star-pos-three">*</div>
            <div><input className="findCard-input-four"/></div>
            <div><input className="findCard-input-five"/></div>

            <div><input type="checkbox" className="findCard-checkbox-one"/></div>
            <div className="findCard-title findCard-checkbox-pos-one">Признак максимальной полноты</div>
            <div><input type="checkbox" className="findCard-checkbox-two"/></div>
            <div className="findCard-title findCard-checkbox-pos-two">Упоминания в бизнес-контексте</div>
            <div><input type="checkbox" className="findCard-checkbox-three"/></div>
            <div className="findCard-title findCard-checkbox-pos-three">Главная роль в публикации</div>
            <div><input type="checkbox" className="findCard-checkbox-four"/></div>
            <div className="findCard-title findCard-checkbox-pos-four">Публикации только с риск-факторами</div>
            <div><input type="checkbox" className="findCard-checkbox-five"/></div>
            <div className="findCard-title findCard-checkbox-pos-five">Включать технические новости рынков</div>
            <div><input type="checkbox" className="findCard-checkbox-six"/></div>
            <div className="findCard-title findCard-checkbox-pos-six">Включать анонсы и календари</div>
            <div><input type="checkbox" className="findCard-checkbox-seven"/></div>
            <div className="findCard-title findCard-checkbox-pos-seven">Включать сводки новостей</div>
            <div href="#" className="findCard-button">ПОИСК</div>
            <div className="findCard-text">* Обязательные к заполнению поля</div>
        </div>
    );
};

export default FindCard;
