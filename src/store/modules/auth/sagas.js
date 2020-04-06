import { Alert } from "react-native";
import { all, call, takeLatest, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loginComplete, signUpComplete } from "./actions";
import { NavigationActions } from "react-navigation";

export function* login({ payload }) {
  try {
    if (payload.username.length > 0 && payload.password.length > 0) {
      yield call(api.post, "/5defab092f0000e7848e0c9e", payload);

      yield put(loginComplete());

      yield put(NavigationActions.navigate({ routeName: "Dishes" }));
    } else {
      yield put(loginComplete());
      Alert.alert("Preencha usuário e senha para continuar!");
    }
  } catch (err) {
    yield put(loginComplete());
    Alert.alert("Erro ao realizar o login, verifique suas credenciais!");
  }
}

export function* signUp({ payload }) {
  try {
    if (payload.password === payload.confirmPassword) {
      yield call(api.post, "/5defab092f0000e7848e0c9e", payload);

      yield put(signUpComplete());

      yield put(NavigationActions.navigate({ routeName: "Login" }));
    } else {
      yield put(signUpComplete());

      Alert.alert("As senhas informadas precisam ser iguais!");
    }
  } catch (err) {
    yield put(signUpComplete());

    Alert.alert("Erro ao realizar o cadastro, verifique seus dados!");
  }
}

export function* signOut() {
  yield put(NavigationActions.navigate("Login"));
}

export default all([
  takeLatest("@auth/LOGIN_REQUEST", login),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
