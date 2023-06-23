import React from "react";
import "./Banner.style.scss";
import Container from "../Container";

const bannerImg =
  "https://img.lalr.co/cms/2017/07/12221638/unnamed_8_0.jpg?size=xl&ratio=r40_21";

const Banner = () => (
  <section className="banner">
    <section className="banner__image">
      <img src={bannerImg} alt="banner" />
    </section>
    <Container>
      <section className="banner__description">
        <h1>Become a Lifesaver</h1>
        <h3>Rescue Your Next Pet.</h3>
        <button className="general__button">ADOPT NOW</button>
      </section>
    </Container>
  </section>
);

export default Banner;
