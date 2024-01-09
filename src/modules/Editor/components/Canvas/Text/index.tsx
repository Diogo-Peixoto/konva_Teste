import { Text, Transformer } from "react-konva";
import { useEffect, useRef, useState } from "react";
import { useMain } from "../../../hooks";

interface IRetangleProps {
  x: number;
  y: number;
  id: string;
  draggable: boolean;
  height: number;
  width: number;
  text: string;
  fontSize: number;
  onChange: (newAttrs: any) => void;
  item: any;
}

const TextElement = ({
  x,
  y,
  id,
  draggable,
  height,
  width,
  text,
  fontSize,
  onChange,
  item
}: IRetangleProps) => {
  const { selectObject, setSelectObject, stageRef } = useMain();
  const trRef = useRef<any>(null);
  const shapRef = useRef<any>(null);

  const stage = stageRef.current;
  const textNode = shapRef.current;
  const tr = trRef.current;

  useEffect(() => {
    trRef.current?.setNodes([shapRef.current!]);
    trRef.current?.setZIndex(trRef.current.getParent().children!.length - 1);
    trRef.current?.getLayer()?.batchDraw();
  }, [selectObject]);

  const changeValueText = () => {
    textNode?.hide();
    tr?.hide();

    const textPosition = textNode.absolutePosition();

    const areaPosition = {
      x: stage.container().offsetLeft + textPosition.x,
      y: stage.container().offsetTop + textPosition.y
    };

    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);

    textarea.value = textNode?.text();
    textarea.style.position = "absolute";
    textarea.style.top = areaPosition.y + "px";
    textarea.style.left = areaPosition.x + "px";
    textarea.style.width = textNode?.width() - textNode?.padding() * 2 + "px";
    textarea.style.height =
      textNode?.height() - textNode?.padding() * 2 + 5 + "px";
    textarea.style.fontSize = textNode?.fontSize() + "px";
    textarea.style.border = "none";
    textarea.style.padding = "0px";
    textarea.style.margin = "0px";
    textarea.style.overflow = "hidden";
    textarea.style.background = "none";
    textarea.style.outline = "none";
    textarea.style.resize = "none";
    textarea.style.lineHeight = textNode?.lineHeight();
    textarea.style.fontFamily = textNode?.fontFamily();
    textarea.style.transformOrigin = "left top";
    textarea.style.textAlign = textNode?.align();
    textarea.style.color = textNode?.fill();
    let rotation = textNode?.rotation();
    let transform = "";
    if (rotation) {
      transform += "rotateZ(" + rotation + "deg)";
    }

    let px = 0;

    let isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    if (isFirefox) {
      px += 2 + Math.round(textNode?.fontSize() / 20);
    }
    transform += "translateY(-" + px + "px)";

    textarea.style.transform = transform;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + 3 + "px";
    textarea.focus();

    function removeTextarea() {
      textarea.parentNode?.removeChild(textarea);
      window.removeEventListener("click", handleOutsideClick);
      textNode?.show();
      tr?.show();
      tr?.forceUpdate();
    }

    function setTextareaWidth(newWidth: any) {
      if (!newWidth) {
        newWidth = textNode?.placeholder.length * textNode?.fontSize();
      }

      let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      let isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
      if (isSafari || isFirefox) {
        newWidth = Math.ceil(newWidth);
      }

      textarea.style.width = newWidth + "px";
    }

    textarea.addEventListener("keydown", function (e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        textNode?.text(textarea.value);
        removeTextarea();
      }

      if (e.keyCode === 27) {
        removeTextarea();
      }
    });

    textarea.addEventListener("keydown", function (e) {
      let scale = textNode?.getAbsoluteScale().x;
      setTextareaWidth(textNode?.width() * scale);
      textarea.style.height = "auto";
      textarea.style.height =
        textarea.scrollHeight + textNode?.fontSize() + "px";
    });

    function handleOutsideClick(e: any) {
      if (e.target !== textarea) {
        textNode?.text(textarea.value);
        removeTextarea();
      }
    }
    setTimeout(() => {
      window.addEventListener("click", handleOutsideClick);
    });
  };
  return (
    <>
      <Text
        height={height}
        width={width}
        x={x}
        y={y}
        id={id}
        text={text}
        draggable={draggable}
        fontSize={fontSize}
        name="element"
        ref={shapRef}
        onClick={() => setSelectObject(id)}
        onTransform={() => {
          textNode.setAttrs({
            width: textNode.width() * textNode.scaleX(),
            scaleX: 1
          });
        }}
        onDblClick={changeValueText}
        onDblTap={changeValueText}
      />
      {selectObject === id && (
        <Transformer
          node={textNode}
          enabledAnchors={["middle-left", "middle-right"]}
          boundBoxFunc={function (oldBox, newBox) {
            newBox.width = Math.max(30, newBox.width);
            return newBox;
          }}
          ref={trRef}
        />
      )}
    </>
  );
};

export default TextElement;
