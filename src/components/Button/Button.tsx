import { StyledButton } from "./Button.style";

export const Button = ({ id, type, children, classname, arialabel, onClick }: ButtonProps) => {
  return (
    <StyledButton
      id={id}
      type={type}
      className={classname}
      onClick={onClick}
      aria-label={arialabel}
    >
      {children}
    </StyledButton>
  );
};
