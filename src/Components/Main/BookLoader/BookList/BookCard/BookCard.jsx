import style from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  const { title, description, imageLinks, infoLink: bookLink } = book;

  let bookImg;
  if (book.imageLinks) {
    if (book.imageLinks.small) {
      bookImg = book.imageLinks.small;
    }
    if (book.imageLinks.thumbnail) {
      bookImg = book.imageLinks.thumbnail;
    }
  }

  // book.authors is Arr of Str ->
  const authors = book.authors.join(", ");

  return (
    <div className={style.book}>
      {bookImg && <img src={bookImg} alt={title} className={style.book__img} />}
      <h4 className={style.book__title}>{title}</h4>
      <h5 className={style.book__author}>{authors}</h5>
      {/* {description && <p className={style.book__desc}>{description}</p>} */}
      {bookLink && (
        <a href={bookLink}>
          <button className={style.book__link}>Google Book Link</button>
        </a>
      )}
    </div>
  );
};

export default BookCard;
