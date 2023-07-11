import "./App.scss";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
// import Footer from "./Components/Footer/Footer";

import BookSearchContextProvider from "./context/BookSearchContextProvider";

function App() {
  return (
    <>
      <Header />

      <BookSearchContextProvider>
        {/* { searchTerm, handleSearch } */}

        <Main />
      </BookSearchContextProvider>

      {/* <Footer /> */}
    </>
  );
}

export default App;
