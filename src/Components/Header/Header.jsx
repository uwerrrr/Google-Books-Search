import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.head}>
      <h1 className={style.head__h1}>
        Google{" "}
        <span className={style.head__book_icon}>
          {/* iconc options */}
          {/* {" "}
          <FontAwesomeIcon icon={faBookOpen} beatFade /> */}
          &#128214;
        </span>{" "}
        Search Engine
      </h1>
      <h5 className={style.head__subtitle}>Designed by Oscar NGUYEN</h5>
    </header>
  );
};

export default Header;
