import { Box, BoxVector, Container } from "./styled";

const RulerLeft = ({ setIsguidLineV }: any) => {
  const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <Container onClick={() => setIsguidLineV(true)}>
      <div>
        {test.map(e => {
          return (
            <Box key={e}>
              <p>{e}</p>
              <BoxVector>
                <span />
                <span />
                <span />
                <span />
                <span className="midVector" />
                <span />
                <span />
                <span />
                <span />
              </BoxVector>
            </Box>
          );
        })}
      </div>
    </Container>
  );
};

export default RulerLeft;
