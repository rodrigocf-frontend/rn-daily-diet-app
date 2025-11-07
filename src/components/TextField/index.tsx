import { useState } from "react";
import { Container, Input, Label } from "./styles";
import { TextInputProps } from "react-native";
import { useController } from "react-hook-form";

type Props = TextInputProps & {
  label?: string;
  control: any;
  name: string;
  formmater?: (arg: string) => string;
};

export function TextField({
  label,
  control,
  keyboardType,
  formmater,
  name,
  ...args
}: Props) {
  const [focus, setFocus] = useState(false);
  const { field } = useController({
    control,
    name,
    defaultValue: undefined,
  });

  const onFocusHandle = () => setFocus(true);
  const onBlurHandle = () => setFocus(false);
  const onChangeHandler = (text: string) => {
    field.onChange(formmater?.(text) ?? text);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        {...args}
        value={field.value}
        onChangeText={onChangeHandler}
        onFocus={onFocusHandle}
        onBlur={onBlurHandle}
        isFocus={focus}
      />
    </Container>
  );
}
