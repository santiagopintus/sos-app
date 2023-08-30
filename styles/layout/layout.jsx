import { StyleSheet } from "react-native";
import { colors, margins } from "../global/vars";

export default layout = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    padding: 10,
    height: 50,
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    padding: 40,
  },
});
