import { Button } from "@/components/Button";
import { Container, Plus } from "./styles";

export function Statistics() {
  return (
    <Container>
      <Button IconComponent={Plus} variant="outlined">
        Statistics
      </Button>
    </Container>
  );
}
