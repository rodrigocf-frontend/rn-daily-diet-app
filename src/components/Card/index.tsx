import { PropsWithChildren } from "react";
import { Container, ContainerProps } from "./styles";

type CardProps = PropsWithChildren<ContainerProps>;

export function Card({ children, ...args }: CardProps) {
  return <Container {...args}>{children}</Container>;
}
