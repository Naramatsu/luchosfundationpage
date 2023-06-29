import React, { useContext } from "react";
import Container from "../Container";
import { AppContext } from "../../store";
import { bannerButton, bannerSubTitle, bannerTitle } from "./data";
import "./Banner.style.scss";

const bannerImg =
  "https://img.lalr.co/cms/2017/07/12221638/unnamed_8_0.jpg?size=xl&ratio=r40_21";

const Banner = () => {
  const { languaje } = useContext(AppContext);
  return (
    <section className="banner">
      <section className="banner__image">
        <img src={bannerImg} alt="banner" />
      </section>
      <Container>
        <section className="banner__description">
          <h1>{bannerTitle[languaje]}</h1>
          <h3>{bannerSubTitle[languaje]}</h3>
          <button className="general__button">{bannerButton[languaje]}</button>
        </section>
      </Container>
    </section>
  );
};

export default Banner;
