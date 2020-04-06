import { Alert } from "react-native";
import { all, call, takeLatest, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loginComplete, signUpComplete } from "./actions";

export function* login({ payload, navigation }) {
  try {
    if (payload.username.length > 0 && payload.password.length > 0) {
      yield call(api.post, "/5defab092f0000e7848e0c9e", payload);

      yield put(loginComplete());

      navigation.navigate("Dishes");
    } else {
      yield put(loginComplete());
      Alert.alert("Preencha usuário e senha para continuar!");
    }
  } catch (err) {
    yield put(loginComplete());
    Alert.alert("Erro ao realizar o login, verifique suas credenciais!");
  }
}

export function* signUp({ payload, navigation }) {
  try {
    if (payload.password === payload.confirmPassword) {
      yield call(api.post, "/5defab092f0000e7848e0c9e", payload);

      yield put(signUpComplete());

      navigation.navigate("Login");
    } else {
      yield put(signUpComplete());

      Alert.alert("As senhas informadas precisam ser iguais!");
    }
  } catch (err) {
    yield put(signUpComplete());

    Alert.alert("Erro ao realizar o cadastro, verifique seus dados!");
  }
}

export function* signOut({ navigation }) {
  navigation.navigate("Login");
}

export default all([
  takeLatest("@auth/LOGIN_REQUEST", login),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
