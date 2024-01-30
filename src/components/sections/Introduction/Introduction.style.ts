import styled from "styled-components";
import Badge from "../../../assets/images/background/title.png";

export const StyledIntroduction = styled.section`
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 32px;
    width: 75%;

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
