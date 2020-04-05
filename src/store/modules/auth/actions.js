export function loginRequest(username, password) {
  return {
    type: "@auth/LOGIN_REQUEST",
    payload: { username, password },
  };
}

export function loginSuccess() {
  return {
    type: "@auth/LOGIN_SUCCESS",
  };
}

export function signUpRequest(username, password, confirmPassword) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { username, password, confirmPassword },
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE",
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}
