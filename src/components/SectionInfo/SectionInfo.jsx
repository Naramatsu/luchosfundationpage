import React, { useContext } from "react";
import Container from "../Container/Container";
import { AppContext } from "../../store";
import { sectionInfoButton, sectionInfoText, sectionInfoTitle } from "./data";
import "./SectionInfo.style.scss";

const img =
  "https://cloudfront-us-east-1.images.arcpublishing.com/semana/ZUKYARSM5FDDPDS7XKCTC7D6NU.jpg";

const SectionInfo = () => {
  const { languaje } = useContext(AppContext);
  return (
    <section className="section__info">
      <Container>
        <img src={img} alt="banner" />
        <section>
          <h3>{sectionInfoTitle[languaje]}</h3>
          <p>{sectionInfoText[languaje]}</p>
          <button className="general__button">
            {sectionInfoButton[languaje]}
          </button>
        </section>
      </Container>
    </section>
  );
};

export default SectionInfo;
