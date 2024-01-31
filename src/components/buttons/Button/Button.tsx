import { StyledButton } from "./Button.style";

export const Button = ({ children, type, ariaLabel, onClick, ...props }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} aria-label={ariaLabel} {...props}>
      {children}
    </StyledButton>
  );
};
