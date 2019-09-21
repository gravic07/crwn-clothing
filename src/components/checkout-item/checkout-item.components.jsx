import React from "react";

import "./checkout-item.styles.sass";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity, description } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt={description} />
    </div>
    <span className="name">{name}</span>
    <span className="description">{description}</span>

    <span className="quantity">{quantity}</span>
    <span className="price">${price}</span>
    <div className="remove-button">&#10006;</div>
  </div>
);

export default CheckoutItem;