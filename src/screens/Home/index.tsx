import { Button } from "@/components/Button";
import { Container, Plus } from "./styles";
import { ButtonSelect } from "@/components/ButtonSelect";
import { TextField } from "@/components/TextField";

export function Home() {
  return (
    <Container>
      <Button IconComponent={Plus} variant="outlined">
        Nova Refeição
      </Button>
      <Button IconComponent={Plus} variant="contained">
        Nova Refeição
      </Button>

      <ButtonSelect isActive>Sim</ButtonSelect>
      <ButtonSelect variant="secondary" isActive>
        Não
      </ButtonSelect>
      <TextField label="Label" />
    </Container>
  );
}
