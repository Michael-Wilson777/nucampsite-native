import { Provider } from "react-redux";
import { store, persistor } from "./shared/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import Loading from "./components/LoadingComponent";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
