import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./vars";

export default fonts = StyleSheet.create({
  h1: {
    fontSize: fontSizes.h1Size,
    fontWeight: "bold",
  },
  h2: {
    fontSize: fontSizes.h2Size,
    fontWeight: "bold",
  },
  h3: {
    fontSize: fontSizes.h3Size,
    fontWeight: "bold",
  },
  p: {
    fontSize: fontSizes.pSize,
    fontWeight: "normal",
  },
  white: {
    color: colors.white,
  },
});
