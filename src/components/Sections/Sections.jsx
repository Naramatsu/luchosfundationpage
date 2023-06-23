import React from "react";
import Container from "../Container/Container";
import CardSection from "../CardSection/CardSection";
import { data } from "./data";
import "./Sections.style.scss";

const Sections = () => {
  return (
    <section className="sections">
      <section className="bg"></section>
      <Container>
        {data.map((card, index) => (
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
