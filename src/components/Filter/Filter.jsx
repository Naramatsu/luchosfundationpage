import React from "react";
import "./Filter.style.scss";

const Filter = () => {
  return (
    <section className="filter">
      <section className="filter__section">
        <p>Type</p>
        <select>
          <option></option>
          <option>Dog</option>
          <option>Cat</option>
        </select>
      </section>
      <section className="filter__section">
        <p>Gender</p>
        <select>
          <option></option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </section>
      <section className="filter__section">
        <p>Size</p>
        <select>
          <option></option>
          <option>Small</option>
          <option>Medium</option>
          <option>Big</option>
        </select>
      </section>
    </section>
  );
};

export default Filter;
