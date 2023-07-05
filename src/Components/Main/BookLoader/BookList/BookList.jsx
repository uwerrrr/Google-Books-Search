import { useContext, useEffect, useState } from "react";
import style from "./BookList.module.scss";

import BookCard from "./BookCard/BookCard";

const BookList = ({ books }) => {
  return (
    <section className={style.book_list}>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </section>
  );
};

export default BookList;
