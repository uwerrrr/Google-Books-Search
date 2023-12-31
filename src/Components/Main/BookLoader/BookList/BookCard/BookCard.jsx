import { useState } from "react";
import { createPortal } from "react-dom";

import style from "./BookCard.module.scss";
import defaultBookImg from "../../../../../assets/default_book_cover.jpg";

import BookModal from "../../../BookModal/BookModal";

const BookCard = ({ rawBook }) => {
  const [showModal, setShowModal] = useState(false);

  const book = {
    title: rawBook.title,
    infoLink: rawBook.infoLink,
    averageRating: rawBook.averageRating ? String(rawBook.averageRating) : "",
    ratingsCount: rawBook.ratingsCount ? String(rawBook.ratingsCount) : "",
  };
  // book image
  let bookImg = defaultBookImg;
  if (rawBook.imageLinks) {
    if (rawBook.imageLinks.small) {
      bookImg = rawBook.imageLinks.small;
    }
    if (rawBook.imageLinks.thumbnail) {
      bookImg = rawBook.imageLinks.thumbnail;
    }
  }
  book.bookImg = bookImg;

  // book desc
  book.desc = rawBook.description ? rawBook.description : "";

  // book.authors is Arr of Str ->
  book.authors = rawBook.authors ? rawBook.authors.join(" & ") : "";

  // industryIdentifiers - ISBN

  if (rawBook.industryIdentifiers && rawBook.industryIdentifiers.length === 2) {
    if (rawBook.industryIdentifiers[0].type === "ISBN_13") {
      book.industryIdentifiers =
        "ISBN: " +
        rawBook.industryIdentifiers[0].identifier +
        ", " +
        rawBook.industryIdentifiers[1].identifier;
    } else {
      book.industryIdentifiers =
        "ISBN: " +
        rawBook.industryIdentifiers[1].identifier +
        " , " +
        rawBook.industryIdentifiers[0].identifier;
    }
  } else if (
    rawBook.industryIdentifiers &&
    rawBook.industryIdentifiers.length === 1
  ) {
    book.industryIdentifiers = rawBook.industryIdentifiers[0].identifier
      .split(":")
      .join(": ");
  } else {
    book.industryIdentifiers = "";
  }

  const onClick = () => {
    setShowModal(true);
    console.log("book: ", book);
  };

  return (
    <>
      <div className={style.book}>
        <div className={style.book__head}>
          <img
            src={book.bookImg}
            alt={book.title}
            className={style.book__img}
          />

          <h4 className={style.book__title}>{book.title}</h4>
          <h5 className={style.book__author}>{book.authors}</h5>
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
      {/* modal using  react portal */}
      {showModal &&
        createPortal(
          <BookModal book={book} setShowModal={setShowModal} />,
          document.body
        )}
    </>
  );
};

export default BookCard;
