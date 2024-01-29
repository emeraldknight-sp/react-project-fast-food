interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined;
  color?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "lg";
  classname?: string;
  arialabel: string;
  onClick?: () => void;
}
