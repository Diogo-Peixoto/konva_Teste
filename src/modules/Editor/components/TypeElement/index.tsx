import { useMain } from "../../hooks";
import CircleElement from "../Canvas/Circle";
import LineElement from "../Canvas/Line";
import Retangle from "../Canvas/Retangle";
import StarElement from "../Canvas/Star";
import TextElement from "../Canvas/Text";

interface ITypeElementProps {
  item: {
    object: string;
    x: number;
    y: number;
    fill?: string;
    height?: number;
    width?: number;
    id: string;
    draggable: boolean;
    stroke?: string;
    points: [];
    fontSize?: number;
    numPoints?: number;
    innerRadius?: number;
    outerRadius?: number;
    scaleX?: number;
    scaleY?: number;
    text?: string;
  };
}

const TypeElement = ({ item }: ITypeElementProps) => {
  let RenderObject = null;
  const { dataPages, setDataPages } = useMain();

  const onChange = (newAttrs: any) => {
    const previusArray: Array<any> = dataPages.slice();
    const item = previusArray.find(item => item.id === newAttrs.id);
    const index = previusArray.lastIndexOf(item);
    previusArray[index] = newAttrs;
    setDataPages(previusArray);
  };

  switch (item.object) {
    case "rectangle":
      RenderObject = (
        <Retangle
          x={item.x}
          y={item.y}
          fill={item.fill!}
          height={item.height!}
          width={item.width!}
          id={item.id}
          draggable={item.draggable}
          onChange={onChange}
          item={item}
        />
      );
      break;
    case "circle":
      RenderObject = (
        <CircleElement
          x={item.x}
          y={item.y}
          fill={item.fill!}
          height={item.height!}
          width={item.width!}
          id={item.id}
          draggable={item.draggable}
          onChange={onChange}
          item={item}
        />
      );
      break;
    case "star":
      RenderObject = (
        <StarElement
          x={item.x}
          y={item.y}
          fill={item.fill!}
          id={item.id}
          numPoints={item.numPoints!}
          innerRadius={item.innerRadius!}
          outerRadius={item.outerRadius!}
          scaleX={item.scaleX!}
          scaleY={item.scaleY!}
          draggable={item.draggable}
          onChange={onChange}
          item={item}
        />
      );
      break;
    case "triangle":
      RenderObject = (
        <StarElement
          x={item.x}
          y={item.y}
          fill={item.fill!}
          id={item.id}
          numPoints={item.numPoints!}
          innerRadius={item.innerRadius!}
          outerRadius={item.outerRadius!}
          scaleX={item.scaleX!}
          scaleY={item.scaleY!}
          draggable={item.draggable}
          onChange={onChange}
          item={item}
        />
      );
      break;
    case "square":
      RenderObject = (
        <Retangle
          x={item.x}
          y={item.y}
          fill={item.fill!}
          height={item.height!}
          width={item.width!}
          id={item.id}
          draggable={item.draggable}
          onChange={onChange}
          item={item}
        />
      );
      break;
    case "line":
      RenderObject = (
        <LineElement
          x={item.x}
          y={item.y}
          fill={item.fill!}
          id={item.id}
          points={item.points}
          draggable={item.draggable}
          onChange={onChange}
          item={item}
        />
      );
      break;
    case "text":
      RenderObject = (
        <TextElement
          height={item.height!}
          width={item.width!}
          x={item.x}
          y={item.y}
          id={item.id}
          text={item.text!}
          fontSize={item.fontSize!}
          draggable={item.draggable}
          onChange={onChange}
          item={item}
        />
      );
      break;
  }

  return <>{RenderObject}</>;
};

export default TypeElement;
