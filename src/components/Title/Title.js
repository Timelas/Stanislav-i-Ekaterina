import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <section className="title">
        <h2 className="title__title">{props.title}</h2>
    </section>
  );
}

export default Title;