import Asidebar from "../components/Asidebar";
import WorkSpace from "../components/WorkSpace";
import { Container, MainContainer } from "./style";

const Editor = () => {
  return (
    <>
      <MainContainer>
        <Container>
          <WorkSpace />
          <Asidebar />
        </Container>
      </MainContainer>
    </>
  );
};

export default Editor;
