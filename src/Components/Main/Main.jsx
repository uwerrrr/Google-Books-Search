import { useState, useEffect, useContext } from "react";
import style from "./Main.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import BookLoader from "./BookLoader/BookLoader";

import { BookSearchContext } from "../../context/BookSearchContextProvider";

const Main = () => {
  const { searchTerm, handleSearch } = useContext(BookSearchContext);

  return (
    <main className={style.main}>
      <SearchBar />

      {searchTerm && <BookLoader />}
    </main>
  );
};

export default Main;
