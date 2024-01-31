import styled from "styled-components";
import Badge from "../../../assets/images/background/title.png";
import Grunge from "../../../assets/images/background/grunge.png";

export const StyledIntroduction = styled.section`
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;

    @media (min-width: 1440px) {
      flex-direction: row;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 40px;
    background: transparent url(${Grunge}) no-repeat top center;
  }

  span {
    font-family: var(--tipography-oswald);
    font-size: var(--text-2xl);
    font-weight: 700;
    line-height: var(--line-height-2xl);
    text-transform: capitalize;
    color: white;
    letter-spacing: 0;
    background: transparent url(${Badge}) no-repeat top left;
    padding: 28px 75px 8px 50px;
  }

  h3 {
    font-family: var(--tipography-oswald);
    font-size: var(--text-5xl);
    font-weight: 500;
    line-height: var(--line-height-5xl);
    text-transform: uppercase;
    color: var(--black);
  }

  p {
    font-family: var(--tipography-opensans);
    font-size: var(--text-md);
    font-weight: 400;
    line-height: var(--line-height-2xl);
    color: var(--lightGray);
  }
`;

export const StyledFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  width: 100%;

  &.introduction__image {
    align-items: center;
  }

  &.introduction__description {
    align-items: flex-start;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: disc;
  list-style-position: inside;
`;

export const StyledListItem = styled.li`
  font-family: var(--tipography-opensans);
  font-size: var(--text-md);
  font-weight: 400;
  line-height: var(--line-height-md);
  letter-spacing: 0.5px;
  color: var(--lightGray);
`;

export const StyledAnimation = styled.div<StyledAnimationProps>`
  position: absolute;
  z-index: 1;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translate(${(props) => (props.isVisible ? "100%, 150%" : "0%, 150%")});
  transition:
    opacity 0.5s,
    transform 0.5s;
`;
