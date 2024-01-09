import React, {
  createContext,
  useState,
  useRef,
  ReactNode,
  useContext,
  useEffect
} from "react";

import Konva from "konva";

interface IMainData {
  dataPages: any;
  setDataPages: any;
  dragUrl: React.MutableRefObject<any>;
  stageRef: React.MutableRefObject<any>;
  layerRef: React.MutableRefObject<any>;
  selectObject: string;
  setSelectObject: React.Dispatch<React.SetStateAction<string>>;
  setIsGroupSelect: React.Dispatch<React.SetStateAction<boolean>>;
  isGroupSelect: boolean;
  linesH: number[];
  linesV: number[];
  setLinesH: React.Dispatch<React.SetStateAction<number[]>>;
  setLinesV: React.Dispatch<React.SetStateAction<number[]>>;
  position: {
    x: number;
    y: number;
  };
  setPosition: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  isguidLineH: boolean;
  setIsguidLineH: React.Dispatch<React.SetStateAction<boolean>>;
  isguidLineV: boolean;
  setIsguidLineV: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IMainProviderProps {
  children: ReactNode;
}

const MainContext = createContext<IMainData>({} as IMainData);

const MainProvider: React.FC<IMainProviderProps> = ({ children }) => {
  const [dataPages, setDataPages] = useState([]);
  const [selectObject, setSelectObject] = useState("");
  const [isGroupSelect, setIsGroupSelect] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [linesH, setLinesH] = useState<number[]>([]);
  const [linesV, setLinesV] = useState<number[]>([]);
  const [isguidLineH, setIsguidLineH] = useState(false);
  const [isguidLineV, setIsguidLineV] = useState(false);

  const dragUrl = useRef();
  const stageRef = useRef<Konva.Stage[]>(null);
  const layerRef = useRef<Konva.Layer[]>(null);

  useEffect(() => {
    const data: any = window.localStorage.getItem("data");

    if (dataPages[0] || data === null) {
      window.localStorage.setItem("data", JSON.stringify(dataPages));
    }
  }, [dataPages]);

  useEffect(() => {
    const data: any = window.localStorage.getItem("data");
    setDataPages(JSON.parse(data));
  }, []);

  return (
    <MainContext.Provider
      value={{
        dataPages,
        setDataPages,
        dragUrl,
        stageRef,
        selectObject,
        setSelectObject,
        setIsGroupSelect,
        isGroupSelect,
        layerRef,
        linesH,
        linesV,
        setLinesH,
        setLinesV,
        position,
        setPosition,
        isguidLineH,
        setIsguidLineH,
        isguidLineV,
        setIsguidLineV
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

function useMain(): IMainData {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("Error  UseMain");
  }

  return context;
}

export { useMain, MainProvider };
