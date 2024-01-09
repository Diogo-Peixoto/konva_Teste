import {
  Container,
  PdfContainer,
  Line,
  Header,
  Section1,
  Section2,
  Section3,
  Section4
} from "./styled";

import Assing from "./assing.svg";
import AssingNot from "./notass.svg";

const Test = () => {
  return (
    <Container>
      <PdfContainer>
        <div>
          <Header>
            <img src="./logo.png" alt="" />
            <p>
              Datas e horários baseados em Brasília, Brasil Certificado de
              assinaturas gerado em 06 de Julho de 2023, 13:44:58
            </p>
          </Header>
          <Line />

          <Section1>
            <h1>[Nome do documento]</h1>
            <p>Código do documento</p>
          </Section1>

          <Line />

          <Section2>
            <h3>Assinantes</h3>
            <div>
              <img src={AssingNot} alt="" />
              <div>
                <p>[email assinante]</p>
                <p>assinar</p>
              </div>
            </div>
            <div>
              <img src={Assing} alt="" />
              <div>
                <p>[email assinante]</p>
                <p>assinar</p>
              </div>
            </div>
            <div>
              <img src={Assing} alt="" />
              <div>
                <p>[email assinante]</p>
                <p>assinar</p>
              </div>
            </div>
            <div>
              <img src={Assing} alt="" />
              <div>
                <p>[email assinante]</p>
                <p>assinar</p>
              </div>
            </div>
            <div>
              <img src={Assing} alt="" />
              <div>
                <p>[email assinante]</p>
                <p>assinar</p>
              </div>
            </div>
          </Section2>

          <Line />

          <Section3>
            <h3>Eventos do documento</h3>
            <div>
              <b>04 Jul 2023, 09:57:03</b>
              <p>
                Documento 76bc4bdd-5345-4b1b-8b75-b89758bd4f0e criado por VICTOR
                SCARPA DE ALBUQUERQUE MARANHÃO
                (1c7c73dc-4ef2-4543-acf6-7b5d51a5916b).
                Email:victorsamaranhao@gmail.com. - DATE_ATOM:
                2023-07-04T09:57:03-03:00 (exemplo)
              </p>
            </div>
            <div>
              <b>04 Jul 2023, 09:57:03</b>
              <p>
                Documento 76bc4bdd-5345-4b1b-8b75-b89758bd4f0e criado por VICTOR
                SCARPA DE ALBUQUERQUE MARANHÃO
                (1c7c73dc-4ef2-4543-acf6-7b5d51a5916b).
                Email:victorsamaranhao@gmail.com. - DATE_ATOM:
                2023-07-04T09:57:03-03:00 (exemplo)
              </p>
            </div>
            <div>
              <b>04 Jul 2023, 09:57:03</b>
              <p>
                Documento 76bc4bdd-5345-4b1b-8b75-b89758bd4f0e criado por VICTOR
                SCARPA DE ALBUQUERQUE MARANHÃO
                (1c7c73dc-4ef2-4543-acf6-7b5d51a5916b).
                Email:victorsamaranhao@gmail.com. - DATE_ATOM:
                2023-07-04T09:57:03-03:00 (exemplo)
              </p>
            </div>
            <div>
              <b>04 Jul 2023, 09:57:03</b>
              <p>
                Documento 76bc4bdd-5345-4b1b-8b75-b89758bd4f0e criado por VICTOR
                SCARPA DE ALBUQUERQUE MARANHÃO
                (1c7c73dc-4ef2-4543-acf6-7b5d51a5916b).
                Email:victorsamaranhao@gmail.com. - DATE_ATOM:
                2023-07-04T09:57:03-03:00 (exemplo)
              </p>
            </div>
            <div>
              <b>04 Jul 2023, 09:57:03</b>
              <p>
                Documento 76bc4bdd-5345-4b1b-8b75-b89758bd4f0e criado por VICTOR
                SCARPA DE ALBUQUERQUE MARANHÃO
                (1c7c73dc-4ef2-4543-acf6-7b5d51a5916b).
                Email:victorsamaranhao@gmail.com. - DATE_ATOM:
                2023-07-04T09:57:03-03:00 (exemplo)
              </p>
            </div>
          </Section3>

          <Line />

          <Section4>
            <div>
              <p>Hash do documento original </p>
              <p>
                (SHA256):e663f22e582777e166e55a2b6669f0b7384e98614e2d48e9af083a076f40e142{" "}
              </p>
              <p>
                (SHA512):7f74082e3a124e6778eabf91f0645b56499793aeedb83b2817e7ac8f20e0a024c58d8398c72d7d28de7a934e3226b6ebc6cefe62cf5d01c4b28425dcace8b1dc
              </p>
              <p>
                (SHA512):7f74082e3a124e6778eabf91f0645b56499793aeedb83b2817e7ac8f20e0a024c58d8398c72d7d28de7a934e3226b6ebc6cefe62cf5d01c4b28425dcace8b1dc
              </p>
              <p>
                (SHA512):7f74082e3a124e6778eabf91f0645b56499793aeedb83b2817e7ac8f20e0a024c58d8398c72d7d28de7a934e3226b6ebc6cefe62cf5d01c4b28425dcace8b1dc
              </p>
              <p>
                (SHA512):7f74082e3a124e6778eabf91f0645b56499793aeedb83b2817e7ac8f20e0a024c58d8398c72d7d28de7a934e3226b6ebc6cefe62cf5d01c4b28425dcace8b1dc
              </p>
            </div>
            <p>
              Esse log pertence única e exclusivamente aos documentos de HASH
              acima
            </p>

            <b>Esse documento está assinado e certificado pelo UX DOC Sign</b>
          </Section4>
        </div>
      </PdfContainer>
    </Container>
  );
};

export default Test;
