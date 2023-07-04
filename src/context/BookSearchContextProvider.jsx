import { createContext, useState } from "react";

export const BookSearchContext = createContext();

const BookSearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchInput) => {
    setSearchTerm(searchInput);
  };

  return (
    <BookSearchContext.Provider value={{ searchTerm, handleSearch }}>
      {children}
    </BookSearchContext.Provider>
  );
};

export default BookSearchContextProvider;
