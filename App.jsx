import { MainProvider } from "./context/MainContext";
import Fetcher from "./components/utils/Fetcher.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ResourcesScreen from "./screens/ResourcesScreen";
import AddResourceScreen from "./screens/AddResourceScreen";
import screen from "./styles/layout/screenOptions";
import { StatusBar } from "react-native";
import { Provider } from "react-native-paper";

const Stack = createStackNavigator();

const App = () => {
  return (
    <MainProvider>
      <Fetcher />
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={screen.headerStyle.backgroundColor}
      />
      <NavigationContainer>
        <Provider>
          <Stack.Navigator initialRouteName="Home" screenOptions={screen}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Recursos" component={ResourcesScreen} />
            <Stack.Screen name="Nuevo Recurso" component={AddResourceScreen} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </MainProvider>
  );
};

export default App;
