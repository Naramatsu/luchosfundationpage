import React, { useEffect, useRef, useContext } from "react";
import VanillaTilt from "vanilla-tilt";
import { cardButton } from "./data";
import { AppContext } from "../../store";
import "./CardSection.style.scss";

const options = {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
};

const CardSection = ({ img, title, description }) => {
  const tilt = useRef(null);
  const { languaje } = useContext(AppContext);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  return (
    <section className="sections__card" ref={tilt}>
      <img src={img} alt="card_section" />
      <section className="sections__card__description">
        <h3 className="sections__card__title">{title}</h3>
        <p>{description}</p>
      </section>
      <button className="sections__card__button">{cardButton[languaje]}</button>
    </section>
  );
};

export default CardSection;
