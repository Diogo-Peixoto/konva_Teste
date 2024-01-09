import { MainContainer } from "./style";
import CircleImage from "../../assets/ellipse.svg";
import RetactangleImage from "../../assets/rectangle.svg";
import SquareImage from "../../assets/square.svg";
import StarImage from "../../assets/star.svg";
import LineImage from "../../assets/line.svg";
import TextImage from "../../assets/editIconText.svg";
import TriangleImage from "../../assets/triangle.svg";
import { useMain } from "../../hooks";

interface IAsidebarProps {
  dragUrl: HTMLImageElement;
}

const Asidebar = () => {
  const { dragUrl } = useMain();

  return (
    <MainContainer>
      <h3>Arraste o elemento para o editor para inserir no documento</h3>

      <div>
        <figure>
          <img
            src={TextImage}
            alt="text"
            draggable
            onDragStart={(e: any) => {
              dragUrl.current = e.target.alt;
            }}
          />
        </figure>
        <figure>
          <img
            src={RetactangleImage}
            alt="rectangle"
            draggable
            onDragStart={(e: any) => {
              dragUrl.current = e.target.alt;
            }}
          />
        </figure>
        <figure>
          <img
            src={CircleImage}
            alt="circle"
            draggable
            onDragStart={(e: any) => {
              dragUrl.current = e.target.alt;
            }}
          />
        </figure>
        <figure>
          <img
            src={TriangleImage}
            alt="triangle"
            draggable
            onDragStart={(e: any) => {
              dragUrl.current = e.target.alt;
            }}
          />
        </figure>
        <figure>
          <img
            src={SquareImage}
            alt="square"
            draggable
            onDragStart={(e: any) => {
              dragUrl.current = e.target.alt;
            }}
          />
        </figure>
        <figure>
          <img
            src={StarImage}
            alt="star"
            draggable
            onDragStart={(e: any) => {
              dragUrl.current = e.target.alt;
            }}
          />
        </figure>
        <figure>
          <img
            src={LineImage}
            alt="line"
            draggable
            onDragStart={(e: any) => {
              dragUrl.current = e.target.alt;
            }}
          />
        </figure>
      </div>
    </MainContainer>
  );
};

export default Asidebar;
