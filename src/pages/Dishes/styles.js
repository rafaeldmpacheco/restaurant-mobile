import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    marginBottom: 25,
    marginTop: 25,
    color: "#13131a",
    fontWeight: "bold"
  },
  dish: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  dishValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380"
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailsButtonText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold"
  }
});
