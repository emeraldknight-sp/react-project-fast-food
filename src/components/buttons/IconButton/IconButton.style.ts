import styled from "styled-components";
import { StyledButton } from "../Button/Button.style";

export const StyledIconButton = styled(StyledButton)<StyledIconButton>`
  border-radius: ${(props) => (props.rounded ? "var(--rounded-full)" : "var(--rounded)")};
  padding: ${(props) =>
    props.size === "xs" ? "0.25rem" : props.size === "sm" ? "0.5rem" : "1rem"};

  &:hover {
    background-color: ${(props) => (props.color === "quartiary" ? "var(--white)" : "var(--black)")};
    color: ${(props) => (props.color === "quartiary" ? "var(--black)" : "var(--white)")};
  }
`;
