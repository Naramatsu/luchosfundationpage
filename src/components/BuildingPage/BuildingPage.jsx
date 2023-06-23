import React from "react";
import "./BuildingPage.style.scss";
import Container from "../Container/Container";

const runningDog =
  "https://static.wixstatic.com/media/bef614_d58e452e2688fc2a8b35960bdafcf7b5.gif";

const logo = "logo.png";

const BuildingPage = () => (
  <section className="building__page">
    <Container>
      <img src={logo} alt="logo" className="logo" />
      <h3>
        We are building this project in hope you can know more about us, and
        turn into a super hero for these four paws angels.
      </h3>
    </Container>
    <img src={runningDog} alt="running_dog" className="running__dog" />
  </section>
);

export default BuildingPage;
