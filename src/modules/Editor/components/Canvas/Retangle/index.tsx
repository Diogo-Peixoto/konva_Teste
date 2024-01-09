import { Rect, Transformer } from "react-konva";
import { useEffect, useRef } from "react";
import { useMain } from "../../../hooks";

interface IRetangleProps {
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

const Retangle = ({
  x,
  y,
  fill,
  height,
  width,
  id,
  draggable,
  onChange,
  item
}: IRetangleProps) => {
  const { selectObject, setSelectObject } = useMain();
  const trRef = useRef<any>();
  const shapRef = useRef<any>();

  useEffect(() => {
    trRef.current?.setNodes([shapRef.current!]);
    trRef.current?.setZIndex(trRef.current.getParent().children!.length - 1);
    trRef.current?.getLayer()?.batchDraw();
  }, [selectObject]);

  return (
    <>
      <Rect
        ref={shapRef}
        x={x}
        y={y}
        fill={fill}
        height={height}
        width={width}
        id={id}
        name="element"
        draggable={draggable}
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

export default Retangle;
