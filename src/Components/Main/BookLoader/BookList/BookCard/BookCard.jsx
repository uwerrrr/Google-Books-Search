import { useContext, useEffect, useState } from "react";

import style from "./BookCard.module.scss";
import defaultBookImg from "../../../../../assets/default_book_cover.jpg";
import { BookSelectedContext } from "../../../../../Context/BookSelectedContextProvider";
import { BookModalContext } from "../../../../../Context/BookModalContextProvider";

const BookCard = ({ book }) => {
  const { title } = book;

  let bookImg = defaultBookImg;
  if (book.imageLinks) {
    if (book.imageLinks.small) {
      bookImg = book.imageLinks.small;
    }
    if (book.imageLinks.thumbnail) {
      bookImg = book.imageLinks.thumbnail;
    }
  }

  // book.authors is Arr of Str ->
  let authors = "";
  if (book.authors) {
    authors = book.authors.join(", ");
  }

  const { selectBook } = useContext(BookSelectedContext);
  const { openBookModal } = useContext(BookModalContext);

  const onClick = () => {
    selectBook(book);
    openBookModal();
    console.log(book);
  };

  return (
    <div className={style.outer}>
      <div className={style.book}>
        <div className={style.book__head}>
          {<img src={bookImg} alt={title} className={style.book__img} />}
          <h4 className={style.book__title}>{title}</h4>
          <h5 className={style.book__author}>{authors}</h5>
          {/* {description && <p className={style.book__desc}>{description}</p>} */}
          {/* {bookLink && (
        <a href={bookLink}>
          <button className={style.book__link} onClick={onClick}>
            Google Book Link
          </button>
        </a>
      )} */}{" "}
        </div>
        <div className={style.book__body}>
          <button
            className={`${style["book__btn"]} ${style["book__btn--view"]} `}
            onClick={onClick}
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
