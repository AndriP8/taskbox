import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen";
import store from "./lib/store";

function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
