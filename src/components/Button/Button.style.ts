import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--red);
  color: white;
  outline: none;
  border-radius: var(--rounded);
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.5s ease;

  span {
    font-size: var(--text-md);
    font-family: var(--tipography-oswald);
    font-weight: 500;
    line-height: var(--line-height-md);
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
  }

  &:hover {
    background-color: var(--gray);
  }
`;
