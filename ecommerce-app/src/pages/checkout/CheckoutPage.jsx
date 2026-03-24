import "./CheckoutPage.css";
import { CheckoutHeader } from "./CheckoutHeader";
import axios from "axios";
import { useState, useEffect } from "react";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import { DeliveryOptions } from "./DeliveryOptions";

export const CheckoutPage = ({ cartItems }) => {
  const [deliveryOptns, setDeliveryOptns] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptns(response.data);
      });
    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, []);

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="/images/cart-favicon.png" />
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cartItems={cartItems} deliveryOptns={deliveryOptns} />

          <PaymentSummary
            paymentSummary={paymentSummary}
            cartItems={cartItems}
          />

          <DeliveryOptions
            cartItems={cartItems}
            deliveryOptns={deliveryOptns}
          />
        </div>
      </div>
    </>
  );
};
