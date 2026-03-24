import React from "react";
import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";

export const DeliveryOptions = ({ deliveryOptns, cartItem }) => {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptns.map((deliveryOptn) => {
        let priceString = "Free Shipping";

        if (deliveryOptn.priceCents > 0) {
          priceString = `${formatMoney(deliveryOptn.priceCents)} -Shipping`;
        }

        return (
          <div key={deliveryOptn.id} className="delivery-option">
            <input
              type="radio"
              checked={deliveryOptn.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`deliveryOptn-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOptn.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
