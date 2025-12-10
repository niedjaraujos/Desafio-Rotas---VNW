import { CardNumbers } from '../../cardNumbers/cardNumbers';
import { CardText } from '../../cardText/CardText';
import Hero from '../../hero/Hero';
import SectionTitle from '../../sectionTitle/SectionTitle';
import * as S from './home.module.scss';

export default function Home() {
  return (
    <main>
      <Hero />

      <section>
        <SectionTitle
          title="Nossa Missão"
          paragrafo="Transformar vidas através do acesso universal a saúde de qualidade"
        />
        <CardText />
      </section>
      <section>
        <SectionTitle
          title="Nosso Impacto"
          paragrafo="Transformando a saúde de nossa comunidade, um paciente de cada vez"
        />
        <div className={S.cardsNum}>
          <CardNumbers />
        </div>
      </section>
    </main>
  );
}
