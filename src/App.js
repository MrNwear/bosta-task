import { Provider } from "react-redux";
import "./App.css";
import "./i18n"; // Initialize i18n
import store from "./redux/store";
import AppRoute from "./Route";

function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}

export default App;
