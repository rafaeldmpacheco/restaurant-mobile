import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "./styles";

export default function Logo() {
  return (
    <View>
      <MaterialCommunityIcons
        name="food"
        size={125}
        color="#a0131b"
      ></MaterialCommunityIcons>
    </View>
  );
}
