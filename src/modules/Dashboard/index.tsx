import { Container } from "./styled";

const Dashboard = () => {
  return (
    <Container>
      <button
        onClick={() => console.log("clicou")}
        onSelect={() => console.log("soltou")}
      >
        Butão
      </button>
    </Container>
  );
};

export default Dashboard;
