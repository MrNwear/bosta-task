import { Provider } from "react-redux";
import "./App.css";
import Header from "./Components/Header";
import "./i18n"; // Initialize i18n
import store from "./redux/store";
import TrackOrderPage from "./pages/TrackOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="track-order" element={<TrackOrderPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
