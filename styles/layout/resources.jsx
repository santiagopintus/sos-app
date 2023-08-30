import { StyleSheet } from "react-native";
import { colors, margins } from "../global/vars";

export default resources = StyleSheet.create({
  list: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  card: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
    backgroundColor: colors.white,
    marginVertical: margins[1],
  },
  image: {
    width: 100,
    height: 100,
  },
});
