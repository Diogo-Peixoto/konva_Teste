import React, {
  createContext,
  useState,
  useRef,
  ReactNode,
  useContext,
  useEffect
} from "react";

import Konva from "konva";
import { Rect } from "konva/lib/shapes/Rect";
import { useMain } from ".";

interface IGroupData {
  selectionGroup: React.RefObject<Rect>;
  trRef: React.RefObject<Konva.Transformer>;
  startPosition: (e: any) => void;
  positionMouve: (e: any) => void;
  endPosition: (e: any) => void;
  notSelectGroup: (e: any) => void;
}

interface IMainProviderProps {
  children: ReactNode;
}

interface IPosition {
  x1: undefined | number;
  y1: undefined | number;
  x2: undefined | number;
  y2: undefined | number;
}

const GroupContext = createContext<IGroupData>({} as IGroupData);

const GroupProvider: React.FC<IMainProviderProps> = ({ children }) => {
  const { stageRef, setSelectObject, selectObject } = useMain();
  const selectionGroup = useRef<Konva.Rect>(null);
  const trRef = useRef<Konva.Transformer>(null);
  const [group, setGroup] = useState<IPosition>({
    x1: undefined,
    y1: undefined,
    x2: undefined,
    y2: undefined
  });

  useEffect(() => {
    if (selectObject) {
      trRef.current?.nodes([]);
    }
  }, [selectObject]);

  const deselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectObject("");
    }
  };

  const startPosition = (e: any) => {
    deselect(e);
    if (e.target !== stageRef.current) {
      return;
    }
    e.evt.preventDefault();

    setGroup({
      x1: stageRef.current?.getPointerPosition()?.x,
      y1: stageRef.current?.getPointerPosition()?.y,
      x2: stageRef.current?.getPointerPosition()?.x,
      y2: stageRef.current?.getPointerPosition()?.y
    });

    selectionGroup.current?.visible(true);
    selectionGroup.current?.width(0);
    selectionGroup.current?.height(0);
  };

  const positionMouve = (e: any) => {
    if (!selectionGroup.current?.visible()) {
      return;
    }

    e.evt.preventDefault();
    setGroup({
      ...group,
      x2: stageRef.current?.getPointerPosition()?.x,
      y2: stageRef.current?.getPointerPosition()?.y
    });

    selectionGroup.current?.setAttrs({
      x: Math.min(group.x1!, group.x2!),
      y: Math.min(group.y1!, group.y2!),
      width: Math.abs(group.x2! - group.x1!),
      height: Math.abs(group.y2! - group.y1!)
    });
  };

  const endPosition = (e: any) => {
    if (!selectionGroup.current?.visible()) {
      return;
    }

    e.evt.preventDefault();

    setTimeout(() => {
      selectionGroup.current?.visible(false);
    });

    const shapes = stageRef.current?.find(".element");
    const box = selectionGroup.current?.getClientRect();
    const selected = shapes?.filter((shape: any) =>
      Konva.Util.haveIntersection(box!, shape.getClientRect())
    );

    trRef.current?.nodes(selected!);
  };

  const notSelectGroup = (e: any) => {
    if (selectionGroup.current?.visible()) {
      return;
    }

    if (e.target === stageRef.current) {
      trRef.current?.nodes([]);
      return;
    }

    if (!e.target.hasName("element")) {
      return;
    }
  };

  return (
    <GroupContext.Provider
      value={{
        selectionGroup,
        trRef,
        startPosition,
        positionMouve,
        endPosition,
        notSelectGroup
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

function useGroup(): IGroupData {
  const context = useContext(GroupContext);

  if (!context) {
    throw new Error("Error  UseMain");
  }

  return context;
}

export { useGroup, GroupProvider };
