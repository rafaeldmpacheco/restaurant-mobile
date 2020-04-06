export function loginRequest(username, password) {
  return {
    type: "@auth/LOGIN_REQUEST",
    payload: { username, password },
  };
}

export function loginComplete() {
  return {
    type: "@auth/LOGIN_COMPLETE",
  };
}

export function signUpRequest(username, password, confirmPassword) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { username, password, confirmPassword },
  };
}

export function signUpComplete() {
  return {
    type: "@auth/SIGN_COMPLETE",
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT",
  };
}
