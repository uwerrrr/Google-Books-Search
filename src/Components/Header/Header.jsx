import { useState, useEffect } from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.head}>
      <h1>Google Books Search Engine</h1>
      <h5 className={style.head__subtitle}>Designed by Oscar NGUYEN</h5>
    </header>
  );
};

export default Header;
