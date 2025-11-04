import { Button } from "@/components/Button";
import { Container, Plus } from "./styles";
import { ButtonSelect } from "@/components/ButtonSelect";
import { TextField } from "@/components/TextField";

export function Snack() {
  return (
    <Container>
      <Button IconComponent={Plus} variant="outlined">
        Snack
      </Button>
    </Container>
  );
}
