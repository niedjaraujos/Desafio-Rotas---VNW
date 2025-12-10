import { Card } from '../card/Card';
import * as S from './cardText.module.scss';

export const CardText = () => {
  return (
    <div className={S.cardText}>
      <Card
        titulo="Acesso Equitativo"
        paragrafo="Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira."
      />
      <Card
        titulo="Comunidade Forte"
        paragrafo="Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo."
      />
      <Card
        titulo="Bem-estar Total"
        paragrafo="Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida."
      />
    </div>
  );
};
