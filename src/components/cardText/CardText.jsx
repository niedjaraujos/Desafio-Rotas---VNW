import * as S from './cardText.module.scss';

export const CardText = ({ titulo, paragrafo }) => {
  return (
    <div className={S.cardText}>
      <h3>{titulo}</h3>
      <p>{paragrafo}</p>
    </div>
  );
};
