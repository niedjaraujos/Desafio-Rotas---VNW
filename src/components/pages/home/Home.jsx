import { CardNumbers } from '../../cardNumbers/CardNumbers';
import { CardText } from '../../cardText/CardText';
import Hero from '../../hero/Hero';
import SectionTitle from '../../sectionTitle/SectionTitle';
import * as S from './home.module.scss';

export default function Home() {
  return (
    <main>
      <Hero />

      <section className={S.sectionText}>
        <SectionTitle
          title="Nossa Missão"
          paragrafo="Transformar vidas através do acesso universal a saúde de qualidade"
        />

        <CardText />
      </section>
      <section className={S.sectionNum}>
        <SectionTitle
          title="Nosso Impacto"
          paragrafo="Transformando a saúde de nossa comunidade, um paciente de cada vez"
        />

        <CardNumbers />
      </section>
    </main>
  );
}
