import React from "react";
import "./Header.style.scss";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { tabs } from "./data";
import Menu from "kromac-ui-18/dist/Menu";
const logo = "logo.png";

const isLogoTabClassName = (imgTab) => (imgTab ? "logo" : "");
const tabMapToHamburgerMenu = () =>
  tabs.filter((tab) => !tab.img).map((tab) => tab.link);

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" id="logoHamburgerMenu" />
      <Container>
        <section className="header__container">
          <ul className="header__list">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`header__list__item ${isLogoTabClassName(tab.img)}`}
              >
                <Link to={`/${tab.link}`}>
                  {tab.img ? <img src={tab.img} alt="logo" /> : tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
      <Menu
        imgLogo={logo}
        tabs={tabMapToHamburgerMenu()}
        bgColor="#564990"
        hamburgerColor="#564990"
      />
    </header>
  );
};

export default Header;
