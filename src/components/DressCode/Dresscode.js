import React from "react";
import Title from "../Title/Title";
import "./Dresscode.css";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <Title title={"Dress code"}/>
      <p className="dresscode__description">Будем признательны, если вы поддержите цветовую гамму нашего праздника в своих нарядах:</p>
      <div className="dresscode__colors">
        <div className="dresscode__color dresscode__color_var_one"></div>
        <div className="dresscode__color dresscode__color_var_two"></div>
        <div className="dresscode__color dresscode__color_var_three"></div>
        <div className="dresscode__color dresscode__color_var_four"></div>
        <div className="dresscode__color dresscode__color_var_five"></div>
      </div>
    </section>
  );
}

export default Dresscode;