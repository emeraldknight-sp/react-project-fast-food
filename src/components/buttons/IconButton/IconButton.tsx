import { StyledIconButton } from "./IconButton.style";

export const IconButton = ({ children, type, ariaLabel, onClick, ...props }: IconButtonProps) => {
  return (
    <StyledIconButton type={type} onClick={onClick} aria-label={ariaLabel} {...props}>
      {children}
    </StyledIconButton>
  );
};
