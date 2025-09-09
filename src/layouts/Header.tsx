import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
  <>
    <header id="header">
      <nav id="nav">
        <ul className="nav-list">
          <li><NavLink className="nav-link" to="/Popular">Popular</NavLink></li>
          <li><NavLink className="nav-link" to="/Movie">Movie</NavLink></li>
          <li><NavLink className="nav-link" to="/TV">TV Show</NavLink></li>
        </ul>
      </nav>
    </header>
  </>
  );
}

export default Header;