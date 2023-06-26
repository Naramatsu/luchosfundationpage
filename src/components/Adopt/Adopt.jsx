import React from "react";
import Container from "../Container";
import { petList } from "./data";
import PetCard from "../PetCard/PetCard";
import "./Adopt.style.scss";
import Filter from "../Filter/Filter";

const bannerImg =
  "https://i1.wp.com/pet-care.co.za/wp-content/uploads/2018/07/Pet-Care-Banner.jpg";

const Adopt = () => (
  <section className="section">
    <section
      className="adopt__banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <h1>Adopt a Pet</h1>
    </section>
    <Container>
      <section className="search__banner">
        <h2>Looking for a pet? Start your search here!</h2>
        <button className="general__button">Pet search</button>
      </section>
      <h3>
        We are open to walk-in traffic Tuesday through Sunday, beginning at
        11am. When you arrive, you will be added to a waiting list.You must have
        an animal ID# prepared to be added to the waiting list. There may be a
        wait to meet a pet, or the waiting list may be full for the day.{" "}
      </h3>
      <h2 className="pet__directory">Directory</h2>
      <span></span>

      <Filter />
      <section className="list">
        {petList.map((pet, index) => (
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

export default Adopt;
