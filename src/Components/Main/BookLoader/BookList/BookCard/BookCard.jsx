import style from "./BookCard.module.scss";
import defaultBookImg from "../../../../../assets/default_book_cover.jpg";

const BookCard = ({ book }) => {
  const { title, description, imageLinks, infoLink: bookLink } = book;

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
  let authors;
  if (book.authors) {
    authors = book.authors.join(", ");
  }

  const onClick = () => {
    console.log(title);
  };

  console.log(style);

  return (
    <div className={style.outer}>
      <div className={style.book}>
        <div className={style.book__head}>
          {<img src={bookImg} alt={title} className={style.book__img} />}
        </div>
        <div className={style.book__body}>
          <h4 className={style.book__title}>{title}</h4>
          <h5 className={style.book__author}>{authors}</h5>
          {/* {description && <p className={style.book__desc}>{description}</p>} */}
          {/* {bookLink && (
        <a href={bookLink}>
          <button className={style.book__link} onClick={onClick}>
            Google Book Link
          </button>
        </a>
      )} */}
          <button
            className={`${style["book__btn"]} ${style["book__btn--view"]} `}
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
