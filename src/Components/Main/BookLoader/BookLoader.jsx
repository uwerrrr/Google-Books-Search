import { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { BookSearchContext } from "../../../context/BookSearchContextProvider";
import { getBooksBySearchTerm } from "../../../Services/googlebook-service.js";

import style from "./BookLoader.module.scss";

import BookList from "./BookList/BookList";

const BookLoader = () => {
  const { searchTerm, handleSearch } = useContext(BookSearchContext);

  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(false);
  // loading state is to display 'loading' on page when data is loading

  const [errMess, setErrMess] = useState("");
  // set error as a state to display its message on page

  useEffect(() => {
    // runs when searchTerm state value is changed
    // searchTerm is passed from SearchBar > context > BookLoader

    setErrMess("");
    setLoading(true);
    setBooks([]);

    getBooksBySearchTerm(searchTerm)
      .then((books) => setBooks(books))
      .catch((error) => {
        console.error(error);

        setErrMess(error.message);
      })
      .finally(() => setLoading(false));
  }, [searchTerm]);

  return (
    <>
      {loading && (
        <p className={style.loading}>
          <span className={style.loading__icon}>
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              size="lg"
              style={{
                "--fa-primary-color": "#002e7a",
                "--fa-secondary-color": "#002e7a",
              }}
            />
          </span>{" "}
          Loading &#128034; &#128034; &#128034;
        </p>
      )}
      {!loading && errMess && <p className={style.err}>{errMess}</p>}
      {!loading && books.length > 0 && <BookList books={books} />}
    </>
  );
};

export default BookLoader;
