import { useState } from 'react';
import { Card } from '../../card/Card';
import SectionTitle from '../../sectionTitle/SectionTitle';
import * as S from './sejaVoluntario.module.scss';

export default function SejaVoluntario() {
  // hook do react, que armazena os valores do campo
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  //para mensagens de erro
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  }
  function validate() {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'O nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'O email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'O telefone é obrigatório';
    }
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Por favor, deixe uma mensagem';
    }
    return newErrors;
  }
  function aoEnviar(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulário enviado:', formData);

      alert('Inscrição enviada com sucesso!');
      // {submitSuccess && (
      //         <div style={styles.successMessage}>
      //           ✓ Inscrição enviada com sucesso! Entraremos em contato em breve.
      //         </div>
      //       )}

      // limpar form apos adicionar os dados
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
    }
  }

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
        <form onSubmit={aoEnviar}>
          <h3>Inscrição para Voluntários</h3>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <input
              type="text"
              placeholder={errors.nome ? errors.nome : 'Seu Nome *'}
              className={errors.nome ? S.inputError : ''}
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder={errors.email ? errors.email : 'Seu Email *'}
              className={errors.email ? S.inputError : ''}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              placeholder={errors.telefone ? errors.telefone : 'Seu Telefone *'}
              className={errors.telefone ? S.inputError : ''}
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              aria-invalid={!!errors.telefone}
              aria-describedby="erro-telefone"
            />
          </fieldset>

          <fieldset>
            <legend>Mensagem Adicional</legend>
            <textarea
              placeholder={
                errors.mensagem
                  ? errors.mensagem
                  : 'Conte-nos porque você quer ser voluntario...'
              }
              className={errors.mensagem ? S.inputError : ''}
              value={formData.mensagem}
              name="mensagem"
              onChange={handleChange}
            ></textarea>
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
