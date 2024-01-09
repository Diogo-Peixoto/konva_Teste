import { Star, Transformer } from "react-konva";
import { useEffect, useRef } from "react";
import { useMain } from "../../../hooks";

interface IRetangleProps {
  x: number;
  y: number;
  fill: string;
  id: string;
  draggable: boolean;
  numPoints: number;
  innerRadius: number;
  outerRadius: number;
  scaleX: number;
  scaleY: number;
  onChange: (newAttrs: any) => void;
  item: any;
}

const StarElement = ({
  x,
  y,
  fill,
  id,
  draggable,
  numPoints,
  innerRadius,
  outerRadius,
  scaleX,
  scaleY,
  onChange,
  item
}: IRetangleProps) => {
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
      <Star
        x={x}
        y={y}
        fill={fill}
        id={id}
        numPoints={numPoints}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        scaleX={scaleX}
        scaleY={scaleY}
        draggable={draggable}
        name="element"
        ref={shapRef}
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

export default StarElement;
