import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.scss";
function Header() {
  return (
    <header className=" header">
      <div className="header__logo">
        <Link to="/">
          <img src="https://e-cinema.vercel.app/logo.png" alt="" />
        </Link>
      </div>
      <div className="header__search">
        <FaSearch />
      </div>
    </header>
  );
}

export default Header;
