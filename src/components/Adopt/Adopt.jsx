import React, { useContext } from "react";
import Container from "../Container";
import PetCard from "../PetCard/PetCard";
import Filter from "../Filter/Filter";
import { AppContext } from "../../store";
import {
  adoptBanner,
  adoptButtonBanner,
  adoptDirectory,
  adoptGreenText,
  adoptTitle,
  petList,
} from "./data";
import "./Adopt.style.scss";

const bannerImg =
  "https://i1.wp.com/pet-care.co.za/wp-content/uploads/2018/07/Pet-Care-Banner.jpg";

const Adopt = () => {
  const { languaje } = useContext(AppContext);
  return (
    <section className="section">
      <section
        className="adopt__banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1>{adoptTitle[languaje]}</h1>
      </section>
      <Container>
        <section className="search__banner">
          <h2>{adoptBanner[languaje]}</h2>
          <button className="general__button">
            {adoptButtonBanner[languaje]}
          </button>
        </section>
        <h3>{adoptGreenText[languaje]}</h3>
        <h2 className="pet__directory">{adoptDirectory[languaje]}</h2>
        <span></span>

        <Filter />
        <section className="list">
          {petList[languaje].map((pet, index) => (
            <PetCard
              key={index}
              name={pet.name}
              gender={pet.gender}
              photo={pet.img}
            />
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Adopt;
