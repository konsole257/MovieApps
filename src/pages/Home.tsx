import { NavLink } from "react-router-dom";
import '@/assets/css/pages/home.css';

import PopularMovies from '../features/populars/popularMovie';
import PopularTVs from '../features/populars/popularTV';

const Home = () => {
  return (
  <>
    <div className="page home">
      <h1 className="page__tit">Home</h1>

      <div className="tab">
        <ul className="tab__list">
          <li><NavLink className="tab__link" to="/Popular">Popular</NavLink></li>
          <li><NavLink className="tab__link" to="/Movie">Movie</NavLink></li>
          <li><NavLink className="tab__link" to="/TV">TV Show</NavLink></li>
        </ul>
      </div>

      <div className='visual'>
        <img  className="visual__img" src={`${import.meta.env.BASE_URL}/images/temp/screen@2x.png`} alt="" />
        <div className="visual__txt">Wanda Vision</div>
      </div>

      <section className="block movie">
        <h2 className="block__tit movie__tit">Movies</h2>

        <ul className="movie__list">
          <PopularMovies />
        </ul>
      </section>

      <section className="block movie">
        <h2 className="block__tit movie__tit">TV Show</h2>

        <ul className="movie__list">
          <PopularTVs />
        </ul>
      </section>

      
    </div>
  </>
  );
};

export default Home;