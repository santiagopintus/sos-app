import { MainProvider } from "./context/MainContext";
import Fetcher from "./components/utils/Fetcher.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ResourcesScreen from "./screens/ResourcesScreen";
import NewResourceScreen from "./screens/NewResourceScreen";
import screen from "./styles/layout/screenOptions";
import { StatusBar } from "react-native";
import { Provider } from "react-native-paper";
import ContactsProvider from "./context/ContactsContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <MainProvider>
      <ContactsProvider>
        <Fetcher />
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={screen.headerStyle.backgroundColor}
        />
        <NavigationContainer>
          <Provider>
            <Stack.Navigator initialRouteName="Recursos" screenOptions={screen}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Recursos" component={ResourcesScreen} />
              <Stack.Screen
                name="Nuevo Recurso"
                component={NewResourceScreen}
              />
            </Stack.Navigator>
          </Provider>
        </NavigationContainer>
      </ContactsProvider>
    </MainProvider>
  );
};

export default App;
