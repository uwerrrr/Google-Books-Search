import { useState } from "react";
// import "./App.css";
import "./App.scss";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import BookSearchContextProvider from "./context/BookSearchContextProvider";
import BookModalContextProvider from "./Context/BookModalContextProvider";

function App() {
  return (
    <>
      <Header />

      <BookSearchContextProvider>
        {/* { searchTerm, handleSearch } */}
        <BookModalContextProvider>
          {/* { bookModalOpened, openBookModal, closeBookModal } */}
          <Main />
        </BookModalContextProvider>
      </BookSearchContextProvider>

      {/* <Footer /> */}
    </>
  );
}

export default App;
