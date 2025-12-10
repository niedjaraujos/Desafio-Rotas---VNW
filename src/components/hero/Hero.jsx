import * as S from './hero.module.scss';
import { ButtonLink } from '../buttonLink/ButtonLink';

import icone from '../../assets/estetoscopio.png';
import image from '../../assets/medicovoluntario.png';
export default function Hero() {
  return (
    <section>
      <div className={S.hero}>
        <div className={S.tag}>
          <img src={icone} alt="icone estetoscópio" />
          <span>Saúde para todos</span>
        </div>
        <h1>Saúde e cuidado sem barreiras</h1>
        <p>
          Um projeto dedicado a oferecer atendimento médico e odontológico
          gratuito para pessoas que mais precisam na nossa comunidade.
        </p>
        <div className={S.buttons}>
          <ButtonLink to="/voluntario" children="Seja Voluntário" />
          <ButtonLink to="/" children="Como Ajudar" />
        </div>
      </div>
      <div>
        <img src={image} alt="iamgem de um medico voluntario" />
      </div>
    </section>
  );
}
