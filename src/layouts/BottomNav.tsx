import { NavLink } from "react-router-dom";

const BottomNav = () => {
  return (
  <>
    <nav id="bottomnav">
      <ul className="nav__list">
        <li className="nav__item"><NavLink className="nav__link" to="/"><i className="icon__home"></i><span className="hidden">Home</span></NavLink></li>
        <li className="nav__item"><NavLink className="nav__link" to="/Favorite"><i className="icon__favorite"></i><span className="hidden">Favorite</span></NavLink></li>
        <li className="nav__item"><NavLink className="nav__link" to="/Search"><i className="icon__search"></i><span className="hidden">Search</span></NavLink></li>
        <li className="nav__item"><NavLink className="nav__link" to="/Mypage"><i className="icon__mypage"></i><span className="hidden">Mypage</span></NavLink></li>
      </ul>
    </nav>
  </>
  );
}

export default BottomNav;