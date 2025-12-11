import * as S from './card.module.scss';

export const Card = ({ titulo, paragrafo }) => {
  return (
    <article className={S.card}>
      <h3>{titulo}</h3>
      <p>{paragrafo}</p>
    </article>
  );
};
