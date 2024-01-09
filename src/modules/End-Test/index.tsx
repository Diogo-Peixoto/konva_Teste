import Back from "./assets/vectors.svg";
import Logo from "./assets/logo.svg";
import Pik from "./assets/pik.svg";

import { Container, Section1, Section2 } from "./style";

const EndTest = () => {
  return (
    <Container>
      <Section1>
        <img className="backgroud" draggable={false} src={Back} alt="" />
        <div>
          <figure className="image1">
            <img src={Logo} draggable={false} alt="" />
          </figure>
          <figure>
            <img className="image2" src={Pik} draggable={false} alt="" />
          </figure>
        </div>
      </Section1>
      <Section2>
        <div>
          <h1>O seu período de teste acabou :(</h1>
          <p>
            Não se preocupe!
            <br />
            Assine agora mesmo e continue criando os seus documentos.
            <br />
            Basta clicar no botão abaixo.
          </p>
          <button>Ir para a área de pagamento</button>
          <button>Ir para a área de pagamento</button>
        </div>
      </Section2>
    </Container>
  );
};

export default EndTest;
