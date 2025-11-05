import { PropsWithChildren } from "react";
import { Container } from "./styles";

export function Paper({ children }: PropsWithChildren) {
  return (
    <Container
      style={{
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.05,
        shadowRadius: 30,
        elevation: 1,
      }}
    >
      {children}
    </Container>
  );
}
