import React, {useState, useRef} from "react";
import Title from "../Title/Title";
import "./Rsvp.css";

function Rsvp() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwHwD1eQtNqrfeqjtdxIR0xT43SOSW_N3blDutOTBLr1nvD1s8e6J9UbPy4Vwg6llBj/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isSubmitChange, setIsSubmitChange] = useState(true);

  function renderSubmitNo () {
    setIsSubmitChange(false)
  }

  function renderSubmitYes() {
    setIsSubmitChange(true)
  }

  const handleSubmitNo = (e) =>{
    e.preventDefault()
    setLoading(true)
    const FormNew = new FormData(formRef.current);
    FormNew.append('Form', 'rsvp-no');

    fetch(scriptUrl, {
    method: 'POST',
    body: FormNew,

}).then(res => {
        setLoading(false);
        setIsFormVisible(false);
    })
    .catch(err => console.log(err))
}
  
  const handleSubmitYes = (e) =>{
      e.preventDefault()
      setLoading(true)
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'rsvp-yes');

      fetch(scriptUrl, {
      method: 'POST',
      body: FormNew,

  }).then(res => {
          setLoading(false);
          setIsFormVisible(false);
      })
      .catch(err => console.log(err))
  }

  function returnForm () {
    setIsFormVisible(true);
  }

  return (
    <section className="rsvp" id="rsvp">
      <Title title={"RSVP"}/>
      <div className="rsvp__stone"></div>
      { isFormVisible ?
      <div className="rsvp__container">
        <p className="rsvp__text">Пожалуйста, подтвердите ваше присутствие на нашем празднике до
        27 июля 2023 года любым удобным для вас способом или заполните форму ниже:
        </p>
        <form className="rsvp__form" ref={formRef} name="rsvp" id="rsvp" onSubmit={isSubmitChange ? handleSubmitYes : handleSubmitNo}>
          <p className="rsvp__string">
            <label htmlFor="name" className="rsvp__label">Фамилия и имя</label>
            <input type="text" name="Имя и Фамилия" id="name" required className="rsvp__input"></input>
          </p>
          <p className="rsvp__string">
            <label htmlFor="person" className="rsvp__label">Количество персон</label>
            <input type="number" min="0" max="10" name="Количество персон" id="person" required className="rsvp__input"></input>
          </p>
          <div className="rsvp__buttons">
          <button className="rsvp__button" name="Принято" onClick={renderSubmitYes} disabled={loading ? true : false}>{loading ? "Отправка..." : "Подтвердить"}</button>
          <button className="rsvp__button" name="Отклонено" onClick={renderSubmitNo} disabled={loading ? true : false}>{loading ? "Отправка..." : "Отклонить"}</button>
          </div>
        </form>
      </div> :
      <div>
        <p className="rsvp__answer">Форма отправлена!</p>
        <button className="rsvp__return" onClick={returnForm}>Планы поменялись? Заполнить форму заново</button>
      </div>
      } 
    </section>
  );
}

export default Rsvp;