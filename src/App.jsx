import { useState } from "react";
// import "./App.css";
import "./App.scss";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import BookSearchContextProvider from "./context/BookSearchContextProvider";

function App() {
  return (
    <>
      <Header />

      <BookSearchContextProvider>
        {/* context has searchTerm & its setter */}

        <Main />
      </BookSearchContextProvider>

      {/* <Footer /> */}
    </>
  );
}

export default App;
