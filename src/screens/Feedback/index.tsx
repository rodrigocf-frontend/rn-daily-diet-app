import { Button } from "@/components/Button";
import { Container, Plus } from "./styles";

export function Feedback() {
  return (
    <Container>
      <Button IconComponent={Plus} variant="outlined">
        Feedback
      </Button>
    </Container>
  );
}
