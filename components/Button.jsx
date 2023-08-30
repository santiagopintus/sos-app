import { TouchableOpacity, Text, Linking } from "react-native";
import utils from "../styles/global/utils";

const Button = ({ style, mode = "primary", onPress, to = null, children }) => {
  let buttonStyles;

  switch (mode) {
    case "primary":
      buttonStyles = utils.btnPrimary;
      break;
    case "secondary":
      buttonStyles = utils.btnSecondary;
      break;
    case "danger":
      buttonStyles = utils.btnDanger;
      break;

    default:
      buttonStyles = utils.btnPrimary;
      break;
  }

  const handleLink = async (url) => {
    console.log("HANDLING LINK TO: " + url);
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  const isLink = () => {
    let isLink = false;
    try {
      isLink = to.length > 0 ? true : false;
    } catch (err) {
      return isLink;
    }
  };

  const handleOnPress = () => {
    console.log("PRESSED");
    isLink() ? handleLink(to) : onPress();
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={{
        ...utils.baseButton,
        ...buttonStyles,
        ...style,
      }}
    >
      <Text style={buttonStyles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
