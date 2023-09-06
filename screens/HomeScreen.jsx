import { View } from "react-native";
import { Title } from "react-native-paper";
import Button from "../components/Button";
import utils from "../styles/global/utils";
import global from "../styles/global/globalStyles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={[utils.container, global.app]}>
      <Title style={{ textAlign: "center" }}>SOS</Title>
      <View style={utils.buttonOptions}>
        <Button onPress={() => navigation.navigate("Recursos")}>
          Recursos
        </Button>
      </View>
    </View>
  );
};

export default HomeScreen;
