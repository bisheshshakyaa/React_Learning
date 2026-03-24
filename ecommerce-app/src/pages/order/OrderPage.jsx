import "./OrderPage.css";
import { Header } from "../../components/Header";
import { Link } from "react-router";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";

export const OrderPage = ({ cartItems }) => {
  const [orderLists, setOrderLists] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrderLists(response.data);
    });
  }, []);

  return (
    <>
      <title>Order Page </title>
      <link rel="icon" type="image/svg+xml" href="/images/orders-favicon.png" />
      <Header cartItems={cartItems} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orderLists.map((orderList) => {
            return (
              <div key={orderList.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>
                        {dayjs(orderList.orderTimeMs).format("MMMM, D")}
                      </div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(orderList.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{orderList.id}</div>
                  </div>
                </div>

                <div className="order-details-grid">
                  {orderList.products.map((OrderProduct) => {
                    return (
                      <Fragment key={OrderProduct.id}>
                        <div className="product-image-container">
                          <img src={OrderProduct.product.image} />
                        </div>

                        <div className="product-details">
                          <div className="product-name">
                            {OrderProduct.product.name}
                          </div>

                          <div className="product-delivery-date">
                            Arriving on:{" "}
                            {dayjs(OrderProduct.estimatedDeliveryTimeMs).format(
                              "MMMM,D",
                            )}
                          </div>
                          <div className="product-quantity">
                            Quantity:
                            {OrderProduct.quantity}
                          </div>
                          <button className="buy-again-button button-primary">
                            <img
                              className="buy-again-icon"
                              src="images/icons/buy-again.png"
                            />
                            <span className="buy-again-message">
                              Add to Cart
                            </span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <Link to="/tracking">
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </Link>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
