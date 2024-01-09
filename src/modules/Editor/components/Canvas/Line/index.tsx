import { Line, Transformer } from "react-konva";
import { useEffect, useRef } from "react";
import { useMain } from "../../../hooks";

interface IRetangleProps {
  x: number;
  y: number;
  fill: string;
  id: string;
  draggable: boolean;
  points: [];
  onChange: (newAttrs: any) => void;
  item: any;
}

const LineElement = ({
  x,
  y,
  fill,
  points,
  id,
  draggable,
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
      <Line
        x={x}
        points={points}
        y={y}
        stroke={fill}
        id={id}
        draggable={draggable}
        ref={shapRef}
        name="element"
        onClick={() => setSelectObject(id)}
        onTransformEnd={() => {
          const node = shapRef.current;

          onChange({
            ...item,
            x: node.x(),
            y: node.y(),

            width: node.width(),
            height: node.height()
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

export default LineElement;
