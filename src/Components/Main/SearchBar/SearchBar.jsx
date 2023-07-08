import { useState, useContext } from "react";
import { BookSearchContext } from "../../../context/BookSearchContextProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import style from "./SearchBar.module.scss";

const SearchBar = ({}) => {
  const { handleSearch } = useContext(BookSearchContext);

  const [searchInput, setSearchInput] = useState("");

  const onChange = (event) => {
    setSearchInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchInput);
  };

  return (
    <form className={style[`search-form`]} onSubmit={onSubmit}>
      <input
        className={style[`search-form__input`]}
        type={"text"}
        required
        value={searchInput}
        onChange={onChange}
        placeholder="search for any book"
      />
      <button className={style[`search-form__button`]}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={style[`search-form__icon`]}
        />
        Search
      </button>
    </form>
  );
};
export default SearchBar;
