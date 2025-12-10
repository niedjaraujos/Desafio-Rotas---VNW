import { Card } from '../card/Card';
import * as S from './cardNumbers.module.scss';

export const CardNumbers = () => {
  return (
    <div className={S.cardNumbers}>
      <Card titulo="2,500+" paragrafo="Pessoas Atendidas" />
      <Card titulo="150+" paragrafo="Profissionais Voluntários" />
      <Card titulo="98%" paragrafo="Satisfação dos Pacientes" />
      <Card titulo="5+" paragrafo="Anos de Dedicação" />
    </div>
  );
};
