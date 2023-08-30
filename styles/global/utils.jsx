import { StyleSheet } from "react-native";
import { colors, fontSizes, margins } from "./vars";

const buttonDefault = {
  marginHorizontal: margins[0],
  borderRadius: 60,
  padding: 10,
  paddingHorizontal: 20,
  borderWidth: 2,
};
const buttonTextDefault = {
  fontWeight: 700,
  fontSize: fontSizes.pSize,
  color: colors.white,
};

export default utils = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "start",
    maxWidth: "96%",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 24,
  },
  scrollContainer: {
    flex: 1,
    maxWidth: "96%",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 24,
  },
  baseButton: buttonDefault,
  btnPrimary: {
    ...buttonDefault,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    text: {
      ...buttonTextDefault,
    },
  },
  btnSecondary: {
    ...buttonDefault,
    borderColor: colors.secondary,
    text: {
      ...buttonTextDefault,
      color: colors.secondary,
    },
  },
  btnDanger: {
    ...buttonDefault,
    borderColor: colors.danger,
    backgroundColor: colors.danger,
    // color: colors.danger,
    text: {
      ...buttonTextDefault,
    },
  },
  buttonOptions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
});
