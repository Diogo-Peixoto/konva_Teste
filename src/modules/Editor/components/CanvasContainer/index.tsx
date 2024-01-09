import DropCanva from "../DropCanva";
import HeaderPageCanva from "../HeaderPageCanvas";
import SceneKonva from "../SceneKonva";
import { MainContainer } from "./style";

const CanvasContainer = () => {
  return (
    <MainContainer>
      <HeaderPageCanva />
      <DropCanva>
        <SceneKonva />
      </DropCanva>
    </MainContainer>
  );
};

export default CanvasContainer;
