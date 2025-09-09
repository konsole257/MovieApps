import { NavLink } from 'react-router-dom';
import { BASE_URL } from "../path";

import '@/assets/css/pages/detail.css';

const Detail = () => {

  return (
  <>
    <div className="page detail">
      <h1 className="page-tit">Detail</h1>

      <header className="page-header">
        <NavLink className="btn-back" to="/"><i className="icon-arrow"></i><span className="hidden">戻る</span></NavLink>
      </header>

      <div className="page-cotents">
        <img className="detail-img" src={`${BASE_URL}/images/temp/detail@2x.png`} alt="" />
      </div>
  
    </div>
  </>
  );
};

export default Detail;