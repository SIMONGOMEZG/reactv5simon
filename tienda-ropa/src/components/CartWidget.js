import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <Link to="/checkout" style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <span className="cart-icon" role="img" aria-label="cart" style={{ fontSize: "1.5rem" }}>
          🛒
        </span>
        {getTotalItems > 0 && (
          <span
            className="badge bg-secondary"
            style={{
              marginLeft: "5px",
              borderRadius: "50%",
              padding: "5px 10px",
              fontSize: "0.9rem",
            }}
          >
            {getTotalItems}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
