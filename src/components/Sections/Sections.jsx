import React, { useContext } from "react";
import Container from "../Container/Container";
import CardSection from "../CardSection/CardSection";
import { AppContext } from "../../store";
import { data } from "./data";
import "./Sections.style.scss";

const Sections = () => {
  const { languaje } = useContext(AppContext);
  return (
    <section className="sections">
      <section className="bg"></section>
      <Container>
        {data[languaje].map((card, index) => (
          <CardSection
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
      </Container>
    </section>
  );
};

export default Sections;
