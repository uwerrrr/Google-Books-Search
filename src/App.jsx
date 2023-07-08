import { useState } from "react";
// import "./App.css";
import "./App.scss";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import BookSearchContextProvider from "./context/BookSearchContextProvider";
// import BookModalContextProvider from "./Context/BookModalContextProvider";
// import BookSelectedContextProvider from "./Context/BookSelectedContextProvider";

function App() {
  return (
    <>
      <Header />

      <BookSearchContextProvider>
        {/* { searchTerm, handleSearch } */}
        {/* <BookSelectedContextProvider> */}
          {/* { bookSelected, selectBook } */}
          {/* <BookModalContextProvider> */}
            {/* { bookModalOpened, openBookModal, closeBookModal } */}
            <Main />
          {/* </BookModalContextProvider> */}
        {/* </BookSelectedContextProvider> */}
      </BookSearchContextProvider>

      {/* <Footer /> */}
    </>
  );
}

export default App;
