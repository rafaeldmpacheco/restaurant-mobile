import React from "react";
import { SignLinkToucheable, SignLinkText } from "./styles";

export default function SignLink({ onPress, label }) {
  return (
    <SignLinkToucheable onPress={onPress}>
      <SignLinkText>{label}</SignLinkText>
    </SignLinkToucheable>
  );
}
