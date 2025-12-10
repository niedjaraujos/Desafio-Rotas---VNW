import * as S from './sectionTitle.module.scss';

export default function Section({ title, paragrafo }) {
  return (
    <section>
      <div className={S.missao}>
        <h2>{title}</h2>
        <p>{paragrafo}</p>
      </div>
    </section>
  );
}
