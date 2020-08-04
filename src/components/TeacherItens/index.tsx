import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./style.css";
function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars2.githubusercontent.com/u/15350759?s=460&u=9efbac6bb99b54f1c4e4e8d5aac78d50fb9f47d2&v=4"
                    alt="Foto de test"
                />
                <div>
                    <strong>Nome do porfessor</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Aulas de Quimica bem estruturadas e expositiva.
        <br /> <br />
        Estude para o ENEM e Vestibulares no Melhor Cursinho com o Melhor Preço.
        Pague em até 12x. ENEM com a melhor preparação. Parcelas por menos de R$
        15 reais.
      </p>

            <footer>
                <p>
                    Preço/hora
          <strong>R$ 15,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;