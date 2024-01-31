declare module "*.png";
declare module "*.jpg";
declare module "*.webp";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined;
  color?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "lg";
  classname?: string;
  arialabel: string;
  onClick?: (e: any) => void;
}

interface StyledAnimationProps {
  children: React.ReactNode;
  isVisible: boolean;
}
