import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import * as S from './header.module.scss';
import { ButtonLink } from '../buttonLink/ButtonLink';

export default function Header() {
  return (
    <header>
      <div className={S.boxLogo}>
        <img src={Logo} alt="Logomarca" />
        <Link to="/">Médicos & Dentistas</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <ButtonLink to="/voluntario" children="Seja Voluntario" />
      </nav>
    </header>
  );
}
