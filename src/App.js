import React from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Sections from "./components/Sections/Sections";
import SectionInfo from "./components/SectionInfo/SectionInfo";

import "./App.style.scss";

const App = () => {
  return (
    <main className="App kromac-scroll">
      <Header />
      <Banner />
      <Sections />
      <SectionInfo />
    </main>
  );
};

export default App;
