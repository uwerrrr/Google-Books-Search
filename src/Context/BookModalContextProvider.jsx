import { createContext, useState } from "react";

export const BookModalContext = createContext();

const BookModalContextProvider = ({ children }) => {
  const [bookModalOpened, setBookModalOpened] = useState(false);

  const openBookModal = () => {
    setBookModalOpened(true);
  };

  const closeBookModal = () => {
    setBookModalOpened(false);
  };

  return (
    <BookModalContext.Provider
      value={{ bookModalOpened, openBookModal, closeBookModal }}
    >
      {children}
    </BookModalContext.Provider>
  );
};

export default BookModalContextProvider;
