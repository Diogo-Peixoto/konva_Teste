import { Circle, Transformer } from "react-konva";
import { useMain } from "../../../hooks";
import { useEffect, useRef } from "react";

interface ICircleProps {
  x: number;
  y: number;
  fill: string;
  height: number;
  width: number;
  id: string;
  draggable: boolean;
  onChange: (newAttrs: any) => void;
  item: any;
}

const CircleElement = ({
  x,
  y,
  fill,
  height,
  width,
  id,
  draggable,
  onChange,
  item
}: ICircleProps) => {
  const { selectObject, setSelectObject } = useMain();
  const trRef = useRef<any>(null);
  const shapRef = useRef<any>(null);

  useEffect(() => {
    trRef.current?.setNodes([shapRef.current!]);
    trRef.current?.setZIndex(trRef.current.getParent().children!.length - 1);
    trRef.current?.getLayer()?.batchDraw();
  }, [selectObject]);

  return (
    <>
      <Circle
        x={x}
        y={y}
        fill={fill}
        height={height}
        width={width}
        id={id}
        draggable={draggable}
        ref={shapRef}
        name="element"
        onClick={() => setSelectObject(id)}
        onTransformEnd={() => {
          const node = shapRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);

          onChange({
            ...item,
            x: node.x(),
            y: node.y(),

            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
            scaleX: scaleX,
            scaleY: scaleY
          });
        }}
        onDragEnd={(e: any) => {
          onChange({
            ...item,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
      />
      {selectObject === id && <Transformer ref={trRef} />}
    </>
  );
};

export default CircleElement;
