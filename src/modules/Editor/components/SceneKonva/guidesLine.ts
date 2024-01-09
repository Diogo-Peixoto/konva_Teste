import Konva from "konva";

// onde podemos encaixar nossos objetos?
const getLineGuideStops = (skipShape: any) => {
  // podemos encaixar nas bordas do palco e no centro do palco
  let vertical = [
    0,
    skipShape?.getStage().width() / 2,
    skipShape?.getStage().width()
  ];


  let horizontal = [
    0,
    skipShape?.getStage().height() / 2,
    skipShape?.getStage().height()
  ];

  // e ajustamos as bordas e o centro de cada objeto na tela
  skipShape
    ?.getStage()
    .find(".element")
    .forEach((guideItem: any) => {
      if (guideItem === skipShape) {
        return;
      }
      let box = guideItem.getClientRect();
      // e podemos encaixar em todas as bordas das formas
      vertical.push([box.x, box.x + box.width, box.x + box.width / 2]);
      horizontal.push([box.y, box.y + box.height, box.y + box.height / 2]);
    });

  return {
    vertical: vertical.flat(),
    horizontal: horizontal.flat()
  };
};

// quais pontos do objeto irão acionar o snap?
// pode ser apenas o centro do objeto
// mas vamos habilitar todas as arestas e o centro
const getObjectSnappingEdges = (node: Konva.Transformer) => {
  let box = node.getClientRect();
  let absPos = node.absolutePosition();

  return {
    vertical: [
      {
        guide: Math.round(box.x),
        offset: Math.round(absPos.x - box.x),
        snap: "start"
      },
      {
        guide: Math.round(box.x + box.width / 2),
        offset: Math.round(absPos.x - box.x - box.width / 2),
        snap: "center"
      },
      {
        guide: Math.round(box.x + box.width),
        offset: Math.round(absPos.x - box.x - box.width),
        snap: "end"
      }
    ],
    horizontal: [
      {
        guide: Math.round(box.y),
        offset: Math.round(absPos.y - box.y),
        snap: "start"
      },
      {
        guide: Math.round(box.y + box.height / 2),
        offset: Math.round(absPos.y - box.y - box.height / 2),
        snap: "center"
      },
      {
        guide: Math.round(box.y + box.height),
        offset: Math.round(absPos.y - box.y - box.height),
        snap: "end"
      }
    ]
  };
};

// encontra todas as possibilidades de ajuste
const getGuides = (lineGuideStops: any, itemBounds: any) => {
  const GUIDELINE_OFFSET = 5;
  const resultV: any[] = [];
  const resultH: any[] = [];

  lineGuideStops.vertical.forEach((lineGuide: any) => {
    itemBounds.vertical.forEach((itemBound: any) => {
      let diff = Math.abs(lineGuide - itemBound.guide);

      // se a distância entre a linha da guilda e o ponto de encaixe do objeto for próxima, podemos considerar isso para encaixe
      if (diff < GUIDELINE_OFFSET) {
        resultV.push({
          lineGuide: lineGuide,
          diff: diff,
          snap: itemBound.snap,
          offset: itemBound.offset
        });
      }
    });
  });

  lineGuideStops.horizontal.forEach((lineGuide: any) => {
    itemBounds.horizontal.forEach((itemBound: any) => {
      let diff = Math.abs(lineGuide - itemBound.guide);
      if (diff < GUIDELINE_OFFSET) {
        resultH.push({
          lineGuide: lineGuide,
          diff: diff,
          snap: itemBound.snap,
          offset: itemBound.offset
        });
      }
    });
  });

  let guides = [];

  // encontre o snap mais próximo
  let minV = resultV.sort((a, b) => a.diff - b.diff)[0];
  let minH = resultH.sort((a, b) => a.diff - b.diff)[0];
  if (minV) {
    guides.push({
      lineGuide: minV.lineGuide,
      offset: minV.offset,
      orientation: "V",
      snap: minV.snap
    });
  }
  if (minH) {
    guides.push({
      lineGuide: minH.lineGuide,
      offset: minH.offset,
      orientation: "H",
      snap: minH.snap
    });
  }

  return guides;
};

const drawGuides = (guides: any, setHLine: any, setVLine: any) => {
  if (guides) {
    guides.forEach((lg: any) => {
      if (lg.orientation === "H") {
        let guide = {
          points: [-6000, 0, 6000, 0],
          stroke: "rgb(0, 161, 255)",
          strokeWidth: 1,
          name: "guid-line",
          dash: [4, 6],
          x: 0,
          y: lg.lineGuide
        };

        setHLine([...guides, guide]);
      } else if (lg.orientation === "V") {
        let guide = {
          points: [0, -6000, 0, 6000],
          stroke: "rgb(0, 161, 255)",
          strokeWidth: 1,
          name: "guid-line",
          dash: [4, 6],
          x: lg.lineGuide,
          y: 0
        };

        setVLine([...guides, guide]);
      }
    });
  }
};

const onDragmove = (e: any, setHlines: any, setVlines: any) => {
  // limpar todas as linhas anteriores na tela
  /* layerRef.current.find(".guid-line").forEach((l: any) => l.destroy()); */

  // encontrar possíveis linhas de encaixe
  let lineGuideStops = getLineGuideStops(e.target);
  // encontrar pontos de encaixe do objeto atual
  let itemBounds = getObjectSnappingEdges(e.target);

  // agora encontre onde podemos encaixar o objeto atual
  let guides = getGuides(lineGuideStops, itemBounds);

  // não faça nada sem estalar
  if (!guides.length) {
    return;
  }

  drawGuides(guides, setHlines, setVlines);

  let absPos = e.target.absolutePosition();
  // agora força a posição do objeto
  guides.forEach(lg => {
    switch (lg.snap) {
      case "start": {
        switch (lg.orientation) {
          case "V": {
            absPos.x = lg.lineGuide + lg.offset;
            break;
          }
          case "H": {
            absPos.y = lg.lineGuide + lg.offset;
            break;
          }
        }
        break;
      }
      case "center": {
        switch (lg.orientation) {
          case "V": {
            absPos.x = lg.lineGuide + lg.offset;
            break;
          }
          case "H": {
            absPos.y = lg.lineGuide + lg.offset;
            break;
          }
        }
        break;
      }
      case "end": {
        switch (lg.orientation) {
          case "V": {
            absPos.x = lg.lineGuide + lg.offset;
            break;
          }
          case "H": {
            absPos.y = lg.lineGuide + lg.offset;
            break;
          }
        }
        break;
      }
    }
  });
  e.target.absolutePosition(absPos);
};

const onDragEnd = (e: any, setHlines: any, setVlines: any) => {
  setHlines([]);
  setVlines([]);
};

export { onDragmove, onDragEnd };
