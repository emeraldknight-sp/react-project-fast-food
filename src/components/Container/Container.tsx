import { StyledContainer } from "./Container.style";

interface ContainerProps {
  children: React.ReactNode;
  className: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};
