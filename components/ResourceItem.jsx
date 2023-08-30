import { Text, Image, Linking } from "react-native";
import { Card } from "react-native-paper";
import Button from "./Button";
import resources from "../styles/layout/resources";

const ResourceItem = ({ item, cardCode }) => {
  console.log("ITEM LIST: " + JSON.stringify(item));
  return (
    <Card key={`card-${cardCode}`} style={resources.card}>
      <Card.Title title={item.title} />
      <Card.Content>
        {console.log(item.imgSrc)}
        {item.imgSrc !== "" && (
          <Image source={{ uri: item.imgSrc }} style={resources.image} />
        )}
      </Card.Content>
      <Card.Actions>
        <Button mode="secondary" to={item.href}>
          Ir al recurso
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default ResourceItem;
