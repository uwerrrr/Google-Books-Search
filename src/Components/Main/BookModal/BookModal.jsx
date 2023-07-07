import { useContext, useEffect, useState } from "react";

import { BookSelectedContext } from "../../../Context/BookSelectedContextProvider";
import { BookModalContext } from "../../../Context/BookModalContextProvider";

const BookModal = () => {
  const { bookSelected } = useContext(BookSelectedContext);
  const { closeBookModal } = useContext(BookModalContext);

  const { title } = bookSelected;
  console.log("modal title: ", title);
  return <div>abc{title}</div>;
};

export default BookModal;
