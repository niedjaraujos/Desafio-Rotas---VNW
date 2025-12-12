import { Link } from 'react-router-dom';
import * as S from './buttonLink.module.scss';

export const ButtonLink = ({ to, children, onClick }) => {
  return (
    <Link to={to} className={S.link} onClick={onClick}>
      {children}
    </Link>
  );
};
/* onClick repassado como props, pq um componente personalizado como esse aqui, não "adivinha" que o onClick deve funcionar.*/
