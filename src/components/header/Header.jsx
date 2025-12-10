import { Link } from 'react-router-dom';

import { ButtonLink } from '../buttonLink/ButtonLink';
import { Logo } from '../logo/Logo';
import * as S from './header.module.scss';

export default function Header() {
  return (
    <header className={S.header}>
      <Logo />
      <nav>
        <Link to="/">Home</Link>
        <ButtonLink to="/voluntario" children="Seja Voluntario" />
      </nav>
    </header>
  );
}
