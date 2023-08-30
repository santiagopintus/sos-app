import { Text } from "react-native-paper";
import ResourceItem from "../ResourceItem";
import { FlatList, View } from "react-native";
import utils from "../../styles/global/utils";
import resourcesStyles from "../../styles/layout/resources";

const ResourcesList = ({ resources }) => {
  return (
    <>
      <View style={resourcesStyles.list}>
        {resources.map((item, i) => (
          <ResourceItem key={i} cardCode={i} item={item} />
        ))}
      </View>
    </>
  );
};

export default ResourcesList;
