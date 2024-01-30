import styled from "styled-components";

export const StyledButton = styled.button`
  outline: none;
  border-radius: var(--rounded);
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &.button--primary {
    background-color: var(--red);
    color: white;
  }

  &.button--secondary {
    background-color: var(--yellow);
    color: white;
  }

  &.button--tertiary {
    background-color: white;
    color: var(--gray);
  }

  &.button--xs {
    padding: 0.5rem 1rem;
  }

  &.button--sm {
    padding: 1rem 2rem;
  }

  &.button--md {
    padding: 1rem 3rem;
  }

  &.button--lg {
    padding: 1rem 5rem;
  }

  a,
  span {
    font-size: var(--text-md);
    font-family: var(--tipography-oswald);
    font-weight: 500;
    line-height: var(--line-height-md);
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
    text-decoration: none;
    color: white;
  }

  &:hover {
    background-color: var(--gray);
  }
`;
