import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import S from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="Logomarca" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/voluntario">Seja Voluntario</Link>
      </nav>
    </header>
  );
}
