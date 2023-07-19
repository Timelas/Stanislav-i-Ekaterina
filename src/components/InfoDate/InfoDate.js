import React from "react";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date">
      <div className="info-date__invitation">
        <p className="info-date__who">Дорогие</p>
        <p className="info-date__who">родные и друзья!</p>
        <p className="info-date__text">Один день в этом году будет для нас особенным и мы хотим провести его в кругу близких и друзей. С большим удовольствием приглашаем вас на знаменательный праздник - </p>
        <div className="info-date__our-wedding"><p className="info-date__our-wedding-text">Нашу свадьбу!</p></div>
      </div>
      <div className="info-date__stone"></div>
      <div className="info-date__place" id="place">
        <div className="info-date__check-in">
          <p className="info-date__what">Торжественная регистрация</p>
          <p className="info-date__where">Большой Гатчинский дворец<br />Красноармейский проспект, 1, Гатчина<br />Регистрация в 13.00</p>
        </div>
        <p className="info-date__day-week">Суббота</p>
        <div className="info-date__day">
          <p className="info-date__number">12</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">08</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">23</p>
        </div>
        <p className="info-date__time">Сбор гостей в 12.30<br />у входа во внутренний двор Арсенального каре</p>
        <div className="info-date__banquet">
          <p className="info-date__what">Празднчный банкет</p>
          <p className="info-date__where">Банкетный зал "Ропшинская рапсодия"<br />Кировский пер., 2, поселок Ропша<br />В 16:00</p>
        </div>
      </div>
    </section>
  );
}

export default InfoDate;