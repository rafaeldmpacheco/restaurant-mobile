import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { loginSuccess, signFailure } from "./actions";
// const navigation = useNavigation();

export function* login({ payload }) {
  try {
    if (username.length === 0 || password.length === 0) {
      yield call(api.post, "/5defab092f0000e7848e0c9e", payload);

      yield put(loginSuccess());

      // navigation.navigate("Dishes");
    } else {
      yield put(signFailure());

      Alert.alert("Preencha usuário e senha para continuar!");
    }
  } catch (err) {
    yield put(signFailure());

    Alert.alert(
      "Erro",
      "Erro ao realizar o login, verifique suas credenciais!"
    );
  }
}

export function* signUp({ payload }) {
  try {
    if (password === confirmPassword) {
      yield call(api.post, "/5defab092f0000e7848e0c9e", payload);

      // navigation.navigate("Login");
    } else {
      yield put(signFailure());

      Alert.alert("As senhas informadas precisam ser iguais!");
    }
  } catch (err) {
    yield put(signFailure());

    Alert.alert("Erro", "Erro ao realizar o cadastro, verifique seus dados!");
  }
}

export function signOut() {
  // navigation.navigate("Login");
}

export default all([
  takeLatest("@auth/LOGIN_REQUEST", login),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
