import styled from "styled-components";
import Badge from "../../../assets/images/background/title.png";
import Grunge from "../../../assets/images/background/grunge.png";

export const StyledIntroduction = styled.section`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
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
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;
  flex: 1;
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
