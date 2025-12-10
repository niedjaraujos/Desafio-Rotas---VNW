import { Link } from 'react-router-dom';
import * as S from './footer.module.scss';

//icons
import email from '../../assets/email.png';
import fone from '../../assets/telefone.png';
import local from '../../assets/localizacao.png';

export default function Footer() {
  return (
    <footer>
      <div className={S.footerContainer}>
        <div>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li>
              <img src={email} alt="icon email" />
              <Link>contato@medico-dentista.org</Link>
            </li>
            <li>
              <img src={fone} alt="icon telefone" /> <Link>(11) 3000-0000</Link>
            </li>
            <li>
              <img src={local} alt="icon localizacao" />{' '}
              <Link>São Paulo, Brasil</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Redes Sociais</h4>
          <ul>
            <li>
              <Link>Facebook</Link>
            </li>
            <li>
              <Link>Instagram</Link>
            </li>
            <li>
              <Link>LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
      <p>
        © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
