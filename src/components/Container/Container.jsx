import React from "react";
import "./Container.style.scss";

const Container = (props) => (
  <section className="container">{props.children}</section>
);

export default Container;
