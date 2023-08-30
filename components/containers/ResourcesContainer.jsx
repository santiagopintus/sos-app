import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { Button, Text } from "react-native-paper";
import ResourcesList from "./ResourcesList";
import { MainContext } from "../../context/MainContext";
import utils from "../../styles/global/utils";

const ResourcesContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const mainContext = useContext(MainContext);
  const [resources, setResources] = useState(null);

  useEffect(() => {
    if (mainContext.resources !== null) {
      setResources(mainContext.getResources());
    }
  }, [mainContext.resources]);

  useEffect(() => {
    resources === null ? setIsLoading(true) : setIsLoading(false);
  }, [resources]);

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center" }}
      style={utils.scrollContainer}
    >
      {isLoading ? (
        <>
          <ActivityIndicator />
        </>
      ) : resources.length > 0 ? (
        <>
          <ResourcesList resources={resources} />
        </>
      ) : (
        <Text>No hay recursos cargados! Pero vos podés! (:...</Text>
      )}
      <Button title="Refresh" />
    </ScrollView>
  );
};

export default ResourcesContainer;
