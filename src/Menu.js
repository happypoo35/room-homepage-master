import logo from "./logo.svg";

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div className="menu">
      <div
        className={`hamburger ${showMenu ? "active" : ""}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className="hamburger-btn"></div>
      </div>
      <a href="#" className="logo">
        <img src={logo} alt="room logo" />
      </a>
      <nav className={`${showMenu ? "active" : ""}`}>
        <a href="#">home</a>
        <a href="#">shop</a>
        <a href="#">about</a>
        <a href="#">contact</a>
      </nav>
    </div>
  );
};

export default Menu;
