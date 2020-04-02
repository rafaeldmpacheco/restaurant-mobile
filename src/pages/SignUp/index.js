import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import Logo from "../../components/Logo";
import SignButton from "../../components/SignButton";
import SignLink from "../../components/SignLink";
import api from "../../services/api";
import { Container, Input, SuccessMessage } from "./styles";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigation = useNavigation();

  function navigateBack() {
    setSuccess("");
    setError("");
    navigation.goBack();
  }

  async function handleSignUpPress() {
    if (username.length === 0 || password.length === 0) {
      setSuccess("");
      setError("Preencha todos os campos para continuar!");
    } else {
      try {
        await api.post("/5defab092f0000e7848e0c9e ", {
          username,
          password
        });

        setError("");
        setSuccess("Conta criada com sucesso! Redirecionando para o login");

        navigation.goBack();
      } catch (err) {
        setSuccess("");
        setError(
          "Houve um problema com o cadastro, verifique os dados preenchidos!"
        );
      }
    }
  }

  return (
    <Container>
      <Logo />

      {success.length !== 0 && <SuccessMessage>{success}</SuccessMessage>}

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

      <SignButton onPress={handleSignUpPress} label="Criar conta" />

      <SignLink onPress={navigateBack} label="Voltar ao login" />
    </Container>
  );
}
