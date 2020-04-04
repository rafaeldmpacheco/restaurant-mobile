import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Logo from "../../components/Logo";
import SignButton from "../../components/SignButton";
import SignLink from "../../components/SignLink";
import api from "../../services/api";
import { Container, Input } from "./styles";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  function navigateToSignUp() {
    setError("");
    navigation.navigate("SignUp");
  }

  async function handleSignInPress() {
    if (username.length === 0 || password.length === 0) {
      setError("Preencha usuário e senha para continuar!");
    } else {
      const body = { username, password };
      try {
        api.post("/5defab092f0000e7848e0c9e", body).then(() => {
          setError("");
          navigation.navigate("Dishes");
        });
      } catch (err) {
        setError("Houve um problema com o login, verifique suas credenciais!");
      }
    }
  }

  return (
    <Container>
      <Logo />

      <Input
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />

      <ErrorMessage error={error} />

      <SignButton onPress={handleSignInPress} label="Entrar" />

      <SignLink onPress={navigateToSignUp} label="Criar conta" />
    </Container>
  );
}
