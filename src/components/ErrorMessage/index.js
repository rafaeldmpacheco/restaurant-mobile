import React from "react";
import { Message } from "./styles";

export default function ErrorMessage({ error }) {
  return error.length !== 0 && <Message>{error}</Message>;
}
