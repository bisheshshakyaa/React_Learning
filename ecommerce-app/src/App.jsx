import { HomePage } from "./pages/HomePage";
import "./App.css";
import { Route, Routes } from "react-router";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrderPage } from "./pages/OrderPage";
import { TrackingPage } from "./pages/TrackingPage";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
