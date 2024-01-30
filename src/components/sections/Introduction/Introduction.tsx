import { Button } from "../../../components/Button";
import IntroductionImage from "../../../assets/images/global/introduction.png";
import {
  StyledFlexDiv,
  StyledIntroduction,
  StyledList,
  StyledListItem,
} from "./Introduction.style";
import { Container } from "../../Container";

export const Introduction = () => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <StyledIntroduction>
      <Container className="container">
        <StyledFlexDiv>
          <img
            src={IntroductionImage}
            alt="Delicious juicy burger, prepared with fresh, high-quality ingredients."
          />
        </StyledFlexDiv>
        <StyledFlexDiv>
          <span>Natural</span>
          <h3>100% natural fresh ingredients</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
            eleifend gravi, nulla nunc varius lectus.
          </p>
          <StyledList>
            <StyledListItem>
              Nulla accumsan metus ultrices eleifend gravi nulla site.
            </StyledListItem>
            <StyledListItem>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit amet.
            </StyledListItem>
            <StyledListItem>Ornare vitae pulvinar hendrerit quis adipiscing.</StyledListItem>
          </StyledList>
          <Button size="md" arialabel="About us" onClick={handleClick}>
            <a href="/" target="_self" rel="noopener">
              About us
            </a>
          </Button>
        </StyledFlexDiv>
      </Container>
    </StyledIntroduction>
  );
};
