import { Link } from 'react-router-dom';
import Logomarca from '../../assets/logo.png';

import * as S from './logo.module.scss';

export const Logo = () => {
  return (
    <div className={S.boxLogo}>
      <img src={Logomarca} alt="Logomarca" />
      <Link to="/">Médicos & Dentistas</Link>
    </div>
  );
};
