import { Card } from '../../card/Card';
import SectionTitle from '../../sectionTitle/SectionTitle';
import * as S from './sejaVoluntario.module.scss';
import { ButtonLink } from '../../buttonLink/ButtonLink';

export default function SejaVoluntario() {
  return (
    <main>
      <section className={S.sectionVoluntario}>
        <SectionTitle
          title="Seja Voluntário"
          paragrafo="Junte-se a nós e faça a diferença na vida de pessoas que precisam"
        />

        <div className={S.cards}>
          <Card
            titulo="Impacto Direto"
            paragrafo="Sua dedicação salva vidas e transforma comunidades"
          />
          <Card
            titulo="Crescimento Pessoal"
            paragrafo="Desenvolva habilidades e cresça profissionalmente"
          />
          <Card
            titulo="Comunidade"
            paragrafo="Faça parte de uma rede de profissionais comprometidos"
          />
        </div>
      </section>
      <section className={S.formulario}>
        <form>
          <h3>Inscrição para Voluntários</h3>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <input type="text" placeholder="Seu Nome *" />
            <input type="email" placeholder="Seu Email *" />
            <input type="tel" placeholder="Seu Telefone *" />
          </fieldset>

          <fieldset>
            <legend>Mensagem Adicional</legend>
            <textarea placeholder="Conte-nos porque você quer ser voluntario..."></textarea>
          </fieldset>

          <p className={S.contato}>
            Entraremos em contato para mais informações
          </p>
          <button type="submit">Enviar Inscrição</button>
        </form>
      </section>
    </main>
  );
}
