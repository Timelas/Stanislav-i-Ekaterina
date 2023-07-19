import React from 'react';
import Menu from "../Menu/Menu";
import Timer from "../Timer/Timer";
import Main from "../Main/Main";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import './App.css';


function App() {
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);
  const [isCloseBurger, setIsCloseBurger] = React.useState(true);
  const [isChangeBurger, setIsChangeBurger] = React.useState(false);

  function changeBurger() {
    if (isChangeBurger) {
      handleCloseBurger ();
    } else {
      handleOpenBurger ();
    }
  }
  
  function handleOpenBurger () {
    setIsOpenBurger(true);
    setIsButtonVisible(false);
    setIsCloseBurger(false);
    setIsChangeBurger(true);
  }

  function handleCloseBurger () {
    setIsOpenBurger(false);
    setIsButtonVisible(true);
    setIsCloseBurger(true);
    setIsChangeBurger(false);
  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Этот день настал!</span>;
    } else {
      return <Timer
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}/>;
    }
  };

  return (
    <div className="App">
      <Menu
        isChangeBurger={isChangeBurger}
        onVisibleBurger={changeBurger} />
      <Main 
          date={"2023-08-12T13:00:00+00:00"}
          renderer={renderer}
          isOpenBurger={isOpenBurger}
          onCloseBurger={changeBurger}/>
      <BurgerMenu
        isOpenBurger={isOpenBurger}
        onCloseBurger={changeBurger} />
    </div>
  );
}

export default App;
