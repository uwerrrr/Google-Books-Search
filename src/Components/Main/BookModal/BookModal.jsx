import { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import style from "./BookModal.module.scss";

import StarRating from "./StarRating/StarRating";

const BookModal = ({ book, setShowModal }) => {
  const {
    title,
    infoLink,
    desc,
    authors,
    bookImg,
    averageRating,
    ratingsCount,
  } = book;

  return (
    <div className={style.modal_background}>
      <div className={style.modal}>
        <div className={style.close_btn}>
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} size="lg" />
          </button>
        </div>
        <div className={style.modal__body}>
          <div className={style.img_sec}>
            <img src={bookImg} alt={title} className={style.img_sec__img} />
          </div>
          <div className={style.content_sec}>
            <div className={style.content_sec__content}>
              <h2 className={style.title}>{title}</h2>
              <h3 className={style.authors}>{authors}</h3>
             
              {averageRating ? (
                <StarRating rating={averageRating} />
              ) : (
                <p>"No rating"</p>
              )}
              {averageRating && <p>({ratingsCount} reviews)</p>}
              <p className={style.desc}>{desc}</p>
            </div>
            <div className={style.content_sec__footer}>
              <a className={style.content_sec__gb_btn} href={infoLink}>
                View in <span style={{ color: "#4285F4" }}>G</span>
                <span style={{ color: "#EA4335" }}>o</span>
                <span style={{ color: "#FBBC05" }}>o</span>
                <span style={{ color: "#4285F4" }}>g</span>
                <span style={{ color: "#34A853" }}>l</span>
                <span style={{ color: "#EA4335" }}>e</span> Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
