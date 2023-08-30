import { StyleSheet } from "react-native";
import { colors } from "./vars";
import fonts from "./fonts";

export default global = StyleSheet.create({
  app: {
    color: colors.fontColor,
    //By default text is a paragraph
    ...fonts.p,
  },
});
