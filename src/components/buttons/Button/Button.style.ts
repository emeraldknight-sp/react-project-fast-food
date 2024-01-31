import styled from "styled-components";

export const StyledButton = styled.button<StyledButton>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;

  border-radius: ${(props) => (props.rounded ? "var(--rounded-full)" : "var(--rounded)")};

  background-color: ${(props) =>
    props.color === "primary"
      ? "var(--red)"
      : props.color === "secondary"
        ? "var(--yellow)"
        : props.color === "tertiary"
          ? "var(--white)"
          : "var(--black)"};

  color: ${(props) => (props.color === "tertiary" ? "var(--black)" : "var(--white)")};

  padding: ${(props) =>
    props.size === "xs"
      ? "0.5rem 1rem"
      : props.size === "sm"
        ? "1rem 2rem"
        : props.size === "md"
          ? "1rem 3rem"
          : "1rem 5rem"};

  &:hover {
    background-color: var(--black);
    color: var(--white);
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
`;
