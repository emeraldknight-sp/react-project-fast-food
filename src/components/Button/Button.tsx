import { StyledButton } from "./Button.style";

export const Button = ({
  children,
  type = "button",
  color = "primary",
  size = "md",
  classname,
  arialabel,
  onClick,
}: ButtonProps) => {
  const classNameButton = `button--${color} button--${size} ${classname}`;

  return (
    <StyledButton type={type} className={classNameButton} onClick={onClick} aria-label={arialabel}>
      {children}
    </StyledButton>
  );
};
