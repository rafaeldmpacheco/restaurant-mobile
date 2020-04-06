import produce from "immer";

const INITIAL_STATE = {
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@auth/LOGIN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/LOGIN_COMPLETE": {
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_REQUEST": {
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_COMPLETE": {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
