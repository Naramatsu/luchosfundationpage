import React from "react";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Adopt from "./components/Adopt/Adopt";
import HomePage from "./components/HomePage/HomePage";
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
    </main>
  );
};

export default App;
