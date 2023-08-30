import { StyleSheet } from "react-native";
import { colors, margins } from "../global/vars";

const defaultInput = {
  width: "100%",
  backgroundColor: colors.white,
  marginBottom: margins[1],
};

export default layout = StyleSheet.create({ 
  input: {
    ...defaultInput,
  },
  label: {
    backgroundColor: colors.white,
  },
  picker: {
    ...defaultInput,
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  textArea: {
    ...defaultInput,
    height: 150,
  },
});
