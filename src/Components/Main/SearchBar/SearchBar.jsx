import { useState, useContext } from "react";
import { BookSearchContext } from "../../../context/BookSearchContextProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
    <form onSubmit={onSubmit}>
      <input type="text" required value={searchInput} onChange={onChange} />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
      </button>
    </form>
  );
};
export default SearchBar;
