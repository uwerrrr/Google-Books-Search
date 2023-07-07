import { createContext, useState } from "react";

export const BookSelectedContext = createContext();

const BookSelectedContextProvider = ({ children }) => {
  const [bookSelected, setBookSelected] = useState({});

  const selectBook = (book) => {
    setBookSelected(book);
  };

  return (
    <BookSelectedContext.Provider value={{ bookSelected, selectBook }}>
      {children}
    </BookSelectedContext.Provider>
  );
};

export default BookSelectedContextProvider;
