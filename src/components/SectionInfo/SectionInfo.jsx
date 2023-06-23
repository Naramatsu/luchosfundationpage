import React from "react";
import "./SectionInfo.style.scss";
import Container from "../Container/Container";

const img =
  "https://cloudfront-us-east-1.images.arcpublishing.com/semana/ZUKYARSM5FDDPDS7XKCTC7D6NU.jpg";

const SectionInfo = () => {
  return (
    <section className="section__info">
      <Container>
        <img src={img} alt="banner" />
        <section>
          <h3>Who We Are</h3>
          <p>
            The Animal Foundation, founded in 1978, is one of the highest volume
            single-site animal shelters in America. Our mission is to save all
            healthy and treatable animals in the Las Vegas Valley. Last year we
            saved over 15,500 lost, homeless, and often mistreated animals.
          </p>
          <button className="general__button">Learn More About Us</button>
        </section>
      </Container>
    </section>
  );
};

export default SectionInfo;
