import { useState, useEffect, useContext } from "react";
import style from "./Main.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import BookLoader from "./BookLoader/BookLoader";
import BookModal from "./BookModal/BookModal";

import { BookSearchContext } from "../../context/BookSearchContextProvider";
import { BookModalContext } from "../../Context/BookModalContextProvider";

const Main = () => {
  const { searchTerm } = useContext(BookSearchContext);
 

  return (
    <main className={style.main}>
      <SearchBar />

      {searchTerm && <BookLoader />}
  
    </main>
  );
};

export default Main;
