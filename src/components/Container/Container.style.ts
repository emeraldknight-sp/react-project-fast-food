import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 90vw;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 85vw;
  }

  @media (min-width: 1024px) {
    max-width: 80vw;
  }
`;
