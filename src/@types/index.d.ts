declare module "*.png";
declare module "*.jpg";
declare module "*.webp";

interface ButtonBaseProps {
  children: React.ReactNode;
  type: "submit" | "button" | "reset" | undefined;
  rounded?: boolean;
  ariaLabel: string;
  onClick?: (e: any) => void;
}

interface ButtonProps extends ButtonBaseProps {
  color: "primary" | "secondary" | "tertiary";
  size: "xs" | "sm" | "md" | "lg";
}

type StyledButton = pick<ButtonProps, "color", "size">;

interface IconButtonProps extends ButtonBaseProps {
  color: "primary" | "secondary" | "tertiary" | "quartiary";
  size: "xs" | "sm" | "md";
}

type StyledIconButton = pick<IconButtonProps, "color", "size">;

interface StyledAnimationProps {
  children: React.ReactNode;
  isVisible: boolean;
}
