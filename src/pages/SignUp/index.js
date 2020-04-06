import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "../../components/Logo";
import SignButton from "../../components/SignButton";
import SignLink from "../../components/SignLink";
import { Container, Input } from "./styles";
import { signUpRequest } from "../../store/modules/auth/actions";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function navigateBack() {
    navigation.goBack();
  }

  async function handleSignUpPress() {
    dispatch(signUpRequest(username, password, confirmPassword, navigation));
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
      <Input
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />

      <SignButton onPress={handleSignUpPress} label="Register" />

      <SignLink onPress={navigateBack} label="Back to login" />
    </Container>
  );
}
