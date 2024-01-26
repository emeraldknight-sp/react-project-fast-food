import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100vw;
  height: 100vh;

  h1,
  h2,
  h3 {
    font-family: var(--tipography-opensans);
    font-size: var(--text-5xl);
  }
`;
