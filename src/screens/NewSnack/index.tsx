import { Button } from "@/components/Button";
import { Container, Plus } from "./styles";

export function NewSnack() {
  return (
    <Container>
      <Button IconComponent={Plus} variant="outlined">
        New Snack
      </Button>
    </Container>
  );
}
