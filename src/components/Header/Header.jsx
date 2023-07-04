import React, { useContext } from "react";
import Container from "../Container/Container";
import Menu from "kromac-ui-18/dist/Menu";
import { Link } from "react-router-dom";
import { tabs } from "./data";
import { AppContext } from "../../store";
import "./Header.style.scss";

import logo from "./logo.svg";

const isLogoTabClassName = (imgTab) => (imgTab ? "logo" : "");
const tabMapToHamburgerMenu = (tabs) =>
  tabs.filter((tab) => !tab.img).map((tab) => tab.link);

const Header = () => {
  const { languaje } = useContext(AppContext);
  return (
    <header>
      <img src={logo} alt="logo" id="logoHamburgerMenu" />
      <Container>
        <section className="header__container">
          <ul className="header__list">
            {tabs[languaje].map((tab, index) => (
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
        tabs={tabMapToHamburgerMenu(tabs[languaje])}
        bgColor="#564990"
        hamburgerColor="#564990"
      />
    </header>
  );
};

export default Header;
