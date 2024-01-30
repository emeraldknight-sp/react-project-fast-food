import { Button } from "../../../components/Button";
import IntroductionImage from "../../../assets/images/global/introduction.png";
import { StyledIntroduction, StyledList, StyledListItem } from "./Introduction.style";
import { Container } from "../../Container";

export const Introduction = () => {
  return (
    <StyledIntroduction>
      <Container className="container">
        <img
          src={IntroductionImage}
          alt="Delicious juicy burger, prepared with fresh, high-quality ingredients."
        />
        <div>
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
          <Button size="md" arialabel="About us">
            <a href="http://">About us</a>
          </Button>
        </div>
      </Container>
    </StyledIntroduction>
  );
};
