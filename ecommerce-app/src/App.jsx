import { HomePage } from "./pages/HomePage";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrderPage } from "./pages/OrderPage";
import { TrackingPage } from "./pages/TrackingPage";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCartItems(response.data);
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage cartItems={cartItems} />} />
      <Route path="checkout" element={<CheckoutPage cartItems={cartItems} />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
