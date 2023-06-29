import React, { useContext } from "react";
import { AppContext } from "../../store";
import { filterOptions } from "./data";
import "./Filter.style.scss";

const Filter = () => {
  const { languaje } = useContext(AppContext);
  return (
    <section className="filter">
      {filterOptions[languaje].map((filterOption, index) => (
        <section key={index} className="filter__section">
          <p>{filterOption.name}</p>
          <select>
            {filterOption.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </section>
      ))}
      <button className="general__button">Search</button>
    </section>
  );
};

export default Filter;
