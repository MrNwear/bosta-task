import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import TrackOrderPage from "../pages/TrackOrder";
import Home from "../pages/Home";

function AppRoute() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="track-order" element={<TrackOrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
