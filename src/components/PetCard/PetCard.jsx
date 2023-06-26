import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./PetCard.style.scss";

const options = {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
};

const PetCard = ({ name, gender, photo }) => {
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  return (
    <section className="pet__card" ref={tilt}>
      <img src={photo} alt="pet" />
      <section className="pet__card__caption">
        <h3>{name}</h3>
        <p>{gender}</p>
      </section>
    </section>
  );
};

export default PetCard;
