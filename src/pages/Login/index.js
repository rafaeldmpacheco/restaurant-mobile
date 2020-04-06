import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../components/Logo";
import SignButton from "../../components/SignButton";
import SignLink from "../../components/SignLink";
import { loginRequest } from "../../store/modules/auth/actions";
import { Container, Input } from "./styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  async function handleLoginPress() {
    dispatch(loginRequest(username, password, navigation));
  }

  function navigateToSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <Container>
      <Logo />

      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />

      <SignButton
        onPress={handleLoginPress}
        label={loading ? "Loading ..." : "Login"}
      />

      <SignLink onPress={navigateToSignUp} label="Sign Up" />
    </Container>
  );
}
