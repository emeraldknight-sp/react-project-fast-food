import { Button } from "../../components/Button";
import { StyledHome } from "./Home.style";

export const Home = () => (
  <StyledHome>
    <h1>Hello World</h1>
    <Button color="primary" size="md" arialabel="clique me">
      <span>Clique me!</span>
    </Button>
  </StyledHome>
);
