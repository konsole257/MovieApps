import { NavLink } from "react-router-dom";

const Header = () => {
  return (
  <>
    <header id="header">
      <nav id="nav">
        <ul className="nav__list">
          <li><NavLink className="nav__link" to="/Popular">Popular</NavLink></li>
          <li><NavLink className="nav__link" to="/Movie">Movie</NavLink></li>
          <li><NavLink className="nav__link" to="/TV">TV Show</NavLink></li>
        </ul>
      </nav>
    </header>
  </>
  );
}

export default Header;