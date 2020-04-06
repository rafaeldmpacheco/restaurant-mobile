export function loginRequest(username, password, navigation) {
  return {
    type: "@auth/LOGIN_REQUEST",
    payload: { username, password },
    navigation,
  };
}

export function loginComplete() {
  return {
    type: "@auth/LOGIN_COMPLETE",
  };
}

export function signUpRequest(username, password, confirmPassword, navigation) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { username, password, confirmPassword },
    navigation,
  };
}

export function signUpComplete() {
  return {
    type: "@auth/SIGN_COMPLETE",
  };
}

export function signOut(navigation) {
  return {
    type: "@auth/SIGN_OUT",
    navigation,
  };
}
