import { AsyncStorage } from "react-native";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      timeout: 0,
      key: "restaurant",
      storage: AsyncStorage,
      whitelist: ["auth"],
    },
    reducers
  );

  return persistedReducer;
};
