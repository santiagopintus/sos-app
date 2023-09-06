import { StyleSheet } from "react-native";
import { colors } from "./vars";
import fonts from "./fonts";

const globalStyles = StyleSheet.create({
  app: {
    color: colors.fontColor,
    ...fonts.p,
  },
});

export default globalStyles;
