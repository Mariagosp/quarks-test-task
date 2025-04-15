import "./Header.scss";

export const Header = () => {
  return (
      <header className="header">
        <img className="header__logo" src="/icons/logo.svg" alt="logo" />
        <h1 className="header__name">Affemity</h1>
      </header>
  );
};
