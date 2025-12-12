import { Link } from 'react-router-dom';
import { ButtonLink } from '../buttonLink/ButtonLink';

import { Logo } from '../logo/Logo';
import Hamburguer from '../../assets/hamburguer.png';
import * as S from './header.module.scss';

export default function Header() {
  return (
    <header className={S.header}>
      <Logo />
      <nav>
        <Link to="/">Home</Link>
        <ButtonLink to="/voluntario" children="Seja Voluntario" />
      </nav>
      <img src={Hamburguer} alt="Menu hamburguer" className={S.hamburguer} />
    </header>
  );
}
