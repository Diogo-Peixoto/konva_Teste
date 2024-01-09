import { useState, useEffect, useRef } from "react";
import CanvasContainer from "../CanvasContainer";
import { GuideZone, GuidelineH, GuidelineV, MainContainer } from "./style";
import RulerTop from "../RulerTop";
import { useMain } from "../../hooks";
import RulerLeft from "../RulerLeft";

const WorkSpace = () => {
  const {
    position,
    setPosition,
    linesH,
    setLinesH,
    setIsguidLineH,
    isguidLineH,
    setIsguidLineV,
    isguidLineV,
    linesV,
    setLinesV
  } = useMain();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const recuo =
    (containerRef.current?.getBoundingClientRect().width! - 600) / 2;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX - 208, y: event.clientY - (30 - scroll) });
  };

  return (
    <MainContainer
      onClick={() => {
        if (isguidLineH) {
          setLinesH([...linesH, position.y]);
          setIsguidLineH(false);
        }

        if (isguidLineV) {
          setLinesV([...linesV, position.x]);

          setIsguidLineV(false);
        }
      }}
      ref={containerRef}
      onScroll={e => setScroll(e.currentTarget.scrollTop!)}
    >
      <GuideZone onMouseMove={handleMouseMove}>
        <RulerTop setIsguidLineH={setIsguidLineH} />
        <RulerLeft setIsguidLineV={setIsguidLineV} />

        {isguidLineH && <GuidelineH style={{ top: position.y, left: 0 }} />}
        {isguidLineV && <GuidelineV style={{ top: 0, left: position.x }} />}
        {linesH.length > 0 &&
          linesH.map((element, index) => {
            return <GuidelineH key={index} style={{ top: element, left: 0 }} />;
          })}
        {linesV.length > 0 &&
          linesV.map((element, index) => {
            return <GuidelineV key={index} style={{ top: 0, left: element }} />;
          })}
        <CanvasContainer />
      </GuideZone>
    </MainContainer>
  );
};

export default WorkSpace;
