import { Provider } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import "./i18n"; // Initialize i18n
import store from "./redux/store";
import TrackOrderPage from "./pages/TrackOrder";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <TrackOrderPage />
    </Provider>
  );
}

export default App;
