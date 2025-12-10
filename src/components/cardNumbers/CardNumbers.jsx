import * as S from './cardNumbers.module.scss';

export const cardNumbers = ({ numero, paragrafo }) => {
  return (
    <div className={S.cardNumbers}>
      <h3>{numero}</h3>
      <p>{paragrafo}</p>
    </div>
  );
};
