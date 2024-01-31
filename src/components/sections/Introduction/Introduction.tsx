import { Button } from "../../buttons/Button";
import IntroductionImage from "../../../assets/images/global/introduction.png";
import {
  StyledAnimation,
  StyledFlexDiv,
  StyledIntroduction,
  StyledList,
  StyledListItem,
} from "./Introduction.style";
import { Container } from "../../Container";
import { useEffect, useState } from "react";
import IntroductionArrow from "../../../assets/images/global/introduction-arrow.png";

export const Introduction = () => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animation-arrow");
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementMiddle = rect.top + rect.height / 2;
        setIsVisible(elementMiddle >= 0 && elementMiddle <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledIntroduction>
      <StyledAnimation id="animation-arrow" isVisible={isVisible}>
        <img src={IntroductionArrow} alt="Delicious Angus Burger" />
      </StyledAnimation>
      <Container className="container">
        <StyledFlexDiv className="introduction__image">
          <img
            src={IntroductionImage}
            alt="Delicious juicy burger, prepared with fresh, high-quality ingredients."
          />
        </StyledFlexDiv>
        <StyledFlexDiv className="introduction__description">
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
          <Button
            type="button"
            color="primary"
            size="md"
            ariaLabel="About us"
            onClick={handleClick}
          >
            <a href="/" target="_self" rel="noopener">
              About us
            </a>
          </Button>
        </StyledFlexDiv>
      </Container>
    </StyledIntroduction>
  );
};
