import { Link } from 'react-router-dom';
import * as S from './buttonLink.module.scss';

export const ButtonLink = ({ to, children }) => {
  return (
    <Link to={to} className={S.link}>
      {children}
    </Link>
  );
};
