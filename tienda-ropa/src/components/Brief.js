import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Brief = ({ items }) => {
  const { decreaseQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {items.length === 0 ? (
        <p className="text-center">No hay productos en el carrito.</p>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className="d-flex justify-content-between align-items-center mb-3 p-3 border rounded"
          >
            <div>
              <h5 className="mb-1">{item.name}</h5>
              <p className="mb-1">
                Cantidad: {item.quantity} | Precio: ${item.price} | Subtotal: $
                {item.quantity * item.price}
              </p>
            </div>
            <div>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Brief;
