import { useState } from "react";
import { Container, Input, Label } from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
  label?: string;
};

export function TextField({ label, ...args }: Props) {
  const [focus, setFocus] = useState(false);

  const onFocusHandle = () => setFocus(true);
  const onBlurHandle = () => setFocus(false);

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        {...args}
        onFocus={onFocusHandle}
        onBlur={onBlurHandle}
        isFocus={focus}
      />
    </Container>
  );
}
