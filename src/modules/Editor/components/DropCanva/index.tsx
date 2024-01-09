import { useMain } from "../../hooks";
import { MainContainer } from "./style";
import { v4 as uuidv4 } from "uuid";

const DropCanva = ({ children }: any) => {
  const { stageRef, setDataPages, dragUrl, dataPages } = useMain();
  return (
    <MainContainer
      onDrop={e => {
        e.preventDefault();
        stageRef?.current?.setPointersPositions(e);

        let id = uuidv4();
        let myObject = null;

        switch (dragUrl?.current) {
          case "rectangle":
            myObject = {
              ...stageRef.current.getPointerPosition(),
              object: dragUrl?.current,
              width: 160,
              height: 100,
              fill: "#A6A6A6",
              draggable: true,
              id: id
            };
            break;
          case "circle":
            myObject = {
              ...stageRef.current.getPointerPosition(),
              object: dragUrl?.current,
              width: 100,
              height: 100,
              fill: "#A6A6A6",
              draggable: true,
              id: id
            };
            break;
          case "star":
            myObject = {
              ...stageRef.current.getPointerPosition(),
              fill: "#A6A6A6",
              id: id,
              numPoints: 5,
              innerRadius: 20,
              outerRadius: 40,
              object: dragUrl?.current,
              scaleX: 1.5,
              scaleY: 1.5,
              draggable: true
            };
            break;
          case "triangle":
            myObject = {
              ...stageRef.current.getPointerPosition(),
              object: dragUrl?.current,
              scaleX: 1.5,
              scaleY: 1.5,
              fill: "#A6A6A6",
              draggable: true,
              numPoints: 3,
              innerRadius: 20,
              outerRadius: 40,
              id: id
            };
            break;
          case "square":
            myObject = {
              ...stageRef.current.getPointerPosition(),
              object: dragUrl?.current,
              width: 100,
              height: 100,
              fill: "#A6A6A6",
              draggable: true,
              id: id
            };
            break;
          case "line":
            myObject = {
              ...stageRef.current.getPointerPosition(),
              object: dragUrl?.current,
              fill: "#A6A6A6",
              draggable: true,
              points: [0, 0, 100, 0],
              id: id
            };
            break;
          case "text":
            myObject = {
              ...stageRef.current.getPointerPosition(),
              object: dragUrl?.current,
              width: 160,
              height: 100,
              draggable: true,
              text: "Texto Padrão",
              fontSize: 18,
              id: id
            };
            break;
        }
        setDataPages(dataPages.concat(myObject));
      }}
      onDragOver={e => e.preventDefault()}
    >
      {children}
    </MainContainer>
  );
};

export default DropCanva;
