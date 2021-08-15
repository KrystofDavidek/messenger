import React from "react";
import BEMHelper from "react-bem-helper";
import search from "../../assets/images/search.svg";

const classes = new BEMHelper({
  name: "searchbar",
});

export const Searchbar = () => {
  return (
    <form {...classes()}>
      <div {...classes("input-group")}>
        <label className="search-form__label" id="searchInputLabel">
          Search
        </label>
        <input {...classes("controls")} type="text" aria-describedby="search-button" aria-labelledby="searchInputLabel" />
        <button {...classes("btn")} id="search-button">
          <img {...classes("search-img")} src={search} alt="Search" />
        </button>
      </div>
    </form>
  );
};
