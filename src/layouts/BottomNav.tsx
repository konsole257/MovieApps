import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
  <>
    <nav id="bottomnav">
      <h2 className="hidden">下部メニュー</h2>

      <ul className="nav-list">
        <li className="nav-item"><NavLink className={`nav-link  ${location.href.includes('/#/Movie')||location.href.includes('/#/TV') ? 'active' : ''}`} to="/"><i className="icon-home"></i><span className="hidden">Home</span></NavLink></li>
        <li className="nav-item"><NavLink className={`nav-link`} to="/Favorite"><i className="icon-favorite"></i><span className="hidden">Favorite</span></NavLink></li>
        <li className="nav-item"><NavLink className={`nav-link`} to="/Search"><i className="icon-search"></i><span className="hidden">Search</span></NavLink></li>
        <li className="nav-item"><NavLink className={`nav-link`} to="/Mypage"><i className="icon-mypage"></i><span className="hidden">Mypage</span></NavLink></li>
      </ul>
    </nav>

    <hr id="bottomnav-end" />
  </>
  );
}

export default BottomNav;