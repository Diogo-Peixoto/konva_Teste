import { MainContainer } from "./style";
import { BsTrash } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { useMain } from "../../hooks";

const HeaderPageCanva = () => {
  const { setDataPages } = useMain();

  return (
    <MainContainer>
      <BsTrash size={20} color="#a5a5a5" onClick={() => setDataPages([])} />
      <BiAddToQueue color="#a5a5a5" size={20} />
    </MainContainer>
  );
};

export default HeaderPageCanva;
