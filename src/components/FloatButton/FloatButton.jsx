import React, { useState, useContext } from "react";
import Toggle from "kromac-ui-18/dist/Toggle";
import { AppContext } from "../../store";
import { AiFillSetting } from "react-icons/ai";
import { modalStettingLanguajeTitle } from "./data";
import "./FloatButton.style.scss";
import { LANGUAJE_ENGLISH, LANGUAJE_SPANISH } from "../../store/types";

const FloatButton = () => {
  const { languaje, setLanguaje } = useContext(AppContext);
  const [showModalSettings, setShowModalSettings] = useState(false);
  const modalStettingsClassName = showModalSettings ? "" : "hide";

  const handleChangeLanguaje = () => {
    setLanguaje(
      languaje === LANGUAJE_ENGLISH ? LANGUAJE_SPANISH : LANGUAJE_ENGLISH
    );
  };

  return (
    <>
      {showModalSettings}
      <section className={`modal__settings ${modalStettingsClassName}`}>
        <h5>{modalStettingLanguajeTitle[languaje]}</h5>
        <section className="modal__settings__toggle">
          <p>En</p>
          <Toggle
            onChange={handleChangeLanguaje}
            offColor="#16a488"
            onColor="#f79c31"
          />
          <p>Es</p>
        </section>
      </section>
      <button
        className="float__button"
        onClick={() => setShowModalSettings(!showModalSettings)}
      >
        <AiFillSetting />
      </button>
    </>
  );
};

export default FloatButton;
