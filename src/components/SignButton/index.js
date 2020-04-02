import React from "react";
import { Button, ButtonText } from "./styles";

export default function SignButton({ onPress, label }) {
  return (
    <Button onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </Button>
  );
}
