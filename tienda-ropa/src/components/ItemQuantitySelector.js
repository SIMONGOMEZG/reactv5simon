import React from "react";

const ItemQuantitySelector = ({ quantity, setQuantity, max }) => {
  const increaseQuantity = () => {
    if (quantity < max) setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="d-flex align-items-center">
      <button
        className="btn btn-secondary"
        onClick={decreaseQuantity}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="mx-3">{quantity}</span>
      <button
        className="btn btn-secondary"
        onClick={increaseQuantity}
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
