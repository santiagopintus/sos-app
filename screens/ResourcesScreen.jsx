import { View } from "react-native";
import { Title } from "react-native-paper";
import Button from "../components/Button";
import utils from "../styles/global/utils";
import ResourcesContainer from "../components/containers/ResourcesContainer";
import global from "../styles/global/global";

const ResourcesScreen = ({ navigation }) => {
  return (
    <View style={[utils.container, global.app]}>
      <Title style={{ textAlign: "center" }}>Recursos</Title>
      <ResourcesContainer />
      <Button onPress={() => navigation.navigate("Nuevo Recurso")}>
        Nuevo Recurso +
      </Button>
    </View>
  );
};

export default ResourcesScreen;
