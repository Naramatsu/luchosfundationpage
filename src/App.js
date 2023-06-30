import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Adopt from "./components/Adopt/Adopt";
import FloatButton from "./components/FloatButton/FloatButton";
import { Route, Switch } from "react-router-dom";
import "./App.style.scss";

const App = () => {
  return (
    <main className="App kromac-scroll">
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/adopt">
          <Adopt />
        </Route>
      </Switch>
      <FloatButton />
    </main>
  );
};

export default App;
