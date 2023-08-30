const rawColors = {
  blue: "#110658",
  red: "#EE6955",
  green: "#1EB47A",
  yellow: "#FEC74D",
  purple: "#B118C8",
  lightPurple: "#AA6DA3",
  orange: "#f4511e",
  cian: "#03BBD7",
  black: "#020202",
  gray: "#BBB5BD",
  white: "#ffffff",
  darkJungleGreen: "#011502",
  darkGreen: "#01200F",
  cambridgeBlue: "#9EC5AB",
  myrtleGreen: "#32746D",
  midnightGreenEagleGreen: "#104F55",
};

const palletteFirst = {
  url: "https://coolors.co/104f55-32746d-9ec5ab-01200f-011502",
  primary: rawColors.darkJungleGreen,
  secondary: rawColors.myrtleGreen,
  lightAccent: rawColors.cambridgeBlue,
  black: rawColors.black,
  white: rawColors.white,
};
const commonPallette = {
  success: rawColors.green,
  danger: rawColors.red,
  warning: rawColors.yellow,
};

const colors = {
  primary: palletteFirst.primary,
  secondary: palletteFirst.secondary,
  lightAccent: palletteFirst.lightAccent,
  black: palletteFirst.black,
  fontColor: palletteFirst.black,
  white: palletteFirst.white,
  success: commonPallette.success,
  danger: commonPallette.danger,
  warning: commonPallette.warning,
};
const fontSizes = {
  h1Size: 26,
  h2Size: 24,
  h3Size: 20,
  pSize: 18,
};

const margins = {
  1: 10,
  2: 16,
  3: 24,
  4: 48,
};
export { colors, fontSizes, margins };
