import React from "react";
import Countdown from 'react-countdown';
import Header from "../Header/Header";
import InfoDate from "../InfoDate/InfoDate";
import Timetable from "../Timetable/Timetable";
import Dresscode from "../DressCode/Dresscode";
import Details from "../Details/Details";
import Rsvp from "../RSVP/Rsvp";
import Questions from "../Questions/Questions"
import Footer from "../Footer/Footer";
import "./Main.css";

function Main(props) {
  const {renderer, date} = props;

  return (
    <section className="main">
      <Header />
      <InfoDate />
      <Timetable />
      <Dresscode />
      <Details />
      <Countdown
        date={date}
        renderer={renderer}/>
      <Rsvp />
      <Questions />
      <Footer />
    </section>
  );
}

export default Main;