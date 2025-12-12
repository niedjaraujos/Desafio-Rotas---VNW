import { Link } from 'react-router-dom';
import { ButtonLink } from '../buttonLink/ButtonLink';
import { useState } from 'react';

import { Logo } from '../logo/Logo';
import Hamburguer from '../../assets/hamburguer.png';
import * as S from './header.module.scss';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={S.header}>
      <Logo />
      <nav className={`${S.menu} ${menuAberto ? S.open : ''}`}>
        <Link to="/" onClick={() => setMenuAberto(false)}>
          Home
        </Link>
        <ButtonLink
          onClick={() => setMenuAberto(false)}
          to="/voluntario"
          children="Seja Voluntario"
        />
      </nav>
      <img
        src={Hamburguer}
        alt="Menu hamburguer"
        className={S.hamburguer}
        onClick={toggleMenu}
      />
    </header>
  );
}
