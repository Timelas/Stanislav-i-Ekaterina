import React from "react";
import Title from "../Title/Title";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <Title title={"Детали"}/>
      <div className="details__stone"></div>
      <div className="details__stone2"></div>
      <p className="details__text">Обратите внимание, что формат мероприятия не предполагают детской площадки и аниматоров. Пожалуйста, позаботьтесь
о том, чтобы провести этот вечер без детей.</p>
      <div className="details__line"></div>
      <p className="details__text">Мы всегда рады красивым цветам и букетам, но количество перемещий и длительность праздника могут очень их утомить :)<br />Возможно, вы придумаете оригинальную альтернативу или подарите один букет от нескольких семей</p>
    </section>
  );
}

export default Details;